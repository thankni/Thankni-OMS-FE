<template>
  <transition name="fade" mode="out-in" class="animated">
    <router-view></router-view>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {

    }
  }
</script>
<style lang="scss">
html {
  height: 100%;
  width: 100%;
}
body {
  height: 100%;
  width: 100%;
  margin: 0px;
  background-color: #eee;
}
.fade-enter-active {
  animation: slideInDown 1.3s;
}

</style>
