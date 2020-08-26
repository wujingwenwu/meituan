<template>
 <div>
  <page :positions="positions" :username="username"></page>
 </div>
</template>

<script>
import page from '.././../components//page/Page'
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
   },
   methods: {

   },
   mounted() {
  this.value=this.$route.query.value
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>