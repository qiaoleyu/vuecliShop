<template>
  <div class="hello" style="width: 100%;margin: auto">

    <el-container>
      <el-header>

        <!--导航栏-->
        <el-row>
          <el-col :span="10">
            <div class="grid-content bg-purple" style="color: black;font-size: 14px;line-height: 30px">
              <el-dropdown>
          <span class="el-dropdown-link">
            <a class="el-icon-location">地址</a><i class="el-icon-arrow-down el-icon--right"></i>
          </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item >北京</el-dropdown-item>
                  <el-dropdown-item>上海</el-dropdown-item>
                  <el-dropdown-item>广州</el-dropdown-item>
                  <el-dropdown-item>深圳</el-dropdown-item>
                  <el-dropdown-item>杭州</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <router-link type="info" :to="{name:'userLogin'}" style="color:black" v-if="this.uid==null"><a>Hi,请登录</a></router-link>

              <span style="color:black" v-if="this.uid!=null"><a>{{users.uname}}</a></span>
              &nbsp;&nbsp;&nbsp;
              <router-link type="info" :to="{name:'userRegist'}" style="color:black"><a>免费注册</a></router-link>
              &nbsp;&nbsp;&nbsp;
              <span type="info" style="color:black;cursor: pointer"><a @click="logout()">退出登录</a></span>
            </div>
          </el-col>
          <el-col :span="14">
            <div class="grid-content bg-purple-light" style="color: black;line-height: 30px;font-size: 14px">
              <router-link type="info" :to="{name:'index'}" style="color:black;margin-right: 20px"><a>首页</a></router-link>

              <a @click="toOrders()" style="cursor: pointer">我的订单</a>
              <el-dropdown style="margin-left: 10px">
          <span class="el-dropdown-link">
            <a>个人中心</a><i class="el-icon-arrow-down el-icon--left"></i>
          </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item><a @click="toUser()">完善信息</a></el-dropdown-item>

                </el-dropdown-menu>
              </el-dropdown>
              <el-dropdown>
          <span class="el-dropdown-link">
            <a>企业采购</a><i class="el-icon-arrow-down el-icon--left"></i>
          </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>1</el-dropdown-item>
                  <el-dropdown-item>2</el-dropdown-item>
                  <el-dropdown-item>3</el-dropdown-item>
                  <el-dropdown-item>4</el-dropdown-item>
                  <el-dropdown-item>5</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <el-dropdown>
          <span class="el-dropdown-link">
            <a>客户服务</a><i class="el-icon-arrow-down el-icon--left"></i>
          </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>1</el-dropdown-item>
                  <el-dropdown-item>2</el-dropdown-item>
                  <el-dropdown-item>3</el-dropdown-item>
                  <el-dropdown-item>4</el-dropdown-item>
                  <el-dropdown-item>5</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <el-dropdown>
          <span class="el-dropdown-link">
            <a>网站导航</a><i class="el-icon-arrow-down el-icon--left"></i>
          </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>1</el-dropdown-item>
                  <el-dropdown-item>2</el-dropdown-item>
                  <el-dropdown-item>3</el-dropdown-item>
                  <el-dropdown-item>4</el-dropdown-item>
                  <el-dropdown-item>5</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-col>
        </el-row>

      </el-header>
      <el-main>
        <div style="width: 80%;height:400px;margin: auto;margin-top: 150px">
          <el-form :model="users" status-icon :rules="rules" ref="users" class="demo-ruleForm" label-width="100px" style="width: 500px;margin: auto;height: 80px;line-height: 80px;text-align: left">
            <el-form-item label="设置新密码" prop="upassword" style="text-align: left;margin-bottom: 40px">
              <el-input type="password" v-model="users.upassword" name="upassword" autocomplete="off" placeholder="请设置密码"></el-input>
            </el-form-item>
            <el-form-item label="确认新密码" prop="checkPass" style="text-align: left;margin-bottom: 40px">
              <el-input type="password" v-model="users.checkPass" autocomplete="off"  placeholder="请输入确认密码"></el-input>
            </el-form-item>
            <el-from-item>
              <div style="margin: auto;height: 40px;margin-left: 100px">
                <el-button type="primary" round plain style="height: 40px;width: 150px;float: left" plain @click="updatePassword()">确认</el-button>
                <el-button type="primary" round plain style="height: 40px;width: 150px;float: left" plain @click="reference('users')">重置</el-button>
              </div>
            </el-from-item>
          </el-form>
        </div>
      </el-main>

      <el-footer style="height: 120px">

        <!--bottom-->
        <el-row>
          <el-col :span="24"  class="bg-purple">
            <div style="height: 120px;line-height: 20px;font-size: 13px;text-align: center">
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
</template>


<script>
  import axios from 'axios'
  import Cookies from 'js-cookie'
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  export default{
    components: {
        ElButton,
    },
    data(){
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
      return{
        uid:'',
        users:{
          uid:'',
          uname:'',
          upassword:'',
          checkPass:''
        },
        rules: {
          upassword: [{ validator: validatePass, trigger: 'blur' }],
          checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        },
      }
    },mounted(){

      var uid=Cookies.get('uid');
      this.uid=uid;
      if (this.uid!=''){
        axios.get("api/findUserByUid/"+this.uid).then(res=>{
          this.users.uid=res.data.uid;
          this.users.uname=res.data.uname;
        })
      }else {
        alert("请登录")
        this.$router.push('/')
      }
    },
    methods:{
      updatePassword:function () {
        this.$refs['users'].validate((valid) => {
          if (valid) {
            axios.post("api/updatePassword", this.users).then(res => {
              if (res.data == "success") {
//                alert("修改成功")
                this.$message({
                  message: '恭喜你，修改成功',
                  type: 'success'
                });
                this.$router.push('/')
              }
              else {
                this.$message.error('错了哦，修改失败');
                this.$router.push("/modifyPassword")
              }
            })
          } else {
//
            return false;
          }
        })
      },
      toOrders:function () {
        if (this.uid!=null) {
          this.$router.push("/userOrder")
        }else {
          this.$message.error('还没登录哦，请登录后再试');
          this.$router.push("/userLogin")
        }
      },
      toCart:function () {
        if (this.uid!=null) {
          this.$router.push("/userCart")
        }else {
          this.$message.error('还没登录哦，请登录后再试');
          this.$router.push("/userLogin")
        }
      },
      toUser:function () {
        if (this.uid!=null) {
          this.$router.push("/userDetial")
        }else {
          this.$message.error('还没登录哦，请登录后再试');
          this.$router.push("/userLogin")
        }
      },

      reference:function () {
        this.$refs['users'].resetFields();
      },
      logout:function () {
//          alert("hello")
        Cookies.remove('uid'); // fail!
        Cookies.remove('uid', { path: '/' });
        this.users.uname='Hi,请登录'
        this.$router.push("/")
      },
    }
  }
</script>
<style>
  .el-row {
    margin-bottom: 10px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #e5e9f2;
  }
  .bg-purple {
    background: #e5e9f2;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 60px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-header, .el-footer {
    /*background-color: #B3C0D1;*/
    /*color: #333;*/
    /*text-align: center;*/
    /*line-height: 60px;*/
  }

  .el-aside {
    /*background-color: #D3DCE6;*/
    /*color: #333;*/
    /*text-align: center;*/
    /*line-height: 200px;*/
  }

  .el-main {
    /*background-color: #E9EEF3;*/
    /*color: #333;*/
    /*text-align: center;*/
    /*line-height: 160px;*/
  }

  body > .el-container {
    /*margin-bottom: 40px;*/
  }
  .el-main{
    font-weight: bolder;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-dropdown-menu{
    width: 120px;
  }
  .el-dropdown-item{
    width: 100px;
  }
  .router-link{
    color: black;
    font-size: 14px;
  }
  .el-dropdown{
    color: black;
    font-size: 14px;
    width: 100px;
    line-height: 60px;
  }
</style>
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
  a:link {
    color: #000000;
    text-decoration-line: none;
  }
  a:hover{
    color: red;
  }
</style>

