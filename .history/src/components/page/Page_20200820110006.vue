<template>
 <div class="d-f j-c-c home">
 <div class="d-f page a-i-c">
 <div class="d-f">
 <i class="iconfont icon-dingwei"></i>
 <div>{{positions}}</div>

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
     positions:'',
   }
   },
   components: {

   },
   methods: {
    
   },
   mounted() {
     this.$api.position().then(res=>{
       this.positions=res.data.province
         console.log(res);
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
.page{
 width: 960px;
}
.home{
    width: 100%;
    top: 0;
    left: 0;
    height: 40px;
    background: rgb(245, 245, 245);
}
</style>