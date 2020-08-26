<template>
 <div class="sign">
 <div class="sign1">
  <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt class="img" />
  <div class="d-f sign1 j-c-s-a">
  <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt="" class="imgs">
   <div>
   <div class="d-f login">
   <div>账号登录</div>
   <div class="d-f">
   <div class="f-s-12">手机动态码登录</div>
   <i class="iconfont icon-weibiaoti-1_shouji"></i>
   </div>
   </div>
     <el-input
  placeholder="请输入内容"
  v-model="input"
  clearable>
</el-input>
     <el-input
  placeholder="请输入内容"
  v-model="inputs"
  clearable>
</el-input>
<div>忘记密码?</div>
<div>登录</div>
<div>提示：未注册美团账号的手机号，登录时将自动注册美团账号，且代表您已同意《美团点评用户服务协议》《美团点评隐私政策》</div>
<div class="d-f">
<div></div>
<div>用合作网站账号登录</div>
<div></div>
</div>
<div class="d-f"></div>
<img src="/account/connect/tencent" alt="">
<img src="" alt="">
   </div>
  </div>
 </div>

 </div>
</template>

<script>
 export default {
   name:'',
   props:{

    },
   data () {
     return {
    username:'',
    input:'',
    inputs:''
   }
   },
   components: {

   },
   methods: {

   },
   mounted() {
   this.username=this.$route.query.username
   console.log(this.username);
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.sign{
    width: 100%;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
}
.sign1{
    width: 960px;
}
.img {
  width: 110px;
  height: 40px;
  margin-top: 30px;
}
.imgs{
    width: 480px;
    height: 370px;
}
.login{
    width: 270px;
    justify-content: space-around;
    
}
</style>