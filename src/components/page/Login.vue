<template>
    <div class="login-wrap">
       
        <div class="ms-login">
             <div class="ms-title">后台管理系统</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                 <!-- <el-form-item prop="region">
                    <select style="width:100px;height:26px;" v-model="ruleForm.region">
                        <option value ="gly">管理员</option>
                        <option value ="yg">员工</option>
                    </select>
                </el-form-item> -->
                <div class="rememberpw">
                    <label>记住密码</label>
                    <input type="checkbox" name=""  v-model="checked">
                </div>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
                <!-- <p style="font-size:12px;line-height:30px;color:#999;">Tips : 用户名和密码随便填。</p> -->
            </el-form>
        </div>
    </div>
</template>

<script>
import { XHRGet,XHRPost } from '../../api/ajax.js';
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: ''
                    // region:"gly"
                },
                checked:false,
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        mounted(){
                this.getCookie()
                },
        methods: {
             submitForm(formName) {
                //保存的密码
                    var name = this.ruleForm.username;
                    var pass = this.ruleForm.password;
                    alert(this.checked);
                     if(this.checked == true){
                          this.setCookie(name,pass,7);
                        }else{
                         this.clearCookie();
                    }
                const self = this;
                let data = this.ruleForm;
               // XHRGet('./login.php',data, function (response) {
               //     console.log(response)
                //   if (response.data === "登录成功") {
                    if (true) {
                        localStorage.setItem('ms_username',self.ruleForm.username);
                        self.$router.push('/readme');
                    } else {
                         console.log('error submit!!');
                        return false;
                    }
                //})

            },
            //设置cookie
                          setCookie(c_name,c_pwd,exdays) {
                            var exdate=new Date();
                            exdate.setTime(exdate.getTime() + 24*60*60*1000*exdays);
                           
                            window.document.cookie="phone"+ "=" +c_name+";path=/;expires="+exdate.toGMTString();
                            window.document.cookie="pwd"+"="+c_pwd+";path=/;expires="+exdate.toGMTString();
                          },
                          
                          //读取cookie
                          getCookie:function () {
                            if (document.cookie.length>0) {
                              var arr=document.cookie.split('; ');
                              for(var i=0;i<arr.length;i++){
                                var arr2=arr[i].split('=');//切割            
                                if(arr2[0]=='phone'){
                                  this.ruleForm.username = arr2[1];
                                }else if(arr2[0]=='pwd'){
                                  this.ruleForm.password = arr2[1];
                                }
                              }
                            }
                          },
                          //清除cookie
                          clearCookie:function () {
                            this.setCookie("","",-1);
                          }
                        
                        
                    //////
        }
    }
</script>

<style scoped>
<style>
    /*头部样式*/
    .index_header{
        width:100%;
        height:100px;
        /*background-image: linear-gradient(90deg, #224157 0%, #324157 100%);*/
        backround:#324157;
        line-height:100px;
        text-align: center;
        font-weight: bold;
        color:#fff;
        top:50px;
    }
    .index_header_title{
        width:100%;
        height:100%;
    }
    .time{
        width:30%;
        height:30px;
        line-height:30px;
        top:60px;
        left:60%;
    }
    .rlt{
        position: relative;
    }
    .abs{
        position: absolute;
    }
    .font30{
        font-size:30px;
    }
    /**/
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
        background-image: url('../../../static/img/login_bg.jpg');
        background-size: cover;
        background-position: center;
        position: relative;
    }
    .ms-title{
       /* position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;*/
        /* padding-right: 15%;*/
        /*color: #fff;*/
        text-align: center; 
        font-size:30px;
        margin-bottom: 20px;

    }
    .ms-login{
        position: absolute;
        right:10%;
        top:50%;
        width:350px;
        height:300px;
        margin:-150px 0 0 0;
        padding:10px 40px 40px 40px;
        border-radius: 5px;
        background: #fff;
    }
    .login-btn,.region-btn{
        text-align: center;
    }
    .login-btn button,.region-btn button{
        width:100%;
        height:36px;
    }
    .rememberpw{
        margin-bottom:20px;
    }
</style>