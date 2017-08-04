<template>
  <div class="login">
    <el-form class="login-form" lebal-position="right" label-width="80px">
      <el-form-item label="用户名">
        <el-input type="text" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" placeholder="请输入密码"></el-input>
      </el-form-item>

      <el-button type="primary" size="large" class="login-btn" @click="toLogin">登陆</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    toLogin() {
      debugger
      this.$router.push('/order')
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
