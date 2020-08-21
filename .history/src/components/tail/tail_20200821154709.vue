<template>
  <div>
    <div class="com-foot flex a-center a-column p-t-20">
      <div class="foot-con flex j-around">
        <div class="item">
          <div class="p-b-20">
            <div v-for="(item,index) in first" :key="item.id">
              <div v-if="index===0" class="F14" style="height:28px;">{{item}}</div>
              <div v-if="index!==0" class="F12 changeOrange" style="height:24px;">{{item}}</div>
            </div>
          </div>
          <div class="p-b-20">
            <div v-for="(item,index) in second" :key="item.id">
              <div v-if="index===0" class="F14" style="height:28px;">{{item}}</div>
              <div v-if="index!==0" class="F12 changeOrange" style="height:24px;">{{item}}</div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="p-b-20">
            <div v-for="(item,index) in third" :key="item.id">
              <div v-if="index===0" class="F14" style="height:28px;">{{item}}</div>
              <div v-if="index!==0" class="F12 changeOrange" style="height:24px;">{{item}}</div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="p-b-20">
            <div v-for="(item,index) in four" :key="item.id">
              <div v-if="index===0" class="F14" style="height:28px;">{{item}}</div>
              <div v-if="index!==0" class="F12 changeOrange" style="height:24px;">{{item}}</div>
            </div>
          </div>
          <div class="p-b-20">
            <div v-for="(item,index) in five" :key="item.id">
              <div v-if="index===0" class="F14" style="height:28px;">{{item}}</div>
              <div v-if="index!==0" class="F12 changeOrange" style="height:24px;">{{item}}</div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="p-b-20">
            <div v-for="(item,index) in six" :key="item.id">
              <div v-if="index===0" class="F14" style="height:28px;">{{item}}</div>
              <div v-if="index!==0" class="F12 changeOrange" style="height:24px;">{{item}}</div>
            </div>
          </div>
          <div class="p-b-20">
            <div v-for="(item,index) in seven" :key="item.id">
              <div v-if="index===0" class="F14" style="height:28px;">{{item}}</div>
              <div v-if="index!==0" class="F12 changeOrange" style="height:24px;">{{item}}</div>
            </div>
          </div>
          <div class="p-b-20">
            <div v-for="(item,index) in eight" :key="item.id">
              <div v-if="index===0" class="F14" style="height:28px;">{{item}}</div>
              <div v-if="index!==0" class="F12 changeOrange" style="height:24px;">{{item}}</div>
            </div>
          </div>
          <div class="p-b-20">
            <div v-for="(item,index) in nine" :key="item.id">
              <div v-if="index===0" class="F14" style="height:28px;">{{item}}</div>
              <div v-if="index!==0" class="F12 changeOrange" style="height:24px;">{{item}}</div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="p-b-20">
            <div v-for="(item,index) in ten" :key="item.id">
              <div v-if="index===0" class="F14" style="height:28px;">{{item}}</div>
              <div v-if="index!==0" class="F12 changeOrange" style="height:24px;">{{item}}</div>
            </div>
          </div>
          <div class="p-b-20">
            <div v-for="(item,index) in eleven" :key="item.id">
              <div v-if="index===0" class="F14" style="height:28px;">{{item}}</div>
              <div v-if="index!==0" class="F12 changeOrange" style="height:24px;">{{item}}</div>
            </div>
          </div>
          <div class="p-b-20">
            <div v-for="(item,index) in telween" :key="item.id">
              <div v-if="index===0" class="F14" style="height:28px;">{{item}}</div>
              <div v-if="index!==0" class="F12 changeOrange" style="height:24px;">{{item}}</div>
            </div>
          </div>
          <div style="height:28px;" class="changeOrange p-b-20">商家自助入驻美团入口</div>
          <div style="height:28px;" class="changeOrange p-b-20">供应商注册入口</div>
        </div>
      </div>
      <div class="foot-end flex j-between a-center">
        <div class="left">
          <div class="F12  m-t-5">
            <span class="changeOrange">美团网团购meituan.com</span>
            <span class="m-lr-10 changeOrange">京ICP证O70791号</span>
            <span class="changeOrange">京ICP备10211739号</span>
          </div>
          <div class="F12 changeOrange m-t-5">广播电视节目制作经营许可证（京）字第03889号</div>
          <div class="F12  m-t-5">
            <span class="changeOrange">食品经营许可证</span>
            <span class="m-l-10 changeOrange">互联网药品信息服务资格证</span>
          </div>
          <div class="F12 changeOrange m-t-5">医疗器械网络交易服务第三方平台备案:（京）网械平台备字[2018]第00004号</div>
        </div>
        <div class="right">
          <div class="flex j-end">
            <div style="width:15px;height:15">
            
            </div>
            <div class="F12 changeOrange">京公网安备 11000002002052号</div>
          </div>
          <div class="flex m-t-10">
            <div class="bg-1">
              <img src="../../../img/license.png" alt class="w100p" />
            </div>
            <div class="p-lr-5 F12 flex a-center j-center changeOrange">北京三快科技有限公司</div>
            <div class="bg-3"></div>
            <div class="bg-4"></div>
            <div class="bg-5"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      first: [
        "用户帮助",
        "申请退款",
        "查看美团券密码",
        "常见问题",
        "用户协议",
        "隐私政策",
        "反诈骗公告",
        "消费者权益保障",
      ],
      second: [
        "美团服务",
        "美团外卖",
        "美团酒店",
        "猫眼电影",
        "美团配送",
        "美团云",
        "大众点评",
        "美团民宿",
        "无人配送",
      ],
      third: [
        "商家合作",
        "美团餐饮商户中心",
        "美食商家入驻(非外卖)",
        "美团外卖开店申请",
        "美团收银官网",
        "外卖配送加盟申请",
        "美团点评餐饮学院",
        "酒店商家入驻",
        "境内度假商家入驻",
        "综合商家入驻",
        "美团民宿房东商家入驻",
        "商家开票申请",
        "美团点评智能收银机",
        "美团点评餐饮开放平台",
        "美团点评收单",
        "免费使用美团排队",
        "快驴进货商家合作",
        "美团闪购商家入驻",
      ],
      four: [
        "代理商加盟",
        "美团外卖代理商招募",
        "到店餐饮代理商招募",
        "非餐饮代理商招募",
        "美团联盟",
        "美团收银招募线上分销商",
        "美团点评5S服务商招募",
        "美团收单渠道代理商招募",
      ],
      five: ["美团规则", "规则中心", "规则目录", "规则评议院"],
      six: ["关注美团", "美团新浪微博"],
      seven: ["公司信息", "关于我们", "商户诚信公约及管理办法", "保险经纪资质"],
      eight: ["廉正举报", "廉正举报平台"],
      nine: ["知识产权", "知识产权维权平台"],
      ten: [
        "消费者服务热线",
        "外卖消费者:10109777",
        "外卖消费者:10109777",
        "猫眼消费者:10105335",
        "其他消费者:10107888",
      ],
      eleven: [
        "商家服务热线",
        "外卖&餐饮商家:10105557",
        "休闲娱乐、丽人.ktv、教育、结婚、亲子、家装等商家:10100107",
      ],
      telween: [
        "投诉举报专区",
        "违法和不良信息举报电话:4006018900",
        "举报邮箱:tousujubao@meituan.com",
        "网上有害信息举报",
      ],
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
@import "../../style/foot";
</style>