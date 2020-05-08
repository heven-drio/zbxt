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
          <span>课题添加</span>
        </div>

        <div class="center">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <!-- 课题名称 -->
            <el-form-item label="课题名称" prop="name" style="width:400px">
              <el-input v-model="ruleForm.name" placeholder="请输入课题名称"></el-input>
            </el-form-item>

            <!-- 所处环境 -->
            <el-form-item label="所处环境" prop="name" style="width:400px">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>

            <!-- 活动形式 -->
            <el-form-item label="活动形式">
              <el-input type="textarea" v-model="ruleForm.desc" placeholder="课题的介绍资料"></el-input>
            </el-form-item>

            <el-transfer v-model="value" :data="data"></el-transfer>
          </el-form>

           <!-- 按钮 -->
        <div class="sub-btn">
          <el-row>
             <el-button type="primary" class="btn1" size="mini">提交</el-button>
             <el-button type="info" class="btn2" size="mini">取消</el-button>
          </el-row>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    const generateData = _ => {
      const data = []
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0
        })
      }
      return data
    }
    return {
      ruleForm: {
        name: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      },
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      //   value: '',
      data: generateData(),
      value: [1, 4]
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
.center {
  position: absolute;
  top: 140px;
}
.sub-btn{
  position:relative
}
.btn1{
  position: absolute;
  top: 50px;
  left: 40px;
}
.btn2{
  position: absolute;
  top: 50px;
  left:120px;
}

</style>
