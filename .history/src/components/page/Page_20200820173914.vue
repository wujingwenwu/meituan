<template>
  <!-- 头部 -->
  <div class="d-f j-c-c home">
    <div class="d-f page a-i-c">
      <div class="d-f">
        <div class="d-f city">
          <i class="iconfont icon-dingwei"></i>
          <div class="f-s-12">{{positions}}</div>
          <div class="switch f-s-12 hovers">切换城市</div>
          <div class="f-s-12">[</div>
          <div class="f-s-12 hovers">新津县</div>
          <div class="f-s-12 hovers">崇州</div>
          <div class="f-s-12 hovers">彭州</div>
          <div class="f-s-12">]</div>
        </div>
        <div class="d-f sign">
          <div class="f-s-12 hovsr">立即登录</div>
          <div class="f-s-12 hovers">注册</div>
        </div>
      </div>
      <div class="d-f information">
        <div class="suspension">
          <div class="f-s-12">我的美团</div>
          <div class="suspension1">
            <div class="hovers">我的美团</div>
            <div class="hovers">我的订单</div>
            <div class="hovers">我的收藏</div>
            <div class="hovers">抵用券</div>
            <div class="hovers">账户设置</div>
          </div>
        </div>

        <div class="f-s-12 hovers">手机app</div>
        <div class="business">
          <div class="f-s-12">商家中心</div>
          <div class="busines">
            <div class="f-s-12 business2 hovers">商家中心</div>
            <div class="business3">
              <div class="hovers">美团餐饮商户中心</div>
              <div class="hovers">登录商家中心</div>
              <div class="hovers">美团智能收银</div>
              <div class="hovers">我想合作</div>
              <div class="hovers">手机免费开店</div>
              <div class="hovers">餐饮代理商招募</div>
              <div class="hovers">商家申请开票</div>
              <div class="hovers">免费合作美团排队</div>
            </div>
          </div>
        </div>
        <div class="suspension">
          <div class="f-s-12 hovers">美团规则</div>
          <div class="suspension1">
            <div class="hovers">美团规则</div>
            <div class="hovers">规则中心</div>
            <div class="hovers">规则目录</div>
            <div class="hovers">规则评议院</div>
          </div>
        </div>
        <div class="navigation">
          <div class="f-s-12">网站导航</div>
          <div class="navigation1">
            <div class="f-s-12 navigation2">网站导航</div>
            <div class="nav">
              <div class="navigation3">
                <div class="m-t-30 d-f j-c-s-a">
                  <div>酒店旅游</div>
                  <div class="naviga">吃美食</div>
                  <div class="naviga">看电影</div>
                  <div class="naviga">手机应用</div>
                </div>
                <div class="d-f">
                  <div class="navs">
                    <div>国际机票</div>
                    <div>经济型酒店</div>
                    <div>公寓</div>
                    <div>青年旅社</div>
                    <div>农家院</div>
                  </div>
                  <div class="navs">
                    <div>火车票</div>
                    <div>主题酒店</div>
                    <div>豪华酒店</div>
                    <div>度假酒店</div>
                  </div>
                  <div class="navs">
                    <div>民宿</div>
                    <div>商务酒店</div>
                    <div>客栈</div>
                    <div>别墅</div>
                  </div>
                  <div class="d-f m-l-30">
                     <div class="navs">
                    <div>烤鱼</div>
                    <div>烧烤</div>
                    <div>火锅</div>
                  </div>
                   <div class="navs">
                    <div>特色小吃</div>
                    <div>自助餐</div>
                    <div>代金券</div>
                  </div>
                  </div>
                  <div class="navss">
                    <div>热映电影</div>
                    <div>热门影院</div>
                    <div>热映电影口碑榜</div>
                    <div>最受期待电影</div>
                    <div>国内票房榜</div>
                    <div>北美票房榜</div>
                    <div>电影排行榜</div>
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
  props: {},
  data() {
    return {
      positions: "",
    };
  },
  components: {},
  methods: {},
  mounted() {
    this.$api
      .position()
      .then((res) => {
        let positions = JSON.parse(res.data);
        this.positions = positions.city;
        console.log(res);
        console.log(this.positions);
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
.page {
  width: 960px;
  justify-content: space-between;
}
.home {
  width: 100%;
  top: 0;
  left: 0;
  height: 40px;
  background: rgb(245, 245, 245);
}
.switch {
  width: 60px;
  height: 20px;
  border: 1px solid rgb(235, 235, 235);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -2px;
}
.city {
  justify-content: space-around;
  width: 260px;
}
.sign {
  justify-content: space-around;
  width: 100px;
}
.hovers:hover {
  color: orange;
  cursor: pointer;
}
.hovsr {
  color: orange;
  cursor: pointer;
}
.information {
  justify-content: space-around;
  width: 380px;
}
.suspension1 {
  display: none;
}
.suspension:hover .suspension1 {
  display: block;
  width: 78px;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
  position: absolute;
  z-index: 99999;
  font-size: 12px;
  box-shadow: 0px 5px 8px #9999;
  top: 5px;
  margin-left: -10px;
}

.business2 {
  display: none;
}
.business3 {
  display: none;
}
.business:hover .business2 {
  display: block;
  width: 60px;
  height: 40px;
  background: #ffffff;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 8px #9999;
  margin-left: -12px;
  margin-top: -32px;
}
.business:hover .business3 {
  display: block;
  width: 120px;
  height: 280px;
  background: #ffffff;
  position: absolute;
  top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 5px 8px #9999;
  margin-left: -72px;
  z-index: 9999;
}
.business:hover .busines {
  width: 120px;
  height: 320px;
  position: absolute;
}
.navigation2 {
  display: none;
}
.navigation:hover .navigation2 {
  display: block;
  width: 60px;
  height: 40px;
  background: #ffffff;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 8px #9999;
  margin-left: -2px;
}

.navigation3 {
  display: none;
}
.navigation:hover .navigation3 {
  display: block;
  width: 960px;
  height: 350px;
  background: #ffffff;
  position: absolute;
  z-index: 999999;
  box-shadow: 0px 5px 8px #9999;
  left: 18.5%;
  top: 40px;
}
.navs {
  width: 60px;
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  font-size: 12px;
  color: rgba(136, 133, 133, 0.6);
  margin-left: 20px;
  margin-top: 20px;
}
.navss{
    width: 100px;
  height: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  font-size: 12px;
  color: rgba(136, 133, 133, 0.6);
  margin-left: 115px;
  margin-top: 20px;
}
</style>