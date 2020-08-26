<template>
  <!--详情内容-->
  <div>
 <div class="detail m-t-30">
  <div class="detail1">
  <div>{{}}美团>{{value}}</div>
  </div>
 </div>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{
    value:{
        type:string
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
</style>