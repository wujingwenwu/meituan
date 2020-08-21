<template>
<!-- 内容 -->
 <div class="content">
  <div class="content1">
   <div class="d-f">
   <div class="classification">
    <div v-for="(item,index) in Uicons" :key="index">
    <div class="iconfont">{{item.icon}}</div>
    </div>
   </div>
   </div>
  </div>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{

    },
   data () {
     return {
         menu:[],
     Uicons:[{
         icon:'\ue605'
     }
        
     ]
   }
   },
   components: {

   },
   methods: {

   },
   mounted() {
    this.$api.menu().then(res=>{
        this.menu=res.data.menu
        console.log(res);
    }).catch(err=>{
        console.log(err);
    })
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
@font-face {
  font-family: 'iconfont';  /* project id 2017422 */
  src: url('//at.alicdn.com/t/font_2017422_ck56kzje6p4.eot');
  src: url('//at.alicdn.com/t/font_2017422_ck56kzje6p4.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_2017422_ck56kzje6p4.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_2017422_ck56kzje6p4.woff') format('woff'),
  url('//at.alicdn.com/t/font_2017422_ck56kzje6p4.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_2017422_ck56kzje6p4.svg#iconfont') format('svg');
}
.content{
    width: 100%;
    left: 0;
    right: 0;
    height: 500px;
    background: rgb(248,248,248);
    display: flex;
    justify-content: center;
    margin-top: 4px;
}
.content1{
    width: 960px;
}
.classification{
    width: 200px;
    height: 470px;
    border: 1px solid #E5E5E5;
    border-top:none;
    background: #ffffff;
    margin-top: -4px;
}
</style>