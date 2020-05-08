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
      <div class="search">
        <div class="s-main">
          <div class="w-input">
            物种名称搜索:
            <input style="width:300px;height:40px;border-radius:5px;" />
          </div>
          <div class="env-input">
            所属环境:
            <select style="width:300px;height:40px;border-radius:5px;">
              <option value="城市生态链" width="200px">城市生态链</option>
              <option value="森林生态链">森林生态链</option>
            </select>
          </div>
          <div class="w-btn">
            <el-button type="primary">搜索</el-button>
            <el-button>清除</el-button>
          </div>
        </div>
      </div>

      <div class="w-main">
        <!-- 添加按钮 -->
      <el-row>
        <router-link to="/home/species/addspecies">
          <el-button class="el-row-button1" type="info" size="small" >添加物种</el-button>
        </router-link>
        <router-link to="/home/species/editspecies">
          <el-button class="el-row-button2" type="info" size="small" @click="edit(Row)">编辑物种</el-button>
        </router-link>
        <router-link to="/home/species/speciesrelations">
          <el-button class="el-row-button3" type="info" size="small" @click="relationship(Row)">物种关系</el-button>
        </router-link>
          <el-button class="el-row-button4" type="info" size="small" @click="del(Id)">删除物种</el-button>
      </el-row>

      <!-- 表格 -->
      <div class="w-table">
       <!-- :data="tableData" -->
         <el-table
          :data="tableData"
        highlight-current-row
        border
        style="width: 100%">

        <!-- 单选 -->
        <el-table-column  align="center">
          <template slot-scope="scope">
              <input type="radio"  v-model="checked" class="input-radio" v-on:click="select(scope.$index,scope.row)">
          </template>
       </el-table-column>

           <!-- id -->
        <el-table-column align="center"
          label="ID">
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>

        <!-- 物种名称 -->
        <el-table-column align="center"
          label="物种名称">
          <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
                <el-button type="text">{{ scope.row.name }}</el-button>
              </div>
          </template>
        </el-table-column>

        <!-- 物种介绍 -->
        <el-table-column align="center"
          label="物种介绍">
          <template slot-scope="scope">
            <span class="text">{{ scope.row.desc.slice(3) }}</span>
          </template>
        </el-table-column>

        <!-- 添加日期 -->
        <el-table-column align="center"
          label="添加日期">
          <template slot-scope="scope">
            <span>{{ scope.row.create_date.substring(0,10) }}</span>
          </template>
        </el-table-column>

        </el-table>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { foodchain } from '../../api/request'
export default {
  data () {
    return {
      Row: '',
      Id: '',
      ID: '',
      tableData: [],
      ruleForm: {
        create_date: '',
        desc: '',
        id: '',
        img_path: '',
        name: ''
      },
      checked: ''

    }
  },
  mounted () {
    foodchain().then(res => {
      // console.log(res.data.data.foodchains)
      this.tableData = res.data.data.foodchains
      console.log(this.tableData)
    })
  },

  methods: {

    // 获取id
    select (index, row) {
      this.checked = !this.checked
      this.Row = row
      console.log(this.checked)

      axios({
        method: 'post',
        url: 'http://192.168.94.60:8000/teacher/foodchain/get/',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        // withCredentials: true,
        data: {
          foodchain_id: Number(row.id)

        }
      }).then((res) => {
        // console.log(this.ruleForm.id)
        console.log(res)
      })
    },

    // 删除事件
    del (Id) {
      console.log(this.Row.id)
      axios({
        method: 'post',
        url: 'http://192.168.94.60:8000/teacher/foodchain/del/',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        // withCredentials: true,

        data: {
          foodchain_id: Number(this.Row.id)
        }
      }).then((res) => {
        // console.log(this.ruleForm.id)
        console.log(res)
        window.location.reload(true)
      })
    },

    // 编辑事件
    edit (Row) {
      console.log(Row)
      // 存储信息
      var str1 = JSON.stringify(Row)
      localStorage.setItem('editSpecies', str1)
    },

    // 物种关系
    relationship (Row) {
      console.log(Row)
      // 存储信息
      var str1 = JSON.stringify(Row)
      localStorage.setItem('relationship', str1)
    }
  }

}
</script>

<style scoped>
.el-col {
  border-radius: 4px;
}
.el-row {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 10px;
}
.bg-purple-dark {
  background: #eee;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
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
.search {
  height: 100px;
  width: 100%;
  background: #eee;
  position: absolute;
  right: 0;
  top: 15px;
  /* left: 30px; */
  border-radius: 10px;
}
.s-main {
  margin-top: 30px;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center;     /* 垂直居中 */
  /* justify-content: space-around; */
}
.w-input,.env-input,.w-btn{
margin: 0 20px;
}
.w-main{
  position: absolute;
  top: 130px;
  bottom: 0;
  left: 0;
  right: 0;
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
  left: 220px;
}
.el-row-button4 {
  position: absolute;
  top: 15px;
  left: 320px;
}
.w-table{
   position: absolute;
  top: 60px;
  bottom: 0;
  left: 0;
  right: 0;
  /* margin: 0 20px; */
}
.text{
  width: 100px;
    white-space:nowrap;       /* 使文本不可换行 */
    overflow:hidden;          /* 隐藏溢出部分 */
    text-overflow:ellipsis;   /* 显示省略符号来代表被隐藏的文本 */
}
.input-radio{
  width: 10px;
}
</style>
