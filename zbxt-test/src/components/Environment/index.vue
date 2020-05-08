<template class="environment">
  <div>
    <!-- logo -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <i class="el-icon-s-home">&nbsp;&nbsp;&nbsp;&nbsp;首页</i>
        </div>
      </el-col>
    </el-row>
    <!-- 按钮 -->
    <div class="center-main">
      <!-- 添加按钮 -->
      <el-row>
        <router-link to="/home/environment/addEnvironment">
          <el-button class="el-row-button1" type="info" size="small">添加环境</el-button>
        </router-link>
        <!-- <router-link to="/home/environment/EditEnvironment"> -->
        <el-button class="el-row-button2" type="info" size="small" @click="edit(Row)" :a="Row">编辑环境</el-button>
        <!-- </router-link> -->

        <el-button class="el-row-button3" type="info" size="small" @click="del(Id)">删除环境</el-button>
      </el-row>
      <!-- 表格 -->
      <div class="table">
        <el-table :data="tableData" highlight-current-row border style="width: 100%">
          <el-table-column align="center">
            <template slot-scope="scope">
              <input
                type="radio"
                v-model="checked"
                class="input-radio"
                v-on:click="select(scope.$index,scope.row)"
              />
            </template>
          </el-table-column>

          <!-- id -->
          <el-table-column align="center" label="ID">
            <template slot-scope="scope">
              <span>{{ scope.row.id }}</span>
            </template>
          </el-table-column>

          <!-- 环境名称 -->
          <el-table-column align="center" label="环境名">
            <template slot-scope="scope">
              <div slot="reference" class="name-wrapper">
                <el-button type="text">{{ scope.row.name }}</el-button>
              </div>
            </template>
          </el-table-column>

          <!-- 环境介绍 -->
          <el-table-column align="center" label="环境介绍">
            <template slot-scope="scope">
              <span>{{ scope.row.desc }}</span>
            </template>
          </el-table-column>

          <!-- 添加日期 -->
          <el-table-column align="center" label="添加日期">
            <template slot-scope="scope">

              <span>{{ scope.row.add_date.substring(0,10) }}</span>
            </template>
          </el-table-column>

          <!-- 物种环境是否已备齐 -->
          <el-table-column align="center" label="物种环境是否已备齐">
            <template slot-scope="scope">
              <span>{{ scope.row.is_ready }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <router-view />
    </div>
    <!-- <EditEnvironment :a="Row"></EditEnvironment> -->
  </div>
</template>

<script>
import axios from 'axios'
import { getTest } from '../../api/request'
// import EditEnvironment from './EditEnvironment/index'

export default {
  data () {
    return {
      Row: '',
      Id: '',
      checked: '',
      ruleForm: {
        id: '',
        name: '',
        desc: '',
        is_ready: '',
        pic: 'pic not ready'
      },
      rules: {
        name: [
          { required: true, message: '请输入环境名', trigger: 'blur' },
          { min: 2, max: 7, message: '长度在 2 到 7 个字符', trigger: 'blur' }
        ]
      },
      tableData: [],
      search: '',
      dialogVisible: false,
      dialogUpdate: false,
      pageSize: 5,
      currentPage: 1,
      total: 0,
      disablePage: false
    }
  },
  // components: {
  //   EditEnvironment
  // },
  mounted () {
    getTest().then(res => {
      this.tableData = res.data.data.env
      console.log(this.tableData)
    })
  },

  methods: {

    select (index, row) {
      // console.log(row.id)
      console.log(this.ID = row.id)
      console.log(this.ID)
      this.checked = !this.checked
      // console.log(this.checked)
      // console.log(row)
      this.Row = row
      console.log(this.Row)

      axios({
        method: 'post',
        url: 'http://192.168.94.60:8000/teacher/env/get/',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: {
          id: Number(row.id)
        }
      }).then(res => {
        console.log(res.data.data.env)
      })
    },

    // 删除
    del (ID) {
      console.log(this.Row.id)
      axios({
        method: 'post',
        url: 'http://192.168.94.60:8000/teacher/env/del/',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        // withCredentials: true,

        data: {
          env_id: Number(this.Row.id)
        }
      }).then(res => {
        console.log(res)
        window.location.reload(true)
      })
    },
    edit (Row) {
      // console.log(Row)
      this.$router.push({
        path: '/home/environment/EditEnvironment'
      })
      // 存储信息
      var str = JSON.stringify(Row)
      localStorage.setItem('editEn', str)
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
.el-row-button1 {
  position: absolute;
  top: 15px;
  left: 20px;
}
.el-row-button2 {
  position: absolute;
  top: 15px;
  left: 120px;
}
.el-row-button3 {
  position: absolute;
  top: 15px;
  left: 210px;
}
/* .el-table {
  width: 100%;
  position: absolute;
  top: 55px;
  left: 25px;
  right: 100px;
  padding: 0;
  margin: 0 10px;
} */
.input-radio {
  width: 10px;
}
.table{
 position: absolute;
  top: 80px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 20px;
}
</style>
