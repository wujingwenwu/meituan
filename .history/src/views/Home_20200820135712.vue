<template>
 <div>
    <page></page>
    <seach></seach>
    <div class="homes"></div>
    <Content></Content>
 </div>
</template>

<script>
import page from '../../src/components/page/Page'
import Seach from '../../src/components/seach/Seach'
import Content from '../../src/components/content/Content'
 export default {
   name:'',
   props:{

    },
   data () {
     return {

   }
   },
   components: {
     page,
     Seach,
     Content,
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
.homes{
  box-shadow: 10px 5px 5px #9999;
  width: 100%;
  height: 1px;
  left: 0;
  right: 0;
}
</style>