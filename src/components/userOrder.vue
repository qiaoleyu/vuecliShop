<template>
  <div style="width: 95%;margin: auto">
    <h1>{{msg}}</h1>
    <div style="height: 50px">
      <el-row :gutter="10">
        <el-col :span="4" :offset="1">
          <div class="grid-content" style="font-weight: bolder;text-align: left">
            <a @click="orderFindAll()">全部订单</a>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content" style="font-weight: bolder;text-align: left">
            <a @click="orderStatue1()">待支付</a>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content" style="font-weight: bolder;text-align: left">
            <a @click="orderStatue2()">待发货</a>
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
    <el-table
      align="center"
      :data="order"
      stripe
      style="width: 100%">

      <el-table-column
        align="center"
        prop="onumber"
        label="订单编号"
        width="180">
      </el-table-column>

      <el-table-column
        align="center"
        prop="shopName"
        label="商品名称"
        width="140">
      </el-table-column>

      <el-table-column
        label="商品图片"
        width="90" >
        <template slot-scope="order">
          <img :src="order.row.shopPic" width="60" height="60" class="pic"/>
        </template>
      </el-table-column>

      <el-table-column
        align="center"
        prop="shopFactory"
        label="店铺"
        width="100">
      </el-table-column>

      <el-table-column
        align="center"
        prop="shopNumber"
        label="商品数量"
        width="80">
      </el-table-column>

      <el-table-column
        align="center"
        prop="shopPrice"
        label="商品单价"
        width="80">
      </el-table-column>

      <el-table-column
        align="center"
        prop="shopCount"
        label="总金额"
        width="80">
      </el-table-column>

      <el-table-column
        align="center"
        prop="userAddress"
        label="配送地址"
        width="180">
      </el-table-column>

      <el-table-column
        align="center"
        prop="userName"
        label="收件人"
        width="80">
      </el-table-column>

      <el-table-column
        align="center"
        prop="userTell"
        label="联系方式"
        width="120">
      </el-table-column>

      <el-table-column label="操作" width="140"  align="center">
        <template slot-scope="order">
          <el-button type="danger" size="small" plain @click="del()">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="background-color: aliceblue; height: 80px;margin: auto;margin-top: 20px">

      <div style="float: right;margin-top: 20px;margin-right: 60px"><el-button type="warning" plain style="width: 100px" @click="reback()">取消</el-button></div>
      <div style="float: right;margin-top: 20px;margin-right: 30px"><el-button type="success" plain style="width: 100px" @click="pay()">立即支付</el-button></div>
      <div style="float: right;margin-top: 20px;margin-right: 30px"><el-button type="primary" plain style="width: 100px" @click="cart()">上一步</el-button></div>
      <div style="float: right;margin-top: 20px;font-size:16px;color: red;line-height: 40px;margin-right: 60px">总消费：<span>{{countList}}元</span></div>
    </div>
  </div>
</template>



<script>
  import axios from 'axios'
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";

  export default {
    components: {ElButton},
    data () {
      return{
        msg:'订单详情页',
        order:{
          onumber:"",
          shopName:"",
          shopPic:"",
          shopFactory:"",
          shopNumber:"",
          shopPrice:"",
          shopCount:"",
          userAddress:"",
          userName:"",
          userTell:""
        }
      }
    },
    mounted:function () {
      this.query();
    },
    methods:{
      query:function () {
        axios.get("api/findAllOrder").then(res=>{
          this.order=res.data;
        })
      },
      del:function () {
        axios.post("api/delOrder",this.orders).then(res=>{
          if(res.data.code==1){
            alert("删除订单成功！")
            this.$router.push("/userCart")
          }else{
            alert("删除失败")
          }
        })
      },
      cart:function () {
        this.$router.push("/userCart")
      },
      pay:function () {
        axios.post("api/payOrder",this.orders).then(res=>{
            if(res.data.code==1){
                alert("支付成功，等待返回购物车页面")
                this.$router.push("/userCart")
            }else{
                alert("支付失败，请重选择支付")
                this.$router.push("/userOrder")
            }
        })
      },
      reback:function () {
        axios.post("api/delOrder",this.orders).then(res=>{
            if(res.data.code==1){
                this.$router.push("/userCart");
            }
        })
      },
      orderFindAll:function(){
        axios.post("api/orderFindAll").then(res=>{

        })
      },
      orderStatue1:function(){
        axios.post("api/orderStatue1",{oStatue:0}).then(res=>{

        })
      },
      orderStatue2:function(){
        axios.post("api/orderStatue2",{oStatue:1}).then(res=>{

        })
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
