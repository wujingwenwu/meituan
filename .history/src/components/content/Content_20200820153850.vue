<template>
<!-- 内容 -->
 <div class="content">
  <div class="content1">
   <div class="d-f">
   <div class="classification">
    <div v-for="(item,index) in Uicons" :key="index">
   <svg class="icon" aria-hidden="true">
  <use :xlink:href="`#${item.icon}`" />
</svg>
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
         menu:[],
     Uicons:[{
         icon:'icon-tubiaozhizuomoban_meishi'
     },
     {
         icon:'icon-icon_meituanwaimai'
     },
     {
         icon:'icon-jiudian1'
     },
     {
         icon:'icon-jiudian'
     },
     {
         icon:'icon-maoyan'
     },
     {
         icon:'icon-huoche'
     },
     {
         icon:'icon-ziyuan'
     },
     {
         icon:'icon-shenghuofuwu'
     },
     {
         icon:'icon-liren1'
     },
     {
         icon:'icon-jiehunyuyue'
     },
     {
         icon:'icon-qinzi'
     },
     {
         icon:'icon-jianshen'
     },
     {
         icon:'icon-zhuangxiu'
     },
     {
         icon:'icon-xuexipeixun'
     },
     {
         icon:'icon-yiliao'
     },
     {
         icon:'icon-icon-test'
     },

        
     ]
   }
   },
   components: {

   },
   methods: {

   },
   mounted() {
    this.$api.menu().then(res=>{
        let menu=res.data.menu
        console.log(menu);
     menu.map((item,index)=>{
         this.$set('icon',this.Uicons[index].icon)
     })
    }).catch(err=>{
        console.log(err);
    })
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
 .icon {
      width: 30px !important;
      height: 30px !important;
    }
.content{
    width: 100%;
    left: 0;
    right: 0;
    height: 500px;
    background: rgb(248,248,248);
    display: flex;
    justify-content: center;
    margin-top: 4px;
}
.content1{
    width: 960px;
}
.classification{
    width: 200px;
    height: 470px;
    border: 1px solid #E5E5E5;
    border-top:none;
    background: #ffffff;
    margin-top: -4px;
}
</style>