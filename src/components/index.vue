<template>
  <div class="hello" style="width: 100%;margin: auto">

    <el-container>

      <el-header>
        <!--导航栏-->
        <el-row>
          <el-col :span="10">
            <!-- bg-purple-->
            <div class="grid-content" style="color: black;font-size: 14px;line-height: 30px">
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

              <router-link type="info" :to="{name:'userLogin'}" style="color:black;margin-right: 20px" v-if="this.uid==null"><a>Hi,请登录</a></router-link>

                <span style="color:black;margin-right: 20px" v-if="this.uid!=null"><a>{{users.uname}}</a></span>

              <router-link type="info" :to="{name:'userRegist'}" style="color:black"><a>免费注册</a></router-link>
              &nbsp;&nbsp;&nbsp;
              <span type="info" style="color:black;cursor: pointer"><a @click="logout()">退出登录</a></span>
            </div>
          </el-col>
          <el-col :span="14">
            <!-- bg-purple-light-->
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

      </el-header>
      <el-main>

        <!--logo、搜索框、购物车-->
        <el-row :gutter="10">
          <el-col :span="6">
            <div class="grid-content" style="float:left;width:205px;height: 70px;line-height: 70px;margin-top:10px;background-color: azure ">
              <el-image src="/static/logo2.jpg" style="height: 70px;width:205px;border-radius: 3px"></el-image>
            </div>
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
            <div class="grid-content" style="height: 80px;line-height: 80px">
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

        <!--二级菜单-->
        <div id="second" v-show="second" @mouseover="show2(index+1)" @mouseleave="leave(index+1)">
          <div   v-for="(shop,index) in shops" v-bind:key="shop.shopId" style="float:left;width: 230px;height: 80px;margin-left: 20px" >
            <div style="width: 60px;height: 80px;float:left;margin-top: 20px; text-align:center" ><router-link :to="{path:'/shopDetial/'+shop.shopId}"><img :src="shop.shopBigPic" style="width: 60px;height: 60px" ></router-link></div>
            <div style="width: 170px;height: 80px;float:left;text-align:left;line-height: 80px;font-size: 14px;font-weight: bold;margin-top: 10px" ><router-link :to="{path:'/shopDetial/'+shop.shopId}">{{shop.shopName}}</router-link></div>
          </div>
        </div>
        <el-row :gutter="10">
          <el-col :span="4">
            <div id="menu" class="grid-content" style="height: 100%;width:100%;text-align:center;background-color: black;padding-top: 5px">
              <!--一级菜单-->
              <div v-for="(shop_kind,index) in shop_kinds" v-bind:key="shop_kind.skId">
                <div id="demo" style="height: 45px;line-height: 30px;margin-top: 5px;text-align: left;margin-left: 60px"   @mouseover="show2(index+1)" @mouseleave="leave(index+1)">{{shop_kind.skName}}</div>
              </div>
            </div>
          </el-col>
          <el-col :span="20">
            <!--轮播图-->
          <template>
            <div class="block">
              <el-carousel height="500px">
                <el-carousel-item  v-for="(shop,index) in shop1" v-bind:key="shop.shopId">

                  <router-link :to="{path:'/shopDetial/'+shop.shopId}"><img :src="shop.shopLun" style="height: 100%;width: 100%"></router-link>

                </el-carousel-item>
              </el-carousel>
            </div>
          </template>
          </el-col>

        </el-row>
        <!--热卖中-->
        <el-row :gutter="10">
          <el-col :span="6">
            <div class="grid-content bg-purple" style="line-height: 60px"><h3>热卖中</h3></div>
          </el-col>
          <el-col :span="6" :offset="12">
            <div class="grid-content" style="line-height: 60px;float: right;margin-top: 20px">
              <el-tooltip content="上一页" placement="bottom" effect="light">
                <el-button class="el-icon-arrow-left" plain @click="pre()"></el-button>
              </el-tooltip>
              <el-tooltip content="下一页" placement="bottom" effect="light">
                <el-button class="el-icon-arrow-right" plain @click="next()"></el-button>
              </el-tooltip>
            </div>
          </el-col>
        </el-row>
        <!--热卖中四个模块-->
        <el-row :gutter="10">
          <el-col :span="6" v-for="(shop,index) in shop2" v-bind:key="shop.shopId">

                <div style="height: 400px;width: 310px">
                  <div style="height: 310px;width: 310px"><router-link :to="{path:'/shopDetial/'+shop.shopId}"><img :src="shop.shopBigPic" style="width:310px;height: 310px"></router-link></div>
                  <div style="width: 310px;height: 30px;font-weight: 600;line-height: 30px;background-color: white"><router-link :to="{path:'/shopDetial/'+shop.shopId}">{{shop.shopName}}</router-link></div>
                  <div style="width: 310px;height: 30px;line-height: 30px;background-color: white">{{shop.shopInfo}}</div>
                  <div style="width: 310px;height: 30px;color: red;line-height: 30px;background-color: white">￥：{{shop.shopPrice}}元</div>

                </div>

          </el-col>

        </el-row>

        <!--手机专场-->
        <el-row :gutter="10">
          <el-col :span="6">
            <div class="grid-content bg-purple" style="line-height: 60px;font-weight: bolder"><h3>手机专场</h3></div>
          </el-col>

        </el-row>
        <!--新品五个模块-->
        <el-row :gutter="10">

            <el-col :span="6" v-for="(shop,index) in shop3" v-bind:key="shop.shopId">
              <div style="height: 400px;width: 310px">
                <div style="height: 310px;width: 310px"><router-link :to="{path:'/shopDetial/'+shop.shopId}"><img :src="shop.shopBigPic" style="width:310px;height: 310px"></router-link></div>
                <div style="width: 310px;height: 30px;font-weight: 600;line-height: 30px;background-color: white"><router-link :to="{path:'/shopDetial/'+shop.shopId}">{{shop.shopName}}</router-link></div>
                <div style="width: 310px;height: 30px;line-height: 30px;background-color: white">{{shop.shopInfo}}</div>
                <div style="width: 310px;height: 30px;color: red;line-height: 30px;background-color: white">￥：{{shop.shopPrice}}元</div>

              </div>
            </el-col>

        </el-row>

        <el-row :gutter="10">
          <el-col :span="24">
            <div class="" round style="line-height: 120px;height: 120px;width: 100%"><router-link :to="{path:'/shopDetial/'+29}"><el-image src="http://pzwtcm79f.bkt.clouddn.com/url1.jpg" style="width: 100%;height: 100%;margin: auto;margin-top: 20px"></el-image></router-link></div>

          </el-col>
        </el-row>


        <!--多、快、好、省-->
        <el-row :gutter="10" style="margin-top: 40px">
          <el-col :span="6">
            <div  style="height: 50px;line-height: 50px;border-right: 1px solid #e5e9f2">
              <div style="height: 50px;width: 50px;float: left;margin-left: 50px"><el-image src="../static/duo.jpg" style="height: 50px;width: 50px"></el-image></div>
              <div style="height: 50px;width: 150px;font-weight: bolder;float: left"><a href="">品类齐全，轻松购物</a></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div  style="height: 50px;line-height: 50px;border-right: 1px solid #e5e9f2">
              <div style="height: 50px;width: 50px;float: left;margin-left: 50px">
                <el-image src="../static/kuai.jpg" style="height: 50px;width: 50px"></el-image>
              </div>
              <div style="height: 50px;width: 150px;font-weight: bolder;float: left"><a href="">多仓直发，极速配送</a></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div  style="height: 50px;line-height: 50px;border-right: 1px solid #e5e9f2">
              <div style="height: 50px;width: 50px;float: left;margin-left: 50px">
                <el-image src="../static/hao.jpg" style="height: 50px;width: 50px"></el-image>
              </div>
              <div style="height: 50px;width: 150px;font-weight: bolder;float: left"><a href="">正品行货，精致服务</a></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div  style="height: 50px;line-height: 50px">
              <div style="height: 50px;width: 50px;float: left;margin-left: 50px">
                <el-image src="../static/sheng.jpg" style="height: 50px;width: 50px"></el-image>
              </div>
              <div style="height: 50px;width: 150px;font-weight: bolder;float: left"><a href="">天天低价，畅选无忧</a></div>
            </div>
          </el-col>
        </el-row>
        <el-row style="margin-top: 20px">
          <el-col :span="3">
            <div class="" style="height: 180px;line-height: 40px">
              <div style="font-weight: bold">帮助中心</div>
              <div style="font-size: 14px"><a href="">账户管理</a></div>
              <div style="font-size: 14px"><a href="">购物指南</a></div>
              <div style="font-size: 14px"><a href="">订单操作</a></div>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="" style="height: 180px;line-height: 40px">
              <div style="font-weight: bold">服务支持</div>
              <div style="font-size: 14px"><a href="">售后政策</a></div>
              <div style="font-size: 14px"><a href="">自动服务</a></div>
              <div style="font-size: 14px"><a href="">相关下载</a></div>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="" style="height:180px;line-height: 40px">
              <div style="font-weight: bold">线下门店</div>
              <div style="font-size: 14px"><a href="">小米之家</a></div>
              <div style="font-size: 14px"><a href="">服务网点</a></div>
              <div style="font-size: 14px"><a href="">授权体验店</a></div>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="" style="height: 180px;line-height: 40px">
              <div style="font-weight: bold">关于小米</div>
              <div style="font-size: 14px"><a href="">了解小米</a></div>
              <div style="font-size: 14px"><a href="">加入小米</a></div>
              <div style="font-size: 14px"><a href="">投资者关系</a></div>
            </div>
          </el-col>
          <el-col :span="3">
            <!--bg-purple-->
            <div class="" style="height: 180px;line-height: 40px">
              <div style="font-weight: bold">关于我们</div>
              <div style="font-size: 14px"><a href="">新浪微博</a></div>
              <div style="font-size: 14px"><a href="">官网微博</a></div>
              <div style="font-size: 14px"><a href="">联系我们</a></div>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="" style="height: 180px;line-height: 40px;border-right: 1px solid #898683">
              <div style="font-weight: bold">特色服务</div>
              <div style="font-size: 14px"><a href="">F码通道</a></div>
              <div style="font-size: 14px"><a href="">礼物码</a></div>
              <div style="font-size: 14px"><a href="">防伪查验</a></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content" style="height: 180px;line-height: 60px">
              <div style="height:90px;line-height: 30px;padding-top: 20px;color: orangered">
                400-100-5678<br>
                周一至周日 8:00-18:00<br>
                （仅收市话费）
              </div>
              <div><a href=""><el-button type="danger" plain class="el-icon-s-comment">人工客服</el-button></a></div>
            </div>
          </el-col>
        </el-row>

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


<style>
  #second{
    /*display: none;*/
    position: absolute;
    height: 500px;
    width: 76%;
    left: 265px;
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

  /*轮播图、跑马灯特效*/
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 330px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  /*底端跑马灯*/
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 150px;
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

  import ElFooter from "../../node_modules/element-ui/packages/footer/src/main";
  import ElImage from "../../node_modules/element-ui/packages/image/src/main";
  import ElInput from "../../node_modules/element-ui/packages/input/src/input";
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  import Cookies from 'js-cookie'

  import axios from 'axios';

  export default {

    components: {
      ElButton,
      ElInput,
      ElImage,
      ElFooter},
    name: 'index',
    data () {
      return {
          url1:'http://pxx4c7852.bkt.clouddn.com/url1.jpg',
        input: '',
        msg: 'Welcome to 小米 首页',
        shop_kinds:[],
        shops:[],
        shop1:[],
        shop2:[],
        shop3:[],
        users:{
            uid:'',
            uname:'Hi,请登录'

        },
        uid:'',
        second:false,
        total:16,
        params:{
          size:4,
          page:1
        },

        count:0
      }
    },
    mounted(){


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

      var url="api/show1"
      axios.get(url).then(res=>{
        //alert(res.data)
        this.shop_kinds=res.data
      })
      var url="api/showlbt"
      axios.get(url).then(res=>{
        this.shop1=res.data
      })
      var url="api/showPhone"
      axios.get(url).then(res=>{
        this.shop3=res.data
      })
      this.query()

    },


    methods:{
      query:function () {
        var url="api/showRM/"+this.params.page+"/"+this.params.size
        axios.get(url).then(res=>{
          this.shop2=res.data.list
          this.total=16
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
      toModify:function () {
        if (this.uid!=null) {
          this.$router.push("/modifyPassword")
        }else {
          this.$message.error('还没登录哦，请登录后再试');
          this.$router.push("/userLogin")
        }
      },
      changePage:function (page) {
        // alert(page)
        this.params.page=page;
        this.query();
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
       this.$router.go(0)
      },
      show2:function (ids) {
        this.second = true;
//      this.active='background-color:red';
        var url="api/show2"+"/"+ids
        //alert(ids)
        axios.get(url).then(res=>{
//          console.log(res.data)
          this.shops=res.data

        })
      },
      leave:function(ids){
        this.second = false;
//      this.active = '';
      },
      next:function () {
        if(this.params.page<=3){
          this.params.page=this.params.page+1
          this.query()
        }
      },
      pre:function () {
        if(this.params.page>=2){
          this.params.page=this.params.page-1
          this.query()
        }
      },
      search:function () {
          var searchName=this.$refs.searchName.value
          //alert(searchName)
      this.$router.push('/shops/'+searchName)
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
  a:link {
    color: #000000;
    text-decoration-line: none;
  }
  a:hover{
    color: red;
  }
</style>
