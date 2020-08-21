<template>
 <div class="content">
 <div class="content1">
 <div class="having p-r">
 <div class=" f-s-20 f-c-b m-l-20">有格调</div>
 <div class="d-f m-l-10">
 <div v-for="(item,index) in arr" :key="index">
  <div class=" f-c-b m-l-10">{{item.name}}</div>
 </div>
 </div>
 <div class=" f-c-b whole">全部></div>
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
      arr:[{
        name:'约会聚餐'  
      },
      {
        name:'丽人spa '  
      },
      {
        name:'电影演出'  
      },
      {
        name:'品质出游'  
      },
      {
        name:'全部 '  
      }, 

      ]
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
.content {
  width: 100%;
  left: 0;
  right: 0;
  background: rgb(248, 248, 248);
  display: flex;
  justify-content: center;
}
.content1 {
  width: 960px;
}
.having{
    width: 960px;
    height: 40px;
    background: rgb(242,191,71);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    display: flex;
    align-items: center;
}
.whole{
    position: absolute;
    right: 20px;
}

</style>