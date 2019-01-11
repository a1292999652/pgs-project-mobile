<template>
    <div>
        <div class="product-list">
            <x-table class="font-size-text"
                     :cell-bordered="false"
                     style="background-color:#fff;">
                <thead style="background-color: #F7F7F7">
                <tr class="font-size-text">
                    <th>产品信息</th>
                    <th>库存</th>
                    <th>拣货数</th>
                </tr>
                </thead>
                <tbody v-for="val in 4" :key="val">
                <tr>
                    <td colspan="3">
                        <div style="width: 100%;background-color: #F0F5FB">
                            <div class="product-title font-size-text">
                                <div>
                                    <Pcheck class="check-box p-icon p-curve p-fill p-smooth" color="success"
                                    >
                                        <i slot="extra" class="icon iconfont icon-gouxuan"></i>
                                    </Pcheck>
                                </div>
                                <p class="text-overflow">订单：WPGS1001（MY）</p>
                                <div>共10件</div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr style="height: 80px;" v-for="key in 4" :key="key">
                    <td>
                        <div class="product-info">
                            <div class="product-info-img">
                                <img src="http://image01.homedo.com/files/images/goods/2016-11-28/17/54/5452981155536612645_pic1.jpg"
                                     alt="">
                            </div>
                            <div class="product-info-text">
                                <p class="text-overflow">001-2018001</p>
                                <p class="text-overflow">小米8青春版</p>
                            </div>

                        </div>
                    </td>
                    <td>
                        <div class="product-num">
                            <p class=" text-overflow">3</p>
                        </div>

                    </td>
                    <td>
                        <div class="product-num">
                            <p class=" text-overflow">3</p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colspan="3">
                        <div class="goods-basket">
                            <div class="goods-basket-warp">
                                <div>
                                    货篮：
                                </div>
                                <div>
                                    <span>001</span>
                                    <span>002</span>
                                    <span>003</span>
                                    <span>003</span>
                                    <span>003</span>
                                    <span>003</span>
                                </div>
                                <div class="add-button" @click="showAddBasket=true">
                                    <i class="iconfont icon-add "></i>
                                </div>

                            </div>
                        </div>
                    </td>
                </tr>
                </tbody>
            </x-table>
        </div>
        <div class="bottom">
            <div class="bottom-box font-size-text">
                <!--<div>-->
                <!--<Pcheck class="check-box p-icon p-curve p-fill p-smooth" color="success"-->
                <!--v-model="demo1">-->
                <!--<i slot="extra" class="icon iconfont icon-gouxuan"></i>-->
                <!--全选-->
                <!--</Pcheck>-->
                <!--</div>-->
                <div>
                    <p>已选2个订单</p>
                    <p>一共30件货</p>
                </div>
                <div>
                    <XButton type="primary" mini @click.native="handleGoPicking">去拣货</XButton>
                </div>
            </div>
        </div>
        <Confirm v-model="showAddBasket" title="分配货篮">
            <Group>
                <XInput type="text" placeholder="扫描货篮条码">
                    <span slot="right">
                        <i class="iconfont icon-saomiao" style="font-size: 20px"></i>
                    </span>
                </XInput>
            </Group>
            <div class="basket-list">
                <x-table full-bordered>
                    <tbody>
                    <tr v-for="a in 10" :key="a">
                        <td>编号：A001</td>
                        <td>移除</td>
                    </tr>
                    </tbody>
                </x-table>
            </div>
        </Confirm>
        <Confirm v-model="filter" title="过滤订单" confirm-text="过滤" @on-confirm="handleFilterOk">
            <Group style="margin-bottom: 20px">
                <XInput type="text" placeholder="订单号">
                    <span slot="right">
                        <i class="iconfont icon-dingdanhao" style="font-size: 20px"></i>
                    </span>
                </XInput>
                <XInput type="text" placeholder="客户名">
                    <span slot="right">
                        <i class="iconfont icon-kehu" style="font-size: 20px"></i>
                    </span>
                </XInput>
            </Group>
        </Confirm>
    </div>
</template>

<script>
    import {XTable, XButton, XInput, Confirm, Group} from 'vux'
    import Pcheck from 'pretty-checkbox-vue/check';
    import {mapState} from 'vuex'

    export default {
        name: 'allocate-goods-basket',
        components: {
            XTable,
            Pcheck,
            XButton,
            Confirm,
            XInput,
            Group,
        },
        data() {
            return {
                demo1: false,
                showAddBasket: false,
                filter: false
            }
        },
        computed: {
            ...mapState(['showFilter']),
        },
        watch: {
            filter(newVal) {
                if (!newVal) this.$store.commit('showFilter', false);
            },
            showFilter(newVal) {
                this.filter = newVal
            }
        },
        methods: {
            handleFilterOk() {
//
            },
            handleGoPicking() {
                this.$router.push("/product-picking")
            }
        }
    }
</script>

<style scoped lang="less">
    .product-title {
        width: 90%;
        text-align: left;
        margin: 0 auto;
        display: flex;

        p {
            flex: 1;
            width: calc(100vw - 20px)
        }
    }

    .font-size-text {
        font-size: 0.8rem;
    }

    .text-overflow {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .check-box {
        width: 20px;
    }

    .product-info {
        width: 60vw;
        height: 60px;
        display: flex;
        padding: 10px 5px 10px 5px;

    }

    .product-info-img {
        width: 60px;
        height: 60px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .product-info-text {
        height: 60px;
        flex: 1;
        width: calc(100% - 40px);
        margin-left: 6px;

        p {
            height: 30px;
            width: 100%;
            line-height: 30px;
            text-align: left;
        }
    }

    .product-num {
        width: 18vw;
        float: left;

        p {
            width: 100%;
            height: 30px;
            line-height: 30px;
        }
    }

    .goods-basket {
        width: 100%;
    }

    .goods-basket-warp {
        width: 90%;
        margin: 0 auto;
        display: flex;
        align-items: center;

        & > div:nth-child(2) {
            flex: 1;
            display: flex;
            align-items: center;
            overflow-x: scroll;

            span {
                background-color: #E1E6ED;
                padding: 2px 4px 2px 4px;
                height: 20px;
                line-height: 20px;
                margin-left: 2px;
                border-radius: 4px;
            }
        }
    }

    .add-button {
        background-color: #19AD19;
        color: #fff;
        height: 24px;
        width: 24px;
        line-height: 24px;
        border-radius: 50%;
        margin-left: 10px;
    }

    .product-list {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 4rem;
        -webkit-overflow-scrolling: touch;
        overflow-y: scroll;
    }

    .bottom {
        width: 100%;
        height: 4rem;
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: #fff;
        box-shadow: 0 -6px 10px rgba(53, 73, 94, .12);
    }

    .bottom-box {
        background-color: #fff;
        width: 90%;
        height: 100%;
        display: flex;
        align-items: center;
        margin: 0 auto;

        /*& > div:nth-child(1) {*/
        /*width: 60px;*/
        /*}*/

        & > div:nth-child(1) {
            flex: 1;
            margin-left: 10px;
            margin-right: 10px;

            & > p:nth-child(2) {
                margin-top: 10px;
            }
        }
    }

    .basket-list {
        display: block;
        width: 100%;
        margin-top: 10px;
        height: 200px;
        overflow-y: scroll;
    }
</style>
