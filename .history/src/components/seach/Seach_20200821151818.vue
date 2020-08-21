<template>
<!-- 首页搜索 -->
  <div class="d-f j-c-c">
    <div class="seach">
      <div class="d-f p-r">
        <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt class="img" />
        <div class="inputs d-f">
        <div class="i-history">
         <el-input placeholder="请输入内容" v-model="input" clearable class="input" @input="inputs"></el-input>
         <div class="history" v-if="flag===true"></div>
        </div>
        <div class="button"><i class="iconfont icon-search"></i></div>
        </div>
      </div>
      <div class="assortment m-t-30 d-f">
      <div class="assortment1"><div class="m-l-10 f-w">全部分类</div></div>
      <div class="d-f details">
      <div class="f-w hov2">美团外卖</div>
      <div  class="f-w hov1">猫眼电影</div>
      <div  class="f-w hov1">美团酒店</div>
      <div  class="f-w hov2">名宿/酒店</div>
      <div  class="f-w hov1">商家入驻</div>
      <div  class="f-w hov2">美团公益</div>
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
        input:'',
        flag:false,
    };
  },
  components: {},
  methods: {
    inputs(value){
      this.flag=true
    }
  },
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
.history{
  width: 350px;
  height: 20px;
  background: white;
  box-shadow: 0px 5px 10px #9999;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

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
.details{
    width: 560px;
    justify-content: space-around;
    margin-left: 50px;
    margin-top: 15px;
}
.hov1:hover{
    cursor: pointer;
    color: red;
}
.hov2:hover{
    cursor: pointer;
    color: orange;
}
</style>