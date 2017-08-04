<template>
  <div class="app-container">
    <!-- 一级导航菜单 -->
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1" @click="routerLink('/order/list')">订单</el-menu-item>
      <el-menu-item index="2" @click="routerLink('/product/list')">商品</el-menu-item>
      <el-menu-item index="3" @click="routerLink('/order/detail')">数据中心</el-menu-item>
      <el-menu-item index="4" @click="routerLink('/crm')">用户</el-menu-item>
    </el-menu>

    <!-- 一级导航view -->
    <router-view class="top-nav-view"></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '2',
        activeIndex2: '1'
      }
    },
    methods: {
      routerLink(to) {
        this.$router.push(to)
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      }
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

  }
</style>

