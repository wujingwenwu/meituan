<template>
  <div class="content">
    <div class="content1">
      <div class="having p-r">
        <div class="f-s-20 f-c-b m-l-20 hangd">有格调</div>
        <div class="d-f m-l-10">
          <div v-for="(item,index) in arr" :key="index">
            <div class="f-c-b m-l-10 hangd" @mouseenter="hand(item,index)">{{item.name}}</div>
          </div>
        </div>
        <div class="f-c-b whole hangd">全部></div>
      </div>
      <div class=" f-w-w d-f content1">
      <div v-for="(item,index) in pois" :key="index">
      <div class="m-t-10 m-l-10">
      <img :src="item.photos[0].url" alt="" class="photos">
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
          name: "电影演出",
          title: "电影",
        },
        {
          name: "品质出游",
          title: "旅游",
        },
      ],
    };
  },
  components: {},
  methods: {
    hand(item, index) {
      console.log(item);
      this.$api
        .results({ city: this.positions, keyword: item.title })
        .then((res) => {
          this.pois = res.data.pois;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {},
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
}
</style>