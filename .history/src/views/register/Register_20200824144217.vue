<template>
  <div>
    <div class="register">
      <div class="register1">
        <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt class="img" />
        <div class="d-f">
          <div>已有美团账号?</div>
          <div class="sign m-l-10 d-f j-c-c a-i-c">登录</div>
        </div>
      </div>
    </div>
    <div class="show"></div>
    <div class="register">
    <div class="r-register m-t-20">
     <div class="d-f">
     <div class="m-t-10">用户名</div>
     <el-input
  placeholder="请输入用户名"
  v-model="input"
  clearable class="input m-l-40" @change="change">
</el-input>
<div class="f-s-12 m-l-10 m-t-10">注册成功后，全美团通用</div>
<div v-if="input.length !==11 && input !==''" class="d-f"> <i class="iconfont icon-shibai"></i><div class="m-l-10">请输入正确的11位手机号码</div></div>
<div v-if="input.length ===11 && input !==''">
<i class="iconfont icon-chenggong"></i>
</div>
     </div>
        <div class="d-f m-t-20">
     <div class="m-t-10">邮箱</div>
     <el-input
  placeholder="请输入邮箱"
  v-model="inputs"
  clearable class="input m-l-55">
</el-input>
     </div>
        <div class="d-f m-t-20">
     <div class="m-t-10">创建密码</div>
     <el-input
  placeholder="请创建密码"
  v-model="inputss"
  clearable class="input m-l-25">
</el-input>

     </div>
        <div class="d-f m-t-20">
     <div class="m-t-10">确认密码</div>
     <el-input
  placeholder="请再次确认密码"
  v-model="inputr"
  clearable class="input m-l-25">
</el-input>
     </div>
     <div class="agree d-f j-c-c a-i-c f-w" @click="registers">同意以下协议并注册</div>
     <a class="agreement" href="https://rules-center.meituan.com/rules-detail/4">《美团点评用户服务协议》 《美团点评隐私政策》</a>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
        input:'',
        inputr:'',
        inputs:'',
        inputss:''
    };
  },
  components: {},
  methods: {
      change(value){
       console.log(value);
       this.input=value
      },
      //注册
      registers(){
       console.log(this.input);
      }
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.register {
  width: 100%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.register1 {
  width: 960px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
}
.img {
  width: 110px;
  height: 40px;
}
.sign {
  width: 45px;
  height: 25px;
  background: orange;
}
.show{
    width: 100%;
  left: 0;
  right: 0;
  height: 2px;
  background: #9999; 
  margin-top: 10px;
}
.r-register{
   width: 960px;
  padding: 10px 0; 
}
.input{
    width: 248px;
    height: 24px;
}
.agree{
    width: 200px;
    height: 40px;
    background: orange;
    margin-top: 20px;
    margin-left: 88px;
}
.agreement{
    margin-top: 30px;
    font-size: 12px;
    color: orange;
    margin-left: 50px;
    text-decoration: none;
}
</style>