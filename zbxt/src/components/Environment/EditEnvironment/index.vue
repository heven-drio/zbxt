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

      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <!-- id -->
  <el-form-item label="id" prop="id">
    <el-input v-model="ruleForm.id"></el-input>
  </el-form-item>

  <el-form-item label="环境名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>

  <el-form-item label="环境介绍" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>

  <el-form-item label="是否准备好" prop="pic">
    <el-input v-model="ruleForm.pic"></el-input>
  </el-form-item>

  <el-form-item label="是否准备好" prop="is_ready">
    <el-input v-model="ruleForm.is_ready"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="handleEdit">立即更新</el-button>

    <router-link to="/home/environment">
      <el-button>取消</el-button>
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
