<template>
 <div class="sign">
 <div class="sign1">
  <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt class="img" />
  <div class="d-f sign1 j-c-s-a">
  <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt="" class="imgs">
   <div>
   <div class="d-f">
   <div></div>
   </div>
   </div>
  </div>
 </div>

 </div>
</template>

<script>
 export default {
   name:'',
   props:{

    },
   data () {
     return {
    username:''
   }
   },
   components: {

   },
   methods: {

   },
   mounted() {
   this.username=this.$route.query.username
   console.log(this.username);
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.sign{
    width: 100%;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
}
.sign1{
    width: 960px;
}
.img {
  width: 110px;
  height: 40px;
  margin-top: 30px;
}
.imgs{
    width: 480px;
    height: 370px;
}
</style>