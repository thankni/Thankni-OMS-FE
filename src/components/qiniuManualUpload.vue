<template>
  <el-upload
    :ref="p_ref"
    :data="uploadData"
    :action="p_action"
    :file-list="p_fileList"
    :list-type="p_listType"
    :auto-upload="p_autoUpload"

    :before-upload="beforeUpload"
    :on-remove="onRemove"
    :on-success="onSuccess">
    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
    <!--<el-button style="margin-left: 10px;" size="small" type="success" @click="$submitUpload()">上传到服务器</el-button>-->
  </el-upload>
</template>

<script>
  import serverConfig from '../config/server'
//  import ImageService from '../services/image'
  import appInfo from '../config'
//  let imageUploadService = new ImageService()
  export default {
    data() {
      return {
        serverConfig: serverConfig,
        uploadData: {}
      }
    },
    props: {
      p_bucket: {
        type: String,
        default: appInfo.qiniuImageBucket
      },
      p_ref: {
        type: String,
        required: true
      },
      p_data: {
        type: Object
      },
      p_action: {
        type: String,
        default: serverConfig.QINIU_HB
      },
      p_fileList: {
        type: Array
      },
      p_listType: {
        type: String,
        default: 'picture-card'
      },
      p_autoUpload: {
        type: Boolean,
        default: false
      },
      p_emitBeforeUpload: {
        type: Function
      },
      p_emitOnSuccess: {
        type: Function
      },
      p_emitOnRemove: {
        type: Function
      },
      p_emitOnError: {
        type: Function
      }
    },

    methods: {
      $submitUpload() {
        debugger
        this.$refs[this.p_ref].submit()
      },
      beforeUpload(file) {
        debugger
        // this.p_emitBeforeUpload ? this.$emit(this.p_emitBeforeUpload, file) : ''
//        let putPolicy = {
//          bucket: appInfo.qiniuImageBucket + ':' + new Date().getTime(), // 存储空间名 : 保存后的文件名（key）
//          deadline: Math.round(new Date().getTime()) + 30 // token 失效时间
//        }
//        return new Promise((resolve, reject) => {
//          imageUploadService.getUploadToken(putPolicy).then(response => {
//            this.p_data.token = response.result.token
//            resolve(true) // 继续上传
//          }).catch(err => {
//            this.p_emitOnError ? this.$emit(this.p_emitOnError, { err, file }) : this.$emit(this.p_ref + 'OnError', { err, file })
//            reject(error) // 停止上传
//          })
//        })
        return new Promise((resolve, reject) => {
          this.uploadData = {token: 'I7F2D0oeSz9LanpHH_1P0YuI87XJzNspv0qDWaPo:BacvWePTRixWruqb-TFOhArMMWg=:eyJzY29wZSI6InRoYW5rbmkiLCJkZWFkbGluZSI6MTUwNTMxOTEzNX0='}
          resolve(true)
        })
      },
      onError(err, file, fileList) {
        debugger
        this.p_emitOnError ? this.$emit(this.p_emitOnError, { err, file }) : this.$emit(this.p_ref + 'OnError', { err, file, fileList })
      },
      onSuccess(response, file, fileList) {
        debugger
//        this.p_emitOnSuccess ? this.$emit(this.p_emitOnSuccess, { response, file, fileList }) :
        this.$emit(this.p_ref + 'OnSuccess', { response, file, fileList })
      },
      onRemove(file, fileList) {
        debugger
        this.p_emitOnRemove ? this.$emit(this.p_emitOnRemove, { file, fileList }) : this.$emit(this.p_ref + 'OnRemove', { file, fileList })
//        let imageDeleteService = new ImageService({
//          baseURL: serverConfig.QINIU_RS,
//          headers: {
//            'Content-Type': 'application/x-www-form-urlencoded',
//            'Authorization': 'QBox I7F2D0oeSz9LanpHH_1P0YuI87XJzNspv0qDWaPo:MzIzOTlmZThhZWQ1NWE5ODA5ODBmYmJiYjI1NmI4NWMyOGJjNTU0Mw=='
//          }
//        })
//        const entry = window.btoa((this.p_bucket ? this.p_bucket :appInfo.qiniuImageBucket) + ':' + file.response.key)
//        imageDeleteService.deleteFileFromQiniu(entry).then(response => {
//        }).catch(error => {
//          error
//        })
        debugger
      }
    },
    created() {
      debugger
    }
  }
</script>
<style lang="less">
  body {
    margin: 0px;
    background-color: #eee;
  }
</style>
