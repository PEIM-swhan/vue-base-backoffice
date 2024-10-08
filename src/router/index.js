import { createRouter, createWebHistory } from 'vue-router'
import AdTestFrame from "@/views/adtest/AdTestFrame.vue";
import AdTestNonFrame from "@/views/adtest/AdTestNonFrame.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/adtest/frame',
      name: 'AdTestFrame',
      component: AdTestFrame
    },
    {
      path: '/adtest/nonframe',
      name: 'AdTestNonFrame',
      component: AdTestNonFrame
    },
  ]
})

export default router
