<template>
    <div class="shelves-container">
        <Group>
            <XInput title="入库订单：" placeholder="点击扫描" :disabled="true" @click.native="handleShowScan"></XInput>
            <cell-form-preview :list="list"></cell-form-preview>
            <popup-radio title="是否合格" :options="options1" v-model="option1"></popup-radio>
        </Group>
        <popup v-model="show" position="top" @on-show="handlePopupShow">
            <div class="popup0">
                <group>
                    <XInput ref="sacnInput" title="单号：" @on-change="handleOnChange" placeholder="点击扫描"></XInput>
                </group>
            </div>
        </popup>
    </div>
</template>

<script>
    import {XInput, Group, CellFormPreview, PopupRadio, Popup} from 'vux'
    import {doDync_productShelves as doDync} from '../../api'

    export default {
        name: "productShelves",
        components: {
            XInput,
            Group,
            CellFormPreview,
            PopupRadio,
            Popup,

        },
        methods: {
            handleOnChange(event) {
                doDync({mapFile: "ToProduct.xml", sku: event}).then(this.doDyncSuccessful)
            },
            doDyncSuccessful(event) {
                console.log(event.data);
                this.show = false;
            },
            handlePopupShow() {
                setTimeout(() => {
                    this.$refs.sacnInput.focus()
                }, 100);

            },
            handleShowScan() {
                this.show = true;
            }
        },
        data() {
            return {
                show: false,
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
                option1: '合格',
                options1: ['合格', '不合格'],
            }
        }
    }
</script>

<style scoped>
    .shelves-container {

    }
</style>
