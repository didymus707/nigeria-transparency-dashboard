import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'overview',
      component: () => import('../views/OverviewView.vue'),
    },
    {
      path: '/contracts',
      name: 'contracts',
      component: () => import('../views/ContractsView.vue'),
    },
    {
      path: '/budget',
      name: 'budget',
      component: () => import('../views/BudgetView.vue'),
    },
    {
      path: '/risk-flags',
      name: 'risk-flags',
      component: () => import('../views/RiskFlagsView.vue'),
    },
  ],
});

export default router;
