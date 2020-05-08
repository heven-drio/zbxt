<template>
  <div class="species">
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
      <div class="title">
        <span>{{this.ruleForm.name}} 物种关系</span>
      </div>
      <div class="select">
        <div class="env-input">
          所属环境:
          <select
            style="width:300px;height:40px;border-radius:5px;"
            v-model="value"
            placeholder="请选择"
            @change="handledd(value)"
          >
            <!-- <option value="城市生态链" width="200px" @click="handle">城市生态链</option>
            <option value="森林生态链">森林生态链</option>-->
            <option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"

            ></option>
          </select>
        </div>
      </div>

      <div class="s-main">
        <!-- 穿梭框 -->
        <el-transfer
          class="el-transfer1"
          :button-texts="['移除', '加入']"
          v-model="yesData"
          :props="{key: 'id',label: 'name'}"
          :titles="['环境中已有物种', `${this.ruleForm.name}的上层物种`]"
          @change="handleChange"
          @right-check-change="hhhh"
          :data="noData"
          :format="{noChecked: '${checked}',}"
          style
        ></el-transfer>
         <!-- :titles="['环境中已有物种', '蚜虫的上层物种']" -->
      </div>
      <div class="s-btn">
        <el-row class="el-btn">
          <el-button type="primary" class="sub-btn" @click="handle">提交</el-button>
          <el-button class="del-btn">取消</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
// import { SpeciesRelations } from '../../../api/request'
import axios from 'axios'
export default {
  data () {
    return {
      // noData: [
      //   { id: 1, name: '测试1' },
      //   { id: 2, name: '测试2' },
      //   { id: 3, name: '测试3' },
      //   { id: 4, name: '测试4' }
      // ],
      env_id: '',
      foodchain_id: '',
      noData: [],
      NumObj: {},
      value: '',
      options: [{
        value: 1,
        label: '城市生态链'
      },
      {
        value: 2,
        label: '森林生态链'
      }
      ],

      yesData: [1, 3],
      ruleForm: {
        // foodchain_id: Number(1)
        // env_id: ''
        // env_id: ''
      }
      // 注意:key 的字符类型要一致!!!
    }
  },

  mounted () {
    // 读取localStory数据
    var infoStr = localStorage.getItem('relationship')
    var info = JSON.parse(infoStr)
    this.ruleForm = info
    console.log(this.ruleForm)
    // console.log(this.ruleForm.id)
    this.foodchain_id = this.ruleForm.id
    console.log(this.foodchain_id)
  },

  methods: {
    handleChange (value, direction, movedKeys) {
      console.log(value, direction, movedKeys)
      // 可以通过direction回调right/left 来进行操作，right：把数字移到右边，left把数据移到左边
      if (direction === 'right') {

      }
      if (direction === 'left') {
      }
      console.log(direction)
    },
    handle () {

    },
    handledd (value) {
      this.env_id = Number(value)
      console.log(this.env_id)

      // axios({
      //   method: 'post',
      //   url: 'http://192.168.94.60:8000/teacher/foodchain/relation/list/',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   data: {
      //     foodchain_id: this.foodchain_id,
      //     env_id: this.ruleForm.env_id
      //   }
      // }).then(res => {
      //   let arr = ''
      //   arr = res.data.data.env_foodchains
      //   console.log(arr)

      //   for (let i = 0; i < arr.length; i++) {
      //     // console.log(arr[i][1])
      //     // console.log(arr[i][0])
      //     this.noData.id = arr[i][0]
      //     this.noData.name = arr[i][1]
      //     // console.log(this.noData.id)
      //     // console.log(this.noData.name)
      //     this.NumObj = { name: this.noData.name, id: this.noData.id }
      //     // console.log(this.NumObj)
      //     this.noData.push(this.NumObj)
      //   }
      // })
      axios({
        method: 'post',
        url: 'http://192.168.94.60:8000/teacher/foodchain/relation/list/',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          foodchain_id: this.foodchain_id,
          env_id: this.env_id
        }
      }).then(res => {
        // console.log(res)
        let arr = ''
        arr = res.data.data.env_foodchains
        console.log(arr)
        for (let i = 0; i < arr.length; i++) {
          // console.log(arr[i][1])
          // console.log(arr[i][0])
          this.noData.id = arr[i][0]
          this.noData.name = arr[i][1]
          // console.log(this.noData.id)
          // console.log(this.noData.name)
          this.NumObj = { name: this.noData.name, id: this.noData.id }
          // console.log(this.NumObj)
          this.noData.push(this.NumObj)
        }
      })
    },
    hhhh (value) {
      console.log(value)
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
  overflow: hidden;
  height: 20px;
  /* border-bottom: 1px solid black; */
  padding: 20px 0 20px 0;
  margin: 0 0 0 40px;
  /* margin: 0 20px; */
}
.title span {
  float: left;
  padding-bottom: 20px;
  font-size: 24px;
}
.select {
  overflow: hidden;
}
.env-input {
  float: left;
  margin: 20px 0 0 40px;
}
.s-main {
  position: absolute;
  top: 150px;
  left: 0;
  right: 0;
  bottom: 0;
}
.el-transfer1 {
  position: absolute;
  left: 40px;
}
.s-btn {
  position: absolute;
}
.sub-btn {
  position: relative;
  top: 340px;
  left: 30px;
}
.del-btn {
  position: relative;
  top: 300px;
  left: 100px;
}
</style>
