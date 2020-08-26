<template>
  <!-- 内容 -->
  <div class="content">
    <div class="content1">
      <div class="d-f">
        <div class="classification p-r">
          <div v-for="(item,index) in menu" :key="index">
            <div class="classificas">
              <div class="d-f m-t-10 classifica">
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="`#${item.icon}`" />
                </svg>
                <div class="f-s-12 m-l-10 font">{{item.name}}</div>
                <div class="arrow f-c-hu f-s-12 font">></div>
              </div>
              <div class="child">
                <div class="childe">
                  <div v-for="(item1,index1) in item.child" :key="index1">
                    <div class="d-f j-c-s-b m-t-20">
                      <div class="f-s-14 title">{{item1.title}}</div>
                      <div class="f-s-14 f-c-hu hov2">更多></div>
                    </div>
                    <div class="line"></div>
                    <div class="d-f childs">
                      <div v-for="(item2,index2) in item1.child" :key="index2">
                        <div class="m-l-10 m-t-10 f-c-hu hov2">{{item2}}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
            <img
              src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg"
              alt
              class="logos"
            />
          </div>
          <div>
            <img
              src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png"
              alt
              class="logos1"
            />
          </div>
          <div>
            <img
              src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg"
              alt
              class="logos1 m-l-10"
            />
          </div>
          <div>
            <img
              src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg"
              alt
              class="logo2"
            />
          </div>
        </div>
        <div>
          <div class="sogin" v-if="username===undefined">
            <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt class="image" />
            <div>Hi! 你好</div>
            <div class="signs" @click="register">注册</div>
            <div class="signs" @click="sigon">立即登录</div>
          </div>
          <div v-else class="sogin">
          <img src="https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png" alt="" class="image">
          </div>
          <div class="sogins">
          <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="" class="code">
          <div class="d-f">
          <div>我的订单</div>
          <div>我的收藏</div>
          <div></div>
          <div></div>
          <div></div>
          </div>
          <div>
          <div>美团app手机版</div>
          <div class="d-f">
          <div class="f-c-ho">1元起</div>
          <div>吃喝玩乐</div>
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
     username:{
　　　　　　type:String,
  },
  },
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
          imgs:
            "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
        },
        {
          imgs:
            "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
        },
        {
          imgs:
            "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png",
        },
        {
          imgs:
            "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
        },
      ],
    };
  },
  components: {},
  methods: {
    //跳转到注册页面
    register(){
       this.$router.push('/register')
    },
    //跳转到登录页
    sigon(){
      this.$router.push('/sigon')
    },
  },
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
.logos {
  width: 140px;
  height: 240px;
  margin-left: 10px;
}
.logos1 {
  width: 195px;
  height: 200px;
}
.logo2 {
  width: 140px;
  height: 200px;
  margin-left: 10px;
}
.sogin {
  width: 180px;
  height: 240px;
  background: #ffffff;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
 align-items: center;
}
.sogins {
  width: 180px;
  height: 200px;
  background: #ffffff;
  margin-top: 25px;
    display: flex;
  flex-direction: column;
  justify-content: space-around;
 align-items: center;
}
.image {
  width: 47px;
  height: 47px;
  border-radius: 50%;
  border: 4px solid #e5e5e5;
}
.classifica:hover {
  background: rgb(228, 207, 215);
  font-weight: 700;
  color: #000000;
}
.child {
  display: none;
  width: 410px;
  height: 465px;
  position: absolute;
  background: #ffffff;
  top: 10px;
  left: 200px;
  z-index: 999999;
  margin-left: 2px;
  margin-top: 5px;
}
.childe{
  width: 350px;
  height: 400px;
}
.classificas:hover .child {
  
  display: flex;
  justify-content: center;
}
.line{
  width: 350px;
  height: 1px;
  background: #9999;
  margin-top: 10px;
}
.childs{
  width: 350px;
  flex-wrap: wrap;
}
.signs{
  width: 120px;
  height: 40px;
  border: 1px solid #9999;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
}
.code{
  width: 95px;
  height: 95px;
}
.hov2:hover{
    cursor: pointer;
    color: orange;
}
</style>