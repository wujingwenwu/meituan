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
  <div class="m-l-10 d-f">
  <div class="d-f m-l-10">{{item.child[0].title}}</div>
  <div class="menu1"></div>
  </div>
  </div>
  
  </div>
  </div>
  <div class="menu1"></div>
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
    },
    menu:{
      type:Array
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
.menu{
  width: 0;
  height: 0;
  border-width: 10px;
  border-style: solid;
  border-color: transparent transparent black transparent;
}
.menu{
  flex-wrap: wrap;
  width: 700px;
}
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
.whole{
  width: 50px;
  height: 25px;
  background: orange;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>