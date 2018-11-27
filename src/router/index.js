import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter);
const routes = [
    {path: '/', component:()=>import('../pages/login/'), meta: {title: "登录", showHeader: true, showGoBack: false}},
    {path: '/menu', component:()=>import('../pages/menu/'), meta: {title: "功能", showHeader: true, showGoBack: false}},
    {path: '/productShelves', component:()=>import('../pages/productShelves/'), meta: {title: "产品上架", showHeader: true, showGoBack: true}},
];


const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
});

export default router
