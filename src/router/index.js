import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Counter from "@/components/Counter";
import good from "@/components/good";

Vue.use(Router)

export default new Router({
  routes: [
   {
      path:'/counter',
      name:'counter',
      component: Counter
    },
    {
      path:'/good',
      name:'good',
      component: good
    }
  ]
})
