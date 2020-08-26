<template>
  <!--详情内容-->
  <div>
 <div class="detail m-t-30">
  <div class="detail1">
  <div class="size">{{positionss}}美团>{{positionss}}{{value}}</div>
  <div class="classification"></div>
  </div>
 </div>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{
    value:{
        type:String
    },
    positionss:{
         type:String
    }
    },
   data () {
     return {

   }
   },
   components: {

   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.detail{
    width: 100%;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
}
.detail1{
    width: 960px;
}
.size{
    font-size: 13px;
}
.classification{
  width: 800px;
  height: 160px;
  background: #ffffff;
}
</style>