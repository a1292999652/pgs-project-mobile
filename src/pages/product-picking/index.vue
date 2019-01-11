<template>
    <div class="product-picking-container">
        <vm-collapse v-model="activeNamesC" accordion>
            <vm-collapse-item title="订单 WPGS1001" name="1">
                <div class="product-item">
                    <div class="product-item-l">
                        <div class="product-item-img">
                            <img src="http://image01.homedo.com/files/images/goods/2016-11-28/17/54/5452981155536612645_pic1.jpg"
                                 alt="">
                        </div>
                        <div class="product-item-info">
                            <p class="text-overflow">001-2018001</p>
                            <p class="text-overflow">小米8青春版小米8青春版小米8青春版小米8青春版小米8青春版小米8青春版小米8青春版</p>
                        </div>
                    </div>
                    <div class="product-item-r" @click="handlePicking">
                        <i style="font-size: 1.6rem" class="iconfont icon-lanzi"></i>
                    </div>
                </div>
                <div class="product-item">
                    <div class="product-item-l">
                        <div class="product-item-img">
                            <img src="http://m.360buyimg.com/n12/jfs/t2914/212/191307014/124822/4285e559/574fc941Ne311ed78.jpg%21q70.jpg"
                                 alt="">
                        </div>
                        <div class="product-item-info">
                            <p class="text-overflow">001-2018001</p>
                            <p class="text-overflow">小米8青春版小米8青春版小米8青春版小米8青春版小米8青春版小米8青春版小米8青春版</p>
                        </div>
                    </div>
                    <div class="product-item-r">
                        <i style="font-size: 1.6rem" class="iconfont icon-lanzi"></i>
                    </div>
                </div>
            </vm-collapse-item>
            <vm-collapse-item title="订单 WPGS1002" name="2">
                <div class="product-item">
                    <div class="product-item-l">
                        <div class="product-item-img">
                            <img src="http://image01.homedo.com/files/images/goods/2016-11-28/17/54/5452981155536612645_pic1.jpg"
                                 alt="">
                        </div>
                        <div class="product-item-info">
                            <p class="text-overflow">001-2018001</p>
                            <p class="text-overflow">小米8青春版小米8青春版小米8青春版小米8青春版小米8青春版小米8青春版小米8青春版</p>
                        </div>
                    </div>
                    <div class="product-item-r">
                        <i style="font-size: 1.6rem" class="iconfont icon-lanzi"></i>
                    </div>
                </div>
                <div class="product-item">
                    <div class="product-item-l">
                        <div class="product-item-img">
                            <img src="http://m.360buyimg.com/n12/jfs/t2914/212/191307014/124822/4285e559/574fc941Ne311ed78.jpg%21q70.jpg"
                                 alt="">
                        </div>
                        <div class="product-item-info">
                            <p class="text-overflow">001-2018001</p>
                            <p class="text-overflow">小米8青春版小米8青春版小米8青春版小米8青春版小米8青春版小米8青春版小米8青春版</p>
                        </div>
                    </div>
                    <div class="product-item-r">
                        <i style="font-size: 1.6rem" class="iconfont icon-lanzi"></i>
                    </div>
                </div>
            </vm-collapse-item>
        </vm-collapse>
    </div>
</template>

<script>

    export default {
        name: "product-picking",
        components: {},
        methods: {
            handlePicking() {
                this.$router.push('/picking')
            }
        },
        data() {
            return {
                activeNamesC: '1'
            }
        }
    }

</script>

<style scoped lang="less">
    .product-picking-container {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        bottom: 0;
    }

    .text-overflow {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .product-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        border-bottom: #DFE6EC 1px solid;
        padding-bottom: 10px;

        .product-item-l {
            display: flex;
            flex: 1;

            .product-item-img {
                width: 60px;
                height: 60px;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .product-item-info {
                display: flex;
                flex-wrap: wrap;
                align-content: space-between;
                flex: 1;
                width: 100px;
                margin-left: 6px;

                p {
                    display: block;
                    width: 100%;
                }

            }
        }

        .product-item-r {
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;

            i {
                display: block;
            }
        }
    }

    /deep/ .vm-collapse {
        .vm-collapse-item {
            .vm-collapse-item__header, .vm-collapse-item__content {
                font-size: 0.8rem !important;
            }

            .vm-collapse-item__content {
                & > div:last-child {
                    border-bottom: 0;
                    margin-bottom: 0;
                }
            }
        }

    }
</style>
