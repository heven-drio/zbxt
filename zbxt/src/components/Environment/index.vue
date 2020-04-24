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

      <el-row>
        <!-- <el-button class="el-row-button1" type="info" size="small" @click="handleAddEnvironment">添加环境</el-button> -->
         <router-link to="/home/environment/addEnvironment">
             <el-button class="el-row-button1" type="info" size="small">添加环境</el-button>
         </router-link>
        <el-button class="el-row-button2" type="info" size="small" @click="handleEditEnvironment">编辑环境</el-button>
        <el-button class="el-row-button3" type="info" size="small">删除环境</el-button>
      </el-row>
       <router-view />
      <!-- 表单 -->
      <el-table :data="tableData" border>
        <el-table-column prop="ischeck" label="" width="40"  align="center">
          <input type="radio" @click="isAreaShow">
        </el-table-column>
        <el-table-column prop="id" label="ID" width="50"  align="center"></el-table-column>
        <el-table-column prop="name" label="环境名" width="200"  align="center"></el-table-column>
        <el-table-column prop="introduction" label="环境介绍"  width="400" align="center"></el-table-column>
        <el-table-column prop="addDate" label="添加日期" width="180"  align="center"></el-table-column>
        <el-table-column prop="Whether" label="环境物种是否已备齐"  align="center" width="180"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {

      // tableData: [
      //   {
      //     id: 0,
      //     name: '城市生态链',
      //     introduction: '城市里的生态食物链',
      //     addDate: '2016-05-03',
      //     Whether: '已备齐'
      //   },
      //   {
      //     ischeck: true,
      //     id: 0,
      //     name: '城市生态链',
      //     introduction: '城市里的生态食物链',
      //     addDate: '2016-05-03',
      //     Whether: '已备齐'
      //   },
      //   {
      //     id: 0,
      //     name: '城市生态链',
      //     introduction: '城市里的生态食物链',
      //     addDate: '2016-05-03',
      //     Whether: '已备齐'
      //   },
      //   {
      //     id: 0,
      //     name: '城市生态链',
      //     introduction: '城市里的生态食物链',
      //     addDate: '2016-05-03',
      //     Whether: '已备齐'
      //   },
      //   {
      //     id: 0,
      //     name: '城市生态链',
      //     introduction: '城市里的生态食物链',
      //     addDate: '2016-05-03',
      //     Whether: '已备齐'
      //   },
      //   {
      //     id: 0,
      //     name: '城市生态链',
      //     introduction: '城市里的生态食物链',
      //     addDate: '2016-05-03',
      //     Whether: '已备齐'
      //   },
      //   {
      //     id: 0,
      //     name: '城市生态链',
      //     introduction: '城市里的生态食物链',
      //     addDate: '2016-05-03',
      //     Whether: '已备齐'
      //   },
      //   {
      //     id: 0,
      //     name: '城市生态链',
      //     introduction: '城市里的生态食物链',
      //     addDate: '2016-05-03',
      //     Whether: '已备齐'
      //   },
      //   {
      //     id: 0,
      //     name: '城市生态链',
      //     introduction: '城市里的生态食物链',
      //     addDate: '2016-05-03',
      //     Whether: '已备齐'
      //   },
      //   {
      //     id: 0,
      //     name: '城市生态链',
      //     introduction: '城市里的生态食物链',
      //     addDate: '2016-05-03',
      //     Whether: '已备齐'
      //   },
      //   {
      //     id: 0,
      //     name: '城市生态链',
      //     introduction: '城市里的生态食物链',
      //     addDate: '2016-05-03',
      //     Whether: '已备齐'
      //   }
      // ]
      tableData: []
    }
  },

  mounted () {
    this.getData()
  },

  methods: {
    isAreaShow () {
      console.log(length)
    },

    handleEditEnvironment () {
      this.$router.push('/home/environment/editEnvironment')
    },

    getData () {
      axios.get('../../../data.json').then(Response => {
        console.log(Response.data.data)
        this.tableData = Response.data.data
        console.log(this.tableData)
      }, Response => {
        console.log('error')
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
