<template>
  <div class="hello" style="width: 100%;margin: auto">
    <!--<el-button type="primary" plain @click="login()">登录</el-button>-->
    <!--<el-button type="primary" plain @click="regist()">注册</el-button>-->
    <!--<el-button type="primary" plain @click="logout()">退出登录</el-button>-->

    <el-container>

      <el-header>
        <div>
        <!--导航栏-->
        <el-row>
          <el-col :span="10">
            <div class="grid-content" style="color: black;font-size: 14px;line-height: 30px">
              <el-dropdown>
          <span class="el-dropdown-link">
            <a class="el-icon-location"
            >地址</a><i class="el-icon-arrow-down el-icon--right"></i>
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
            <div class="grid-content" style="color: black;line-height: 30px;font-size: 14px">
              <router-link type="info" :to="{name:'index'}" style="color:black;margin-right: 20px"><a>首页</a></router-link>

              <a @click="toOrders()" style="cursor: pointer">我的订单</a>
              <el-dropdown style="margin-left: 10px">
          <span class="el-dropdown-link">
            <a>个人中心</a><i class="el-icon-arrow-down el-icon--left"></i>
          </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item><a @click="toUser()">完善信息</a></el-dropdown-item>
                  <el-dropdown-item><a @click="toModify()">修改密码</a></el-dropdown-item>
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

      </div>
      </el-header>

      <el-main>
        <!--logo、搜索框、购物车-->
        <el-row :gutter="10">
          <el-col :span="6">
            <router-link :to="{name:'index'}">
              <div class="grid-content" style="float:left;width:205px;height: 70px;line-height: 70px;margin-top:10px; ">
                <el-image src="/static/logo2.jpg" style="height: 70px;width:205px;border-radius: 3px"></el-image>
              </div>
            </router-link>
          </el-col>
          <el-col :span="12">
            <div class="grid-content" style="height: 80px;width:100%;">
              <el-input ref="searchName" type="text" style="width: 80%;margin: auto;margin-top: 20px" placeholder="请输入内容"
                        v-model="input"
              ></el-input>
              <el-button type="danger" icon="el-icon-search" plain @click="search()">查询</el-button>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content " style="height: 80px;line-height: 80px">
              <el-badge :value="count" :max="100" class="item">
                <el-tooltip content="购物车" placement="bottom" effect="light">
                  <el-button size="" plain style="width: 180px;height: 60px">
                    <i style="font-size: 16px; font-weight: bold;color:red"  class="el-icon-shopping-cart-full "></i>
                    <a @click="toCart">购物车</a>

                  </el-button>
                </el-tooltip>
              </el-badge>

            </div>
          </el-col>
        </el-row>

        <div style="width: 90%;margin: auto">

          <div>
            <el-row :gutter="10">
              <el-col :span="10">
                <div class=" bg-purple-dark" style="height: 400px;width: 450px">
                  <el-carousel height="400px">
                    <el-carousel-item v-for="item in pic" :key="item">
                      <img :src="item" style="height: 400px;width: 450px">
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </el-col>
              <el-col :span="10">
                <div  style="height: 400px;background-color: aliceblue;text-align: left;padding-left: 40px">
                  <div style="height: 40px;background-color: aliceblue;padding-top: 40px">
                    <span style="line-height: 40px">商品名称：</span>
                    <span v-text="shop.shopName"></span>
                  </div>
                  <div style="height: 40px;background-color: aliceblue">
                    <span style="line-height: 40px">库存数量：</span>
                    <span v-text="shop.shopNumber"></span>
                    <span>件</span>
                  </div>
                  <div style="height: 40px;background-color: aliceblue">
                    <span style="line-height: 40px">商品单价：</span>
                    <span style="line-height: 40px;color: red">￥：</span>
                    <span v-text="shop.shopPrice" style="color: red"></span>
                    <span style="color: red">元</span>
                  </div>
                  <div style="height: 40px;background-color: aliceblue">
                    <span style="line-height: 40px">生产厂家：</span>
                    <span v-text="shop.factory"></span>
                  </div>
                  <div style="height:40px;background-color: aliceblue">
                    <span style="line-height: 40px">商品描述：</span>
                    <span v-text="shop.shopInfo"></span>
                  </div>


                  <div style="height: 40px;background-color: aliceblue;">
                    <span style="line-height: 40px">商品销量：</span>
                    <span v-text="shop.shopRepertory"></span>
                    <span>件</span>
                  </div>
                  <div style="height: 40px;background-color: aliceblue">
                    <span style="line-height: 40px">购买数量：</span>
                    <span v-text="num" style="color: red"></span>
                    <span style="color: red">件</span>
                  </div>
                  <div style="height: 40px;background-color: aliceblue">
                    <span style="line-height: 40px">总金额：</span>
                    <span style="line-height: 40px;color: red" >￥：</span>
                    <span style="line-height: 40px;color: red" v-text="total"></span>
                    <span style="line-height: 40px;color: red" >元</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="4" :gutter="10">
                <el-row :span="24">
                  <div class=" bg-purple-dark" style="height: 125px">
                    <router-link :to="{path:'/shops/'+'手机'}"><el-image src="http://pzwtcm79f.bkt.clouddn.com/ggao1.jpg" style="height: 125px;width: 185px"></el-image></router-link>

                  </div>
                </el-row>
                <el-row :span="24">
                  <div class=" bg-purple-dark" style="height: 125px">
                    <router-link :to="{path:'/shops/'+'小米'}"><el-image src="http://pzwtcm79f.bkt.clouddn.com/ggao2.jpg" style="height: 125px;width: 185px"></el-image></router-link>
                  </div>
                </el-row>
                <el-row :span="24">
                  <div class=" bg-purple-dark" style="height: 125px">
                    <router-link :to="{path:'/shops/'+'手表'}"> <el-image src="http://pzwtcm79f.bkt.clouddn.com/ggao3.jpg" style="height: 125px;width: 185px"></el-image></router-link>
                  </div>
                </el-row>
              </el-col>
            </el-row>
            <el-row :gutter="10">

              <el-col :span="10">
                <div class="" style="height: 120px;background-color: white">
                <template >
                  <el-carousel :interval="4000" type="card" height="120px">
                    <el-carousel-item v-for="item in pic" :key="item" style=";background-color: white;width: 200px">
                      <img :src="item" style="height: 100%;width: 160px">
                    </el-carousel-item>
                  </el-carousel>
                </template>

                </div>
              </el-col>
              <el-col :span="14">
                <!--bg-purple-dark-->
                <div class=" " style="height: 120px;background-color: aliceblue;">
                  <div style="height: 120px;margin-left: 150px">
                    <div style="float: left;margin-top: 40px;color: red;line-height: 40px;margin-right: 30px">
                      <el-input-number v-model="num" size="small" style="width: 100px" controls-position="right" @change="handleChange" :min="1" >
                      </el-input-number>
                    </div>
                    <div style="float: left;margin-top: 40px;margin-right: 30px"><el-button type="primary" plain style="width: 120px" class="el-icon-plus" @click="addcart()">购物车</el-button></div>
                    <div style="float: left;margin-top: 40px;margin-right: 30px"><el-button type="success" plain style="width: 120px" @click="submitForm()">立即购买</el-button></div>

                  </div>
                </div>
              </el-col>

            </el-row>
          </div>

        </div>

      </el-main>


      <el-footer style="height: 135px">
        <div>
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
      </div>
      </el-footer>

    </el-container>
  </div>
</template>

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

  /*.el-main {*/
    /*!*background-color: #E9EEF3;*!*/
    /*!*color: #333;*!*/
    /*!*text-align: center;*!*/
    /*!*line-height: 160px;*!*/
  /*}*/

  body > .el-container {
    /*margin-bottom: 40px;*/
  }

  /*.el-container:nth-child(5) .el-aside,*/
  /*.el-container:nth-child(6) .el-aside {*/
    /*line-height: 260px;*/
  /*}*/
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
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>
<script>

  import axios from 'axios'
  import ElMain from "../../node_modules/element-ui/packages/main/src/main";
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  import ElInput from "../../node_modules/element-ui/packages/input/src/input";
  import Cookies from 'js-cookie'
  export default{
    components: {
      ElInput,
      ElButton,
      ElMain},
    data(){
          return{
            radio1: '上海',
            input:'',
            num: 1,
            msg: 'Welcome to 商品详情页',
            shop:{
              shopPrice:'',
              shopBigPic:''
            },
            users:{
              uid:'',
              uname:'Hi,请登录'

            },
            total:'',
            value: '',
            //购物车数量
            count:0,
//            详情页轮播图
            uid:'',
            pic:[]

      }
    },mounted () {
      var shopId=this.$route.params.shopId;
      axios.get("api/findById/"+shopId).then(res=>{
        this.shop=res.data;
        this.total=this.shop.shopPrice;
      })

      var shopId=this.$route.params.shopId;
      axios.get("api/findPic/"+shopId).then(res=>{
        this.pic=res.data;

      })

      var uid=Cookies.get("uid");
      this.uid=uid;
      if (this.uid!=null){
        axios.get("api/findUserByUid/"+this.uid).then(res=>{
          this.users=res.data;
        })
      }

      var url="api/count/"+this.uid
      axios.post(url).then(res=>{
        this.count=res.data
      })
    } ,methods:{
      handleChange(value) {
          this.total=(value*this.shop.shopPrice).toFixed(2);
      },
      addcart:function () {
       console.log(this.uid)
        if (this.uid!=null){
          axios.post("api/addCart/"+this.uid,{num:this.num,shop:this.shop,total:this.total}).then(res=>{
  //            alert(this.total)
              if (res.data!=''){
//
                console.log(res.data)
                this.$message({
                  message: '恭喜你，加入成功',
                  type: 'success'
                });
                var url="api/count/"+this.uid
                axios.post(url).then(res=>{
                  this.count=res.data
                })
              }else {
                this.$message.error('错了哦，加入失败');
              }
          })
        }else {
          this.$message.error('错了哦，请登录后再试');
          this.$router.push("/userLogin")
        }
      },
      submitForm:function () {

        if (this.uid!=null){
          axios.post("api/userOrder1/"+this.uid,{num:this.num,shop:this.shop,total:this.total}).then(res=>{
            if (res.data!=''){
              this.$router.push("/userOrder")
            }else {
              this.$message.error('未检测到您当前配送地址，请前往个人中心完善信息');
            }
          })
        }else {
          this.$message.error('错了哦，请登录后再试');
          this.$router.push("/userLogin")
        }
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
      toModify:function () {
        if (this.uid!=null) {
          this.$router.push("/modifyPassword")
        }else {
          this.$message.error('还没登录哦，请登录后再试');
          this.$router.push("/userLogin")
        }
      },
      show:function () {
        this.$router.push("/")
      },
      login:function () {
        this.$router.push("/userLogin")
      },
      regist:function () {
        this.$router.push("/userRegist")
      },
      logout:function () {
        Cookies.remove('uid'); // fail!
        Cookies.remove('uid', { path: '/' });
        this.users.uname='Hi,请登录'
        this.$router.push("/")
      },
      search:function () {
        var searchName=this.$refs.searchName.value
        this.$router.push('/shops/'+searchName)
      }
    }

  }
</script>

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
