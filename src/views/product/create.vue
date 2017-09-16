<template>
  <div>
    <el-form :model="productForm" :rules="rules" ref="productForm" label-width="100px">
      <el-row :gutter="10">
        <el-col :span="8">
          <el-form-item label="名称" prop="name">
            <el-input v-model="productForm.name"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="分类" prop="clazz">
            <el-select v-model="productForm.clazz" placeholder="请选择活动区域">
              <el-option v-for="clazz in allClazz" :key="clazz.id" :label="clazz.name" :value="clazz.id"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="产地" prop="filed">
            <el-input v-model="productForm.filed"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="10">
        <el-col :span="8">
          <el-form-item label="进价" prop="costPrice">
            <el-input v-model="productForm.costPrice"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="折扣" prop="discount">
            <el-input v-model="productForm.discount"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="标签" prop="label">
            <el-input v-model="productForm.label"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <el-form-item label="简介" prop="description">
            <el-input type="textarea" v-model="productForm.description"
                      :autosize="{ minRows: 4, maxRows: 6}"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <el-form-item label="价格计划" prop="name">
            <el-col v-for="(plan, index) in productForm.productionPlan" :span="8" :key="plan.$index"
                    class="price-plan-box">
              <el-form ref="productForm" label-width="80px">
                <el-form-item label="名称" prop="name" class="price-plan-item">
                  <el-input v-model="plan.name"></el-input>
                </el-form-item>
                <el-form-item label="卖价" prop="name" class="price-plan-item">
                  <el-input v-model="plan.salesPrice"></el-input>
                </el-form-item>
                <el-form-item label="市场价" prop="name" class="price-plan-item">
                  <el-input v-model="plan.marketPrice"></el-input>
                </el-form-item>
              </el-form>
              <i class="el-icon-close remove-price-plan" @click="removeProductionPlan(index)"></i>
            </el-col>
            <el-col :span="4" class="price-plan-box">
              <el-row v-on:click.native="addProductionPlan" type="flex" justify="center" align="middle"
                      class="add-price-plan">
                <i class="el-icon-plus"></i>
              </el-row>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <el-form-item label="轮播图" prop="swipe">
            <qiniu-manual-upload ref="swipe"
                                 p_ref="swipe"
                                 :p_file-list="swipeFileList">

            </qiniu-manual-upload>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <el-form-item label="详情" prop="detail">
            <qiniu-manual-upload ref="detail"
                                 p_ref="detail"
                                 :p_file-list="detailFileList">

            </qiniu-manual-upload>
          </el-form-item>
        </el-col>
      </el-row>


      <el-row type="flex" justify="center">
        <el-button type="primary" @click="submitForm('productForm')">保存</el-button>
        <el-button @click="resetForm('productForm')">返回</el-button>
      </el-row>
    </el-form>

  </div>

</template>
<script>
  import qiniuManualUpload from '../../components/qiniuManualUpload.vue'
  import appInfo from '../../config'
  import serverConfig from '../../config/server'
  import ClazzService from '../../services/clazz'
  import ProductService from '../../services/product'

  let clazzService = new ClazzService()
  let productService = new ProductService()
  export default {
    components: {qiniuManualUpload},
    data() {
      return {
        productForm: {
          name: '',
          clazz: '',
          filed: '',
          discount: '',
          label: '',
          description: '',
          productionPlan: [],
          image: []
        },
        rules: {
//          name: [
//            { required: true, message: '请输入名称', trigger: 'blur' }
//          ],
//          clazz: [
//            { required: true, message: '请选择活动区域', trigger: 'change' }
//          ],
//          filed: [
//            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
//          ]
        },
        imageServer: serverConfig.IMAGE,
        uploadData: {},
        swipeFileList: [],
        detailFileList: [],
        allClazz: []
      }
    },
    methods: {
      submitForm(formName) {
        debugger
        this.productForm.image = this.productForm.image.concat(this._addImageType(this.$refs.swipe.$getFileList(), appInfo.imageType.productSwipe))
        this.productForm.image = this.productForm.image.concat(this._addImageType(this.$refs.detail.$getFileList(), appInfo.imageType.productDetail))
//        this.$refs[formName].validate((valid) => {
//          if (valid) {
//          } else {
//            return false
//          }
//        })
        productService.create(this.productForm).then(response => {
          this.$router.push('/product/list')
        }).catch()
      },
      _addImageType: function(list, type) {
        for (let i = 0, l = list.length; i < l; i++) {
          list[i].type = type
        }
        return list
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
        this.$router.go(-1)
      },
      addProductionPlan() {
        this.productForm.productionPlan.push({
          name: null,
          salesPrice: null,
          marketPrice: null
        })
      },
      removeProductionPlan(index) {
        this.productForm.productionPlan.splice(index, 1)
      }
    },
    created() {
      // 获取所有类别
      clazzService.queryAll().then(response => {
        this.allClazz = response.result
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
  .price-plan-box {
    padding: 0 15px 15px 0;
    position: relative;

    .remove-price-plan {
      position: absolute;
      right: 7px;
      top: -10px;
      color: #fff;
      padding: 3px;
      border-radius: 10px;
      background-color: #f1a2a2;
      cursor: pointer;

      &:hover {
        background-color: #da6464;
      }
    }

    form {
      border: 1px dashed #ddd;
      padding: 0 15px 0 0;
      background-color: #fff;
    }

    .add-price-plan {
      height: 148px;
      border: 1px dashed #ddd;
      background-color: #fff;
      cursor: pointer;

      &:hover {
        border: 1px dashed #ccc;
        i {
          color: #ddd;
        }
      }

      i {
        font-size: 70px;
        color: #eee;
      }
    }

    .price-plan-item {
      margin: 10px 0;
    }
  }

</style>
