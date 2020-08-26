<template>
 <div>

 </div>
</template>

<script>
 export default {
   name:'',
   props:{

    },
   data () {
     return {
    username:''
   }
   },
   components: {

   },
   methods: {

   },
   mounted() {
   this.username=this.$route.query.username
   console.log(this.username);
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>