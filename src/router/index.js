import { createRouter, createWebHistory } from 'vue-router'

import mainview from '@/views/main.vue'
import baseProblem from '@/views/koujue/baseProblem.vue'
import baseAnswer from '@/views/koujue/baseAnswer.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: mainview
    },
    {
      path: '/koujue/baseProject/',
      name: 'baseProject',
      component: baseProblem
    },
    {
      path: '/koujue/baseAnswer',
      name: 'baseAnswer',
      component: baseAnswer
    },
    {
      path: '/koujue/advancedProject',
      name: 'advancedProject',
      component: () => import('@/views/koujue/advancedProject.vue')
    },
    {
      path: '/koujue/advancedAnswer',
      name: 'advancedAnswer',
      component: () => import('@/views/koujue/advancedAnswer.vue')
    },
    {
      path: '/math/dailyPractice',
      name: 'daily practice',
      component: () => import('@/views/math/mathMain.vue')
    }
  ]
})

export default router
