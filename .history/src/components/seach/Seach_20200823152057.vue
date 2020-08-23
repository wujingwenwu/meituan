<template>
  <!-- 首页搜索 -->
  <div class="d-f j-c-c">
    <div class="seach">
      <div class="d-f p-r">
        <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt class="img" />
        <div class="inputs d-f">
          <div class="i-history" @mouseleave="mouseleave">
            <div @click="click">
              <el-input
                placeholder="请输入内容"
                v-model="input"
                clearable
                class="input"
                @input="inputs"
                @change="change"
              ></el-input>
            </div>
            <div class="history" v-if="flag===true&&value ==='' && values.length ===0"></div>
            <div class="historys" v-if="flag===true&& value !=='' && values.length ===0">
              <div v-for="(item,index) in top" :key="index">
                <div class="f-s-12 items m-l-10">{{item.name}}</div>
              </div>
            </div>
            <div class="historys1" v-if="values.length !==0 && flag===true &&value ===''">
              <div class="d-f j-c-s-b m-t-10">
                <div class="f-s-12 m-l-10">最近搜索</div>
                <div class="f-s-12" @click="deletes">删除搜索历史</div>
              </div>
              <div class="d-f">
                <div v-for="(item,index) in values" :key="index">
                  <div class="f-s-12 m-t-10 m-l-10 hov2" >{{item.name}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="button" @click="">
            <i class="iconfont icon-search"></i>
          </div>
        </div>
      </div>
      <div class="assortment m-t-30 d-f">
        <div class="assortment1">
          <div class="m-l-10 f-w">全部分类</div>
        </div>
        <div class="d-f details">
          <div class="f-w hov2">美团外卖</div>
          <div class="f-w hov1">猫眼电影</div>
          <div class="f-w hov1">美团酒店</div>
          <div class="f-w hov2">名宿/酒店</div>
          <div class="f-w hov1">商家入驻</div>
          <div class="f-w hov2">美团公益</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    positions: {
      type: String,
    },
  },
  data() {
    return {
      input: "",
      flag: false,
      value: "",
      city: "",
      top: [],
      values: [],
      item: [],
    };
  },
  components: {},
  methods: {
    inputs(value) {
      this.value = value;
      this.$api
        .searchTop({ city: this.city, input: this.value })
        .then((res) => {
          this.top = res.data.top;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    click() {
      this.flag = true;
    },
    mouseleave() {
      this.flag = false;
    },
    //存localStorage
    change(value) {
      let ass = this.item;
      let obj = {};
      obj.name = value;
      //数组去重
      let item = [];
      ass.push(obj);
      for (var i = 0; i < ass.length; i++) {
        var flag = true;
        for (var j = 0; j < item.length; j++) {
          if (ass[i].name === item[j].name) {
            flag = false;
            break;
          }
        }
        if (flag) {
          item.push(ass[i]);
        }
      }
      localStorage.setItem("item", JSON.stringify(item));
    },
    //删除历史记录
    deletes(){
      localStorage.removeItem('item');
      this.flag=true
      this.values=[]
      this.value=''
    },
  },
  mounted() {
    let city = this.positions.split("市");
    this.city = city[0];
    console.log(this.city);
    if (localStorage.getItem("item")) {
      this.values = JSON.parse(localStorage.getItem("item"));
      console.log(this.values);
    }
  },
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
.input {
  width: 350px;
}
.history {
  width: 350px;
  height: 20px;
  background: white;
  box-shadow: 0px 5px 10px #9999;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.historys {
  width: 350px;
  background: white;
  box-shadow: 0px 5px 10px #9999;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  position: absolute;
  z-index: 99999;
}
.historys1 {
  width: 350px;
  background: white;
  box-shadow: 0px 5px 10px #9999;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  position: absolute;
  z-index: 99999;
}
.items {
  color: rgba(70, 67, 67, 0.6);
  padding: 5px 0;
}
.items:hover {
  color: orange;
  cursor: pointer;
}
.inputs {
  position: absolute;
  left: 30%;
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
.icon-search {
  font-size: 20px;
}
.assortment1 {
  width: 200px;
  height: 50px;
  border: 1px solid #e5e5e5;
  border-bottom: none;
  display: flex;
  align-items: center;
}
.details {
  width: 560px;
  justify-content: space-around;
  margin-left: 50px;
  margin-top: 15px;
}
.hov1:hover {
  cursor: pointer;
  color: red;
}
.hov2:hover {
  cursor: pointer;
  color: orange;
}
</style>