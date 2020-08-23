<template>
 <div>
<page :positions="positions"></page>
 </div>
</template>

<script>
import page from '../../components/page/Page'
 export default {
   name:'',
   props:{

    },
   data () {
     return {
    positions:''
   }
   },
   components: {
    page,
   },
   methods: {

   },
   mounted() {
   this.$api
      .position()
      .then((res) => {
        let positions = JSON.parse(res.data);
        this.positions = positions.city;
        console.log(res);
        console.log(this.positions);
      })
      .catch((err) => {
        console.log(err);
      });
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>