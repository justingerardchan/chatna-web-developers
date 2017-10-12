import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Visitor from '@/components/View/Visitor'
import ChatHistory from '@/components/View/ChatHistory'
import ChatMonitoring from '@/components/View/ChatMonitoring'
import Map from '@/components/View/Map'
import Notifications from '@/components/View/Notifications'
import SignIn from '@/components/User/SignIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/visitor',
      name: 'Visitor',
      component: Visitor
    },
    {
      path: '/chat-history',
      name: 'Chat History',
      component: ChatHistory
    },
    {
      path: '/chat-monitoring',
      name: 'Chat Monitoring',
      component: ChatMonitoring
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
    {
      path: '/notifications',
      name: 'Notifications',
      component: Notifications
    },
    {
      path: '/user/signin',
      name: 'SignIn',
      component: SignIn
    }
  ],
  mode: 'history'
})
