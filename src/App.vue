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
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  animation-name: slideOutDown;
}
@keyframes slideOutDown {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}

/*.fade-leave-to {*/
  /*transform: translateY(1000px);*/
/*}*/
</style>
