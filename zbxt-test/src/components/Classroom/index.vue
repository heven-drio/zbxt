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
      <div class="head">
        <!-- 输入框 -->
        <div class="input">
          <div class="input1">
            <span>课堂搜索</span>&nbsp;
            <el-input v-model="input" placeholder="请输入内容" style="width:250px"></el-input>
          </div>

          <div class="input2">
            <span>所属课题</span>&nbsp;
            <el-input v-model="oinput" placeholder="请输入内容" style="width:250px"></el-input>
          </div>
          <div class="input3">
            <span>所属环境</span>&nbsp;
            <el-input v-model="cinput" placeholder="请输入内容" style="width:250px"></el-input>
          </div>
        </div>

        <div class="btn">
          <el-row>
            <el-button type="primary" class="btn1">搜索</el-button>
            <el-button type="info" class="btn2">清除</el-button>
          </el-row>
        </div>
      </div>

      <div class="center">
        <div class="el-row-btn">
          <el-row>
            <!-- 增加课堂 -->
            <router-link to="/home/classroom/addclassroom">
              <el-button class="el-row-button1" type="info" size="small">增加课堂</el-button>
            </router-link>
            <!-- 编辑课堂 -->
            <router-link to="/home/classroom/editclassroom">
              <el-button class="el-row-button2" type="info" size="small">编辑课堂</el-button>
            </router-link>
            <!-- 删除课堂 -->
              <el-button class="el-row-button3" type="info" size="small">删除课堂</el-button>
          </el-row>
        </div>
        <!-- 表格 -->
        <div class="table">
          <el-table
       :data="tableData"
        highlight-current-row
        border
        style="width: 100%">
          <!-- 单选 -->
        <el-table-column align="center">
          <template>
            <input type="radio">
          </template>
        </el-table-column>

        <!-- id -->
        <el-table-column align="center"
          label="ID">
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>

        <!-- 课堂名 -->
        <el-table-column align="center"
          label="课堂名">
          <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
                <el-button type="text">{{ scope.row.name }}</el-button>
              </div>
          </template>
        </el-table-column>

        <!-- 所属环境 -->
        <el-table-column align="center"
          label="所属环境">
          <template slot-scope="scope">
            <span>{{ scope.row.desc }}</span>
          </template>
        </el-table-column>

        <!-- 开课班级 -->
        <el-table-column align="center"
          label="开课班级">
          <template slot-scope="scope">
            <span>{{ scope.row.desc }}</span>
          </template>
        </el-table-column>

        <!-- 开课课题 -->
        <el-table-column align="center"
          label="开课课题">
          <template slot-scope="scope">
            <span>{{ scope.row.desc }}</span>
          </template>
        </el-table-column>

        <!-- 状态 -->
        <el-table-column align="center"
          label="状态">
          <template slot-scope="scope">
            <span>{{ scope.row.desc }}</span>
          </template>
        </el-table-column>

        <!-- 添加日期 -->
        <el-table-column align="center"
          label="添加日期">
          <template slot-scope="scope">
            <span>{{ scope.row.desc }}</span>
          </template>
        </el-table-column>

        <!-- 操作 -->
        <el-table-column align="center"
          label="操作">
          <template slot-scope="scope">
            <span>{{ scope.row.desc }}</span>
          </template>
        </el-table-column>
        </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { classRoomList } from '../../api/request'
export default {
  data () {
    return {
      input: '',
      oinput: '',
      cinput: '',
      tableData: []
    }
  },
  mounted () {
    classRoomList().then(res => {
      // // console.log(res.data.data.foodchains)
      // this.tableData = res.data.data.foodchains
      // console.log(this.tableData)
      console.log(res)
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
.head {
  height: 100px;
  width: 100%;
  background: #eee;
  border-radius: 5px;
  margin: 20px 0 0 0px;
}
.input {
  position: relative;
}
.input1 {
  position: absolute;
  top: 30px;
  left: 40px;
}
.input2 {
  position: absolute;
  top: 30px;
  left: 390px;
}
.input3 {
  position: absolute;
  top: 30px;
  left: 740px;
}
.btn {
  position: relative;
}
.btn1 {
  position: absolute;
  left: 1100px;
  top: 30px;
}
.btn2 {
  position: absolute;
  left: 1180px;
  top: 30px;
}
.el-row-btn {
  position: relative;
}
.el-row-button1 {
  position: absolute;
  left: 40px;
  top: 20px;
}
.el-row-button2 {
  position: absolute;
  left: 150px;
  top: 20px;
}
.el-row-button3 {
  position: absolute;
  top: 20px;

  left: 260px;
}
.el-row-button4 {
  position: absolute;
  top: 20px;

  left: 385px;
}
.table {
  position: absolute;
  top:200px;
  right:10px;
  left:40px;
}
</style>
