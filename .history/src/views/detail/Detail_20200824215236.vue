<template>
  <!-- 头部 -->
  <div>
  <div class="d-f j-c-c home">
    <div class="d-f page a-i-c">
      <div class="d-f">
        <div class="d-f city">
          <i class="iconfont icon-dingwei"></i>
          <div class="f-s-12">{{positionss}}</div>
          <div class="switch f-s-12 hovers" @click="click">切换城市</div>
          <div class="f-s-12">[</div>
          <div class="f-s-12 hovers">新津县</div>
          <div class="f-s-12 hovers">崇州</div>
          <div class="f-s-12 hovers">彭州</div>
          <div class="f-s-12">]</div>
        </div>
        <div class="d-f sign" v-if="username===undefined">
          <div class="f-s-12 hovsr" @click="sigon">立即登录</div>
          <div class="f-s-12 hovers" @click="register">注册</div>
        </div>
        <div v-else class="d-f sign">
          <div  class=" hovsr user">{{username}}</div>
          <div class="m-l-10 f-s-12 out">退出</div>
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
            <div class="navsr">
            <div class="nav">
              <div class="navigation3">
                <div class="m-t-30 d-f j-c-s-a">
                  <div>酒店旅游</div>
                  <div class="naviga hovers">吃美食</div>
                  <div class="naviga hovers">看电影</div>
                  <div class="naviga hovers">手机应用</div>
                </div>
                <div class="d-f">
                  <div class="navs">
                    <div class="hovers">国际机票</div>
                    <div class="hovers">经济型酒店</div>
                    <div class="hovers">公寓</div>
                    <div class="hovers">青年旅社</div>
                    <div class="hovers">农家院</div>
                  </div>
                  <div class="navs">
                    <div class="hovers">火车票</div>
                    <div class="hovers">主题酒店</div>
                    <div class="hovers">豪华酒店</div>
                    <div class="hovers">度假酒店</div>
                  </div>
                  <div class="navs">
                    <div class="hovers">民宿</div>
                    <div class="hovers">商务酒店</div>
                    <div class="hovers">客栈</div>
                    <div class="hovers">别墅</div>
                  </div>
                  <div class="d-f m-l-30">
                     <div class="navs">
                    <div class="hovers">烤鱼</div>
                    <div class="hovers">烧烤</div>
                    <div class="hovers">火锅</div>
                  </div>
                   <div class="navs">
                    <div class="hovers">特色小吃</div>
                    <div class="hovers">自助餐</div>
                    <div class="hovers">代金券</div>
                  </div>
                  </div>
                  <div class="navss">
                    <div class="hovers">热映电影</div>
                    <div class="hovers">热门影院</div>
                    <div class="hovers">热映电影口碑榜</div>
                    <div class="hovers">最受期待电影</div>
                    <div class="hovers">国内票房榜</div>
                    <div class="hovers">北美票房榜</div>
                    <div class="hovers">电影排行榜</div>
                  </div>
                  <div class="d-f m-t-20">
                  <img src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" alt="" class="imgs">
                  <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png" alt="" class="imgs">
                  <img src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png" alt="" class="imgs">
                  <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png" alt="" class="imgs">
                  <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png" alt="" class="imgs">
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
  <div class="search">
  <div class="search1 d-f">
    <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt class="img" />
    <div class="whole">全部v</div>
    <div class="d-f">
     <el-input
                placeholder="请输入内容"
                v-model="input"
                clearable
                class="input"
              
              ></el-input>
              <div class="button" >
            <i class="iconfont icon-search"></i>
          </div>
    </div>
  </div>
  </div>
  <div class="show1"></div>
  <Details :value="value" :positionss="positionss"></Details>
  </div>
</template>

<script>
import Details from '../../components/details/Details'
export default {
  name: "",
  props: {
    positions:{
　　　　　　type:String,
  },
  
  },
  data() {
    return {
       value:'',
       username:'',
       input:'',
       positionss:''
    };
  },
  components: {
    Details
  },
  methods: {
    //切换城市
    click(){
      this.$router.push({name:"City",query:{city:this.positions,username:this.username}})
    },
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
    this.positionss=this.$route.query.positions
     this.username=this.$route.query.username
     console.log(this.username);
     this.value=this.$route.query.value
     console.log(this.value);
     this.$api.menu().then(res=>{
       this.menu=res.data.menu
       console.log(res);
     }).catch(err=>{
       console.log(err);
     })
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.show1{
  width: 100%;
  left: 0;
  right: 0;
  height: 2px;
  background: #9999;
  box-shadow: 10px 5px 10px rgba(61, 60, 60, 0.6);
}
.input{
  width: 400px;
  margin-left: 80px;
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
.whole{
  width: 50px;
  height: 20px;
  border: 1px solid #9999;
  font-size: 13px;
  color: #9999;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-left: 10px;
}
.img{
  width: 120px;
  height: 40px;
}
.search{
  width: 100%;
  left: 0;
  right: 0;
  height: 140px;
  display: flex;
  justify-content: center;
}
.search1{
  width: 960px;
margin-top: 40px;
}
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
  margin-left: -4px;
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
 margin-top: 10px;
 margin-left: -12.5px;
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
.imgs{
  width: 60px;
  height: 60px;
}
.navigation:hover .navsr{
  left: 0;
  right: 0;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
}
.navigation:hover .nav{
  position: absolute;
  width: 960px;
  display: flex;
  justify-content: center;
}
.user{
  margin-top: -5px;
  margin-left: 10px;
}

</style>