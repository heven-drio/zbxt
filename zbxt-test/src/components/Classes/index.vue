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
      <!-- 按钮 -->
      <router-link to="/home/classes/addclasses">
        <el-button class="el-row-button1" type="info" size="small">添加班级</el-button>
      </router-link>
      <router-link to="/home/classes/editclasses">
        <el-button class="el-row-button2" type="info" size="small" @click="edit(Row)">编辑班级</el-button>
      </router-link>
      <el-button class="el-row-button3" type="info" size="small" @click="del(Id)">删除班级</el-button>
    </div>

    <div class="table">
      <el-table :data="tableData" highlight-current-row border style="width: 100%">
        <!-- 单选 -->
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

        <!-- 班级简称 -->
        <el-table-column align="center" label="班级简称">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-button type="text">{{ scope.row.class_num }}</el-button>
            </div>
          </template>
        </el-table-column>

        <!-- 年级 -->
        <el-table-column align="center" label="年级">
          <template slot-scope="scope">
            <span>{{ scope.row.grade }}</span>
          </template>
        </el-table-column>

        <!-- 班级 -->
        <el-table-column align="center" label="班级">
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>

        <!-- 小组数量 -->
        <el-table-column align="center" label="小组数量">
          <template slot-scope="scope">
            <span>{{ scope.row.groups_count }}</span>
          </template>
        </el-table-column>

        <!-- 添加日期 -->
        <el-table-column align="center" label="添加日期">
          <template slot-scope="scope">
            <span>{{ scope.row.add_date.substring(0,10) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { classList } from '../../api/request'
export default {
  data () {
    return {
      Row: '',
      Id: '',
      tableData: [],
      checked: ''
    }
  },
  mounted () {
    classList().then(res => {
      this.tableData = res.data.data.class
      console.log(this.tableData)
      // console.log(res.data.data.class)
      console.log(res)
    })
  },
  methods: {
    select (index, row) {
      this.checked = !this.checked
      this.Row = row

      axios({
        method: 'post',
        url: 'http://192.168.94.60:8000/teacher/class/get/',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: {
          id: Number(row.id)
        }
      }).then(res => {
        console.log(res)
      })
    },

    // 删除
    del (ID) {
      console.log(this.Row.id)
      axios({
        method: 'post',
        url: 'http://192.168.94.60:8000/teacher/class/del/',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        // withCredentials: true,

        data: {
          id: Number(this.Row.id)
        }
      }).then(res => {
        console.log(res)
        window.location.reload(true)
      })
    },

    // 编辑
    edit (Row) {
      // 存储信息
      var str = JSON.stringify(Row)
      localStorage.setItem('editClass', str)
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
  left: 215px;
}
/* .el-table {
  position: absolute;
  top: 100px;
  right: 10px;
  left: 10px;
} */
.table{
 position: absolute;
  top: 100px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 20px;
}
</style>
