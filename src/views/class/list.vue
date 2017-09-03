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
        width="100">
        <template scope="scope">
          <el-button size="small" @click="deletes(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <class-create :p_dialog-show.sync="showCreateClassDialog" v-on:createdClazz="pushNewClazz"></class-create>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import ClassCreate from './create.vue'
  export default {
    components: { ClassCreate },
    data() {
      return {
        tableData: [],
        showCreateClassDialog: false
      }
    },
    computed: {
      ...mapGetters('clazz', [
        'getShowCreateDialog'
      ])
    },
    methods: {
      ...mapActions('clazz', [
        'showCreateDialog',
        'queryAll',
        'delete'
      ]),
      toShowCreateClassDialog() {
        this.showCreateDialog()
      },
      deletes(item) {
        debugger
        this.delete(item.row.id).then(response => {
          this.tableData.splice(item.$index, 1)
        })
      },
      pushNewClazz() {

      }
    },
    created() {
      // 获取所有类别
      this.queryAll().then(response => {
        this.tableData = response
      }).catch(error => {
        error
        debugger
      })
    }

  }
</script>
<style lang="scss" scoped>
  .operate-btn{
    margin-bottom: 10px;
  }
</style>
