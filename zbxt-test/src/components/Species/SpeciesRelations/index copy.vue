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

    <!-- 标题 -->
    <div class="center-main">
      <div class="title">
        <span>蚜虫 物种关系</span>
      </div>
      <div class="select">
        <div class="env-input">
          所属环境:
          <select style="width:300px;height:40px;border-radius:5px;">
            <option value="城市生态链" width="200px">城市生态链</option>
            <option value="森林生态链">森林生态链</option>
          </select>
        </div>
      </div>

      <div class="s-main">
        <el-transfer
        class="el-transfer1"
        :button-texts="['移除', '加入']"
          v-model="yesData"
          :props="{key: 'id',label: 'name'}"
          :titles="['环境中已有物种', '蚜虫得上层物种']"
          @change="handleChange"
          :data="noData"
          :format="{noChecked: '${checked}',}"
          style=""
></el-transfer>
      </div>
      <div class="s-btn">
      <el-row class="el-btn">
        <el-button type="primary" class="sub-btn">提交</el-button>
        <el-button class="del-btn">取消</el-button>
      </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      noData: [
        { id: 1, name: '测试1' },
        { id: 2, name: '测试2' },
        { id: 3, name: '测试3' },
        { id: 4, name: '测试4' }
      ],
      yesData: [1, 3]
      // 注意:key 的字符类型要一致!!!
    }
  },

  methods: {
    handleChange (value, direction, movedKeys) {
      console.log(value, direction, movedKeys)
      // 可以通过direction回调right/left 来进行操作，right：把数字移到右边，left把数据移到左边
      if (direction === 'right') {
      }
      if (direction === 'left') {
      }
    }
  }
}
</script>

<style  scoped>
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
 .el-transfer .el-stransfer-panel{
  width:230px!important;
}
.s-main .el-transfer1 .el-checkbox__input {
  margin: 0 0px 0 -30px !important;
}
.el-transfer1 {
  position: absolute;
  left: 40px;
}
.s-btn{
  position: absolute;
}
.sub-btn{
  position: relative;
  top: 340px;
  left: 30px;
}
.del-btn{
  position: relative;
  top: 300px;
  left: 100px
}
</style>
