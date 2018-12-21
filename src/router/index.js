import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        component: () => import('../pages/login/'),
        meta: {title: "登录", showHeader: true, showGoBack: false, showMore: false}
    },
    {
        path: '/menu',
        component: () => import('../pages/menu/'),
        meta: {title: "功能", showHeader: true, showGoBack: false, showMore: false}
    },
    {
        path: '/productShelves',
        component: () => import('../pages/productShelves/'),
        meta: {title: "产品上架", showHeader: true, showGoBack: true, showMore: false}
    },
    {
        path: '/productList',
        component: () => import('../pages/productList/'),
        meta: {title: "产品列表", showHeader: true, showGoBack: true, showMore: false}
    },
    {
        path: '/productPicking',
        component: () => import('../pages/productPicking/'),
        meta: {title: "分配货篮", showHeader: true, showGoBack: true, showMore: true, moreType: "AGB"}
    },
];


const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
});

export default router
