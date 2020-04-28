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
      </el-row>
      <!-- 表格 -->
      <div class="table">
      <el-table
       :data="tableData"
        highlight-current-row
        border
        style="width: 100%">

        <!-- id -->
        <el-table-column align="center"
          label="ID">
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>

        <!-- 环境名称 -->
        <el-table-column align="center"
          label="环境名">
          <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
                <el-button type="text">{{ scope.row.name }}</el-button>
              </div>
          </template>
        </el-table-column>

        <!-- 环境介绍 -->
        <el-table-column align="center"
          label="环境介绍">
          <template slot-scope="scope">
            <span>{{ scope.row.desc }}</span>
          </template>
        </el-table-column>

        <!-- 添加日期 -->
        <el-table-column align="center"
          label="添加日期">
          <template slot-scope="scope">
            <span>{{ scope.row.add_date }}</span>
          </template>
        </el-table-column>

        <!-- 物种环境是否已备齐 -->
        <el-table-column align="center"
          label="物种环境是否已备齐">
          <template slot-scope="scope">
            <span>{{ scope.row.is_ready }}</span>
          </template>
        </el-table-column>

        <!-- 操作 -->
        <el-table-column align="center"
          label="操作"
          fixed="right"
          width="200">
          <template slot-scope="scope">
             <router-link to="/home/environment/EditEnvironment">
              <el-button align="center"
              size="mini"
              icon="el-icon-edit"
              @click="handleEdit(scope.$index,scope.row)"
              >编辑
            </el-button>
        </router-link>
            <el-button align="center"
              size="mini"
              type="danger"
              icon="el-icon-delete"
              @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { getTest } from '../../api/request'
export default {
  data () {
    return {
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
  mounted () {
    getTest().then(res => {
      this.tableData = res.data.data.env
      console.log(this.tableData)
    })
  },
  methods: {
    handleDelete (index, row) {
      console.log(index, row)
      console.log(row.id)
      axios({
        method: 'post',
        url: 'http://192.168.94.60:8000/teacher/env/del/',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        // withCredentials: true,
        data: {
          env_id: Number(row.id)

        }
      }).then((res) => {
        // console.log(this.ruleForm.id)
        console.log(res)
      })
    },
    handleEdit (index, row) {
      console.log(row.id)
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
  left: 25px;
}
.el-row-button2 {
  position: absolute;
  top: 15px;
  left: 120px;
}
.el-row-button3 {
  position: absolute;
  top: 15px;
  left: 205px;
}
.el-table {
  width: 100%;
  position: absolute;
  top: 55px;
  left: 25px;
  right: 100px;
  padding: 0;
  margin: 0 10px;
}
</style>
