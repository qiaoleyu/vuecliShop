<template>
  <div class="hello">
    <el-button type="primary" plain @click="login()">登录</el-button>
    <el-button type="primary" plain @click="regist()">注册</el-button>
    <el-button type="primary" plain @click="logout()">退出登录</el-button>

  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to 小米 首页'
    }
  },methods:{
     login:function () {
       this.$router.push("/userLogin")
     },
    regist:function () {
      this.$router.push("/userRegist")
    },
    logout:function () {
      this.$router.push("/userLogin")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
