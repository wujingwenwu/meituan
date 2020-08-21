<template>
 <div>
    <page></page>
    <seach></seach>
    <content></content>
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
</style>