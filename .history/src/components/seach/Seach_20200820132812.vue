<template>
  <div class="d-f j-c-c">
    <div class="seach">
      <div class="d-f p-r">
        <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt class="img" />
        <div class="inputs d-f">
          <el-input placeholder="请输入内容" v-model="input" clearable class="input"></el-input>
        <div class="button"><i class="iconfont icon-search"></i></div>
        </div>
      </div>
      <div class="assortment m-t-30 d-f">
      <div class="assortment1"><div class="m-l-10 f-w">全部分类</div></div>
      <div class="d-f">
      <div>美团外卖</div>
      <div>猫眼电影</div>
      <div>美团酒店</div>
      <div>名宿/酒店</div>
      <div></div>
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
    
}
.inputs{
  position: absolute;
    left: 30%;
}
.button{
    width: 80px;
    height: 40px;
    background: orange;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 5px;
     border-bottom-right-radius: 5px;
}
.icon-search{
    font-size: 20px;
}
.assortment1{
    width: 200px;
    height: 50px;
    border: 1px solid #E5E5E5;
    border-bottom: none;
    display: flex;
    align-items: center;
}
</style>