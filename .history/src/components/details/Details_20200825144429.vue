<template>
  <!--详情内容-->
  <div>
    <div class="detail m-t-30">
      <div class="detail1">
        <div class="size">{{positionss}}美团>{{positionss}}{{value}}</div>
      </div>
    </div>
    <div class="ification">
      <div class="ification1">
        <div class="classification">
          <div>
            <div class="d-f m-t-20">
              <div class="m-l-20">分类</div>
              <div class="whole m-l-20">全部</div>
              <div class="d-f menu">
                <div v-for="(item,index) in menu" :key="index">
                  <div class="classifications">
                    <div class="m-l-10 d-f">
                      <div class="m-l-10 hov">{{item.child[0].title}}</div>
                      <div class="menu1"></div>
                    </div>
                    <div class="classifications1">
                      <div class="m-l-10 hov f-c-hu m-t-10">{{item.child[0].title}}</div>
                      <div class="d-f">
                        <div class="m-t-10 f-c-hu m-l-10 f-s-12">全部</div>
                        <div class="classifications2">
                        <div v-for="(item1,index1) in item.child" :key="index1" class="d-f classifications2">
                          <div v-for="(item2,index2) in item1.child" :key="index2" class="d-f ">
                            <div class="d-f ">
                              <div class=" m-l-10 f-s-12">{{item2}}</div>
                            </div>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-f m-t-20">
              <div class="m-l-20">区域</div>
              <div class="whole m-l-20">全部</div>
              <div class="d-f menu">
                <div v-for="(item,index) in areas" :key="index">
                  <div class="regions">
                    <div class="m-l-10 d-f">
                      <div class="m-l-10 hov">{{item.type}}</div>
                      <div class="menu1"></div>
                    </div>
                    <div class="region">
                      <div class="m-l-10 hov f-c-hu m-t-10">{{item.type}}</div>
                      <div class="d-f region1">
                        <div class="m-t-10 f-c-hu m-l-10">全部</div>
                        <div v-for="(item1,index1) in item.module" :key="index1">
                          <div v-if="index1<20" class="m-l-10 m-t-10 f-s-12">{{item1}}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
    positionss: {
      type: String,
    },
    menu: {
      type: Array,
    },
  },
  data() {
    return {
      areas: [],
    };
  },
  components: {},
  methods: {},
  mounted() {
    let positionss=this.positionss.slice(0,2)
    this.$api
      .crumbs(positionss)
      .then((res) => {
        this.areas = res.data.areas;
        // console.log(res);
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
.menu1 {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid black;
  margin-top: 8px;
  margin-left: 5px;
}
.menu {
  flex-wrap: wrap;
  width: 820px;
}
.detail {
  width: 100%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
}
.detail1 {
  width: 960px;
}
.size {
  font-size: 13px;
}
.classification {
  width: 960px;
  padding: 10px 0;
  background: #ffffff;
  border: 1px solid rgb(216, 214, 214);
  border-radius: 5px;
  margin-top: 20px;
}
.ification {
  width: 100%;
  background: rgb(248, 248, 248);
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
}
.ification1 {
  width: 960px;
}
.whole {
  width: 50px;
  height: 25px;
  background: orange;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hov:hover {
  cursor: pointer;
}
.region {
  width: 400px;
  box-shadow: 7px 5px 10px #9999;
  background: #ffffff;
  position: absolute;
  display: none;
  padding-bottom: 10px;
}
.regions:hover .region {
  display: block;
}
.region1 {
  width: 380px;
  flex-wrap: wrap;
}
.classifications1 {
  width: 500px;
  box-shadow: 7px 5px 10px #9999;
  background: #ffffff;
  position: absolute;
  display: none;
  padding-bottom: 10px;
  
}
.classifications:hover .classifications1 {
  display: block;
}
.classifications2{
  width: 450px;
  flex-wrap: wrap;
}
</style>