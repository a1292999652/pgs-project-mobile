<template>
    <div id="app">
        <Header :title="$route.meta.title"></Header>
        <!--<XHeader :right-options="{showMore:this.$route.meta.showMore}"-->
        <!--:left-options="{showBack:this.$route.meta.showGoBack}">-->
        <!--{{this.$route.meta.title}}-->
        <!--</XHeader>-->
        <div class="container">
            <transition :enter-active-class="enter" :leave-active-class="leave">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </div>
    </div>
</template>

<script>
    import Header from '@/common/components/header'

    export default {
        name: 'app',
        components: {Header},

        data() {
            // var agent = navigator.userAgent.toLowerCase();
            // var regStr_chrome = /chrome\/[\d.]+/gi;
            // alert(agent.match(regStr_chrome));
            return {
                enter: 'animated faster fadeIn',
                leave: 'animated faster fadeOut'
            }
        },
    }
</script>

<style scoped lang="less">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        width: 100vw;
        overflow-x: hidden;
    }

    .container {
        width: 100%;
        position: absolute;
        top: 2.6rem;
        left: 0;
        bottom: 0;
    }
</style>
