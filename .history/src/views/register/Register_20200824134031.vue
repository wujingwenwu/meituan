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
    <div class="r-register">
    
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
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
  display: flex; 
}
</style>