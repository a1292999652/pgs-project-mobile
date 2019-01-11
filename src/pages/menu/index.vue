<template>
    <div>
        <transition :enter-active-class="enter" :leave-active-class="leave">
            <div class="menu-center" v-show="change==='modules'">
                <grid :show-lr-borders="false">
                    <grid-item label="产品上架" @click.native="handleToProductShelves">
                        <span class="grid-center" slot="icon">
                            <i class="iconfont icon-chanpinshangjia" style="font-size: 1.2rem"></i>
                        </span>
                    </grid-item>
                    <grid-item label="产品拣货" @click.native="handleToProductPicking">
                        <span class="grid-center" slot="icon">
                            <i class="iconfont icon-jianhuo" style="font-size: 1.2rem"></i>
                        </span>
                    </grid-item>
                </grid>
            </div>
        </transition>
        <transition :enter-active-class="enter" :leave-active-class="leave">
            <div class="menu-center" v-show="change==='about'">
                <div style="width: 100%"></div>
                <XButton style="width: 88%; margin-top: 1rem" type="warn" @click.native="handleQuitLogin">退出登录</XButton>
            </div>
        </transition>
        <tabbar style="position: fixed">
            <tabbar-item selected @click.native="handleChange('modules')">
                <span slot="icon">
                    <i class="iconfont icon-caidan"></i>
                </span>
                <span slot="label">功能</span>
            </tabbar-item>
            <tabbar-item @click.native="handleChange('about')">
                <span slot="icon">
                    <i class="iconfont icon-wo"></i>
                </span>
                <span slot="label">用户</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script>
    import {
        Tabbar, TabbarItem, Grid, GridItem, XButton
    } from 'vux'

    export default {
        name: "Menu",
        components: {
            Tabbar,
            TabbarItem,
            Grid,
            GridItem,
            XButton
        },
        methods: {
            handleChange(val) {
                if (this.change !== val) {
                    this.change = val
                }
            },
            handleToProductShelves() {
                this.$router.push('product-shelves')
            },
            handleToProductPicking() {
                this.$router.push('allocate-goods-basket')
            },
            handleQuitLogin() {
                this.$store.commit('loginState', {success: false, id: null});
                this.$router.push('/')
            }

        },
        data() {
            return {
                change: 'modules',
                enter: 'animated faster fadeIn',
                leave: 'animated faster fadeOut'
            }

        }
    }
</script>

<style scoped lang="less">
    .grid-center {
        display: block;
        text-align: center;
        color: #666;
    }

    .menu-center {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
    }

    /deep/ .weui-grid__label {
        height: 24px;
        line-height: 24px;
    }
</style>
