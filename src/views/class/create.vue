<template>
  <el-dialog title="添加分类" :visible="getShowCreateDialog" @update:visible="toggle">
    <el-form :model="clazzFrom" ref="clazz" :rules="clazzRule" label-width="70px">
      <el-form-item label="名称" required prop="name">
        <el-input type="text" placeholder="最多四个字，如：新鲜水果，限时抢购" auto-complete="off" name="name" v-model="clazzFrom.name"></el-input>
      </el-form-item>
      <el-form-item label="描述" required prop="description">
        <el-input type="textarea" placeholder="对该分类的一些介绍" name="description" v-model="clazzFrom.description"></el-input>
      </el-form-item>
    </el-form>
    <div class="dialog-footer btn-group-center">
      <el-button @click="toggle(false)">取 消</el-button>
      <el-button type="primary" @click="comfirm">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data() {
      return {
        clazzFrom: {
          name: '',
          description: ''
        },
        clazzRule: {
          name: [
            { required: true, trigger: 'blur', message: '请输入名称' }
          ],
          description: [
            { required: true, trigger: 'blur', message: '请输入描述' }
          ]
        }
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
      toggle(val) {
        val ? this.$store.dispatch('clazz/showCreateDialog') : this.$store.dispatch('clazz/hideCreateDialog')
      },
      comfirm() {
        this.$refs.clazz.validate(valid => {
          if (!valid) return false



          this.$emit('pushNewClazz', this.clazzFrom)
        })
      }
    }

  }

</script>
<style lang="scss" scoped>


</style>
