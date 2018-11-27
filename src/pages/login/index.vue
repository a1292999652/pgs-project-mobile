<template>
    <div class="login-container">
        <Group>
            <XInput title="账号" :show-clear="true" v-model="accountVal" placeholder="请输入..."></XInput>
            <XInput title="密码" :show-clear="true" v-model="passwordVal" type="password" placeholder="请输入..."></XInput>
        </Group>
        <XButton style="width: 88%;margin-top: 2rem" type="primary" @click.native="handleSubmit">登录</XButton>

    </div>
</template>

<script>
    import {Group, XInput, XButton} from 'vux'

    export default {
        name: "Login",
        components: {
            Group, XInput, XButton
        },
        methods: {
            handleSubmit() {
                this.$router.push('menu')
            }
        },
        data() {
            return {
                accountVal: '',
                passwordVal: '',
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
