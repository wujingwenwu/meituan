<template>
 <div>
<page :positions="positions"></page>
<div class="city">
<div class="city1"></div>
</div>
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
.city{
    width: 100%;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
}
.city1{
    width: 960px;
}
</style>