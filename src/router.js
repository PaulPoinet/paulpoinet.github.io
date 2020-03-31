import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home')
    },
    {
      path: '/about-me',
      name: 'About',
      component: () => import('@/views/About')
    },
    {
      path: '/works',
      name: 'Work',
      component: () => import('@/views/Work')
    },
    {
      path: '/contact-me',
      name: 'Contact',
      component: () => import('@/views/Contact')
    },
    {
      path: '/ICD-ITKE-Research-Pavilion-2013-14',
      name: 'ICD/ITKE Research Pavilion 2013-14',
      component: () => import('@/components/works/ICD-ITKE-Research-Pavilion-2013-14')
    },
    {
      path: '/ICD-ITKE-Research-Pavilion-2014-15',
      name: 'ICD/ITKE Research Pavilion 2014-15',
      component: () => import('@/components/works/ICD-ITKE-Research-Pavilion-2014-15')
    },
    {
      path: '/TAB-2017',
      name: 'Tallinn Architecture Biennale 2017 - Installation Competition',
      component: () => import('@/components/works/TAB-2017')
    },
    {
      path: '/Sealion',
      name: 'Sealion',
      component: () => import('@/components/works/Sealion')
    },
    {
      path: '/Light-Sculptures',
      name: 'Light Sculptures',
      component: () => import('@/components/works/Light-Sculptures')
    },
    {
      path: '/Piped-Assemblies',
      name: 'Piped Assemblies',
      component: () => import('@/components/works/Piped-Assemblies')
    },
    {
      path: '/SpeckleViz',
      name: 'SpeckleViz',
      component: () => import('@/components/works/SpeckleViz')
    },
    {
      path: '/PhD-Defence',
      name: 'PhD Defence - 3rd of April 2020',
      component: () => import('@/components/works/PhD-Defence')
    }
  ]
})

// Bootstrap Analytics
// Set in .env
// https://github.com/MatteoGabriele/vue-analytics
if (process.env.VUE_APP_GOOGLE_ANALYTICS) {
  Vue.use(require('vue-analytics').default, {
    id: process.env.VUE_APP_GOOGLE_ANALYTICS,
    router,
    autoTracking: {
      page: process.env.NODE_ENV !== 'development'
    }
  })
}

export default router
