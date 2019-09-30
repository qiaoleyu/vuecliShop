<template>
  <div>
    <h1 >{{ msg }}</h1>
    <br>
    <el-form :model="tbSysUser" status-icon :rules="rules" ref="tbSysUser" label-width="100px" style="width: 40%;margin: auto" >
      <el-form-item label="昵称" prop="username" style="text-align: left">
        <el-input type="text" name="username" v-model="tbSysUser.username" style="width: 340px" placeholder="请输入用户名"></el-input>
      </el-form-item><br>
      <el-form-item label="密码" prop="password" style="text-align: left">
        <el-input type="password" password="password" v-model="tbSysUser.password" style="width: 340px" placeholder="请输入密码"></el-input>
      </el-form-item><br>
      <el-row style="margin-right: 80px">
        <el-button type="primary" plain @click="login()">确认</el-button>
        <el-button type="primary" plain @click="toinsetUser()">注册</el-button>
        <el-button type="primary" plain @click="resetForm('tbSysUser')">重置</el-button>
      </el-row>
    </el-form>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
  data () {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'));
      }else{
        return callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.tbSysUser.checkPass !== '') {
          this.$refs.tbSysUser.validateField('checkPass');
        }
        callback();
      }
    };
    return {
      msg: '登录',
      tbSysUser:{
        username:'',
        password:''
      },
      rules: {
        username: [{ validator: checkName, trigger: 'blur' }],
        password: [{ validator: validatePass, trigger: 'blur' }],
      }
    }
  },
    methods: {
      login:function () {
          this.$refs['tbSysUser'].validate((valid)=>{
              if(valid){
//                  alert("submit");
                  //获得用户的数据
                //console.log(this.user.name, this.user.password )

                //发送请求 把参数发给后端（把用户名和密码发给后端 验证是否存在这个账号）
                axios.post("api/login", this.tbSysUser).then(res=>{
                    //接收后端返回来的数据
                  if(res.data!=null&&res.data!=''){
                      alert("登录成功！");
                      this.$router.push("/userlist");
                  }else{
                      alert("登录失败");
                      this.$router.push("/");
                  }
                })
              }else{
                return false;
              }
          })
//        axios.post('http://localhost/login',{name:this.user.name,password:this.user.password}).then(res => {
//          if (res.data!= null) {
//            this.$router.push({name:"userlist"})
//          } else {
//            alert(res.data);
//          }
//        })
      },resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      toinsetUser: function () {
        this.$router.push('userRegist')
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
