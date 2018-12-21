<template>
    <div class="shelves-container" ref="shelvesDom">
        <Group>
            <XInput title="订单编号：" placeholder="" :disabled="true" :value="orderCode"></XInput>
            <XInput title="指定产品：" placeholder="点击扫描" :disabled="true" @click.native="show=true" :value="value">
                <span slot="right">
                    <i class="iconfont icon-saomiao"></i>
                </span>
            </XInput>
            <cell-form-preview :list="list"></cell-form-preview>
            <popup-radio title="是否合格" :options="options1" v-model="option1"></popup-radio>
        </Group>
        <popup v-model="show" position="top" @on-show="handlePopupShow('orderCodeScan')" @on-hide="handlePopupHide">
            <Group>
                <textarea id="orderCodeScan" style="width: 100%;border: none" v-model="orderCodeScan" rows="2"
                          ref="sacnInput1" title="单号：" @input="handleOnChangeOrder" placeholder="..."></textarea>
            </Group>
        </popup>
        <div style="width: 100%;height: 6px;background-color: #EFEFF4"></div>
        <Group gutter="0">
            <XInput title="指定库位：" placeholder="点击扫描" :disabled="true" @click.native="show2=true" :value="value2">
                <span slot="right">
                    <i class="iconfont icon-saomiao"></i>
                </span>
            </XInput>
            <cell-form-preview :list="list2"></cell-form-preview>
        </Group>
        <popup v-model="show2" position="top" @on-show="handlePopupShow('locationCodeScan')" @on-hide="handlePopupHide">
            <div>
                <Group>
                    <textarea id="locationCodeScan" style="width: 100%;border: none" v-model="locationCodeScan" rows="2"
                              ref="sacnInput1" title="库位：" @input="handleOnChangeLocation" placeholder="...">
                    </textarea>
                </Group>
            </div>
        </popup>
        <XButton :disabled="validationState" style="width: 88%;margin-top: 1.5rem" type="primary"
                 @click.native="handleToProductList">下一步
        </XButton>
    </div>
</template>

<script>
    import {XInput, Group, CellFormPreview, PopupRadio, Popup, XButton} from 'vux'
    import {
        setProduct_productShelves as dosetProduct,
        setStrLoc_productShelves as setStrLoc,
        doSave_productShelves as doSave,
        isCheck_productShelves as isCheck
    } from '../../api'

    export default {
        name: "productShelves",
        components: {
            XInput,
            Group,
            CellFormPreview,
            PopupRadio,
            Popup,
            XButton

        },
        watch: {
            option1(newVal) {
                this.saveData.isQualified = newVal.length === 2 ? 1 : 0;
            },
            value(newVal) {
                this.saveData.sku = newVal;
            },
            saveData: {
                handler(newVal) {
                    let keys = Object.keys(newVal);
                    let validation = 0;
                    for (let i = 0; i < keys.length; i++) {
                        if (newVal[keys[i]] === null || newVal[keys[i]] === '') {
                            validation += 1;
                        }
                    }
                    this.validationState = !(validation === 0)
                },
                deep: true
            }
        },
        methods: {
            handleOnChangeOrder() {
                if (this.orderCodeScan.includes('\n')) {
                    this.value = this.orderCodeScan.replace("\n", "");
                    if (!this.requestLock) {
                        this.requestLock = true;
                        setTimeout(() => {
                            this.requestLock = false;
                        }, 500);
                        dosetProduct({
                            mapFile: "ToProduct.xml",
                            sku: this.orderCodeScan.replace("\n", "")
                        }).then(this.dosetProductSuccessful).catch((res) => {
                            console.log(res);
                            this.orderCodeScan = '';
                            alert('获取数据失败！');
                            this.orderCode = '';
                            this.value = '';
                            this.list[0].value = '';
                            this.list[1].value = '';
                            this.list[2].value = '';

                        })
                    }
                }

            },
            handleOnChangeLocation() {
                if (this.locationCodeScan.includes('\n')) {
                    this.value2 = this.locationCodeScan;
                    if (!this.requestLock) {
                        this.requestLock = true;
                        setTimeout(() => {
                            this.requestLock = false;
                        }, 500);
                        setStrLoc({
                            mapFile: "ToProduct.xml",
                            bnText: this.locationCodeScan.replace("\n", "")
                        }).then(this.setStrLocSuccessful).catch((res) => {
                            console.log(res);
                            this.locationCodeScan = '';
                            alert('获取数据失败！');
                            this.value2 = '';
                            this.list2[0].value = '';

                        })
                    }

                }

            },
            dosetProductSuccessful(res) {
                console.log(res.data);
                if (res.data.success) {
                    this.saveData.optId = res.data.orderPut.id;
                    this.saveData.putNo = res.data.orderPut.putNo;
                    this.saveData.wpId = res.data.wp_id;
                    this.saveData.crpId = res.data.crp_id;
                    this.saveData.isQualified = this.option1.length === 2 ? 1 : 0;
                    this.saveData.sku = this.value;
                    this.saveData.productName = res.data.productInfo.productCname;
                    this.orderCodeScan = '';
                    this.orderCode = res.data.orderPut.putNo;
                    this.list[0].value = res.data.sysCustomerUser.fullCname;
                    this.list[1].value = res.data.productInfo.productCname;
                    this.list[2].value = res.data.part_code + '/' + res.data.crp_code;
                } else {
                    alert(res.data.message);
                    this.value = ''
                }
                this.show = false;

            },
            setStrLocSuccessful(res) {
                console.log(res.data);
                if (res.data.success) {
                    this.saveData.slsId = res.data.productPutaways.slsId;
                    this.locationCodeScan = '';
                    this.list2[0].value = res.data.productPutaways.slsCode;//wareHouse
                } else {
                    alert(res.data.message);
                    this.value2 = ''
                }
                this.show2 = false;

            },
            handlePopupShow(id) {
                setTimeout(() => {
                    document.getElementById(id).focus();
                    document.getElementById(id).value = ''
                }, 100);
            },
            handlePopupHide() {
                this.$refs.shelvesDom.scrollTop = 0
            },
            handleToProductList() {
                isCheck({
                    mapFile: "ToProduct.xml",
                    putNo: this.saveData.putNo,
                    sku: this.saveData.sku
                }).then(this.isCheckSuccessful).catch((res) => {
                    console.log(res);
                    alert('请求失败！');
                })
            },
            isCheckSuccessful(res) {
                console.log("1111",res.data);
                if (res.data.productPutawaysCheck.id === 0) {
                    console.log('保存');
                    doSave(this.saveData).then(this.doSaveSuccessful).catch((res) => {
                        console.log(res);
                        alert('请求失败！');
                    });
                } else {
                    console.log('不保存');
                    this.$router.push({
                        path: '/productList',
                        query: {
                            putNo: this.saveData.putNo,
                            isQualified: String(this.saveData.isQualified),
                        }
                    })
                }
            },
            doSaveSuccessful(res) {
                console.log(res);
                this.$router.push({
                    path: '/productList',
                    query: {
                        putNo: this.saveData.putNo,
                        isQualified: String(this.saveData.isQualified),
                    }
                })
            }
        },
        data() {
            return {
                requestLock: false,
                validationState: true,
                saveData: {
                    optId: null,//所属订单id:orderPut>ID
                    putNo: '',//入库订单号:orderPut>putNo
                    wpId: null,//所属库区id:wp_id
                    crpId: null,//所属货架id:crp_id
                    slsId: null,//所属库位id:wareHouse>slsId
                    isQualified: 1,//是否合格
                    sku: '',//sku
                    productName: ''//
                },
                value: '',
                value2: '',
                orderCode: '--',
                orderCodeScan: '',//SKU2000
                locationCodeScan: '',//TXT1000
                show: false,
                show2: false,
                list: [{
                    label: '客户',
                    value: '--'
                }, {
                    label: '产品',
                    value: '--'
                }, {
                    label: '位置',
                    value: '--'
                }],
                list2: [{
                    label: '当前库位',
                    value: '--'
                }],
                option1: '合格',
                options1: ['合格', '不合格'],
            }
        }
    }
</script>

<style scoped lang="less">
    .shelves-container {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        overflow: hidden;
    }
</style>
