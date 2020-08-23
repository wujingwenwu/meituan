<template>
  <div>
    <page :positions="positions"></page>
    <div class="city">
      <div class="city1">
        <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt class="img" />
        <div class="d-f">
        
        </div>
      </div>
    </div>
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
</style>