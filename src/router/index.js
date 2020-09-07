/**
 * Vue Router
 *
 * @library
 *
 * https://router.vuejs.org/en/
 */

// Lib imports
import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';

Vue.use(Router)

// Create a new router
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/notes',
      name: 'Notes',
      component: () => import('../views/Notes')
    },
    {
      path: '/auth/login',
      name: 'Login',
      component: () => import('../views/Login')
    },
    {
      path: '/auth/register',
      name: 'Register',
      component: () => import('../views/Register')
    },
    {
      path: '*',
      redirect: '/auth/login'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {

  const isLoading = store.state.isLoading;
  const isAuth = store.state.auth.isAuth;

  if (!isLoading) {

    if (isAuth) {
      if (to.name === 'Login' || to.name === 'Register') next({ name: 'Notes' })
      else next()
    } else {
      if (to.name === 'Login' || to.name === 'Register') next()
      else next({ name: 'Login' })
    }

  }

  next()
})

export default router
