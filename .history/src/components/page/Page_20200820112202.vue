<template>
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
      <div class="d-f">
      <div>我的美团</div>
      <div>手机app</div>
      <div></div>
      <div></div>
      <div></div>
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
        this.positions = positions.province;
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
</style>