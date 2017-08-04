<template>
  <div>
    <div class="btn-group-right">
      <el-button type="primary" icon="plus" @click="toShowCreateClassDialog">新增</el-button>
    </div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
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
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
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
      }
    }

  }
</script>
<style lang="scss" scoped>
  .operate-btn{
    margin-bottom: 10px;
  }
</style>
