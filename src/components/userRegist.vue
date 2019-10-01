<template>
  <div>
    <h1 >{{ msg }}</h1>
    <!--<from>-->
      <!--<table style="margin-left: 540px">-->
        <!--<tr>-->
          <!--<td>用户名：</td>-->
          <!--<td><input type="text" v-model="user.username"></td>-->
        <!--</tr><tr>-->
          <!--<td>密码：</td>-->
          <!--<td><input type="text" v-model="user.password"></td>-->
        <!--</tr>-->
        <!--<tr>-->
          <!--<td><input type="button" @click="add()" value="提交"></td>-->
         <!--</tr>-->
      <!--</table>-->

    <!--</from>-->

    <el-form :model="users" status-icon :rules="rules" ref="users" label-width="100px"
             style="width: 35%;margin: auto" class="demo-ruleForm"
             >
      <!--Content-Type="multipart/form-data"-->
      <el-form-item label="用户名" prop="uName" style="text-align: left" >
        <el-input type="text" v-model="users.uName" placeholder="请设置用户名"></el-input>
      </el-form-item>
      <!--<el-form-item label="头像"  style="text-align: left">-->
        <!--&lt;!&ndash;<el-input type="file" v-model="file" name="file"></el-input>&ndash;&gt;-->


        <!--&lt;!&ndash;:on-preview="handlePictureCardPreview"&ndash;&gt;-->
      <!--<el-upload-->
        <!--action="http://localhost/add"-->
        <!--list-type="picture-card"-->
        <!--ref="add"-->
        <!--:multiple="false"-->
        <!--:auto-upload="false"-->
        <!--:on-change="fileChange"-->
      <!--&gt;-->
        <!--<i class="el-icon-plus"></i>-->
      <!--</el-upload>-->
        <!---->
      <!--&lt;!&ndash;<el-dialog :visible.sync="dialogVisible">&ndash;&gt;-->
        <!--&lt;!&ndash;<img width="100%" :src="dialogImageUrl" alt>&ndash;&gt;-->
      <!--&lt;!&ndash;</el-dialog>&ndash;&gt;-->

      <!--</el-form-item>-->

      <!--<label class="el-form-item__label" style="width: 80px;">上传图片</label>-->
      <!--&lt;!&ndash;elementui的上传图片的upload组件&ndash;&gt;-->
      <!--<el-upload-->
        <!--class="upload-demo"-->
        <!--:before-upload="beforeupload"-->
        <!--drag-->
        <!--action="https://jsonplaceholder.typicode.com/posts/"-->
        <!--style="margin-left:80px;">-->
        <!--<i class="el-icon-upload"></i>-->
        <!--<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>-->
        <!--&lt;!&ndash;<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>&ndash;&gt;-->
      <!--</el-upload>-->
      <el-form-item label="验证码" prop="code" style="text-align: left">
        <el-input type="text" v-model="code" placeholder="请输入验证码" style="width: 290px"></el-input>
        <el-container id='app'>
          <el-button type="primary" plain @click="sendMail()" :disabled="isDisabled">{{buttonName}}</el-button>
        </el-container>
      </el-form-item>
      <el-form-item label="密码" prop="uPassword" style="text-align: left">
        <el-input type="password" v-model="users.uPassword"  autocomplete="off" placeholder="请设置密码"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass" style="text-align: left">
        <el-input type="password" v-model="users.checkPass" autocomplete="off"  placeholder="请输入确认密码"></el-input>
      </el-form-item>
      <el-form-item label="注册时间" prop="createTime" style="text-align: left" >
        <el-input type="date" v-model="users.createTime"></el-input>
      </el-form-item>
      <el-form-item label="联系方式" prop="uTell" style="text-align: left" >
        <el-input type="text" v-model="users.uTell" placeholder="请填写联系方式"></el-input>
      </el-form-item>
      <el-form-item label="家庭住址" prop="uAddress" style="text-align: left" >
        <el-input type="text" v-model="users.uAddress" placeholder="请填写家庭住址"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" plain @click="add()">提交</el-button>
        <el-button type="primary" plain @click="resetForm()">重置</el-button>
        <el-button type="primary" plain @click="back()">返回</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
  new Vue({
    el:'#app',
    data:{
      buttonName: "发送短信",
        isDisabled: false,
        time: 60
    },
    methods:{
      sendMail:function () {
        alert(this.users.uName);
//        this.$refs['code'].validate((valid) => {
//          if(valid){
        axios.post("api/sendMail",this.users).then(res=>{

          if(res.data==true){
            alert("发送成功！");
          }else{
            alert("发送失败！");
            let me = this;
            me.isDisabled = true;
            let interval = window.setInterval(function() {
              me.buttonName = '（' + me.time + '秒）后重新发送';
              --me.time;
              if(me.time < 0) {
                me.buttonName = "重新发送";
                me.time = 60;
                me.isDisabled = false;
                window.clearInterval(interval);
              }
            }, 1000);

          }
        })
//          }else{
//            console.log('error submit!!');
//            return false;
//          }
//        })
      },
    }
  });
  import axios from 'axios'
  import ElRadio from "../../node_modules/element-ui/packages/radio/src/radio";

  export default{
    components: {ElRadio},
    data(){
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }else{
            return callback();
        }
      }
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.users.checkPass !== '') {
            this.$refs.users.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.users.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var checkPic = (rule, value, callback) => {
        if (!this.$refs.user) {
          return callback(new Error('用户名不能为空'));
        }
      };
      var checkUaddress = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('家庭住址不能为空'));
        }else{
            return callback();
        }
      };
      var checkUtell = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('联系方式不能为空'));
        }else{
          return callback();
        }
      };
//      var checkCode = (rule, value, callback) => {
//        if (!value) {
//          return callback(new Error('验证码不能为空'));
//        }else{
//          return callback();
//        }
//      };
      return{
        msg: '注册',
        code:'',
        file:'',
        tbSysUser:{
            uId:1,
            uName:'',
            uPassword:'',
            checkPass:'',
            pic:'',
            state:'',
            createTime:'',
            uAddress:'',
            uTell:''
          },
          rules: {
          uName: [{ validator: checkName, trigger: 'blur' }],
          uPassword: [{ validator: validatePass, trigger: 'blur' }],
          checkPass: [{ validator: validatePass2, trigger: 'blur' }],
//          pic: [{ validator: checkPic, trigger: 'blur' }],
          uAddress: [{ validator: checkUaddress, trigger: 'blur' }],
          uTell: [{ validator: checkUtell, trigger: 'blur' }],
//            code:[{validator:checkCode,trigger:'blur'}]

        }
      };
    },
    methods:{
        back:function(){
            this.$router.push("/");
        },

        add:function(){
//          const formData = new FormData();
//          Object.keys(this.user).forEach((ele) => {
//            formData.append(ele, this.user[ele]);
//          });
//          formData.append('file', this.files);
          this.$refs['users'].validate((valid) => {
            if(valid){
             axios.post("api/add",{users:this.users,code:this.code}).then(res=>{
               if(res.data==true){
                   alert("注册成功！");
                 this.$router.push("/")
               }else{
                 alert("注册失败！")
               }
             })
            }else{
              console.log('error submit!!');
              return false;
            }
          })
        },
//        add:function(){
//
////          var url="api/add"
//          var url="http://localhost/add"
//          axios.post(url,this.user).then(res=>{
//            if (res.data != null) {
//              alert("添加成功！")
//              this.$router.push({name: "userlist"})
//            } else {
//              alert("添加失败！")
//            }
//          })
//        },
      resetForm() {
        this.$refs['tbSysUser'].resetFields();
      },
      fileChange(file) {
        const typeArr = ['image/png', 'image/gif', 'image/jpeg', 'image/jpg'];
        const isJPG = typeArr.indexOf(file.raw.type) !== -1;
        // image/png, image/jpeg, image/gif, image/jpg
        const isLt3M = file.size / 1024 / 1024 < 3;

        if (!isJPG) {
          this.$message.error('只能是图片!');
          this.$refs.upload.clearFiles();
          this.files = null;
          return;
        }
        if (!isLt3M) {
          this.$message.error('上传图片大小不能超过 3MB!');
          this.$refs.upload.clearFiles();
          this.files = null;
          return;
        }
        this.files = file.raw;
        console.log(file);
      },


    }
  }

</script>
