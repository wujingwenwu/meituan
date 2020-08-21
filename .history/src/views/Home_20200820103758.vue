<template>
 <div class="home">
  <div class="home1">
    <page></page>
  </div>
 </div>
</template>

<script>
import page from '../../src/components/page/Page'
 export default {
   name:'',
   props:{

    },
   data () {
     return {

   }
   },
   components: {
     page
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
.home{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home1{
  width: 960px;
}
</style>