import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        component: () => import('../pages/login/'),
        meta: {title: "登录", showHeader: true, showGoBack: false, showRightIcon: false}
    },
    {
        path: '/menu',
        component: () => import('../pages/menu/'),
        meta: {title: "功能", showHeader: true, showGoBack: false, showRightIcon: false}
    },
    {
        path: '/product-shelves',
        component: () => import('../pages/product-shelves/'),
        meta: {title: "产品上架", showHeader: true, showGoBack: true, showRightIcon: false}
    },
    {
        path: '/product-list',
        component: () => import('../pages/product-list/'),
        meta: {title: "产品列表", showHeader: true, showGoBack: true, showRightIcon: false}
    },
    {
        path: '/allocate-goods-basket',
        component: () => import('../pages/allocate-goods-basket/'),
        meta: {
            title: "分配货篮",
            showHeader: true,
            showGoBack: true,
            showRightIcon: true,
            rightIconClassName: "icon-guolv",
            rightClickType: "showFilter"
        }
    },
    {
        path: '/product-picking',
        component: () => import('../pages/product-picking/'),
        meta: {
            title: "产品拣货",
            showHeader: true,
            showGoBack: true,
        }
    },
    {
        path: '/picking',
        component: () => import('../pages/picking/'),
        meta: {
            title: "拣货",
            showHeader: true,
            showGoBack: true,
            showRightIcon: true,
            rightIconClassName: "icon-wanchengquerengouwubiankuang",
            rightClickType: "showFilter"
        }
    },
];


const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
});

export default router
