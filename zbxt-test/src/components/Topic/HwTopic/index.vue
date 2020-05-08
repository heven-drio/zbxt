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
          <span>配置练习题</span>
        </div>

        <div class="num">
          <span>习题数量</span> &nbsp;&nbsp;
          <el-input-number
            v-model="num"
            controls-position="right"
            @change="handleChange"
            :min="1"
            :max="100"
          ></el-input-number>
          <el-row>
            <el-button class="c-btn" type="primary">生成</el-button>
          </el-row>
        </div>

        <div class="table">
          <table border="1" cellspacing="0" width="800px">
            <tr>
              <th>物种1</th>
              <th>物种2</th>
              <th>物种3</th>
              <th>物种4</th>
            </tr>
            <tr>
              <td>
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    class="el-option1"
                    width="100px"
                  ></el-option>
                </el-select>
              </td>
              <td>
                  <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    class="el-option1"
                    width="100px"
                  ></el-option>
                </el-select>
              </td>
              <td>
                  <el-select v-model="value" placeholder="请选择">
                 <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    class="el-option1"
                    width="100px"
                  ></el-option>
                </el-select>
              </td>
              <td>
                   <el-select v-model="value" placeholder="请选择" class="el-option1">
                 <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    width="100px"
                  ></el-option>
                </el-select>
              </td>
            </tr>
          </table>

          <!-- 按钮 -->
        <div class="sub-btn">
          <el-row>
             <el-button type="primary" class="btn1" size="mini">生成大图</el-button>
             <el-button type="primary" class="btn2" size="mini">提交</el-button>
             <el-button type="info" class="btn3" size="mini">取消</el-button>
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
    return {
      num: 1,
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
      value: ''
    }
  },
  methods: {
    handleChange (value) {
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
.num {
  position: relative;
}
.num span {
  position: absolute;
  left: 40px;
  top: 30px;
}
.el-input-number {
  position: absolute;
  left: 120px;
  top: 20px;
}
.c-btn {
  position: absolute;
  left: 320px;
  top: 20px;
}
.table {
  position: absolute;
  top: 200px;
  right: 10px;
  left: 40px;
}
.el-option1{

   margin: 10px;
}
.sub-btn{
  position:relative
}
.btn1{
  position: absolute;
  top: 200px;
  left: 0px;
}
.btn2{
  position: absolute;
  top: 200px;
  left: 80px;
}
.btn3{
  position: absolute;
  top: 200px;
  left: 145px;
}
</style>
