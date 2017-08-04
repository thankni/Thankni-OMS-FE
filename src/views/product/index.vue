<template>
  <div>
    <el-menu default-active="1" class="el-menu-vertical-demo order-left-nav">
      <el-menu-item index="1" @click="routerLink('/product/list')"><i class="el-icon-menu"></i>所有产品</el-menu-item>
      <el-menu-item index="2" @click="routerLink('/product/class')"><i class="el-icon-setting"></i>所有类别</el-menu-item>
      <el-menu-item index="3" @click="routerLink('/product/create')"><i class="el-icon-menu"></i>新增产品</el-menu-item>
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
