<template>
  <div class="login">
      <div class="header_1">头部</div>
      <div class="conter">
          <img src="/assets/images/login-banner.png" alt="">
          <div class="listbiao">
              <p>
                  <a href="#" @click="dianj()" >手机号码快速登录</a>
              </p>
              <p>
                  <a href="#" @click="mim()">账号密码登录</a>
              </p>
          </div>
          <div class="listshu" v-if="show1">
              <p>
                  <span class="iconfont">&#xe62a;</span>
                  <input type="text" placeholder="请输入你的手机号">
                  <!--  class="iconfont icon-iconfontshouji" -->
            </p>
              <p>
                  <span class="iconfont">&#xe68d;</span>
                  <input type="text" placeholder="请输入图片验证码">
                  <i><img class="t1" src="../assets/img/yanz.jpg" alt=""></i>
              </p>
              <p>
                  <span class="iconfont">&#xe61f;</span>
                  <input type="text" placeholder="请输入短信验证码">
                  <i class="btn">发送验证码</i>
              </p>
          </div>
          <div class="listshu" v-if="show2">
              <p>
                  <span class="iconfont">&#xe6b8;</span>
                  <input type="text" placeholder="请输入您的账户">
            </p>
              <p>
                  <span class="iconfont">&#xe612;</span>
                  <input type="text" placeholder="请输入您的密码">
              </p>
             
              <h5><a href="#">忘记密码？</a></h5>
          </div>
      </div>
      <div class="footer">
          <p>登录</p>
          <p>
              <router-link to="/regist">注册</router-link>
              
              </p>
      </div>
  </div>
</template>
<script>
export default {
  name : 'Login',
  data (){
      return {
        show1:true,
        show2:false
      }
  },
  methods:{
    dianj: function() {
            this.show1 = true;
            this.show2 = false;
    },
    mim(){
        this.show2 = true;
        this.show1=false;
    }
    

  }

}
</script>
<style scoped>
@import '../assets/css/iconfont/iconfont.css';
@import '../assets/css/login.css';
</style>


