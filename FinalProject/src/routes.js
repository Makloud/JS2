import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const HomePage = () => import(/* webpack-chunk-name: "HomePage" */ './components/pages/HomePage.vue');
const CatalogPage = () => import(/* webpack-chunk-name: "CatalogPage" */ './components/pages/CatalogPage.vue');

export default new VueRouter({
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomePage,
    },
    {
      name: 'catalog',
      path: '/catalog',
      component: CatalogPage,
    }
  ],
  mode: 'history',
});