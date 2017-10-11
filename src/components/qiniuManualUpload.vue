<template>
  <el-upload
    :ref="p_ref"
    :data="uploadData"
    :action="p_action"
    :file-list="p_fileList"
    :list-type="p_listType"
    :auto-upload="p_autoUpload"

    :before-upload="beforeUpload"
    :on-change="onChange"
    :on-remove="onRemove"
    :on-error="onError"
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
        uploadData: {},
        fileList: []
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
      p_maxSize: {
        type: Number,
        default: 3
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
        default: true
      },
      p_emitBeforeUpload: {
        type: String
      },
      p_emitOnSuccess: {
        type: String
      },
      p_emitOnRemove: {
        type: String
      },
      p_emitOnError: {
        type: String
      }
    },

    methods: {
      $getFileList() {
        return this.fileList
      },
      beforeUpload(file) {
        const isImg = file.type === 'image/jpeg' || file.type === 'image/png'
        const isLt2M = file.size / 1024 / 1024 < this.p_maxSize
        if (!isImg) {
          this.$message.error('仅能上传 JPG、PNG 格式!')
          return false
        }
        if (!isLt2M) {
          this.$message.error('图片大小不能超过 ' + this.p_maxSize + 'MB!')
          return false
        }
//        this.p_emitBeforeUpload ? this.$emit(this.p_emitBeforeUpload, file) : ''
//        let key = new Date().getTime() + '_' + file.name
//        let options = {
//          bucket: appInfo.qiniuImageBucket + ':' + key, // 存储空间名 : 保存后的文件名（key）
//          deadline: Math.round(new Date().getTime()) + 30 // token 失效时间
//        }
//        return new Promise((resolve, reject) => {
//          imageUploadService.getUploadToken(options).then(response => {
//            this.p_data = {
//              token: response.result.token,
//              key: key
//            }
//            resolve(true) // 继续上传
//          }).catch(err => {
//            this.p_emitOnError ? this.$emit(this.p_emitOnError, { err, file }) : this.$emit(this.p_ref + 'OnError', { err, file })
//            reject(error) // 停止上传
//          })
//        })
        return new Promise((resolve, reject) => {
          this.uploadData = {
            key: '8.png',
            token: 'I7F2D0oeSz9LanpHH_1P0YuI87XJzNspv0qDWaPo:gCoP_TCDL3plQBaRXjKVl3kydh0=:eyJzY29wZSI6InRoYW5rbmkiLCJkZWFkbGluZSI6MTUwNTQ5NzczOH0='}
          resolve(true)
        })
      },
      onError(err, file, fileList) {
        this.$notify.error({
          title: err.status,
          message: err.message,
          duration: 1500
        })
      },
      onSuccess(response, file, fileList) {},
      onRemove(file, fileList) {
        this._afterChange(file, fileList)
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
      },
      onChange(file, fileList) {
        this._afterChange(file, fileList)
      },
      _afterChange(file, fileList) {
        let result = []
        for (let i = 0, l = fileList.length; i < l; i++) {
          if (fileList[i].response || fileList[i].id) {
            result.push({
              id: fileList[i].id || null,
              url: fileList[i].id ? fileList[i].url : serverConfig.IMAGE + '/' + fileList[i].response.key
            })
          }
        }
        this.fileList = result
      }
    }
  }
</script>
<style lang="less">
  body {
    margin: 0px;
    background-color: #eee;
  }
</style>
