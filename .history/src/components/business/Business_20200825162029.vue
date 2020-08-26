<template>
  <div>
    <div class="bushiness d-f j-c-c">
      <div class="bushiness1">
        <div class="m-t-20 d-f">
          <div class="m-l-20">智能排序</div>
          <div class="d-f">
            <div class="m-l-20">价格排序</div>
            <div class="m-t-5 m-l-20">
              <div class="triangle"></div>
              <div class="triangle1"></div>
            </div>
            <div class="m-l-20">人气最高</div>
            <div class="m-l-20">评价最高</div>
          </div>
        </div>
        <div class="show"></div>
        <div>
          <div v-for="(item,index) in more" :key="index">
            <div class="d-f m-l-10 m-t-10">
              <img :src="item.photos[0].url" alt class="img" />
              <div class="m-l-10">
                <div>{{item.name}}</div>
                <div class="d-f">
                 <el-rate
                  :value="item.biz_ext.rating"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}分"
                ></el-rate>
                <div>{{item.adcode}}人评论</div>
                </div>
               <div>{{item.address}}</div>
               <div>人均</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    value: {
      type: String,
    },
  },
  data() {
    return {
      values: "",
      positions: "",
      more: [],
     
    };
  },
  components: {},
  methods: {
    getData() {
      this.$api
        .products({ city: this.positions, keyword: this.values })
        .then((res) => {
          this.more = res.data.more;
          res.data.more.map(item=>{
              item.biz_ext.rating=Number(item.biz_ext.rating)
          })
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.values = this.value;
    let city = localStorage.getItem("positions");
    let citys = city.split("市");
    this.positions = citys[0];
    //    console.log(this.values);
    console.log(this.positions);
    this.getData();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.bushiness {
  width: 100%;
  left: 0;
  right: 0;
  background: rgb(248, 248, 248);
}
.bushiness1 {
  width: 960px;
  border: 1px solid rgb(216, 214, 214);
  background: #ffffff;
  border-radius: 5px;
  margin-top: 10px;
}
.triangle1 {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid black;
  margin-left: 5px;
  margin-top: 5px;
}
.triangle {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 6px solid black;
  margin-left: 5px;
}
.show {
  width: 900px;
  height: 1px;
  background: #999;
  margin-top: 30px;
}
.img {
  width: 225px;
  height: 120px;
  border-radius: 5px;
}
</style>