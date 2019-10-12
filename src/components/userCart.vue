<template>
<div id="app1" style="width: 90%;margin: auto">
  <h1>{{msg}}</h1>
  <el-row :gutter="10">
    <el-col :span="6" style="height: 40px">
      <div class="grid-content" style="line-height: 40px;font-weight: bolder;text-align: left">全部商品</div>
    </el-col>
  </el-row>
  <hr>
  <br>
  <el-table :data="list" border align="center" v-show="list.length" highlight-current-row >
    <el-table-column label="复选框" width="100" style="color:red"  :render-header="renderHeader">
      <template slot-scope="scope">
        <el-checkbox  v-model="scope.row.checked"></el-checkbox>
      </template>
    </el-table-column>
    <el-table-column prop="shopName" label="商品信息" width="160" align="center" >
    </el-table-column>
    <el-table-column label="图片" width="180" align="center" >
      <template slot-scope="scope">
      <el-image :src="scope.row.shopPic" style="height: 60px;width: 60px"></el-image>
      </template>
    </el-table-column>
    <el-table-column prop="shopFactory" label="生产厂家" width="160" align="center" >
    </el-table-column>
    <el-table-column type="BigDecimal" prop="shopPrice" label="单价(元)" width="160" align="center"  >
    </el-table-column>
    <el-table-column label="数量(件)" align="center" width="200">
      <template slot-scope="scope">
        <el-input-number  v-model="scope.row.shopCount" @change="handleChange($event,scope.$index)" :min="1"  label="描述文字"></el-input-number>
      </template>

    </el-table-column>
    <el-table-column label="金额(元)" align="center" >
      <template slot-scope="scope">
        <div>{{scope.row.shopTotal}}</div>

      </template>
    </el-table-column>
    <el-table-column label="操作" align="center" >
      <template slot-scope="scope">
        <el-popover placement="top" width="160" v-model="scope.row.remove">
          <p>亲！确定删除此商品吗？</p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" plain @click="scope.row.remove=false">取消</el-button>
            <el-button type="primary" size="mini" plain @click="removeId(scope.row)">确定</el-button>
          </div>
          <el-button  type="danger" plain slot="reference">删除</el-button>
        </el-popover>

      </template>

    </el-table-column>
  </el-table>
  <div v-show="list.length==0" style="font-size:20px;color:red;display:none">商品全部为空</div>


  <div style="background-color: aliceblue; height: 80px;margin: auto;margin-top: 20px">
    <div style="float: right;margin-top: 20px;margin-right: 30px"><el-button type="success" plain style="width: 120px" @click="submitForm()">立即购买</el-button></div>
    <div style="float: right;margin-top: 20px;margin-right: 30px"><el-button type="primary" plain style="width: 120px" @click="back()">上一步</el-button></div>
    <div style="float: right;margin-top: 20px;color: red;line-height: 40px;margin-right: 60px">总金额：<span>{{countList}}元</span></div>
  </div>

</div>
</template>
<style>
  .warning-row {
    background-color: aqua !important;
  }
  .el-table-column{
    text-align: center;
  }
</style>

<script>

  import axios from 'axios'
  import ElImage from "../../node_modules/element-ui/packages/image/src/main";
  import Cookies from 'js-cookie'
  export default{
    components: {
        ElImage,
    },
//    el: "#app1",
      data() {
        var checkAge = (rule, value, callback) => {
          if (!value) {
            return callback(new Error('不能为空或者0'));
          }
          setTimeout(() => {
            if (!Number.isInteger(value)) {
              callback(new Error('请输入数字值'));
            } else {
              if (value < 0) {
                callback(new Error('不能小于0'));
              } else {
                callback();
              }
            }
          }, 1000);
        };
        return {
            msg:'购物车',
          list: [
            {
              cid:'',
              uid:'',
              shopName:'',
              shopPrice:'',
              shopPic:'',
              shopCount:'',
              shopTotal:'',
              shopFactory:""
            }
          ],
          count: '',
          istrue: false,
          list1:[
            {
              cid:'',
              uid:'',
              shopName:'',
              shopPrice:'',
              shopPic:'',
              shopCount:'',
              shopTotal:'',
              shopFactory:""
            }
          ]
        }
      },
      computed: {
        countList: function () {

          var a = new Number(0);
          for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].checked == true) {

              a = Number(a)+Number((this.list[i].shopPrice * this.list[i].shopCount).toFixed(2))
            }
          }
          this.count = a;
          return this.count
        }
      },
      watch: {
        istrue: function () {
          if (this.istrue == true) {
            for (let k = 0; k < this.list.length; k++) {
              this.list[k].checked = true;
            }
          } else {
            for (let k = 0; k < this.list.length; k++) {
              this.list[k].checked = false;
            }
          }

        }
      },
    mounted:function () {
      var uid=Cookies.get("uid");
       this.query(uid);
    },
      methods: {
        query:function (uid) {
            if (uid!=null){
              axios.get("api/findAllCart/"+uid).then(res=>{
                this.list=res.data;
              })
            }else {
              this.$message.error('错了哦，请登录后再试');
              this.$router.push('/')
            }
        },
        removeId(row) {
          axios.get("api/deleteCart/"+row.cid).then(res=>{
            if (res.data!=null){
              var uid=Cookies.get("uid");
              this.query(uid);
            }else {
              this.$message.error('错了哦，删除失败');

            }

          });
        },
        handleChange(event,index) {

            this.list[index].shopTotal = (event * this.list[index].shopPrice).toFixed(2);

            this.list[index].shopCount = event;

            axios.post("api/updateCart", this.list[index]).then(res => {


            })
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
        back:function () {
          this.$router.push("/")
        },
        submitForm:function () {
          var uid=Cookies.get("uid")
          var a = 0;
          for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].checked == true) {
              this.list1[a]=this.list[i];
              a++;
            }
          }
          axios.post("api/userOrder2/"+uid, this.list1).then(res=>{
            if(res.data!=null){
              this.$router.push("/userOrder");
            }else{
              this.$message.error('错了哦，订单生成失败');
              this.$router.push("/userCart");
            }
          })
        }

      }
  }
</script>
