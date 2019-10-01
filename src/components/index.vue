<template>
  <div class="hello" style="width: 98%;margin: auto">
    <!--<el-button type="primary" plain @click="login()">登录</el-button>-->
    <!--<el-button type="primary" plain @click="regist()">注册</el-button>-->
    <!--<el-button type="primary" plain @click="logout()">退出登录</el-button>-->

    <!--<el-container>-->
      <!--<el-header>-->


      <!--</el-header>-->
      <!--<el-container>-->
        <!--<el-aside width="200px">Aside</el-aside>-->
        <!--<el-container>-->
          <!--<el-main>Main</el-main>-->
          <!--<el-footer>Footer</el-footer>-->
        <!--</el-container>-->
      <!--</el-container>-->
      <!--<el-container>-->
        <!--<el-aside width="200px">Aside</el-aside>-->
        <!--<el-container>-->
          <!--<el-main>Main</el-main>-->
          <!--<el-footer>Footer</el-footer>-->
        <!--</el-container>-->
      <!--</el-container>-->
      <!--<el-main>Footer</el-main>-->
    <!--</el-container>-->

    <!--导航栏-->
    <el-row>
      <el-col :span="10">
        <div class="grid-content bg-purple" style="color: black;font-size: 14px;line-height: 30px">
          <el-dropdown>
          <span class="el-dropdown-link">
            地址<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item >北京</el-dropdown-item>
              <el-dropdown-item>上海</el-dropdown-item>
              <el-dropdown-item>广州</el-dropdown-item>
              <el-dropdown-item>深圳</el-dropdown-item>
              <el-dropdown-item>杭州</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <router-link type="info" :to="{name:'userLogin'}" style="color:black">请登录</router-link>
          <router-link type="info" :to="{name:'userRegist'}" style="color:black">免费注册</router-link>

        </div>
      </el-col>
      <el-col :span="14">
        <div class="grid-content bg-purple-light" style="color: black;line-height: 30px;font-size: 14px">
          <router-link type="info" :to="{name:'userOrder'}" style="color: black">我的订单</router-link>
          <el-dropdown style="margin-left: 10px">
          <span class="el-dropdown-link">
            个人中心<i class="el-icon-arrow-down el-icon--left"></i>
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
            企业采购<i class="el-icon-arrow-down el-icon--left"></i>
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
            客户服务<i class="el-icon-arrow-down el-icon--left"></i>
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
            网站导航<i class="el-icon-arrow-down el-icon--left"></i>
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
    <!--logo、搜索框、购物车-->
    <el-row :gutter="10">
      <el-col :span="6">
        <div class="grid-content bg-purple" style="height: 80px;line-height: 80px">
            logo
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light" style="height: 80px">
          <el-input type="text" style="width: 80%;margin: auto;margin-top: 20px"></el-input>
          <el-button type="danger" plain @click="search()">查询</el-button>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple" style="height: 80px;line-height: 80px">
          <router-link :to="{name:'userCart'}" style="color: red">购物车</router-link>
        </div>
      </el-col>
    </el-row>
    <!--<hr color="pink">-->
    <!--一二级菜单、轮播图-->
    <el-row :gutter="10">
      <el-col :span="6" >
        <div class="grid-content bg-purple-dark" style="height: 370px;line-height: 370px">
          一二级菜单
        </div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple-light" style="height: 370px">
          <template>
            <el-carousel :interval="4000" type="card" height="350px">
              <el-carousel-item v-for="item in 6" :key="item">
                <h3 class="medium">{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </template>
        </div>
      </el-col>
    </el-row>
    <!--热卖中-->
    <el-row :gutter="10">
      <el-col :span="6"><div class="grid-content bg-purple" style="line-height: 40px">热卖中</div></el-col>
    </el-row>
    <!--热卖中四个模块-->
    <el-row :gutter="10">
      <el-col :span="6"><div class="grid-content bg-purple" style="height: 200px;line-height: 200px">商品1</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple" style="height: 200px;line-height: 200px">商品2</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple" style="height: 200px;line-height: 200px">商品3</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple" style="height: 200px;line-height: 200px">商品4</div></el-col>
    </el-row>
    <!--新品上市-->
    <el-row :gutter="10">
      <el-col :span="6"><div class="grid-content bg-purple" style="line-height: 40px">新品上市</div></el-col>
    </el-row>
    <!--新品五个模块-->
    <el-row :gutter="10">
      <el-col :span="4"><div class="grid-content bg-purple" style="height: 410px;line-height: 410px">商品类别</div></el-col>
      <el-col :span="20">
        <el-col :span="6"><div class="grid-content bg-purple" style="height: 200px;line-height: 200px">商品1</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple" style="height: 200px;line-height: 200px">商品2</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple" style="height: 200px;line-height: 200px">商品3</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple" style="height: 200px;line-height: 200px">商品4</div></el-col>
      </el-col>
      <el-col :span="20" style="margin-top: 10px">
        <el-col :span="6"><div class="grid-content bg-purple" style="height: 200px;line-height: 200px">商品5</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple" style="height: 200px;line-height: 200px">商品6</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple" style="height: 200px;line-height: 200px">商品7</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple" style="height: 200px;line-height: 200px">商品8</div></el-col>
      </el-col>
    </el-row>
    <!--&lt;!&ndash;促销模块&ndash;&gt;-->
    <!--<el-row :gutter="10">-->
      <!--<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>-->
    <!--</el-row>-->
    <!--&lt;!&ndash;促销五个模块&ndash;&gt;-->
    <!--<el-row :gutter="10">-->
      <!--<el-col :span="4"><div class="grid-content bg-purple"></div></el-col>-->
      <!--<el-col :span="5"><div class="grid-content bg-purple"></div></el-col>-->
      <!--<el-col :span="5"><div class="grid-content bg-purple"></div></el-col>-->
      <!--<el-col :span="5"><div class="grid-content bg-purple"></div></el-col>-->
      <!--<el-col :span="5"><div class="grid-content bg-purple"></div></el-col>-->
    <!--</el-row>-->
    <!--专题栏-->
    <el-row :gutter="10">
      <el-col :span="6"><div class="grid-content bg-purple" style="height: 150px;line-height: 150px">倒计时</div></el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple" style="height: 150px;line-height: 150px">促销商品1</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple" style="height: 150px;line-height: 150px">促销商品2</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple" style="height: 150px;line-height: 150px">促销商品3</div>
      </el-col>
      <el-col :span="6"><div class="grid-content bg-purple" style="height: 150px;line-height: 150px">专题4</div></el-col>
    </el-row>
    <!--多、快、好、省-->
    <el-row :gutter="10">
      <el-col :span="6"><div class="grid-content bg-purple" style="height: 80px;line-height: 80px">多</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple" style="height: 80px;line-height: 80px">快</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple" style="height: 80px;line-height: 80px">好</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple" style="height: 80px;line-height: 80px">省</div></el-col>
    </el-row>
    <!--bottom-->
    <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple" style="height: 100px;line-height: 50px">
            <ul>
              <li >保障</li><br>
              <li>版权</li>
            </ul>
          </div>
        </el-col>
    </el-row>

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
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-dropdown-menu{
    width: 100px;
  }
  .router-link{
    color: black;
    font-size: 14px;
  }
  .el-dropdown{
    color: black;
    font-size: 14px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
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
export default {
  components: {
    ElButton,
    ElInput,
    ElImage,
    ElFooter},
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
