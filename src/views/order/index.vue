<template>
  <div>
    <el-menu default-active="1" class="el-menu-vertical-demo order-left-nav" @open="handleOpen" @close="handleClose">
      <el-menu-item index="1" @click="routerLink('/order/list')"><i class="el-icon-menu"></i>订单列表</el-menu-item>
    </el-menu>
    <router-view class="order-content"></router-view>
  </div>
</template>

<script>
  export default {
    methods: {
      routerLink(to) {
        this.$router.push(to)
      }
    }
  }
</script>
<style lang="scss" scoped>
.order-left-nav {
  flex-basis: 180px;
}
.order-content {
  flex:1;
  overflow: auto;
  padding: 10px;
}
</style>
