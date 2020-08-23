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
    <div class="back">
      <div class="back1">
        <div class="d-f m-t-20 m-l-10">
          <div class="m-t-10">按省份选择:</div>
          <el-select placeholder="省份" class="m-l-10" v-model="value" @change="change">
            <el-option
              v-for="(item, index) in province"
              :key="index"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
<el-select placeholder="城市" class="m-l-10" v-model="valuess" @change="changes">
            <el-option
              v-for="(item, index) in city"
              :key="index"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
          <div class="m-t-10 m-l-30">直接搜索:</div>
          <el-input placeholder="请输入城市中文或拼音" v-model="inputs" clearable class="inputs m-l-10"></el-input>
        </div>
        <div class="shadow1"></div>
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
      input: "",
      inputs: "",
      value: "",
      province: [],
      valuess:'',
      city:[]
    };
  },
  components: {
    page,
  },
  methods: {
    change() {
       
      this.$api
        .citys(this.value)
        .then((res) => {
            this.city=res.data.city
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changes(){
       for(var i=0;i<city.length;i++){
          if(city[i].id===this.valuess){
              
          }
       }
        console.log(this.valuess);
       this.$router.push({name:'Home',query:{city:this.values}})  
    }
  },
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
    this.$api
      .province()
      .then((res) => {
        this.province = res.data.province;
        //   console.log(res);
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
.shadow {
  width: 100%;
  left: 0;
  right: 0;
  height: 1px;
  background: #999;
  margin-top: 50px;
  box-shadow: 10px 5px 8px rgba(56, 55, 55, 0.6);
}
.back {
  width: 100%;
  left: 0;
  right: 0;
  background: rgb(248, 248, 248);
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.back1 {
  width: 960px;
  background: white;
}
.inputs {
  height: 40px;
  width: 180px;
}
.shadow1 {
  width: 920px;
  height: 1px;
  background: #999;
  margin-left: 20px;
  margin-top: 20px;
}
</style>