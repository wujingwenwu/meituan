<template>
  <div>
    <page :positions="positions"></page>
    <div class="city">
      <div class="city1">
        <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt class="img" />
        <div class="d-f search">
          <el-input placeholder="请输入商家或地点" v-model="input" clearable class="input"></el-input>
          <div class="button">
            <i class="iconfont icon-search"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="shadow"></div>
  </div>
</template>

<script>
import page from "../../components/page/Page";
export default {
  name: "",
  props: {},
  data() {
    return {
      positions: "",
      input: "",
    };
  },
  components: {
    page,
  },
  methods: {},
  mounted() {
    this.$api
      .position()
      .then((res) => {
        let positions = JSON.parse(res.data);
        this.positions = positions.city;
        // console.log(res);
        // console.log(this.positions);
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
.city {
  width: 100%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
}
.city1 {
  width: 960px;
  margin-top: 20px;
  display: flex;
}
.img {
  width: 126px;
  height: 46px;
}
.button {
  width: 80px;
  height: 40px;
  background: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.input {
  width: 400px;
  height: 40px;
}
.search {
  margin-left: 100px;
}
</style>