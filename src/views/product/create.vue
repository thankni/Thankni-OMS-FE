<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
      <el-row :gutter="10">
        <el-col :span="8">
          <el-form-item label="名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="分类" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="产地" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="10">
        <el-col :span="8">
          <el-form-item label="折扣" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="折扣" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="标签" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <el-form-item label="简介" prop="name">
            <el-input type="textarea" v-model="ruleForm.name" :autosize="{ minRows: 4, maxRows: 6}"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <el-form-item label="价格计划" prop="name" >
            <el-col :span="8" class="price-plan-box">
              <el-form ref="ruleForm" label-width="80px">
                <el-form-item label="名称" prop="name" class="price-plan-item">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="卖价" prop="name" class="price-plan-item">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="市场价" prop="name" class="price-plan-item">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
              </el-form>
              <i class="el-icon-close remove-price-plan"></i>
            </el-col>

            <el-col :span="4" class="price-plan-box">
              <el-row type="flex" justify="center" align="middle" class="add-price-plan">
                <i class="el-icon-plus"></i>
              </el-row>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>


      <el-row :gutter="10">
        <el-col :span="8">
          <el-form-item label="轮播图" prop="name">
            <el-upload
              class="upload-demo"
              ref="upload"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              list-type="picture"
              :auto-upload="false">
              <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
              <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
            </el-upload>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="详情图" prop="region">
            <el-upload
              class="upload-demo"
              ref="upload"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              list-type="picture"
              :auto-upload="false">
              <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
              <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
            </el-upload>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="页脚" prop="name">
            <el-upload
              class="upload-demo"
              ref="upload"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              list-type="picture"
              :auto-upload="false">
              <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
              <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
            </el-upload>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex" justify="center">
        <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
        <el-button @click="resetForm('ruleForm')">返回</el-button>
      </el-row>
    </el-form>

  </div>

</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
          } else {
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
        this.$router.go(-1)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .price-plan-box{
    padding:0 15px 15px 0;
    position: relative;

    .remove-price-plan{
      position: absolute;
      right:7px;
      top:-10px;
      color: #fff;
      padding: 3px;
      border-radius: 10px;
      background-color: #f1a2a2;
      cursor: pointer;

      &:hover{
        background-color: #da6464;
      }
    }

    form{
      border: 1px dashed #ddd;
      padding: 0 15px 0 0;
      background-color: #fff;
    }

    .add-price-plan{
      height:148px;
      border: 1px dashed #ddd;
      background-color: #fff;
      cursor: pointer;

      &:hover{
        border: 1px dashed #ccc;
        i{
          color: #ddd;
        }
      }

      i{
        font-size: 70px;
        color: #eee;
      }
    }

    .price-plan-item{
      margin: 10px 0;
    }
  }

</style>
