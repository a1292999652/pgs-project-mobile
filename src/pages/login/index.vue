<template>
    <div class="login-container">
        <Group>
            <XInput title="账号" :show-clear="true" v-model="accountVal" placeholder="请输入..."></XInput>
            <XInput title="密码" :show-clear="true" v-model="passwordVal" type="password" placeholder="请输入..."></XInput>
        </Group>
        <XButton :disabled="submitBtnDisabled" :show-loading="submitBtnLoading" style="width: 88%;margin-top: 2rem"
                 type="primary" @click.native="handleSubmit">登录
        </XButton>
        <div style="width: 100%;display: flex;justify-content: space-around;margin-top: 20px;font-size: 14px">
            <CheckIcon :value.sync="isSaveAccountVal"> {{'记住账号'}}</CheckIcon>
            <CheckIcon :value.sync="isSavePasswordVal"> {{'记住密码'}}</CheckIcon>
        </div>
        <toast v-model="showToast1" type="text" position="bottom">
            <span>
                <i class="iconfont icon-tanhao"></i>
            </span> {{loginFailedSmg}}
        </toast>
        <toast v-model="showToast2" type="text" position="bottom">
            <span>
                <i class="iconfont icon-tanhao"></i>
            </span> 网络连接失败！
        </toast>
    </div>
</template>

<script>
    import {Group, XInput, XButton, Toast, CheckIcon} from 'vux'
    import {login} from '../../api'

    export default {
        name: "Login",
        components: {
            Group, XInput, XButton, Toast, CheckIcon
        },
        mounted() {
            this.initState();
        },
        methods: {
            handleSubmit() {
                this.submitBtnLoading = true;
                this.submitBtnDisabled = true;
                if (this.isSaveAccountVal) {
                    localStorage.accountVal = this.accountVal
                } else {
                    localStorage.accountVal = ''
                }
                if (this.isSavePasswordVal) {
                    localStorage.passwordVal = this.passwordVal
                } else {
                    localStorage.passwordVal = ''
                }
                login({
                    userId: this.accountVal,
                    password: this.passwordVal,
                    userType: 1//http://dev.aplun.cn:5606/pgs/sys/login?userId=Esper&password=123&userType=1
                }).then(this.loginSuccessful).catch(() => {
                    this.submitBtnLoading = false;
                    this.submitBtnDisabled = false;
                    this.showToast2 = true
                });
            },
            loginSuccessful(res) {
                this.submitBtnLoading = false;
                this.submitBtnDisabled = false;
                if (!res.data.success) {
                    this.loginFailedSmg = res.data.message;
                    this.showToast1 = true
                } else {
                    this.$store.commit('loginState', {success: true, id: res.data.success});
                    this.$router.push('menu')
                }
            },
            initState() {
                this.isSaveAccountVal = localStorage.isSaveAccountVal ? eval(localStorage.isSaveAccountVal) : true;
                this.isSavePasswordVal = localStorage.isSavePasswordVal ? eval(localStorage.isSavePasswordVal) : false;
                this.accountVal = localStorage.accountVal ? localStorage.accountVal : '';
                this.passwordVal = localStorage.passwordVal ? localStorage.passwordVal : '';
            },
        },
        watch: {
            isSaveAccountVal(newVal) {
                try {
                    localStorage.isSaveAccountVal = newVal
                } catch (e) {
                    console.log(e)
                }
            },
            isSavePasswordVal(newVal) {
                try {
                    localStorage.isSavePasswordVal = newVal
                } catch (e) {
                    console.log(e)
                }
            },

        },
        data() {
            return {
                accountVal: '',//'Esper',
                passwordVal: '',//'123',
                showToast1: false,
                showToast2: false,
                isSaveAccountVal: true,
                isSavePasswordVal: false,
                submitBtnLoading: false,
                submitBtnDisabled: false,
                loginFailedSmg: ''
            }
        }
    }
</script>

<style scoped lang="less">
    .login-container {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
    }

</style>
