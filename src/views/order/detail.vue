<template>
  <div>
    <div class='btn-group-right'>
      <el-button type='primary' icon='plus' @click='toShowCreateClassDialog'>新增</el-button>
    </div>
    <div id="dorado"></div>
    <class-create :p_dialog-show.sync='showCreateClassDialog'></class-create>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import ClassCreate from '../class/create.vue'
  export default {
    components: {ClassCreate},
    data() {
      return {}
    },
    computed: {
      ...mapGetters('clazz', [
        'getShowCreateDialog'
      ])
    },
    methods: {
      ...mapActions('clazz', [
        'showCreateDialog'
      ]),
      toShowCreateClassDialog() {
        this.$store.dispatch('clazz/showCreateDialog')
      },
      deletes(item) {

      }
    },
    created() {

    }
  }
</script>
<style lang='scss' scoped>
  .operate-btn {
    margin-bottom: 10px
  }
</style>
