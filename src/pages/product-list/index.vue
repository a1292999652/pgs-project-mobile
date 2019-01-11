<template>
    <div>
        <Group>
            <textarea id="locationCodeScan" style="width: 100%;border: none" v-model="productScan" rows="2"
                      ref="sacnTextarea" @input="handleOnChangeProduct" placeholder="扫描产品SKU...">
                    </textarea>
        </Group>
        <LoadMore tip="产品列表" :show-loading="false" background-color="#fbf9fe"></LoadMore>

        <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
            <thead style="font-size: 12px">
            <tr style="background-color: #F7F7F7">
                <th>产品</th>
                <th>库位</th>
                <th>数量</th>

            </tr>
            </thead>
            <tbody style="font-size: 12px">
            <tr v-for="val in productList" :key="val.id">
                <td>{{val.productName}}</td>
                <td>{{val.slsCode}}</td>
                <td>{{val.putawayQty}}</td>

            </tr>
            </tbody>
        </x-table>
    </div>
</template>

<script>
    import {XTable, LoadMore, Group,} from 'vux'
    import {
        historyScan_productList as historyScan,
        scanQty_productList as scanQty
    } from '../../api'

    export default {
        name: "productList",
        components: {
            XTable,
            LoadMore,
            Group,
        },
        mounted() {
            this.handleOnfocus();
            this.productListInit()
        },
        methods: {
            handleOnChangeProduct() {
                if (this.productScan.includes('\n')) {
                    if (!this.requestLock) {
                        this.requestLock = true;
                        setTimeout(() => {
                            this.requestLock = false;
                        }, 500);
                        scanQty({
                            mapFile: "ToProduct.xml",
                            putNo: this.$route.query.putNo,
                            sku: this.productScan.replace("\n", ""),
                            isQualified: Number(this.$route.query.isQualified),
                        }).then(this.scanQtySuccessful).catch((res) => {
                            console.log(res);
                            alert('保存失败！');
                            this.productScan = ''
                        })
                    }

                }
            },
            scanQtySuccessful(res) {
                console.log(res.data);
                if (res.data.success) {
                    this.productList = res.data.productPutaways.row;
                } else {
                    this.$refs.sacnTextarea.blur();
                    alert(res.data.message);
                }
                this.productScan = ''//SKU2000
            },
            productListInit() {
                historyScan({
                    mapFile: "ToProduct.xml",
                    putNo: this.$route.query.putNo,
                }).then(this.productListInitSuccessful).catch()
            },
            productListInitSuccessful(res) {
                console.log(res.data);
                if (res.data.success) {
                    this.productList = res.data.productPutawaysScan.row;
                }
            },
            handleOnfocus() {
                this.$refs.sacnTextarea.focus()
            }
        },
        data() {
            return {
                requestLock: false,
                productScan: '',
                productList: []
            }
        }
    }
</script>

<style scoped>

</style>
