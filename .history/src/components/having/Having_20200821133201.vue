<template>
  <div class="content">
    <div class="content1">
      <div class="having p-r">
        <div class="f-s-20 f-c-b m-l-20 hangd">有格调</div>
        <div class="d-f m-l-10">
          <div v-for="(item,index) in arr" :key="index">
          <div >
          <div class="f-c-b m-l-10 hangd" @mouseenter="hand(item,index)" v-if="arr.length<3">{{item.name}}</div>
          <div class="single"></div>
          </div>
            
          </div>
        </div>
        <div class="f-c-b whole hangd">全部></div>
      </div>
      <div class=" f-w-w d-f content1 detail">
      <div v-for="(item,index) in pois" :key="index">
      <div class="m-t-10 m-l-10 p-r ">
      <img :src="item.photos[0].url" alt="" class="photos">
      <img src="https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png" alt="" class="photos1">
      <div v-if="item.tag.length===0">抱歉,暂无提供数据!</div>
      <div class="tag" v-else>{{item.tag}}</div>
       <div class="type">{{item.type}}</div>
      <div></div>
      </div>
       
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    positions: {
      type: String,
    },
  },
  data() {
    return {
      pois: [],
      arr: [
        {
          name: "约会聚餐",
          title: "美食",
        },
        {
          name: "丽人spa ",
          title: "丽人",
        },
        {
          name: "品质出游",
          title: "旅游",
        },
        {
          name: "全部",
          title: "景点",
        },
      ],
      indexs:0,
      title:'',
      city:'',
      keyword:''
    };
  },
  components: {},
  methods: {
   getdata(){
   this.title=this.arr[this.indexs].title
   this.$api
        .results({ city: this.positions, keyword:this.title })
        .then((res) => {
            if(res.code===200){
this.pois = res.data.pois.slice(0,6);
            }
          
          console.log(this.pois); 
        })
        .catch((err) => {
          console.log(err);
        });
   },
    hand(item, index) {
      console.log(item);
      console.log(index);
      this.indexs = index
      this.title=item.title
      this.getdata()
    },
  },
  mounted() {
      
   this.getdata()
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.content {
  width: 100%;
  left: 0;
  right: 0;
  background: rgb(248, 248, 248);
  display: flex;
  justify-content: center;
}
.content1 {
  width: 960px;
}
.having {
  width: 960px;
  height: 40px;
  background: rgb(242, 191, 71);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  align-items: center;
}
.whole {
  position: absolute;
  right: 20px;
}
.hangd {
  cursor: pointer;
}
.photos{
    width: 310px;
    height: 200px;
    border-radius: 5px;
}
.photos1{
    position: absolute;
    width: 52px;
    height: 52px;
    z-index: 99999;
    right: 0;
  bottom: 20px;
}
.detail{
    background: #ffffff;
}
.type{
  width: 300px; 
    text-align: left;
    text-overflow:ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 12px;
    color: #696666; 
}
.tag{
   width: 300px; 
  text-overflow:ellipsis;
  overflow:hidden;
white-space:nowrap;
}
.single {
  width: 0;
  height: 0;
  border-width: 10px;
  border-style: solid;
  border-color: transparent transparent white transparent;
}

</style>