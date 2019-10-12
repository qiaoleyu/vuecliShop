<template>
  <div style="width: 95%;margin: auto">
    <h1>{{msg}}</h1>
    <div style="height: 50px">
      <el-row :gutter="10">
        <el-col :span="4" :offset="1">
          <div class="grid-content" style="font-weight: bolder;text-align: left">
            <el-button type="warning" @click="orderFindAll()">全部订单</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content" style="font-weight: bolder;text-align: left">
            <el-button type="warning" @click="orderStatue1()">待支付</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content" style="font-weight: bolder;text-align: left">
            <el-button type="warning" @click="orderStatue2()">待发货</el-button>
          </div>
        </el-col>
        <!--<el-col :span="3" style="height: 40px">-->
        <!--<div class="grid-content" style="line-height: 40px;font-weight: bolder;text-align: left">-->
        <!--<el-button plain>已发货</el-button>-->
        <!--</div>-->
        <!--</el-col>-->
      </el-row>
    </div>

    <!--<hr>
    <el-row :gutter="10">
      <el-col :span="6" style="height: 40px">
        <div class="grid-content" style="line-height: 40px;font-weight: bolder;text-align: left">店铺：</div>
      </el-col>
    </el-row>
    <hr>-->
    <el-table align="center" :data="order" stripe style="width: 100%" v-show="order.length" highlight-current-row>
      <el-table-column label="复选框" width="100" style="color:red"  :render-header="renderHeader">
        <template slot-scope="order">
          <el-checkbox  v-model="order.row.checked"></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="onumber" label="订单编号" width="180"></el-table-column>

      <el-table-column align="center" prop="shopName" label="商品名称" width="140"></el-table-column>

      <el-table-column label="商品图片" width="90" >
        <template slot-scope="order">
          <img :src="order.row.shopPic" width="60" height="60" class="pic"/>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="shopFactory" label="店铺" width="100"></el-table-column>

      <el-table-column align="center" prop="shopNumber" label="商品数量" width="80"></el-table-column>

      <el-table-column align="center" prop="shopPrice" label="商品单价" width="80"></el-table-column>

      <el-table-column align="center" prop="shopCount" label="总金额" width="80"></el-table-column>

      <el-table-column align="center" prop="userAddress" label="配送地址" width="180"></el-table-column>

      <el-table-column align="center" prop="userName" label="收件人" width="80"></el-table-column>

      <el-table-column align="center" prop="userTell" label="联系方式" width="120"></el-table-column>

      <el-table-column label="操作" width="140"  align="center">
        <template slot-scope="order">
          <el-button type="danger" size="small" plain @click="del(order.row.oid)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="background-color: aliceblue; height: 80px;margin: auto;margin-top: 20px">
        <div style="float: right;margin-top: 20px;margin-right: 30px"><el-button v-if="this.statue==2" type="success" plain style="width: 100px" @click="pay()">立即支付</el-button></div>

        <div style="float: right;margin-top: 20px;margin-right: 30px"><el-button type="primary" plain style="width: 100px" @click="cart()">上一步</el-button></div>
      <div style="float: right;margin-top: 20px;font-size:16px;color: red;line-height: 40px;margin-right: 60px">总消费：<span>{{countList}}元</span></div>
    </div>
  </div>
</template>



<script>
  import axios from 'axios'
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  import Cookies from 'js-cookie'

  export default {
    components: {ElButton},
    data () {
      return{
        msg:'订单详情页',
        order:[
            {
              onumber:"",
              shopName:"",
              shopPic:"",
              shopFactory:"",
              shopNumber:"",
              shopPrice:"",
              shopCount:"",
              userAddress:"",
              userName:"",
              userTell:"",
              oid:""
            }
        ],
        count: 0,
        istrue: false,
        statue:'1',
        list:[]
      }
    },
    computed: {
      countList: function () {
        var a = 0;
        for (let i = 0; i < this.order.length; i++) {
          if (this.order[i].checked == true) {

            a += this.order[i].shopCount
          }
        }
        this.count = a;
        return this.count
      }
    },
    watch: {
      istrue: function () {
        if (this.istrue == true) {
          for (let k = 0; k < this.order.length; k++) {
            this.order[k].checked = true;
          }
        } else {
          for (let k = 0; k < this.order.length; k++) {
            this.order[k].checked = false;
          }
        }

      }
    },
    mounted:function () {
      var uid=Cookies.get("uid")
      this.query(uid);
    },
    methods:{
      query:function (uid) {
        if (uid!=null){
          axios.get("api/findAllOrder/"+uid).then(res=> {
            this.order = res.data;
            //console.log(this.order)
          })
        }else {
//          alert("请登录")
          this.$message.error('您还没登录哦，请登录后再试');
          this.$router.push("/userLogin")
        }
      },
      renderHeader: function (h, params) {//实现table表头添加
        var self = this;
        return h('div', [
          h('el-checkbox', {
            on: {
              change: (i) => {
                self.istrue = i;
              }
            }
          }, '全选')
        ]);
      },
      orderFindAll:function () {
        var uid=Cookies.get("uid")
        this.statue=1;
        this.query(uid);
      },
      orderStatue1:function () {
        var uid=Cookies.get("uid")
        this.statue=2;
        if (uid!=null){
          this.msg1="去支付"
          var url="api/findNotPayOrders/"+uid
          axios.get(url).then(res=>{
              this.order=res.data;
          })
        }else {
//          alert("请登录")
          this.$message.error('您还没登录哦，请登录后再试');
          this.$router.push("/userLogin")
        }
      },
      orderStatue2:function () {
        var uid=Cookies.get("uid")
        this.statue=3;
        if (uid!=null){
          this.msg1="删除订单"
          var url="api/findAlreadyPayOrders/"+uid
          axios.get(url).then(res=>{
            this.order=res.data;
          })
        }else {
//          alert("请登录")
          this.$message.error('您还没登录哦，请登录后再试');

          this.$router.push("/userLogin")
        }
      },
      del:function (oid) {
        var uid=Cookies.get("uid")
        var url="api/deleteOrders/"+oid
        axios.post(url).then(res=>{
          if(res.data==1){
            this.query(uid);
          }else{
//            alert("删除失败！")
            this.$message.error('错了哦，删除失败');
          }
        })
      },
      cart:function () {
        this.$router.push("/userCart")
      },
      pay:function () {
        var a = 0;
        for (let i = 0; i < this.order.length; i++) {
          if (this.order[i].checked == true) {
            this.list[a]=this.order[i];
            a++;
          }
        }
        if(this.list.length==1){
          //console.log(this.list)
          axios.post("api/pay",this.list).then(res => {
            this.$router.replace({path:'/applyText',query:{htmls:res.data}})
          })
        }else{
          this.$message.error('只能选择一件商品');
        }

      }
    }
  }

</script>
<style>
  a:link{
    color: #000000;
    text-decoration-line: none;
  }
  a:hover{
    color: red;
  }

</style>
