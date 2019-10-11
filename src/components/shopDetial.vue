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
            <div class="grid-content bg-purple" style="color: black;font-size: 14px;line-height: 30px">
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
                  <!--<el-dropdown-item>完善信息</el-dropdown-item>-->
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

      </div>
      </el-header>

      <el-main>
        <!--logo、搜索框、购物车-->
        <el-row :gutter="10">
          <el-col :span="6">
            <router-link :to="{name:'index'}">
              <div class="grid-content" style="float:left;width:205px;height: 70px;line-height: 70px;margin-top:10px; ">
                <el-image src="../static/logo2.jpg" style="height: 70px;width:205px;border-radius: 3px"></el-image>
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
              <el-badge :value="100" :max="10" class="item">
                <el-tooltip content="购物车" placement="bottom" effect="light">
                  <el-button size="" plain style="width: 180px;height: 60px">
                    <i style="font-size: 16px; font-weight: bold;color:red"  class="el-icon-shopping-cart-full "></i>
                    <router-link :to="{name:'userCart'}" style="font-size: 16px"><a>购物车</a></router-link>

                  </el-button>
                </el-tooltip>
              </el-badge>

            </div>
          </el-col>
        </el-row>
        <!--详情页的头-->
        <!--<el-row>-->
          <!--<el-col :span="24"><div class=" bg-purple-dark" style="height: 40px"></div></el-col>-->
        <!--</el-row>-->
        <div style="width: 90%;margin: auto">
          <!--上（top）-->
          <!--<div>-->
            <!--<el-row>-->
              <!--<el-col :span="24">-->
                <!--<div class=" bg-purple-dark" style="height: 40px">-->
                  <!--<el-row>-->
                    <!--<el-col :span="10">-->
                      <!--<div class="bg-purple" plain style="color: black;font-size: 14px;float: left;margin-left: 40px">-->
                        <!--<el-button @click="show()">首页-->
                        <!--</el-button>-->
                      <!--</div>-->
                    <!--</el-col>-->
                  <!--</el-row>-->
                <!--</div></el-col>-->
            <!--</el-row>-->
          <!--</div>-->
          <!--中（middle）-->
          <div>
            <el-row :gutter="10">
              <el-col :span="10">
                <div class=" bg-purple-dark" style="height: 400px;width: 450px">
                  <img :src="shop.shopBigPic" style="height: 400px;width: 450px">
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
                  <div style="background-color: aliceblue">
                    <span style="line-height: 40px">配送地址：</span>
                    <template>
                      <el-select v-model="value" placeholder="请选择">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                          width="100px"
                        >
                        </el-option>
                      </el-select>
                    </template>
                  </div>
              <!--    <div style="height: 80px;background-color: #E5E9F2">
                    <div>
                      <span style="line-height: 30px">配送地址：</span>
                    </div>
                    <div>
                      <template>
                        <div>
                          <el-radio-group v-model="radio1">
                            <el-radio-button label="上海"></el-radio-button>
                            <el-radio-button label="北京"></el-radio-button>
                            <el-radio-button label="广州"></el-radio-button>
                            <el-radio-button label="深圳"></el-radio-button>
                            <el-radio-button label="杭州"></el-radio-button>
                            <el-radio-button label="西安"></el-radio-button>
                          </el-radio-group>
                        </div>
                      </template>
                    </div>
                  </div>-->
                  <div style="height: 40px;background-color: aliceblue">
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
                    <el-image src="../static/logo1.jpg" style="height: 125px;width: 180px"></el-image>

                  </div>
                </el-row>
                <el-row :span="24">
                  <div class=" bg-purple-dark" style="height: 125px">
                    <el-image src="../static/logo1.jpg" style="height: 125px;width: 180px"></el-image>
                  </div>
                </el-row>
                <el-row :span="24">
                  <div class=" bg-purple-dark" style="height: 125px">
                    <el-image src="../static/logo1.jpg" style="height: 125px;width: 180px"></el-image>
                  </div>
                </el-row>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <!--<el-col :span="1"><el-button class="el-icon-arrow-left" type="warning" plain style="height: 80px;width: 50%" @click=""></el-button></el-col>-->


              <el-col :span="10">
                <div class="" style="height: 120px;background-color: white">
                <template >
                  <el-carousel :interval="4000" type="card" height="120px">
                    <el-carousel-item v-for="item in 3" :key="item" style=";background-color: white">
                      <img :src="shop.shopBigPic" style="height: 100%;width: 180px">
                    </el-carousel-item>
                  </el-carousel>
                </template>

                  <!--<el-image src="../static/logo1.jpg" style="height: 120px;width: 180px"></el-image>-->

                </div>
              </el-col>
              <!--<el-col :span="3">-->
                <!--<div class=" bg-purple-dark" style="height: 120px">-->
                  <!--<el-image src="../static/logo1.jpg" style="height: 120px;width: 140px"></el-image>-->

                <!--</div>-->
              <!--</el-col>-->
              <!--<el-col :span="3">-->
                <!--<div class=" bg-purple-dark" style="height: 120px">-->
                  <!--<el-image src="../static/logo1.jpg" style="height: 120px;width: 140px"></el-image>-->

                <!--</div>-->
              <!--</el-col>-->

              <!--<el-col :span="2">-->
                <!--<div class=" bg-purple-dark" style="height: 100px">-->
                  <!--<el-image src="../static/logo1.jpg" style="height: 100px;width: 100px"></el-image>-->

                <!--</div>-->
              <!--</el-col>-->
              <!--<el-col :span="1"><el-button class=" el-icon-arrow-right" type="warning" plain style="height: 80px;width: 50%" @click=""></el-button></el-col>-->
              <el-col :span="14">
                <div class=" bg-purple-dark" style="height: 120px">
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
              <!--<el-col :span="4">-->
                <!--<div class=" bg-purple-dark" style="height: 80px;line-height: 40px">-->
                  <!--<div><a><el-button plain type="warning" size="small" class="el-icon-star-on">关注</el-button></a></div>-->
                  <!--<div><a><el-button plain type="warning" size="small" class="el-icon-chat-dot-square">聊天</el-button></a></div>-->
                <!--</div>-->

              <!--</el-col>-->
            </el-row>
          </div>
          <!--下（bottom）-->
          <!--<div>-->
            <!--<el-row :gutter="10">-->
              <!--<el-col :span="2"><el-button class=" el-icon-arrow-left" type="warning" plain style="height: 120px"></el-button></el-col>-->
              <!--<el-col :span="4">-->
                <!--<div class=" bg-purple-dark" style="height: 120px">-->
                  <!--<el-image src="../static/logo1.jpg" style="height: 100px;width: 140px"></el-image>-->

                <!--</div></el-col>-->
              <!--<el-col :span="4">-->
                <!--<div class=" bg-purple-dark" style="height: 120px">-->
                  <!--<el-image src="../static/logo1.jpg" style="height: 100px;width: 140px"></el-image>-->

                <!--</div></el-col>-->
              <!--<el-col :span="4">-->
                <!--<div class=" bg-purple-dark" style="height: 120px">-->
                  <!--<el-image src="../static/logo1.jpg" style="height: 100px;width: 140px"></el-image>-->

                <!--</div></el-col>-->
              <!--<el-col :span="4">-->
                <!--<div class=" bg-purple-dark" style="height: 120px">-->
                  <!--<el-image src="../static/logo1.jpg" style="height: 100px;width: 140px"></el-image>-->

                <!--</div></el-col>-->
              <!--<el-col :span="4">-->
                <!--<div class=" bg-purple-dark" style="height: 120px">-->
                  <!--<el-image src="../static/logo1.jpg" style="height: 100px;width: 140px"></el-image>-->

                <!--</div></el-col>-->
              <!--<el-col :span="2"><el-button class=" el-icon-arrow-right" type="warning" plain style="height: 120px" @click=""></el-button></el-col>-->
            <!--</el-row>-->
          <!--</div>-->
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
            },
            users:{
              uid:'',
              uname:'Hi,请登录'

            },
            total:'',
            options: [{
              value: 'adress1',
              label: '北京'
            }, {
              value: 'address2',
              label: '上海'
            }, {
              value: 'address3',
              label: '广州'
            }, {
              value: 'address4',
              label: '天津'
            }, {
              value: 'address5',
              label: '杭州'
            }],
            value: ''
      }
    },mounted () {


        var shopId=this.$route.params.shopId;
        axios.get("api/findById/"+shopId).then(res=>{
            this.shop=res.data;
            this.total=this.shop.shopPrice;
        })

      var uid=Cookies.get("uid");
      if (uid!=null){
        axios.get("api/findUserByUid/"+uid).then(res=>{
          this.users=res.data;
        })
      }
    } ,methods:{
      handleChange(value) {
          this.total=value*this.shop.shopPrice;
//        console.log(value);
      },
      addcart:function () {
        var uid=Cookies.get("uid");
        if (uid!=null){
          axios.post("api/addCart/"+uid,{num:this.num,shop:this.shop,total:this.total}).then(res=>{
  //            alert(this.total)
              if (res.data!=''){
                  alert("加入成功")
              }else {
                  alert("加入失败")
              }
          })
        }else {
          alert("请登录")
        }
      },
      submitForm:function () {
        var uid=Cookies.get("uid");
        if (uid!=null){
          axios.post("api/userOrder1/"+uid,{num:this.num,shop:this.shop,total:this.total}).then(res=>{
            if (res.data!=''){
              this.$router.push("/userOrder")
            }else {
              alert("生成订单失败")
            }
          })
        }else {
          alert("请登录")
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
//          alert("hello")
        Cookies.remove('uid'); // fail!
        Cookies.remove('uid', { path: '/' });
        this.users.uname='Hi,请登录'
        this.$router.push("/")
      },
      search:function () {
        var searchName=this.$refs.searchName.value
        //alert(searchName)
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
