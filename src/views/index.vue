<template>
  <div class="app-container">
    <!-- 一级导航菜单 -->
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1" @click="routerLink('/order/list')">订单</el-menu-item>
      <el-menu-item index="2" @click="routerLink('/product/list')">商品</el-menu-item>
      <el-menu-item index="3" @click="routerLink('/order/detail')">数据中心</el-menu-item>
      <el-menu-item index="4" @click="routerLink('/crm')">用户</el-menu-item>

      <el-submenu class="user" index="100">
        <template slot="title">{{username}}</template>
        <el-menu-item index="100-3" @click="logout">退出</el-menu-item>
      </el-submenu>
    </el-menu>

    <!-- 一级导航view -->
    <router-view class="top-nav-view"></router-view>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import appInfo from '../config/index'
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        userInfo: {}
      }
    },
    computed: {
      ...mapGetters('user', {
        username: 'username',
        token: 'token'
      })
    },
    methods: {
      ...mapActions('user', {
        logoutAction: 'logout'
      }),
      routerLink(to) {
        this.$router.push(to)
      },
      logout() {
        this.logoutAction().then(response => {
          this.$cookie.remove(appInfo.session)
          this.$router.push('login')
        })
      }
    },
    created() {
    }
  }
</script>

<style lang="scss" scoped>
  .app-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: stretch;

    .top-nav-view {
      flex:1;
      display: flex;
    }

    .user {
      float: right;
      margin-right: 50px;
    }

  }
</style>

