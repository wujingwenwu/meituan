<template>
  <!-- 内容 -->
  <div class="content">
    <div class="content1">
      <div class="d-f">
        <div class="classification p-r">
          <div v-for="(item,index) in menu" :key="index">
            <div class="d-f m-t-10 classifica">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="`#${item.icon}`" />
              </svg>
              <div class="f-s-12 m-l-10">{{item.name}}</div>
              <div class="arrow f-c-hu f-s-12">></div>
            </div>
          </div>
        </div>
        <div class="d-f rotation m-t-10 m-l-10">
          <div>
            <el-carousel height="240px " class="logo">
              <el-carousel-item v-for="(item,index) in img" :key="index">
                <img :src="item.imgs" alt class="imgss" />
              </el-carousel-item>
            </el-carousel>
          </div>
          <div>
          <img src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg" alt="" class="logos">
          </div>
          <div>
          <img src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png" alt="" class="logos1">
          </div>
          <div>
          <img src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg" alt="" class="logos1 m-l-10">
          </div>
          <div>
          <img src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg" alt="" class="logo2">
          </div>
        </div>
        <div>
        <div class="sogin">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt="" class="image">
        <div>Hi! 你好</div>
        </div>
        <div class="sogins"></div>
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
      img: [
        {
          imgs:
            "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg",
        },
        {
          imgs: "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
        },
        {
          imgs: "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
        },
        {
          imgs: "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png",
        },
        {
          imgs: "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
        },
      ],
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
  width: 212px;
  height: 480px;
  border: 1px solid #e5e5e5;
  border-top: none;
  background: #ffffff;
  margin-top: -4px;
}
.rotation {
  height: 490px;
  width: 600px;
  flex-wrap: wrap;
  display: flex;
}
.logo {
  width: 400px;
}
.imgss {
  width: 400px;
  height: 240px;
}
.logos{
    width: 140px;
    height: 240px;
    margin-left: 10px;
}
.logos1{
 width: 195px;
 height: 200px;
}
.logo2{
  width: 140px;
    height: 200px;
    margin-left: 10px;  
}
.sogin{
    width: 180px;
    height: 240px;
    background: #ffffff;
    margin-top: 10px;
}
.sogins{
    width: 180px;
    height: 200px;
    background: #ffffff;
    margin-top: 25px;
}
.image{
    width: 47px;
    height: 47px;
    border-radius: 50%;
    border: 4px solid #E5E5E5;
}
.classifica:hover{
background: rgb(233, 81, 139);
}
</style>