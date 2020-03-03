import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import home from './components/Home.vue'
import start from './components/Start.vue'
import references from './components/References.vue'
import visual from './components/Visual.vue'
import contact from './components/Contact.vue'



Vue.use(VueRouter)
Vue.config.productionTip = false

const routes =  [  
    {path: "/", component: start},
    {path: "/work", component: home},
    {path: "/references", component: references},
    {path: "/motion", component: visual},
    {path: "/contact", component: contact},
  ]

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
