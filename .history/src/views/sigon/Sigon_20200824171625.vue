<template>
  <div class="sign">
    <div class="sign1">
      <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt class="img" />
      <div class="d-f sign1 j-c-s-a">
        <div>
          <img
            src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
            alt
            class="imgs"
          />
        </div>
        <div class="m-l-30">
          <div class="d-f login">
            <div>账号登录</div>
            <div class="d-f">
              <div class="f-s-12" v-if="flag===true">手机动态码登录</div>
              <div class="f-s-12" v-if="flag===false">密码登录</div>
              <i class="iconfont icon-weibiaoti-1_shouji"></i>
            </div>
          </div>
          <el-input placeholder="手机号" v-model="input" class="input m-t-20" clearable></el-input>
          <div v-if="flag===false">
          <el-input placeholder="密码" v-model="inputs" class="input m-t-20" clearable prefix-icon="el-icon-unlock"></el-input>
          </div>
          <div v-if="flag===true">
          <el-input placeholder="动态码" v-model="inputs" class="input m-t-20" clearable prefix-icon="el-icon-unlock"></el-input>
          </div>
          <div class="forget">忘记密码?</div>
          <div class="login1">登录</div>
          <div class="size" v-if="flag===false">提示：未注册美团账号的手机号，登录时将自动注册美团账号，且代表您已同意《美团点评用户服务协议》《美团点评隐私政策》</div>
          <div v-if="flag===true" class="d-f">
          <div>还没有账号?</div>
          <div>免费注册</div>
          </div>
          <div class="d-f m-t-20">
            <div class="shown"></div>
            <div>用合作网站账号登录</div>
            <div class="shown"></div>
          </div>
          <div class="d-f"></div>
          <img src="../../img/2EAJ$5B~O4NI@RVQ_U]HYBV.png" alt="" class="logo m-l-30 m-t-10">
          <img src="../../img/XJ]LMJX@G67KLV(61ELB(%0.png" alt class="logo1 m-t-10">
        </div>
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
      username: "",
      input: "",
      inputs: "",
      flag:true,
    };
  },
  components: {},
  methods: {},
  mounted() {
    this.username = this.$route.query.username;
    console.log(this.username);
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.sign {
  width: 100%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
}
.sign1 {
  width: 960px;
}
.img {
  width: 110px;
  height: 40px;
  margin-top: 30px;
}
.imgs {
  width: 480px;
  height: 370px;
}
.login {
  width: 270px;
  justify-content: space-around;
}
.input {
  width: 270px;
}
.forget {
  margin-left: 200px;
  margin-top: 20px;
  color: orange;
}
.login1{
    width: 270px;
    height: 40px;
    background: orange;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-top: 20px;
    cursor: pointer;
}
.size{
    width: 270px;
    flex-wrap: wrap;
    margin-top: 20px;
}
.shown{
    width: 40px;
    height: 1px;
    background: #999;
    margin-top: 10px;
}
.logo{
    width: 30px;
    height: 30px;
}
.logo1{
    width: 30px;
    height: 30px;
    margin-left: 80px;
    
}
</style>