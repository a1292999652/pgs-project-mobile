<template>
    <div id="app">
        <XHeader :left-options="{showBack:this.$route.meta.showGoBack}">
            {{this.$route.meta.title}}
        </XHeader>
        <div class="container">
            <transition :enter-active-class="enter" :leave-active-class="leave">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import {XHeader} from 'vux'

    export default {
        name: 'app',
        components: {XHeader},
        data() {
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
        top: 46px;
        left: 0;
        bottom: 0;
    }
</style>
