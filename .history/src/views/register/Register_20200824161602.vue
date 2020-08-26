<template>
  <div>
    <div class="register">
      <div class="register1">
        <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt class="img" />
        <div class="d-f">
          <div>已有美团账号?</div>
          <div class="sign m-l-10 d-f j-c-c a-i-c">登录</div>
        </div>
      </div>
    </div>
    <div class="show"></div>
    <div class="register">
      <div class="r-register m-t-20">
        <div class="d-f">
          <div class="m-t-10">用户名</div>
          <el-input
            placeholder="请输入用户名"
            v-model="input"
            clearable
            class="input m-l-40"
            @change="change"
          ></el-input>
          <div class="f-s-12 m-l-10 m-t-10">注册成功后，全美团通用</div>
        </div>
        <div class="d-f m-t-20">
          <div class="m-t-10">邮箱</div>
          <el-input
            placeholder="请输入邮箱"
            v-model="inputs"
            @blur="blur"
            @change="changes"
            clearable
            class="input m-l-55"
          ></el-input>
          <div class="m-l-10 m-t-10 f-s-12">{{datas}}</div>
        </div>
        <div class="d-f m-t-20">
          <div class="m-t-10">创建密码</div>
          <el-input placeholder="请创建密码" v-model="inputss" clearable class="input m-l-25" @change="passwords"></el-input>
        <div class="m-l-10 m-t-10 f-s-12">{{dataer}}</div>
        </div>
        <div class="d-f m-t-20">
          <div class="m-t-10">确认密码</div>
          <el-input placeholder="请再次确认密码" v-model="inputr" clearable class="input m-l-25" @change="passwordss"></el-input>
        <div class="m-l-10 m-t-10 f-s-12">{{num}}</div>
        </div>
        <div class="agree d-f j-c-c a-i-c f-w" @click="registers">同意以下协议并注册</div>
        <a
          class="agreement"
          href="https://rules-center.meituan.com/rules-detail/4"
        >《美团点评用户服务协议》 《美团点评隐私政策》</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      input: "",
      inputr: "",
      inputs: "",
      inputss: "",
      datas:'',
      dataer:'',
      num:'',
      inputrr:'',
      inputser:''
    };
  },
  components: {},
  methods: {
      //确定
      passwordss(value){
        this.inputr=value
        if(this.inputr===this.inputss){
            this.num=('验证成功')
            this.inputrr=this.inputr
        }else{
          this.num=('密码错误')  
        }
      },
      //创建密码
      passwords(value){
       this.inputss=value
       if(this.inputss.length <6){
           this.dataer=('密码不能少于6位')
       }if(this.inputss.length >12){
          this.dataer=('密码不能多于12位') 
       }else{
          this.dataer=('创建成功') 
       }
      },
    changes(value) {
      this.inputs = value;
      console.log(this.inputs);
    },
    blur() {
         //邮箱验证的正则表达式
      const reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
      let str = this.inputs;
      if (reg.test(str)) {
        // 这里是邮箱验证成功的代码
        // subscribe({
        //   e_mail: this.inputs,
        //   state: this.state,
        //   notes: this.notes
        // }).then(res => {
        //   console.log(res);
        // //   if (res.data.code === 20000) {
        // //     this.$message.success("成功");
        // //   } else {
        // //     this.$message.warning(res.data.message);
        // //     return false;
        // //   }
        // });
        this.inputser=this.inputs
      } else {
            this.datas=('邮箱格式错误')
      }
    },
    change(value) {
      console.log(value);
      this.input = value;
    },
    //注册
    registers() {
      this.$api.register({ username:this.input, password:this.inputrr,email:this.inputser }).then(res=>{
          this.$message.success(res.msg);
          this.$router.push({name:"Sigon",query:{username:this.input}})
          console.log(res);
      }).catch(err=>{
          console.log(err);
      })
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.register {
  width: 100%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.register1 {
  width: 960px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
}
.img {
  width: 110px;
  height: 40px;
}
.sign {
  width: 45px;
  height: 25px;
  background: orange;
}
.show {
  width: 100%;
  left: 0;
  right: 0;
  height: 2px;
  background: #9999;
  margin-top: 10px;
}
.r-register {
  width: 960px;
  padding: 10px 0;
}
.input {
  width: 248px;
  height: 24px;
}
.agree {
  width: 200px;
  height: 40px;
  background: orange;
  margin-top: 20px;
  margin-left: 88px;
}
.agreement {
  margin-top: 30px;
  font-size: 12px;
  color: orange;
  margin-left: 50px;
  text-decoration: none;
}
</style>