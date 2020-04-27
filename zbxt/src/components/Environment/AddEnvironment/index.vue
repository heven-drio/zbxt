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
      <p>添加环境</p>
      <i class="inline"></i>

      <!-- 添加数据列表 -->
      <div class="add-el-form">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="环境名称" prop="name">
            <el-input v-model="ruleForm.name" placeholder="环境的名称"></el-input>
          </el-form-item>

          <el-form-item label="环境介绍" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc" placeholder="环境的介绍，可选输入。"></el-input>
          </el-form-item>
          <div class="check">
             <el-checkbox @click="handleA(index)"  type="is_ready">物种已配齐</el-checkbox>
            <!-- <input type="is_ready" />物种已配齐 -->
          </div>
        </el-form>

        <!-- 添加图片信息 -->
        <div class="updata">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            list-type="picture"
          >
            <div class="title-button">
              <h5>环境背景图片</h5>
              <el-button size="mini" type="primary" class="el-title-button">点击上传</el-button>
            </div>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>

        <!-- 提交按钮 -->
        <el-form class="sub-button">
          <el-form-item class="submit">
            <el-button type="primary" class="right-button" @click="save">提交</el-button>
            <!-- <el-button type="primary" @click="submitForm('ruleForm')" class="right-button" @click="addData">提交</el-button> -->
            <el-button @click="resetForm" class="left-button">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { addList } from '../../../api/request'
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

      rules: {
        name: [
          { required: true, message: '请输入环境名称', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ]
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
      ]
    }
  },
  methods: {
    save () {
      // console.log(this.ruleForm.name)
      console.log(this.dataList.push(this.ruleForm))
      console.log(this.dataList)
      this.$emit('save', this.dataList)
      // console.log(this.save)
    },

    resetForm () {
      this.$router.push('/home/environment')
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    }
  },
  mounted () {
    var str = ''
    addList().then(res => {
      console.log(res)
      // JSON.parse(str)
      // str = this.res
      str = this.dataList
      console.log(JSON.stringify(str))
      // str = this.JSON.stringify(str)
      // console.log(str)
    })
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
</style>
