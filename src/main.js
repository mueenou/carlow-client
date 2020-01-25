import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/styles/main.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Home from './components/Home.vue';
import Cars from './components/Cars.vue';


Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  },
  {
    path: '/register',
    component: Register,
    name: 'register'
  },
  {
    path: '/Cars',
    component: Cars,
    name: 'cars'
  },
  {
    path: '*',
    redirect: '/'
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
}); 

new Vue({
  created() {
    AOS.init();
  },
  el: '#app',
  router,
  render: h => h(App)
})
