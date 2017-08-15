<template>
  <div class="login">
    <el-form class="login-form" lebal-position="right" label-width="80px">
      <el-form-item label="用户名">
        <el-input type="text" placeholder="请输入账号" v-model="loginFrom.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" placeholder="请输入密码" v-model="loginFrom.password"></el-input>
      </el-form-item>
      <el-form-item>随便输</el-form-item>

      <el-button type="primary" size="large" class="login-btn" @click="toLogin">登陆</el-button>
    </el-form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import appInfo from 'config'
export default {
  data() {
    return {
      loginFrom: {
        username: '',
        password: ''
      }

    }
  },
  computed: {
  },
  methods: {
    ...mapActions('user', [
      'login'
    ]),
    toLogin() {
      this.$store.dispatch('user/login', this.loginFrom).then((loginInfo) => {
        // cookie 记录用户信息
        this.$cookie.set(appInfo.session, JSON.stringify(loginInfo))
        this.$router.push('/order/list')
      }).catch()
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .login-form {
    padding: 40px;
    width: 400px;
    background-color: #fff;
    border: 1px solid #eaeaea;
  }
  .login-btn {
    width: 100%;
  }
}

</style>
