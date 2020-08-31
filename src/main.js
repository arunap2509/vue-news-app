import Vue from 'vue';
// @ts-ignore
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
// @ts-ignore
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
