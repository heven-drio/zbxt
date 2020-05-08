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

    <div class="center-main">
      <div class="ac-main">
        <div class="title">
          <span>添加班级</span>
        </div>

        <div class="a-t">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <!-- 班级简称 -->
            <el-form-item label="班级简称" prop="name" style="width:400px">
              <el-input v-model="ruleForm.name" placeholder="班级的简称"></el-input>
            </el-form-item>

            <!-- 年级 -->
            <el-form-item label="年级" class="nj">
              <el-input-number
                v-model="grade"
                controls-position="right"
                @change="handleChange"
                :min="1"
                :max="100"
              ></el-input-number>
            </el-form-item>

            <!-- 班级 -->
            <el-form-item label="班级" class="bj">
              <el-input-number
                v-model="class_num"
                controls-position="right"
                @change="handleChange"
                :min="1"
                :max="100"
              ></el-input-number>
            </el-form-item>

            <!-- 小组数量 -->
            <el-form-item label="小组数量" class="xz">
              <el-input-number
                v-model="groups_count"
                controls-position="right"
                @change="handleChange"
                :min="1"
                :max="100"
              ></el-input-number>
            </el-form-item>
          </el-form>
        </div>

        <!-- 按钮 -->
        <div class="sub-btn">
          <el-row>
            <router-link to="/home/classes">
              <el-button type="primary" class="btn1" size="mini" @click="sub">提交</el-button>
            </router-link>
            <el-button type="info" class="btn2" size="mini">取消</el-button>
          </el-row>
        </div>
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
        name: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ]
      },
      grade: 1,
      class_num: 1,
      groups_count: 1
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    },
    sub () {
      axios({
        method: 'post',
        url: 'http://192.168.94.60:8000/teacher/class/add/',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: {
          name: this.ruleForm.name,
          grade: this.grade,
          class_num: this.class_num,
          groups_count: this.groups_count
        }
      }).then(res => {
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
.title {
  /* position: absolute;
  left: 40px;
  top: 40px; */
  border-bottom: 1px solid black;
  margin: 100px 40px 0 40px;
}
.title span {
  font-size: 30px;
  position: absolute;
  left: 40px;
  top: 40px;
  /* border-bottom: 1px solid black; */
}
.demo-ruleForm {
  position: absolute;
  top: 140px;
  left: 10px;
}
.nj {
  position: absolute;
  left: 0;
}
.bj {
  position: absolute;
  left: 0;
  top: 130px;
}
.xz {
  position: absolute;
  left: 0;
  top: 200px;
}
.sub-btn {
  position: relative;
}
.btn1 {
  position: absolute;
  top: 320px;
  left: 100px;
}
.btn2 {
  position: absolute;
  top: 320px;
  left: 180px;
}
</style>
