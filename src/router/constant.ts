import type { AppRouteRecordRaw } from '/@/router/types';
import ParentLayout from '/@/layouts/page/ParentView.vue';
import { t } from '/@/hooks/web/useI18n';

export const REDIRECT_NAME = 'Redirect';

export const EXCEPTION_COMPONENT = () => import('../views/sys/exception/Exception.vue');

/**
 * @description: default layout
 */
export const LAYOUT = () => import('/@/layouts/default/index.vue');

/**
 * @description: page-layout
 */
export const getParentLayout = (name: string) => {
  return () =>
    new Promise((resolve) => {
      resolve({
        ...ParentLayout,
        name,
      });
    });
};

// 404 on a page
export const PAGE_NOT_FOUND_ROUTE: AppRouteRecordRaw = {
  path: '/:path(.*)*',
  name: 'ErrorPage',
  component: LAYOUT,
  meta: {
    title: 'ErrorPage',
    hideBreadcrumb: true,
  },
  children: [
    {
      path: '/:path(.*)*',
      name: 'ErrorPage',
      component: EXCEPTION_COMPONENT,
      meta: {
        title: 'ErrorPage',
        hideBreadcrumb: true,
      },
    },
  ],
};

export const REDIRECT_ROUTE: AppRouteRecordRaw = {
  path: '/redirect',
  name: REDIRECT_NAME,
  component: LAYOUT,
  meta: {
    title: REDIRECT_NAME,
    hideBreadcrumb: true,
  },
  children: [
    {
      path: '/redirect/:path(.*)',
      name: REDIRECT_NAME,
      component: () => import('/@/views/sys/redirect/index.vue'),
      meta: {
        title: REDIRECT_NAME,
        hideBreadcrumb: true,
      },
    },
  ],
};

export const ERROR_LOG_ROUTE: AppRouteRecordRaw = {
  path: '/error-log',
  name: 'errorLog',
  component: LAYOUT,
  meta: {
    title: 'ErrorLog',
    hideBreadcrumb: true,
  },
  children: [
    {
      path: 'list',
      name: 'errorLogList',
      component: () => import('/@/views/sys/error-log/index.vue'),
      meta: {
        title: t('routes.basic.errorLogList'),
        hideBreadcrumb: true,
      },
    },
  ],
};
