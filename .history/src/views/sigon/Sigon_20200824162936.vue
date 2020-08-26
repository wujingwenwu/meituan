<template>
 <div class="sign">
 <div class="sign1">
  <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt class="img" />
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
}
.sign1{
    width: 960px;
}
.img {
  width: 110px;
  height: 40px;
}
</style>