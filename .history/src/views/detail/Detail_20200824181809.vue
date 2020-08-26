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
     value:''
   }
   },
   components: {
       page,
   },
   methods: {

   },
   mounted() {
  this.value=this.$route.query.value
  console.log(this.value);
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>