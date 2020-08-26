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
  <div class="d-f">
  <div >分类</div>
  <div class="">全部</div>
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
  border: 1px solid rgb(216, 214, 214);
  margin-top: 20px;
}
.ification{
  width: 100%;
  background: rgb(248, 248, 248);
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
}
.ification1{
  width: 960px;
}
</style>