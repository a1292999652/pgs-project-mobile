<template>
    <div class="header-container">
        <div class="go-back">
            <div class="go-back-icon" v-if="$route.meta.showGoBack" @click="handleGoBack">
                <i class="iconfont icon-fanhui"></i>
            </div>
        </div>
        <div class="header-title" v-text="title"></div>
        <div class="right">
            <div class="right-icon" v-if="$route.meta.showRightIcon" @click="handleRight">
                <i :class="'iconfont '+ $route.meta.rightIconClassName"></i>
            </div>
        </div>

    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "i-header",
        props: {
            title: {
                type: String,
                default: () => ""
            }
        },
        methods: {
            handleGoBack() {
                this.$router.go(-1);
            },
            handleRight() {
                switch (this.$route.meta.rightClickType) {
                    case 'showFilter':
                        this.$store.commit('showFilter', true);
                        break;
                    default:
                        break
                }
            }
        },
        computed: {
            ...mapState(['showSearchBox']),
        }
    };
</script>

<style scoped lang="less">
    @import "../../../common/style/global";

    .header-container {
        height: 2.6rem;
        width: 100%;
        background-color: @globalColor;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .header-title {
        color: white;
        font-size: 1rem;
    }

    .go-back {
        width: 3rem;
        height: 100%;
    }

    .right {
        width: 3rem;
        height: 100%;
    }

    .go-back-icon, .right-icon {
        width: 100%;
        height: 100%;
        color: white;
        line-height: 2.6rem;
        text-align: center;

        i {
            font-size: 1rem;
        }
    }
</style>
