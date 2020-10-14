import type { AppRouteModule } from '/@/router/types';

export default {
  layout: {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('/@/views/dashboard/welcome/index.vue'),
    meta: {
      affix: true,
      icon: 'ant-design:home-outlined',
      title: '首页',
    },
  },

  routes: [],
} as AppRouteModule;
