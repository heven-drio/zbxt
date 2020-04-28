<template>
  <div>
      <el-form :inline="true" class="demo-form-inline">
          <el-form-item>
            <el-button
              class="el-icon-refresh"
              type="text"
              @click="refreshData">刷新
            </el-button>
          </el-form-item>
          <el-form-item>
            <el-button
              class="el-icon-circle-plus-outline"
              type="text"
              @click="dialogVisible = true">添加
            </el-button>
          </el-form-item>
      </el-form>
      <el-table
        :data="tableData"
        highlight-current-row
        border
        style="width: 100%">
        <el-table-column
          label="ID">
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>

        <!-- 环境名称 -->
        <el-table-column
          label="环境名">
          <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
                <el-button type="text">{{ scope.row.name }}</el-button>
              </div>
          </template>
        </el-table-column>

        <!-- 环境介绍 -->
        <el-table-column
          label="环境介绍">
          <template slot-scope="scope">
            <span>{{ scope.row.desc }}</span>
          </template>
        </el-table-column>
        <!-- 添加日期 -->
        <el-table-column
          label="添加日期">
          <template slot-scope="scope">
            <span>{{ scope.row.add_date }}</span>
          </template>
        </el-table-column>
        <!-- 物种环境是否已备齐 -->
        <el-table-column
          label="物种环境是否已备齐">
          <template slot-scope="scope">
            <span>{{ scope.row.is_ready }}</span>
          </template>
        </el-table-column>
        <!-- 操作 -->
        <el-table-column
          label="操作"
          fixed="right"
          width="200">
          <template slot-scope="scope">
            <el-button
              size="mini"
              icon="el-icon-edit"
              @click="handleEdit(scope.$index, scope.row)">编辑
            </el-button>
            <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
              @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm" size="medium">
        <!-- 添加 -->
        <el-dialog
          title="添加"
          :append-to-body='true'
          :visible.sync="dialogVisible"
          width="80%"
          :before-close="handleClose">
          <!-- <el-input type="hidden" v-model="ruleForm.userId"/> -->
          <el-form-item label="环境名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="环境介绍" prop="desc">
            <el-input v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <!-- 是否准备完成 -->
          <el-form-item label="是否准备完成" prop="is_ready">
            <el-input v-model="ruleForm.is_ready"></el-input>
          </el-form-item>
          <!-- pic -->
          <el-form-item label="是否完成" prop="is_ready">
            <el-input v-model="ruleForm.is_ready"></el-input>
          </el-form-item>
          <!-- <el-form-item label="住址" prop="userAddress">
            <el-input v-model="ruleForm.userAddress"></el-input>
          </el-form-item> -->

          <span slot="footer" class="dialog-footer">
            <el-button @click="cancel()" size="medium">取 消</el-button>
            <el-button @click="addUser()" type="primary" size="medium">确 定</el-button>
          </span>
        </el-dialog>
      </el-form>

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm" size="medium">
      <el-dialog
        title="编辑"
        :append-to-body='true'
        :visible.sync="dialogUpdate"
        width="80%"
        :before-close="handleClose">
        <el-input type="hidden" v-model="ruleForm.userId"/>
        <el-form-item label="时间" prop="userDate">
          <el-date-picker type="datetime" placeholder="选择日期" v-model="ruleForm.userDate" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="住址" prop="userAddress">
          <el-input v-model="ruleForm.userAddress"></el-input>
        </el-form-item>

        <span slot="footer" class="dialog-footer">
            <el-button @click="cancel()" size="medium">取 消</el-button>
            <el-button @click="updateUser()" type="primary" size="medium">确 定</el-button>
          </span>
      </el-dialog>
    </el-form>
      <br>
      <!-- <div class="pages">
        <el-pagination
          background
          :disabled = "disablePage"
          :current-page.sync="currentPage"
          small
          layout="prev, pager, next"
          :page-size="pageSize"
          :total="total"
          @current-change="handleCurrentChange">
        </el-pagination>
      </div> -->
  </div>
</template>

<script>
import axios from 'axios'
import { getTest, addUser } from '../../api/request'

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
        // userAddress: [
        //   { required: true, message: '请输入住址', trigger: 'blur' },
        //   { min: 5, message: '长度大于 5 个字符', trigger: 'blur' }
        // ]
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

    addUser().then(res => {
      // var str = ''
      // userDate: this.ruleForm.userDate
      // var str = this.tableData.push(this.ruleForm)
      // str = this.tableData
      // // str = this.tableData
      // console.log(str)

      console.log(res)
      // this.push(this.ruleForm)
    })
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
      this.dialogUpdate = true
      this.ruleForm = Object.assign({}, row) // 这句是关键！！！
      axios({
        method: 'post',
        url: 'http://192.168.94.60:8000/teacher/env/edit/',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        // withCredentials: true,
        data: {
          // env_id: Number(row.id)
          name: this.row.name

        }
      }).then((res) => {
        // console.log(this.ruleForm.id)
        console.log(res)
      })
    },
    handleDelete (index, row) {
      console.log(index, row)
      console.log(row.id)
      // this.$confirm('删除操作, 是否继续?', '提示', {
      //   confirmButtonText: '确定',
      //   cancelButtonText: '取消',
      //   type: 'warning'
      // }).then(() => {
      //   const postData = this.qs.stringify({
      //     userId: row.userId
      //   })
      //     this.axios({
      //       method: 'post',
      //       url: '/delete',
      //       data: postData
      //     }).then(response => {
      //       this.getPages()
      //       this.currentPage = 1
      //       this.axios.post('/page').then(response => {
      //         this.tableData = response.data
      //       }).catch(error => {
      //         console.log(error)
      //       })
      //       this.$message({
      //         type: 'success',
      //         message: '删除成功!'
      //       })
      //       console.log(response)
      //     }).catch(error => {
      //       console.log(error)
      //     })
      //   }).catch(() => {
      //     this.$message({
      //       type: 'info',
      //       message: '已取消删除'
      //     })
      //   })
      // },
      // handleClose (done) {
      //   this.$confirm('确认关闭？')
      //     .then(_ => {
      //       done()
      //     })
      //     .catch(_ => {})
      // },
      // handleCurrentChange () {
      //   console.log(`当前页: ${this.currentPage}`)
      //   const postData = this.qs.stringify({
      //     page: this.currentPage
      //   })
      //   this.axios({
      //     method: 'post',
      //     url: '/page',
      //     data: postData
      //   }).then(response => {
      //     this.tableData = response.data
      //   }).catch(error => {
      //     console.log(error)
      //   })

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

    cancel () {
      this.dialogUpdate = false
      this.dialogVisible = false
      this.emptyUserData()
    },
    emptyUserData () {
      this.ruleForm = {
        userName: '',
        userDate: '',
        userAddress: ''
      }
    },

    // 动态添加数据
    addUser () {
      // console.log(this.tableData.push(this.ruleForm))
      // console.log(this.tableData)

      const formData = new FormData()
      for (var key in this.ruleForm) {
        formData.append(key, this.ruleForm[key])
      }
      console.log(formData)
      axios({
        method: 'post',
        url: 'http://192.168.94.60:8000/teacher/env/add/',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: {
          name: this.ruleForm.name,
          desc: this.ruleForm.desc,
          is_ready: 0,
          pic: 'pic not ready'

        }
      }).then((res) => {
        console.log(res)
      })
    },

    updateUser () {
      const postData = this.qs.stringify({
        userId: this.ruleForm.userId,
        userDate: this.ruleForm.userDate,
        userName: this.ruleForm.userName,
        userAddress: this.ruleForm.userAddress
      })
      this.axios({
        method: 'post',
        url: '/update',
        data: postData
      }).then(response => {
        this.handleCurrentChange()
        this.cancel()
        this.$message({
          type: 'success',
          message: '更新成功!'
        })
        console.log(response)
      }).catch(error => {
        this.$message({
          type: 'success',
          message: '更新失败!'
        })
        console.log(error)
      })
    },
    onSearch () {
      const postData = this.qs.stringify({
        userName: this.search
      })
      this.axios({
        method: 'post',
        url: '/ListByName',
        data: postData
      }).then(response => {
        this.tableData = response.data
        this.disablePage = true
      }).catch(error => {
        console.log(error)
      })
    },
    getPages () {
      this.axios.post('/rows').then(response => {
        this.total = response.data
      }).catch(error => {
        console.log(error)
      })
    },
    refreshData () {
      location.reload()
    }
  },
  created () {
    /* this.axios.get('static/user.json').then(response =>
            {
                this.tableData = response.data.tableData;
                this.total = response.data.tableData.length;
                // console.log(JSON.parse(JSON.stringify(response.data))['tableData'])
            }); */
    this.axios.post('/page').then(response => {
      this.tableData = response.data
    }).catch(error => {
      console.log(error)
    })

    this.axios.post('/rows').then(response => {
      this.total = response.data
    }).catch(error => {
      console.log(error)
    })
  }
}
</script>
<style scoped>
  .search_name{
    width: 200px;
  }
  .pages{
    margin: 0px;
    padding: 0px;
    text-align: right;
  }
</style>
