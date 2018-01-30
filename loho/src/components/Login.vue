<template>
  <div class="login">
      <div class="header_1">头部</div>
      <div class="conter">
          <img src="/assets/images/login-banner.png" alt="">
          <div class="listbiao">
              <p>
                  <a href="#" @click="dianj()">手机号码快速登录</a>
              </p>
              <p>
                  <a href="">账号密码登录</a>
              </p>
          </div>
          <div class="listshu">
              <p>
                  <span id="sp"></span>
                  <input type="text">
            </p>
              <p>
                  <span></span>
                  <input type="text">
                  <i></i>
              </p>
              <p>
                  <span></span>
                  <input type="text">
                  <i></i>
              </p>
          </div>
          <div class="listshu">
              <p>
                  <span></span>
                  <input type="text">
            </p>
              <p>
                  <span></span>
                  <input type="text">
                  <i></i>
              </p>
              <p>
                  <span></span>
                  <input type="text">
                  <i></i>
              </p>
          </div>
      </div>
  </div>
</template>
<script>
import '../assets/js/login.js'
export default {
  name : 'Login',
  data (){
      return {

      }
  },
  methods:{
      dianj() {
          
      }
  }

}
</script>
<style scoped>
@import '../assets/css/login.css';
</style>


