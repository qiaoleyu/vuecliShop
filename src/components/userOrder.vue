<template>
  <div style="width: 90%;margin: auto">
    <h1>{{msg}}</h1>
    <el-row :gutter="10">
      <el-col :span="6" style="height: 40px">
        <div class="grid-content" style="line-height: 40px;font-weight: bolder;text-align: left">全部订单</div>
      </el-col>
    </el-row>
    <hr>
    <el-row :gutter="10">
      <el-col :span="6" style="height: 40px">
        <div class="grid-content" style="line-height: 40px;font-weight: bolder;text-align: left">店铺：</div>
      </el-col>
    </el-row>
    <hr>
    <table style="width: 100%" border="1">
      <tr>
        <td>订单编号</td>
        <td>商品名称</td>
        <td>商品图片</td>
        <td>商品数量</td>
        <td>商品单价</td>
        <td>商品总金额</td>
        <td>配送地址</td>
        <td>发货地址</td>
        <td>联系方式</td>
        <td>操作</td>
      </tr>
      <tr>
        <td>0</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>
          <el-button type="primary" size="small" plain @click="modify()">修改</el-button>
          <el-button type="danger" size="small" plain @click="del()">删除</el-button>
        </td>
      </tr>
    </table>

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
          msg:'订单详情页'

      }
    },methods:{
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
