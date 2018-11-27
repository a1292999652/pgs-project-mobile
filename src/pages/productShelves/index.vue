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
        <popup v-model="show" position="top" @on-show="handlePopupShow(1)" @on-hide="handlePopupHide">
            <div>
                <group>
                    <XInput ref="sacnInput1" title="单号：" @on-change="handleOnChangeOrder" placeholder="...">
                        <span slot="right">
                            <i class="iconfont icon-saomiao"></i>
                        </span>
                    </XInput>
                </group>
            </div>
        </popup>
        <div style="width: 100%;height: 6px;background-color: #EFEFF4"></div>
        <Group gutter="0">
            <XInput title="指定库位：" placeholder="点击扫描" :disabled="true" @click.native="show2=true" :value2="value2">
                <span slot="right">
                    <i class="iconfont icon-saomiao"></i>
                </span>
            </XInput>
            <cell-form-preview :list="list2"></cell-form-preview>
        </Group>
        <popup v-model="show2" position="top" @on-show="handlePopupShow(2)" @on-hide="handlePopupHide">
            <div>
                <group>
                    <XInput ref="sacnInput2" title="库位：" @on-change="handleOnChangeLocation" placeholder="...">
                        <span slot="right">
                            <i class="iconfont icon-saomiao"></i>
                        </span>
                    </XInput>
                </group>
            </div>
        </popup>
        <LoadMore tip="产品列表" :show-loading="false" background-color="#fbf9fe"></LoadMore>

        <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
            <thead style="font-size: 12px">
            <tr style="background-color: #F7F7F7">
                <th>库位</th>
                <th>数量</th>

            </tr>
            </thead>
            <tbody style="font-size: 12px">
            <tr>
                <td>Apple</td>
                <td>$1.25</td>

            </tr>
            <tr>
                <td>Banana</td>
                <td>$1.20</td>
            </tr>
            </tbody>
        </x-table>
    </div>
</template>

<script>
    import {XInput, Group, CellFormPreview, PopupRadio, Popup, XTable, LoadMore} from 'vux'
    import {setProduct_productShelves as dosetProduct, setStrLoc_productShelves as setStrLoc} from '../../api'

    export default {
        name: "productShelves",
        components: {
            XInput,
            Group,
            CellFormPreview,
            PopupRadio,
            Popup,
            XTable,
            LoadMore

        },
        methods: {
            handleOnChangeOrder(event) {
                this.value = event;
                dosetProduct({mapFile: "ToProduct.xml", sku: event}).then(this.dosetProductSuccessful)
            },
            handleOnChangeLocation(event) {
                this.value2 = event;
                setStrLoc({mapFile: "ToProduct.xml", bnText: event}).then(this.setStrLocSuccessful)
            },
            dosetProductSuccessful(res) {
                this.list[0].value = res.data.sysCustomerUser.fullCname;
                this.show = false;
            },
            setStrLocSuccessful(res) {
                this.list2[0].value = res.data.wareHouse.slsCode;
                this.show2 = false;
            },
            handlePopupShow(val) {
                setTimeout(() => {
                    this.$refs['sacnInput' + val].focus()
                }, 100);

            },
            handlePopupHide() {
                this.$refs.shelvesDom.scrollTop = 0
            }
        },
        data() {
            return {
                value: '',
                value2: '',
                orderCode: '--',
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
        overflow-x: hidden;
        overflow-y: scroll;
    }
</style>
