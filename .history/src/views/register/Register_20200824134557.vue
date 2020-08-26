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
     <div class="m-t-10">手机号</div>
     <el-input
  placeholder="请输入手机号"
  v-model="input"
  clearable class="input m-l-10">
</el-input>
<div class="f-s-12"></div>
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
        input:''
    };
  },
  components: {},
  methods: {},
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
</style>