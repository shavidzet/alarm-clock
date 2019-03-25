import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'alarm-clock',
      component: require('@/components/AlarmClock').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
