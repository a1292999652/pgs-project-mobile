import Vue from 'vue'
import App from './App.vue'
import './common/style/resetCSS.less'
import './common/style/sytle.less'
import 'animate.css'
import fastClick from 'fastclick'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

//解决移动端300ms延时
fastClick.attach(document.body);
Vue.config.productionTip = false;

//在进入路由之前每一次都会执行这个方法,全局钩子函数
router.beforeEach((to, from, next) => {
    document.title = "柏域思-" + to.meta.title;
    next()
});
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
