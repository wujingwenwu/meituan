<template>
 <div>
  <div class="bushiness d-f j-c-c">
  <div class="bushiness1">
   <div class="m-t-20 d-f">
   <div class="m-l-20">智能排序</div>
   <div class="d-f">
   <div class="m-l-20">价格排序</div>
   <div class="m-t-5 m-l-20">
   <div class=" triangle"></div>
   <div class=" triangle1"></div>
   </div>
   <div class="m-l-20">人气最高</div>
   <div class="m-l-20">评价最高</div>
   </div>
   </div>
   <div></div>
  </div>
  </div>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{
     value: {
      type: String,
    },
    },
   data () {

     return {
     values:'',
     positions:'',
     more:[]
   }
   },
   components: {

   },
   methods: {   
    getData(){
     this.$api.products({city:this.positions, keyword:this.values}).then(res=>{
         this.more=res.data.more
       console.log(res);
     }).catch(err=>{
         console.log(err);
     })
    }
   },
   mounted() {
       this.values=this.value
       let city=localStorage.getItem('positions')
       let citys=city.split("市")
       this.positions=citys[0]
    //    console.log(this.values);
       console.log( this.positions);
     this.getData()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.bushiness{
    width: 100%;
    left: 0;
    right: 0;
    background: rgb(248, 248, 248);   
}
.bushiness1{
    width: 960px;
    border: 1px solid rgb(216, 214, 214);
    background: #ffffff;
    border-radius: 5px;
    margin-top: 10px;
}
.triangle1{
    width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid black;
 margin-left: 5px;
 margin-top: 5px;
}
.triangle{
     width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 6px solid black;
    margin-left: 5px;
}
</style>