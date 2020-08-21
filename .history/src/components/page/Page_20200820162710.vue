<template>
<!-- 头部 -->
  <div class="d-f j-c-c home">
    <div class="d-f page a-i-c">
      <div class="d-f">
        <div class="d-f city">
          <i class="iconfont icon-dingwei"></i>
          <div class="f-s-12">{{positions}}</div>
          <div class="switch f-s-12 hovers">切换城市</div>
          <div class="f-s-12">[</div>
          <div class="f-s-12 hovers">新津县</div>
          <div class="f-s-12 hovers">崇州</div>
          <div class="f-s-12 hovers">彭州</div>
          <div class="f-s-12">]</div>
        </div>
        <div class="d-f sign">
        <div class="f-s-12 hovsr">立即登录</div>
        <div class="f-s-12 hovers">注册</div>
        </div>
      </div>
      <div class="d-f information">
      <div class="suspension">
       <div class="f-s-12">我的美团</div>
       <div class="suspension1">
       <div class="hovers">我的美团</div>
       <div>我的订单</div>
       <div>我的收藏</div>
       <div>抵用券</div>
       <div>账户设置</div>
       </div>
      </div>
     
      <div class="f-s-12 hovers">手机app</div>
      <div class="business">
      <div class="f-s-12">商家中心</div>

      
      </div>
      
      <div class="f-s-12">美团规则</div>
      <div class="f-s-12">网站导航</div>
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
      positions: "",
    };
  },
  components: {},
  methods: {},
  mounted() {
    this.$api
      .position()
      .then((res) => {
        let positions = JSON.parse(res.data);
        this.positions = positions.city;
        console.log(res);
        console.log(this.positions);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.page {
  width: 960px;
  justify-content: space-between;
}
.home {
  width: 100%;
  top: 0;
  left: 0;
  height: 40px;
  background: rgb(245, 245, 245);
}
.switch {
  width: 60px;
  height: 20px;
  border: 1px solid rgb(235, 235, 235);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -2px;
}
.city {
  justify-content: space-around;
  width: 260px;
}
.sign{
  justify-content: space-around;
  width: 100px;
}
.hovers:hover{
  color: orange;
  cursor: pointer;
}
.hovsr{
  color: orange;
  cursor: pointer;
}
.information{
  justify-content: space-around;
  width: 380px;
}
.suspension1{

  display: none;
}
.suspension:hover .suspension1{
  display: block;
    width: 78px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
  position: absolute;
  z-index: 99999;
  font-size: 12px;
  box-shadow: 0px 5px 8px #9999;
  top: 5px;
  margin-left: -10px;
}
</style>