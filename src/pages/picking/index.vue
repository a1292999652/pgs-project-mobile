<template>
    <div class="picking-container">
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
        </div>
        <card>
            <div slot="content" class="card-demo-flex card-demo-content01">
                <div class="vux-1px-r">
                    <span>1130</span>
                    <br/>
                    库存
                </div>
                <div class="vux-1px-r">
                    <span>15</span>
                    <br/>
                    拣货数
                </div>
                <div class="vux-1px-r">
                    <span style="color: #07BE06">0</span>
                    <br/>
                    已捡
                </div>
            </div>
        </card>
        <div class="choose-basket">
            <Checker
                    v-model="demo5"
                    default-item-class="demo5-item"
                    selected-item-class="demo5-item-selected"
            >
                <CheckerItem v-for="i in [1, 2, 3,4,5,6,7,8,9]" :key="i" :value="i">A00{{i++}}</CheckerItem>
            </Checker>
        </div>
        <div class="inventory-list">
            <div style="height: 4px;background-color: #F2F1F8"></div>
            <Group title="位置：A01区/B01货架/C01库位">
                <XNumber name="数量" title="数量:20"></XNumber>
            </Group>
            <div style="height: 4px;background-color: #F2F1F8"></div>
            <Group title="位置：A01区/B01货架/C02库位">
                <XNumber name="数量" title="数量:20"></XNumber>
            </Group>
            <div style="height: 4px;background-color: #F2F1F8"></div>
            <Group title="位置：A01区/B01货架/C03库位">
                <XNumber name="数量" title="数量:20"></XNumber>
            </Group>
            <div style="height: 4px;background-color: #F2F1F8"></div>
            <Group title="位置：A01区/B01货架/C04库位">
                <XNumber name="数量" title="数量:20"></XNumber>
            </Group>
            <div style="height: 4px;background-color: #F2F1F8"></div>
            <Group title="位置：A01区/B01货架/C05库位">
                <XNumber name="数量" title="数量:20"></XNumber>
            </Group>
        </div>
    </div>
</template>

<script>
    import {
        Card, Group, XNumber, Checker, CheckerItem,
    } from 'vux'

    export default {
        name: "index",
        components: {
            Card,
            Group,
            XNumber,
            Checker,
            CheckerItem
        },
        data() {
            return {
                demo5: 1
            }
        }
    }
</script>

<style scoped lang="less">
    .picking-container {
        font-size: 0.8rem;
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
        justify-content: space-between;
        margin-bottom: 10px;
        margin-top: 10px;
        width: 100%;

        .product-item-l {
            width: 90%;
            margin: 0 auto;
            display: flex;
            align-items: center;
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
                height: 40px;

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

    .card-demo-flex {
        display: flex;
    }

    .card-demo-content01 {
        padding: 10px 0;
    }

    .card-padding {
        padding: 15px;
    }

    .card-demo-flex > div {
        flex: 1;
        text-align: center;
        line-height: 20px;
    }

    .card-demo-flex span {
        color: #f74c31;
    }

    .inventory-list {
        position: absolute;
        top: 200px;
        left: 0;
        bottom: 0;
        width: 100%;
        overflow-y: scroll;

    }

    .choose-basket {
        height: 60px;
        width: 90%;
        margin: 0 auto;

        /deep/ .vux-checker-box {
            display: flex;
            height: 100%;
            align-items: center;
            overflow-x: scroll;
            div{
                min-width: 80px;
            }
        }
    }

    .demo5-item {
        width: 100px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        border-radius: 3px;
        border: 1px solid #ccc;
        background-color: #fff;
        margin-right: 6px;
    }

    .demo5-item-selected {
        background: #ffffff no-repeat right bottom;
        border-color: #ff4a00;
    }
</style>
