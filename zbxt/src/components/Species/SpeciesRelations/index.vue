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

      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
.select{
  overflow: hidden;
}
.env-input{
  float: left;
   margin: 20px 0 0 40px;
}
.s-main{
  width: 100%;
  height: 100%;
  background: #0f0;
}
</style>
