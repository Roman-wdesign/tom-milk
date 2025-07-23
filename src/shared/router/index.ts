import { createRouter, createWebHistory } from 'vue-router'
import notFoundRoutes from '@/shared/router/notFound'
import mainRoutes from '@/shared/router/mainPage'
import gearRoutes from '@/Gear/gearRouter'
import finnPackRoutes from '@/FinnPack/finnPackRouter'

const baseRoutes: Array<any> = []
const routes = baseRoutes.concat(notFoundRoutes, mainRoutes, gearRoutes, finnPackRoutes)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
