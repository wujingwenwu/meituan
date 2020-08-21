<template>
  <div class="d-f j-c-c">
    <div class="seach">
      <div class="d-f p-r">
        <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt class="img" />
        <el-input placeholder="请输入内容" v-model="input" clearable class="input"></el-input>
        <div ></div>
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
.img {
  width: 126px;
  height: 46px;
}
.seach {
  width: 960px;
  margin-top: 40px;
}
.input{
    width: 350px;
    position: absolute;
    left: 30%;
}
</style>