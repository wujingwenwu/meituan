<template>
  <!-- 内容 -->
  <div class="content">
    <div class="content1">
      <div class="d-f">
        <div class="classification p-r">
          <div v-for="(item,index) in menu" :key="index">
            <div class="d-f m-t-10">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="`#${item.icon}`" />
              </svg>
              <div class="f-s-12 m-l-10">{{item.name}}</div>
              <div class="arrow f-c-hu f-s-12">></div>
            </div>
          </div>
        </div>
    <div class="d-f rotation">
     <div>
     <el-carousel height="150px">
      <el-carousel-item v-for="(item,index) in img" :key="index">
        <img :src="item.imgs" alt="">
      </el-carousel-item>
    </el-carousel>
     </div>
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
      menu: [],
      Uicons: [
        {
          icon: "icon-tubiaozhizuomoban_meishi",
        },
        {
          icon: "icon-icon_meituanwaimai",
        },
        {
          icon: "icon-jiudian1",
        },
        {
          icon: "icon-jiudian",
        },
        {
          icon: "icon-maoyan",
        },
        {
          icon: "icon-huoche",
        },
        {
          icon: "icon-ziyuan",
        },
        {
          icon: "icon-shenghuofuwu",
        },
        {
          icon: "icon-liren1",
        },
        {
          icon: "icon-jiehunyuyue",
        },
        {
          icon: "icon-qinzi",
        },
        {
          icon: "icon-jianshen",
        },
        {
          icon: "icon-zhuangxiu",
        },
        {
          icon: "icon-xuexipeixun",
        },
        {
          icon: "icon-yiliao",
        },
        {
          icon: "icon-icon-test",
        },
      ],
      img:[{
       imgs:'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg'   
      }]
    };
  },
  components: {},
  methods: {},
  mounted() {
    this.$api
      .menu()
      .then((res) => {
        let menu = res.data.menu;
        console.log(menu);
        menu.map((item, index) => {
          this.Uicons.map((item1, index1) => {
            if (index === index1) {
              this.$set(item, "icon", item1.icon);
            }
          });
        });
        this.menu = menu;
        console.log(menu);
        console.log();
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
.arrow {
  position: absolute;
  right: 10px;
}
.icon {
  width: 20px !important;
  height: 20px !important;
  margin-left: 10px;
}
.content {
  width: 100%;
  left: 0;
  right: 0;
  background: rgb(248, 248, 248);
  display: flex;
  justify-content: center;
  margin-top: 4px;
}
.content1 {
  width: 960px;
}
.classification {
  width: 200px;
  height: 490px;
  border: 1px solid #e5e5e5;
  border-top: none;
  background: #ffffff;
  margin-top: -4px;
}
.rotation{
    height: 490px;
    width: 700px;
}
</style>