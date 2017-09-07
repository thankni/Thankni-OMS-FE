  <template>
    <div>
      <div class="btn-group-right">
        <router-link to="/product/create"><el-button type="primary" icon="plus" >新增</el-button></router-link>
      </div>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="name"
          label="名称"
          sortable
          width="130">
        </el-table-column>
        <el-table-column
          prop="clazz.name"
          label="分类">
        </el-table-column>
        <el-table-column
          prop="filed"
          label="产地">
        </el-table-column>
        <el-table-column
          prop="costPrice"
          sortable
          label="进价">
        </el-table-column>
        <el-table-column
          :formatter="getLikes"
          label="Likes">
        </el-table-column>
        <el-table-column
          :formatter="getUnlikes"
          label="Unlikes">
        </el-table-column>
        <el-table-column
          :formatter="getPricePlanNum"
          label="产品数量">
        </el-table-column>
        <el-table-column
          prop="label"
          label="标签"
          width="180">
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          width="200">
          <template scope="scope">
            <el-button type="default" size="small" @click="edits(scope.row)">详情</el-button>
            <el-button type="info" size="small" @click="edits(scope.row)">编辑</el-button>
            <el-button type="danger"size="small"  @click="deletes(scope)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </template>

  <script>
    import ProductService from '../../services/product'
    let productService = new ProductService()
    export default {
      data() {
        return {
          tableData: [],
          updateProduct: {}
        }
      },
      methods: {
        formatter(row, column) {
          return row.address
        },
        filterTag(value, row) {
          return row.tag === value
        },

        getLikes(row, column) {
          let likes = 0
          row.productionPlan.forEach(el => {
            likes += el.likes
          })
          return likes
        },
        getUnlikes(row, column) {
          let unlikes = 0
          row.productionPlan.forEach(el => {
            unlikes += el.unlikes
          })
          return unlikes
        },
        getPricePlanNum(row, column) {
          return row.productionPlan.length
        },
        deletes(item) {
          this.$confirm('确认要删除该商品吗？', '提示', {
            confirmButtonText: '删除',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            productService.delete(item.row.id).then(response => {
              this.tableData.splice(item.$index, 1)
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
            })
          })
        },
        edits(row) {
          this.updateProduct = row
        }
      },
      created() {
        productService.queryAll().then(response => {
          this.tableData = response.result
        }).catch(error => {
          error
        })
      }
    }
  </script>
  <style lang="scss" scoped>

  </style>
