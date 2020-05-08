
<template class="HomePage">
  <el-container>
    <!-- 头部  -->
    <el-header>
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="bg-purple bg-size"></div>
          <!-- 插入图片logo -->
        </el-col>
        <el-col :span="16">
          <div class="grid-content title">闸北实验自然课堂管理系统</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content signOut">退出登录</div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>物种环境
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="handleEnvironment">环境</el-menu-item>

              <el-menu-item index="1-2" @click="handleSpecies">物种</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>课题管理
            </template>

            <el-menu-item-group>
              <el-menu-item index="2-1" @click="handleClasses">班级</el-menu-item>
              <el-menu-item index="2-2" @click="handleClassroom">课堂</el-menu-item>
              <el-menu-item index="2-3" @click="handleTopic">课题</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>课堂操作
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1" @click="handleStudentSub">学生提交</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <!-- 主题显示部分 -->
      <el-main>
        <router-view />
      </el-main>
    </el-container>

    <!-- 底部 -->
    <!-- <el-footer>Footer</el-footer> -->
  </el-container>
</template>

<script>

export default {
  data () {
    return {}
  },
  methods: {
    handleEnvironment () {
      this.$router.push('/home/environment')
    },
    handleSpecies () {
      this.$router.push('/home/species')
    },
    handleClasses () {
      this.$router.push('/home/classes')
    },
    handleClassroom () {
      this.$router.push('/home/classroom')
    },
    handleTopic () {
      this.$router.push('/home/topic')
    },
    handleStudentSub () {
      this.$router.push('/home/studentSub')
    }
  }
}
</script>

<style scoped>
.el-header {
  background-color: #333;
  color: #fff;
  /* text-align: center; */
  line-height: 60px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  position: absolute;
  left: 0;
  bottom: 60px;
  top: 60px;
}

.el-main {
  background-color: #eee;
  color: #333;
  text-align: center;
  position: absolute;
  left: 200px;
  right: 0;
  top: 60px;
  bottom: 60px;
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
  line-height: 60px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  color: #ccc;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.bg-size {
  height: 50px;
  width: 50px;
  background: #fff;
  margin: 5px 0;
  border-radius: 10px;
}
el-menu-item-group {
  margin: 0;
  padding: 0;
  text-decoration: none；;
}
.el-menu-item {
  text-decoration: none;
}
.el-menu {
  /* height: 100%; */
  position: absolute;
  top: 0;
  left: 0;
  bottom: 10px;
  right: 0;
}
.title {
  position: absolute;
  top: 0;
  left: 100px;
}
.signOut {
  position: absolute;
  top: 0;
  right: 50px;
}
</style>
