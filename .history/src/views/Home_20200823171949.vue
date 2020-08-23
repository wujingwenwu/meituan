<template>
 <div>
    <page :positions="positions"></page>
    <seach :positions="positions" v-if="positions"></seach>
    <div class="homes"></div>
    <Content></Content>
    <Having :positions="positions" v-if="positions"></Having>
    <Tail></Tail>
 </div>
</template>

<script>
import page from '../../src/components/page/Page'
import Seach from '../../src/components/seach/Seach'
import Content from '../../src/components/content/Content'
import Having from '../components/having/Having'
import Tail from '../components/tail/Tail'
 export default {
   name:'',
   props:{

    },
   data () {
     return {
     positions: "",
   }
   },
   components: {
     page,
     Seach,
     Content,
     Having,
     Tail,
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
    //  let city=this.$route.query.city
    //  if(city){
    //    this.positions=city
    //  }
    this.positions=this.$route.query.city
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.homes{
  box-shadow: 10px 5px 10px #9999;
  width: 100%;
  height: 1px;
  left: 0;
  right: 0;
  
}

</style>