<template>
  <div>
    <div class="btn-group-right">
      <el-button type="primary" icon="plus" @click="toShowCreateClassDialog">新增</el-button>
    </div>
    <el-table
      :data="tableData"
      border
      stripe
      style="width: 100%">
      <el-table-column
        prop="name"
        label="名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="description"
        label="描述">
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
        width="180">
        <template scope="scope">
          <el-button type="primary" size="small" @click="edits(scope.row)">编辑</el-button>
          <el-button size="small" @click="deletes(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <clazz-create :p_dialog-show.sync="showCreateClassDialog" :p_update-clazz="updateClazz" v-on:createdClazz="pushNewClazz" v-on:updateClazz="updateThisClazz"></clazz-create>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import ClazzCreate from './create.vue'
  import ClazzService from '../../services/clazz'
  let clazzService = new ClazzService()
  export default {
    components: { ClazzCreate },
    data() {
      return {
        tableData: [],
        showCreateClassDialog: false,
        updateClazz: {}
      }
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
        this.showCreateDialog()
      },
      deletes(item) {
        this.$confirm('删除前请确认已经删除相关产品！', '提示', {
          confirmButtonText: '删除',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          clazzService.delete(item.row.id).then(response => {
            this.tableData.splice(item.$index, 1)
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
          })
        })
      },
      edits(clazz) {
        this.updateClazz = clazz
        this.showCreateDialog()
      },
      pushNewClazz(newClazz) {
        this.tableData.push(newClazz)
        this.$message({
          type: 'success',
          message: '新增成功!'
        })
      },
      updateThisClazz(clazz) {
        this.updateClazz.name = clazz.name
        this.updateClazz.description = clazz.description
        this.$message({
          type: 'success',
          message: '更新成功!'
        })
      }
    },
    created() {
      // 获取所有类别
      clazzService.queryAll().then(response => {
        this.tableData = response.result
      }).catch(error => {
        this.$message({
          message: error.msg,
          type: 'error'
        })
      })
    }

  }
</script>
<style lang="scss" scoped>
  .operate-btn{
    margin-bottom: 10px;
  }
</style>
