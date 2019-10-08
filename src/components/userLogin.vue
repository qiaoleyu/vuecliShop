<template>
  <div style="width: 100%;margin: auto;margin-top: 40px">
    <div style="height: 40px;margin-left: 80px">
      <el-row :gutter="10">
        <el-col :span="6">
          <div class="grid-content"
               style="line-height: 40px;font-weight: bolder;font-size: 20px;color:orangered;font-weight: bold">
            LOGO欢迎登录</div>

        </el-col>

      </el-row>

    </div>
    <hr width="80%">

    <div style="width: 60%;margin: auto;height: 400px;margin-top: 20px;background-color: antiquewhite">

      <br>
      <h1 style="font-weight: bold">{{ msg }}</h1>
    <el-form :model="users" status-icon :rules="rules" ref="users" label-width="40px" style="width: 50%;margin: auto" >
      <el-form-item label="昵称" prop="uName" style="text-align: left;font-weight: bold">
        <el-input type="text" name="uName" v-model="users.uName" style="width: 340px" placeholder="请输入用户名"></el-input>
      </el-form-item><br>
      <el-form-item label="密码" prop="uPassword" style="text-align: left;font-weight: bold" show-password>
        <el-input type="password" password="uPassword" v-model="users.uPassword" style="width: 340px" placeholder="请输入密码"></el-input>
      </el-form-item><br>
      <el-row>
        <el-button type="primary" plain @click="login()">确认</el-button>
        <el-button type="primary" plain @click="toinsetUser()">注册</el-button>
        <el-button type="primary" plain @click="resetForm('users')">重置</el-button>
      </el-row>
    </el-form>
    </div>
    <!--bottom-->
    <div style="width:80%;margin: auto;height: 120px">


      <el-container>
        <el-footer>
          <el-row>
            <el-col :span="24">
              <div style="height: 120px;line-height: 18px;font-size: 12px;text-align: center;margin: auto">
                <ul>
                  <li>
                    <a href="">小米商城 | MIUI | 米家 | 米聊 | 多看 | 游戏 |路由器 | 米粉卡 | 政企服务 | 小米天猫店 | 小米集团隐私政策 | 小米公司儿童信息保护规则 | 小米商城隐私政策 | 小米商城用户协议 | 问题反馈 | 廉正举报 | 诚信合规 | Select Location</a>
                  </li>
                  <li>
                    <a href="">© mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2017]1530-131号</a>
                  </li><br>
                  <li>
                    <a href="">（京）网械平台备字（2018）第00005号 互联网药品信息服务资格证 (京) -非经营性-2014-0090 营业执照 医疗器械公告</a>
                  </li><br>
                  <li>
                    <a href="">增值电信业务许可证  网络食品经营备案（京）【2018】WLSPJYBAHF-12   食品经营许可证</a>
                  </li><br>
                  <li>
                    <a href="">违法和不良信息举报电话：185-0130-1238 知识产权侵权投诉 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</a>
                  </li>
                </ul>
              </div>
            </el-col>
          </el-row>

        </el-footer>
      </el-container>
    </div>
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
        if (this.users.uPassword !== '') {
          this.$refs.users.validateField('uPassword');
        }
        callback();
      }
    };
    return {
      msg: '登录',
      users:{
          uId:'',
        uName:'',
        uPassword:''
      },
      rules: {
        uName: [{ validator: checkName, trigger: 'blur' }],
        uPassword: [{ validator: validatePass, trigger: 'blur' }],
      }
    }
  },
    methods: {
      login:function () {
          this.$refs['users'].validate((valid)=>{
              if(valid){
//                  alert("submit");
                  //获得用户的数据
                //console.log(this.user.name, this.user.password )

                //发送请求 把参数发给后端（把用户名和密码发给后端 验证是否存在这个账号）
                axios.post("api/userLogin", this.users).then(res=>{
                    //接收后端返回来的数据
                  if(res.data!=null&&res.data!=''){
                      alert("登录成功！");
                      this.$router.push("/index");
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
body{
  /*background-color: aliceblue;*/
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a:link {
  color: #000000;
  text-decoration-line: none;
}
a:hover{
  color: red;
}
</style>
