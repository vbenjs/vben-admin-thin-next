import type { Router, RouteRecordRaw } from 'vue-router';

import { permissionStore } from '/@/store/modules/permission';

import { PageEnum } from '/@/enums/pageEnum';
import { getToken } from '/@/utils/auth';

import { PAGE_NOT_FOUND_ROUTE } from '/@/router/constant';

const LOGIN_PATH = PageEnum.BASE_LOGIN;

const whitePathList: PageEnum[] = [LOGIN_PATH];

export function createPermissionGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    // Jump to the 404 page after processing the login
    if (from.path === LOGIN_PATH && to.name === PAGE_NOT_FOUND_ROUTE.name) {
      next(PageEnum.BASE_HOME);
      return;
    }

    // Whitelist can be directly entered
    if (whitePathList.includes(to.path as PageEnum)) {
      next();
      return;
    }

    const token = getToken();

    // token does not exist
    if (!token) {
      // You can access without permission. You need to set the routing meta.ignoreAuth to true
      if (
        to.meta.ignoreAuth
        // || to.name === FULL_PAGE_NOT_FOUND_ROUTE.name
      ) {
        next();
        return;
      }
      // redirect login page
      const redirectData: { path: string; replace: boolean; query?: Indexable<string> } = {
        path: LOGIN_PATH,
        replace: true,
      };
      if (to.path) {
        redirectData.query = {
          ...redirectData.query,
          redirect: to.path,
        };
      }
      next(redirectData);
      return;
    }
    if (permissionStore.getIsDynamicAddedRouteState) {
      next();
      return;
    }
    const routes = await permissionStore.buildRoutesAction();
    routes.forEach((route) => {
      // router.addRoute(RootRoute.name!, route as RouteRecordRaw);
      router.addRoute(route as RouteRecordRaw);
    });

    const redirectPath = (from.query.redirect || to.path) as string;
    const redirect = decodeURIComponent(redirectPath);
    const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect };
    permissionStore.commitDynamicAddedRouteState(true);
    next(nextData);
  });
}
