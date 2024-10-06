import { createRouter, createWebHistory } from 'vue-router'
import AdTestFrame from "@/views/AdTestFrame.vue";
import AdTestNonFrame from "@/views/AdTestNonFrame.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/ad-test/frame',
      name: 'AdTestFrame',
      component: AdTestFrame
    },
    {
      path: '/ad-test/non-frame',
      name: 'AdTestNonFrame',
      component: AdTestNonFrame
    },
  ]
})

export default router
