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

      <div class="add-main">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <!-- 物种名称 -->
          <el-form-item label="环境名称" prop="name" style="width:500px">
          <el-input v-model="ruleForm.name" placeholder="环境的名称"></el-input>
        </el-form-item>

          <!-- 物种详细介绍 -->
          <el-form-item label="物种介绍" prop="desc" style="width:500px">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>

          <!-- 所属环境 -->
          <el-form-item label="所属环境" prop="type">
            <el-checkbox-group v-model="ruleForm.type">
              <el-checkbox label="森林生态链" name="type"></el-checkbox>
              <el-checkbox label="城市生态链" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <!-- 物种图片 -->
          <el-form-item label="物种图片" prop="type">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              v-model="ruleForm.pic"
              list-type="picture"
            >
              <!-- :file-list="rules.pic" -->
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>

          <!-- 按钮 -->
          <el-form-item>
            <el-button type="primary" @click="submitForm">提交</el-button>
            <!-- <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button> -->
            <el-button >取消</el-button>
            <!-- <el-button @click="resetForm('ruleForm')">取消</el-button> -->
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      ruleForm: {
        name: '',
        desc: '',
        pic: 'b64encode image',
        belong_envs: '1,2'
      },
      // fileList: [
      //   {
      //     name: 'food.jpeg',
      //     url:
      //       'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      //   },
      //   {
      //     name: 'food2.jpeg',
      //     url:
      //       'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      //   }
      // ],
      rules: {
        name: [
          { required: true, message: '请输入物种名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],

        desc: [{ required: true, message: '请输入物种详细介绍', trigger: 'blur' }],
        pic: [
          {
            name: 'food2.jpeg',
            url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      const formData = new FormData()
      for (var key in this.ruleForm) {
        formData.append(key, this.ruleForm[key])
      }
      console.log(formData)
      axios({
        method: 'post',
        url: 'http://192.168.94.60:8000/teacher/foodchain/add/',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: {
          name: this.ruleForm.name,
          desc: this.ruleForm.desc
        }
      }).then(res => {
        console.log(res)
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    }
  }
}
</script>

<style scoped>
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
  /* margin: 0 0 0 80px; */
}
.add-main {
  position: absolute;
  top: 80px;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
