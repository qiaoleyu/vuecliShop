<template>
  <div>
    <div style="width: 100%;color:orangered;margin-top: 20px">
      <span style="margin-right: 800px;font-size: 20px">LOGO欢迎注册</span>
      <span style="margin-right:-10px">
        已有账号？<router-link :to="{name:'userLogin'}" style="color:red">请登录></router-link>
      </span>
    </div>
    <hr style="width: 80%">
    <h1 >{{ msg }}</h1>

    <el-form :model="users" status-icon :rules="rules" ref="users" label-width="100px"
             style="width: 40%;margin: auto" class="demo-ruleForm"
             >
      <!--Content-Type="multipart/form-data"-->
      <el-form-item label="邮箱" prop="uemail" style="text-align: left" >
        <el-input type="text" v-model="users.uemail" name="uemail" placeholder="请填写邮箱地址"></el-input>
      </el-form-item>
      <el-form-item label="用户名" prop="uname" style="text-align: left">
        <el-input type="text" v-model="users.uname" name="uname" placeholder="请输入确认密码"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code" style="text-align: left">
        <el-input type="text" v-model="code" placeholder="请输入验证码" onme="code" style="width: 280px"></el-input>
        <!--<el-container id='app'>-->
        <!-- :disabled="isDisabled"-->
        <el-button round type="primary" plain :class="{disabled: !this.canClick}" @click="sendMail()">{{content}}</el-button>
          <!--<el-button type="primary" plain @click="sendMail()">发送</el-button>-->
        <!--</el-container>-->
      </el-form-item>
      <el-form-item label="密码" prop="upassword" style="text-align: left">
        <el-input type="password" v-model="users.upassword" name="upassword" autocomplete="off" placeholder="请设置密码"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass" style="text-align: left">
        <el-input type="password" v-model="users.checkPass" autocomplete="off"  placeholder="请输入确认密码"></el-input>
      </el-form-item>

      <el-form-item label="联系方式" prop="utell" style="text-align: left" >
        <el-input type="text" v-model="users.utell" name="utell" placeholder="请填写联系方式"></el-input>
      </el-form-item>


      <el-form-item>
        <el-button round type="primary" plain @click="add()">注册</el-button>
        <el-button round type="primary" plain @click="resetForm()">重置</el-button>
        <el-button round type="primary" plain @click="back()">返回</el-button>
      </el-form-item>
    </el-form>

    <!--bottom-->
    <div style="width:90%;margin: auto;height: 120px">


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

<style>
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
<script>

  import axios from 'axios'
  import ElRadio from "../../node_modules/element-ui/packages/radio/src/radio";
import ElFooter from "../../node_modules/element-ui/packages/footer/src/main";
import ElContainer from "../../node_modules/element-ui/packages/container/src/main";

  export default{
    components: {
      ElContainer,
      ElFooter,
      ElRadio},
    data(){
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('邮箱不能为空'));
        }else{
            return callback();
        }
      }
      var checkUname = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }else{
          return callback();
        }
      }
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.users.checkPass !== '') {
            this.$refs.users.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.users.upassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
//      var checkPic = (rule, value, callback) => {
//        if (!this.$refs.users) {
//          return callback(new Error('用户名不能为空'));
//        }
//      };
//      var checkUaddress = (rule, value, callback) => {
//        if (!value) {
//          return callback(new Error('家庭住址不能为空'));
//        }else{
//            return callback();
//        }
//      };
      var checkUtell = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('联系方式不能为空'));
        }else{
          return callback();
        }
      };
      var checkCode = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('验证码不能为空'));
        }else{
          return callback();
        }
      };
      return{
        msg: '注册',
        file:'',
        users:{
            uid:'',
            uemail:'',
            upassword:'',
           checkPass:'',
            utell:'',
            uname:''
          },
          rules: {
            uemail: [{ validator: checkName, trigger: 'blur' }],
            uname:[{ validator: checkUname, trigger: 'blur' }],
          upassword: [{ validator: validatePass, trigger: 'blur' }],
          checkPass: [{ validator: validatePass2, trigger: 'blur' }],
//          pic: [{ validator: checkPic, trigger: 'blur' }],
//          uAddress: [{ validator: checkUaddress, trigger: 'blur' }],
          utell: [{ validator: checkUtell, trigger: 'blur' }],
//         code:[{validator:checkCode,trigger:'blur'}]

        },
//        验证码失效时间控制
        code:'',
        content:'发送验证码',
        totalTime:60,
        canClick:true
      };
    },
    methods:{
      sendMail:function () {

        if (!this.canClick) return  //改动的是这两行代码
        this.canClick = false
        this.content = this.totalTime + 's后重新发送'
        let clock = window.setInterval(() => {
          this.totalTime--
          this.content = this.totalTime + 's后重新发送'
          if (this.totalTime < 0) {
            window.clearInterval(clock)
            this.content = '重新发送'
            this.totalTime = 60
            this.canClick = true  //这里重新开启
          }
        },1000)
        axios.post("/api/sendEmail",this.users).then(res=>{
          if(res.data!=''){
            this.$message({
              message: '验证码发送成功，欢迎注册！',
              type: 'success'
            });
//              alert(res.data)
          }else{
//              alert("发送失败！")
            this.$message.error('错了哦，验证码发送失败');
          }
        })
      },
        back:function(){
            this.$router.push("/");
        },

        add:function(){
          this.$refs['users'].validate((valid) => {
            if(valid){
              console.log(this.users)
             axios.post("api/userRegister",{users:this.users,code:this.code}).then(res=>{
               console.log(this.users)
               console.log(this.code)
               if(res.data=="success"){
//                   alert("注册成功，欢迎进行登录")
                 if(res.data!='') {
                   this.$message({
                     message: '注册成功，欢迎进行登录！',
                     type: 'success'
                   })
                 }
                 this.$router.push("/userLogin")
               }else{
//                 alert(res.data)
                 this.$message.error(res.data);
               }
             })
            }else{
//              console.log('error submit!!');
              return false;
            }
          })
        },
      resetForm() {
        this.$refs['users'].resetFields();
      }
    }
  }

</script>
