<template>
  <div style="width: 90%;margin: auto">
    <h1>{{msg}}</h1>
    <div style="height: 50px">
      <el-row :gutter="10">
        <el-col :span="4" :offset="1">
          <div class="grid-content" style="font-weight: bolder;text-align: left">
            <a href="">全部订单</a>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content" style="font-weight: bolder;text-align: left">
            <a href="">待支付</a>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content" style="font-weight: bolder;text-align: left">
            <a href="">待发货</a>
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
      :data="orders"
      stripe
      style="width: 100%">

      <el-table-column
        align="center"
        prop="onumber"
        label="订单编号"
        width="100">
      </el-table-column>

      <el-table-column
        align="center"
        prop="shopName"
        label="商品名称"
        width="100">
      </el-table-column>

      <el-table-column
        label="商品图片"
        width="100" >
        <template slot-scope="user">
          <img :src="ordes.row.shopPic" width="60" height="60" class="pic"/>
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
        width="100">
      </el-table-column>

      <el-table-column
        align="center"
        prop="shopPrice"
        label="单价"
        width="50">
      </el-table-column>

      <el-table-column
        align="center"
        prop="shopCount"
        label="总金额"
        width="100">
      </el-table-column>

      <el-table-column
        align="center"
        prop="userAddress"
        label="配送地址"
        width="100">
      </el-table-column>

      <el-table-column
        align="center"
        prop="userName"
        label="收件人"
        width="100">
      </el-table-column>

      <el-table-column
        align="center"
        prop="userTell"
        label="联系方式"
        width="100">
      </el-table-column>

      <el-table-column
        align="center"
        prop="oStatue"
        label="支付状态"
        width="100">
      </el-table-column>

      <el-table-column label="操作" width="180"  align="center">
        <template slot-scope="user">
          <el-button type="primary" size="small" plain @click="modify()">修改</el-button>
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
        orders:{
          oNumber:"",
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
          this.orders=res.data;
        })
      },
        modify:function () {
          axios.post("api/modifyOrder",this.orders).then(res=>{
              if(res.data.code==1){
                  alert("修改成功！")
                this.$router.push("/userOrder")
              }else{
                  alert("修改失败")
              }
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
