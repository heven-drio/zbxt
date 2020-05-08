<template>
  <div>
    <!-- logo -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <i class="el-icon-s-home">&nbsp;&nbsp;&nbsp;&nbsp;首页</i>
        </div>
      </el-col>
    </el-row>

    <!-- 标题 -->
   <div class="center-main">

     <div class="title">
        <span>物种添加</span>
      </div>

      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <!-- id -->
  <el-form-item label="id" prop="id"  style="width:500px">
    <el-input v-model="ruleForm.id"></el-input>
  </el-form-item>

  <!-- <el-form-item label="环境名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item> -->

  <el-form-item label="环境名称" prop="name" style="width:500px">
          <el-input v-model="ruleForm.name" placeholder="环境的名称"></el-input>
        </el-form-item>
<!--
  <el-form-item label="环境介绍" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item> -->

<el-form-item label="环境介绍" prop="desc" style="width:500px">
          <el-input type="textarea" v-model="ruleForm.desc" placeholder="环境的介绍说明，可选输入"></el-input>
        </el-form-item>

  <!-- <el-form-item label="是否准备好" prop="pic">
    <el-input v-model="ruleForm.pic"></el-input>
  </el-form-item> -->

   <!-- 物种是否已备齐 -->
        <el-form-item class="a-el-checkbox">
          <el-checkbox v-model="checked" class="a-el-checkbox2">物种已备齐</el-checkbox>
        </el-form-item>

  <!-- <el-form-item label="是否准备好" prop="is_ready">
    <el-input v-model="ruleForm.is_ready"></el-input>
  </el-form-item> -->

    <el-form-item label="环境名称" prop="name" style="width:500px" class="uploda">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            list-type="picture"
          >
            <el-button type="info" class="el-button1">上传</el-button>
            <div slot="tip" class="el-upload__tip">注：上传图片必须符合jpg/png格式，大小限制在？K以内</div>
            <div slot="tip" class="el-upload__tip2" >上传图片预览</div>
          </el-upload>
        </el-form-item>

  <!-- <el-form-item>
    <el-button type="primary" @click="handleEdit">立即更新</el-button>

    <router-link to="/home/environment">
      <el-button>取消</el-button>
    </router-link>

  </el-form-item> -->

  <el-form-item class="e-btn">
            <router-link to="/home/environment">
              <el-button type="primary" @click="submitForm" class="e-btn-1" size="mini">提交</el-button>
            </router-link>
            <router-link to="/home/environment">
              <el-button class="e-btn-3" >取消</el-button>
            </router-link>
          </el-form-item>
</el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      dataList: [],
      str: '',
      ruleForm: {
        name: '',
        desc: '',
        is_ready: '',
        pic: ''
      },
      fileList: [
        {
          name: 'food.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        },
        {
          name: 'food2.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }
      ],

      rules: {
        name: [
          { required: true, message: '请输入环境名称', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    handleEdit () {
      const formData = new FormData()
      for (var key in this.ruleForm) {
        formData.append(key, this.ruleForm[key])
      }
      console.log(formData)
      axios({
        method: 'post',
        url: 'http://192.168.94.60:8000/teacher/env/edit/',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: {
          id: Number(this.ruleForm.id),
          name: this.ruleForm.name,
          desc: this.ruleForm.desc,
          is_ready: 0,
          pic: 'pic not ready'

        }
      }).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>
/* .el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #eee;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.el-row {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 10px;
}
.el-icon-s-home {
  position: absolute;
  top: 0;
  left: 0;
  line-height: 36px;
  font-size: 14px;
}
.center-main {
  position: absolute;
  top: 36px;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  margin: 0 10px 10px 10px;
}
p {
  font: 24px black;
  position: absolute;
  top: 20px;
  left: 40px;
}
.inline {
  display: inline-block;
  height: 1px;
  background: #eee;
  width: 800px;
  position: absolute;
  top: 100px;
  left: 40px;
}
.add-el-form {
  position: absolute;
  top: 120px;
  left: 20px;
}
.check {
  position: absolute;
  left: 25px;
}
.submit {
  position: absolute;
  top: 170px;
  left: 25px;
}
.updata {
  position: absolute;
  top: 200px;
}
.title-button {
  display: flex;
}
.el-title-button {
  height: 30px;
  width: 100px;
  margin: 15px 10px 0 10px;
}
.sub-button {
  position: absolute;
  top: 350px;
}
.right-button {
  position: absolute;
  top: 0px;
  left: 0px;
}
.left-button {
  position: absolute;
  top: 0px;
  left: 80px;
}
.title {
  overflow: hidden;
  height: 20px;
  border-bottom: 1px solid black;
  padding: 20px 0 20px 0;
  margin: 0 0 0 80px;
}
.title span {
  float: left;
  padding-bottom: 20px;
  font-size: 24px;

}
<
.a-el-checkbox {
  position: absolute;
  left: 80px;
  top: 107px;
}
.a-el-checkbox2 {
  position: absolute;
  left: -150px;
}
.upload-demo{
  position: absolute;
  left: 0;
   left: -75px;
}
.updata{
  position: absolute;
  left: 0;
   left: -100px;
}
.el-button1{
  width: 100px;
  height: 30px;
  line-height: 5px;
}
.e-btn{
  position: relative;
  left: -80px;
}
.e-btn-1{
  position: absolute;
  left: 0;
  top: 300px;
  width: 80px;

}
.e-btn-3{
  position: absolute;
  left: 110px;
  top: 300px;
  line-height: 5px;
  width: 80px;
} */
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #eee;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.el-row {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 10px;
}
.el-icon-s-home {
  position: absolute;
  top: 0;
  left: 0;
  line-height: 36px;
  font-size: 14px;
}
.center-main {
  position: absolute;
  top: 30px;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  margin: 0 10px 10px 10px;
}
p {
  font: 24px black;
  position: absolute;
  top: 20px;
  left: 40px;
}
.inline {
  display: inline-block;
  height: 1px;
  background: #eee;
  width: 800px;
  position: absolute;
  top: 100px;
  left: 40px;
}
.add-el-form {
  position: absolute;
  top: 120px;
  left: 20px;
}
.check {
  position: absolute;
  left: 25px;
}
.submit {
  position: absolute;
  top: 170px;
  left: 25px;
}
.updata {
  position: absolute;
  top: 200px;
}
.title-button {
  display: flex;
}
.el-title-button {
  height: 30px;
  width: 100px;
  margin: 15px 10px 0 10px;
}
.sub-button {
  position: absolute;
  top: 350px;
}
.right-button {
  position: absolute;
  top: 0px;
  left: 0px;
}
.left-button {
  position: absolute;
  top: 0px;
  left: 80px;
}
.demo-ruleForm {
  position: absolute;
  top: 100px;
}
.title {
  overflow: hidden;
  height: 20px;
  border-bottom: 1px solid black;
  padding: 20px 0 20px 0;
  margin: 0 0 0 80px;
}
.title span {
  float: left;
  padding-bottom: 20px;
  font-size: 24px;
  /* margin: 0 0 0 80px; */
}
.a-el-checkbox {
  position: absolute;
  left: 80px;
  top: 107px;
}
.a-el-checkbox2 {
  position: absolute;
  left: -150px;
}
.upload-demo{
  position: absolute;
  left: 0;
   left: -75px;
}
.updata{
  position: absolute;
  left: 0;
   left: -100px;
}
.el-button1{
  width: 100px;
  height: 30px;
  line-height: 5px;
}
.e-btn{
  position: relative;
  left: -80px;
}
.e-btn-1{
  position: absolute;
  left: 0;
  top: 300px;
  width: 80px;

}
.e-btn-3{
  position: absolute;
  left: 110px;
  top: 300px;
  line-height: 5px;
  width: 80px;
}
</style>
