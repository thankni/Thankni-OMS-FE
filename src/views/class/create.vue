<template>
  <el-dialog :title="title" :visible="getShowCreateDialog" @update:visible="toggle">
    <el-form :model="clazzForm" ref="clazz" :rules="clazzRule" label-width="70px">
      <el-form-item label="名称" required prop="name">
        <el-input type="text" placeholder="最多四个字，如：新鲜水果，限时抢购" auto-complete="off" name="name" v-model="clazzForm.name"></el-input>
      </el-form-item>
      <el-form-item label="描述" required prop="description">
        <el-input type="textarea" placeholder="对该分类的一些介绍" name="description" v-model="clazzForm.description"></el-input>
      </el-form-item>
    </el-form>
    <el-row type="flex" justify="end">
      <el-button @click="toggle(false)">取消</el-button>
      <el-button type="primary" @click="comfirm">保存</el-button>
    </el-row>
  </el-dialog>
</template>
<script>
  import ClazzService from '../../services/clazz'
  import { mapGetters, mapActions } from 'vuex'

  const clazzService = new ClazzService()
  export default {
    props: ['p_updateClazz'],
    data() {
      return {
        title: '新增分类',
        clazzForm: {
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
    watch: {
      getShowCreateDialog(val, old) {
        debugger
        if (val) {
          this.title = this.p_updateClazz.id ? '编辑分类' : '新增分类'
          this.clazzForm.name = this.p_updateClazz.name || ''
          this.clazzForm.description = this.p_updateClazz.description || ''
        } else {
          this._resetData()
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
        'showCreateDialog',
        'createClazz'
      ]),
      toggle(val) {
        val ? this.showCreateDialog() : this.hideCreateDialog()
      },
      comfirm() {
        this.$refs.clazz.validate(valid => {
          if (!valid) return false
          let clazz = _.cloneDeep(this.clazzForm)

          if (this.p_updateClazz.id) {
            clazz.id = this.p_updateClazz.id
            clazzService.update(clazz).then(response => {
              this.$emit('updateClazz', clazz)
              this.hideCreateDialog()
            }).catch(error => {
              this.$message({
                message: error.meg,
                type: 'error'
              })
            })
            this.$emit('pushNewClazz', clazz)
          } else {
            clazzService.create(clazz).then(response => {
              clazz['id'] = response.result.id
              this.$emit('createdClazz', clazz)
              this.hideCreateDialog()
            }).catch(error => {
              this.$message({
                message: error.meg,
                type: 'error'
              })
            })
            this.$emit('pushNewClazz', clazz)
          }
        })
      },
      _resetData() {
        this.title = '新增分类'
        this.clazzForm.name = ''
        this.clazzForm.description = ''
        this.$refs.clazz.resetFields()
      }
    }

  }

</script>
<style lang="scss" scoped>


</style>
