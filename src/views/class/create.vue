<template>
  <el-dialog title="添加分类" :visible.sync="getShowCreateDialog" :before-close="handleClose">
    <el-form>
      <el-form-item label="名称" label-width="50">
        <el-input value="bbb" placeholder="最多四个字，如：新鲜水果，限时抢购" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input type="textarea" placeholder="对该分类的一些介绍" ></el-input>
      </el-form-item>
    </el-form>
    <div class="dialog-footer dialog-footer-btn-group">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="comfirm">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters('clazz', {
        getShowCreateDialog: 'getShowCreateDialog'
      })
    },
    methods: {
      ...mapActions('clazz', [
        'hideCreateDialog',
        'createClazz'
      ]),
      handleClose() {
        this.$store.dispatch('clazz/hideCreateDialog')
      },
      comfirm() {

      }
    }

  }

</script>
<style lang="scss" scoped>


</style>
