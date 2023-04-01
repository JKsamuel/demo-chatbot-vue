import { createApp } from 'vue'
import AmplifyVue from '@aws-amplify/ui-vue'
import App from './App.vue'
import Chatbot from './views/Chatbot'
import SelectLanguage from './views/Home'
import { applyPolyfills, defineCustomElements } from '@aws-amplify/ui-components/loader'
import "bootstrap/dist/css/bootstrap.min.css"
import * as VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    component: SelectLanguage,
  },
  {
    path: '/Chatbot',
    name: 'Chatbot',
    component: Chatbot,    
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

applyPolyfills().then(() => {
  defineCustomElements(window);
});

const app = createApp(App);
app.use(router);
app.use(AmplifyVue);
app.config.isCustomElement = tag => tag.startsWith('amplify-');
app.mount('#app');