<template>
    <div class="login-container">
        <Group>
            <XInput title="账号" :show-clear="true" v-model="accountVal" placeholder="请输入..."></XInput>
            <XInput title="密码" :show-clear="true" v-model="passwordVal" type="password" placeholder="请输入..."></XInput>
        </Group>
        <XButton style="width: 88%;margin-top: 2rem" type="primary" @click.native="handleSubmit">登录</XButton>
        <toast v-model="showToast" type="text" position="bottom">
            <span>
                <i class="iconfont icon-tanhao"></i>
            </span> 登录失败！
        </toast>

    </div>
</template>

<script>
    import {Group, XInput, XButton, Toast} from 'vux'
    import {login} from '../../api'

    export default {
        name: "Login",
        components: {
            Group, XInput, XButton, Toast
        },
        methods: {
            handleSubmit() {
                login({userId: this.accountVal, password: this.passwordVal}).then(this.loginSuccessful);
            },
            loginSuccessful(res) {
                if (res.data.code === 500) {
                    this.showToast = true
                } else if (res.data[0].id) {
                    this.$store.commit('loginState',true);
                    this.$router.push('menu')
                }
            }
        },
        data() {
            return {
                accountVal: 'Esper',
                passwordVal: '123',
                showToast: false
            }
        }
    }
</script>

<style scoped lang="less">
    .login-container {
        width: 100%;
        position: relative;
        height: 100%;
        top: 0;
        bottom: 0;
    }

</style>
