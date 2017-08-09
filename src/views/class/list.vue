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
        prop="date"
        label="名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="描述">
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
        width="100">
        <template scope="scope">
          <el-button size="small" @click="deletes(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <class-create :p_dialog-show.sync="showCreateClassDialog"></class-create>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import ClassCreate from './create.vue'
  export default {
    components: { ClassCreate },
    data() {
      return {
        tableData: [{
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
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
        'showCreateDialog'
      ]),
      toShowCreateClassDialog() {
        this.$store.dispatch('clazz/showCreateDialog')
      },
      deletes(item) {

      }
    },
    created() {
      // 获取所有类别
      debugger
      this.$store.dispatch('clazz/getAllClazz')
    }

  }
</script>
<style lang="scss" scoped>
  .operate-btn{
    margin-bottom: 10px;
  }
</style>
