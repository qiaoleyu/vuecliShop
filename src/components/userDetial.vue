<template>
  <div class="hello" style="width: 100%;margin: auto">
    <!--<el-button type="primary" plain @click="login()">登录</el-button>-->
    <!--<el-button type="primary" plain @click="regist()">注册</el-button>-->
    <!--<el-button type="primary" plain @click="logout()">退出登录</el-button>-->

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
              <router-link type="info" :to="{name:'userLogin'}" style="color:black"><a>{{users.uname}}</a></router-link>
              &nbsp;&nbsp;&nbsp;
              <router-link type="info" :to="{name:'userRegist'}" style="color:black"><a>免费注册</a></router-link>
              &nbsp;&nbsp;&nbsp;
              <span type="info" style="color:black;cursor: pointer"><a @click="logout()">退出登录</a></span>
            </div>
          </el-col>
          <el-col :span="14">
            <div class="grid-content bg-purple-light" style="color: black;line-height: 30px;font-size: 14px">
              <router-link type="info" :to="{name:'index'}" style="color:black;margin-right: 20px"><a>首页</a></router-link>

              <router-link type="info" :to="{name:'userOrder'}" style="color: black"><a>我的订单</a></router-link>
              <el-dropdown style="margin-left: 10px">
          <span class="el-dropdown-link">
            <a>个人中心</a><i class="el-icon-arrow-down el-icon--left"></i>
          </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item><router-link :to="{name:'userDetial'}">完善信息</router-link></el-dropdown-item>
                  <el-dropdown-item><router-link :to="{name:'modifyPassword'}">修改密码</router-link></el-dropdown-item>
                  <!--<el-dropdown-item>修改信息</el-dropdown-item>-->
                  <!--<el-dropdown-item>3</el-dropdown-item>-->
                  <!--<el-dropdown-item>4</el-dropdown-item>-->
                  <!--<el-dropdown-item>5</el-dropdown-item>-->
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
        <div style="width: 80%;height:600px;margin: auto;margin-top: 50px">
           <!-- <div style="width: 500px;margin: auto;height: 80px;line-height: 80px;text-align: right">
              <div style="width: 90px;float: left;margin-right: 10px">头像:</div>
              <div style="width: 300px;float: left"><input type="file" @change="getFile($event)"></div>
              <div style="width: 100px;float: left"><el-button plain style="height: 40px" @click="upload()">上传</el-button></div>
              &lt;!&ndash;<el-radio-group size="small"></el-radio-group>&ndash;&gt;
              &lt;!&ndash;<div style="margin: 20px;"></div>&ndash;&gt;
            </div>-->

            <el-form label-width="100px" style="width: 500px;margin: auto;height: 80px;line-height: 80px;text-align: left">
              <el-form-item label="用户名:">
                <el-input class="arrow" name="uname" v-model="users.uname" ></el-input>
              </el-form-item>
              <el-form-item label="头像:">
                <el-upload
                  class="avatar-uploader"
                  action="api/upload"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="users.upic" :src="users.upic" name="upic" width="80px" height="80px" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="性别:">
                <el-radio v-model="users.usex" :label="true" name="usex">男</el-radio>
                <el-radio v-model="users.usex" :label="false" name="usex">女</el-radio>
              </el-form-item>
              <el-form-item label="注册时间:">
                <el-date-picker name="createTime" v-model="users.createTime" type="date" placeholder="选择日期" style="width: 400px"></el-date-picker>
              </el-form-item>
              <el-form-item label="联系方式:">
                <el-input name="utell" v-model="users.utell" ></el-input>
              </el-form-item>
              <el-form-item label="邮箱账号:">
                <el-input name="uemail" v-model="users.uemail"></el-input>
              </el-form-item>
              <el-form-item label="收货地址:">
                <el-input name="uaddress" v-model="users.uaddress">
                </el-input>
              </el-form-item>
              <el-form-item label="出生日期:">
                <el-date-picker name="ubirthday" v-model="users.ubirthday" type="date" placeholder="选择日期" style="width: 400px"></el-date-picker>
              </el-form-item>
              <!--<el-form-item label="账户余额:">
                 <span v-model="users.umoney" name="uMoney">
                 </span>
              </el-form-item>-->
              <div style="width: 200px;margin: auto;height: 40px;margin-left: 200px">
                <el-button type="primary" round plain style="height: 40px" plain @click="updateUsers()">确认</el-button>
                <el-button type="primary" round plain style="height: 40px" plain @click="backIndex()">返回</el-button>
              </div>
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
    components: {ElButton},
    data(){
          return{
            users:{
                uid:'',
                uname:'',
              upic:'',
              usex:'',
            },
//            radio:0

          }
      },mounted(){

           var uid=Cookies.get('uid');
          if (uid!=''){
            axios.get("api/findUserByUid/"+uid).then(res=>{
                this.users=res.data;
            })
          }else {
            alert("请登录")
            this.$router.push("/userLogin")
          }
    },
    methods:{
      updateUsers:function () {
          if (this.users.usex="1"){
              this.users.usex=true;
          }if(this.users.usex="2"){
            this.users.usex=false;
        }
        axios.post("api/updateUser",this.users).then(res=>{
            if (res.data=="success"){
//                alert("修改成功")
              this.$message({
                message: '恭喜你，修改成功',
                type: 'success'
              });
              this.$router.push('/')
            }else {
                alert(res.data)
            }
        })
      },
        backIndex:function () {
          this.$router.push("/")
        },
      logout:function () {
//          alert("hello")
        Cookies.remove('uid'); // fail!
        Cookies.remove('uid', { path: '/' });
        this.users.uname='Hi,请登录'
        this.$router.push("/")
      },
      handleAvatarSuccess(res, file) {
        this.users.upic = res;
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>
<style>
  #second{
    /*display: none;*/
    position: absolute;
    height: 500px;
    width: 76%;
    left: 235px;
    top:178px;
    overflow: hidden;
    background-color: white;
    z-index: 3;
    text-align: left;
    padding-left:20px;
  }
  #menu{
    /*position: relative;*/
    color: white;
    font-weight: 500;
    /*background-color: gray;*/
  }
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

