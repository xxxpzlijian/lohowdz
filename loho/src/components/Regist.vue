<template>
  <div class="regist">
     <div class="header">
          <div class="header-left">
          <router-link to="/">
              <i class="iconfont icon-moreunfold"></i>
          </router-link>
      </div>
      <div class="header-logo"></div>
      <div class="header-right">
          <ul>
              <li>
                  <a href="/cart/">
                    <i class="iconfont icon-cart"></i>
                  </a>
              </li>
              <li>
                  <a href="/user/index.do">
                    <i class="iconfont icon-account"></i>
                  </a>
              </li>
          </ul>
      </div>
      </div>
      <div class="conten">
          <p>
              <span>手机号</span>
              <input type="text" placeholder="请输入手机号">
          </p>
          <p>
              <span>图形验证码</span>
              <input type="text" placeholder="请输入验证码">
              <i><img src="../assets/img/yanz.jpg"></i>
          </p>
          <p>
              <span>验证码</span>
              <input type="text" placeholder="请输入短信验证码">
              <i class="fs">发送验证码</i>
          </p>
          <p>
              <span>密码</span>
              <input type="text" placeholder="请输入6~20位的密码">
          </p>
          <p>
              <span>确认密码</span>
              <input type="text" placeholder="请在输入一次密码">
          </p>
      </div>
      <div class="kong">
          <div class="kongkong"></div>
          <p>完成注册表示您已看过并接受<a href="#">《LOHO用户协议》</a></p>
      </div>
      <div class="foot">
          快速注册
      </div>
  </div>
</template>
<script>
export default {
  name : 'Regist',
  data (){
      return {

      }
  }
}
</script>
<style scoped>
@import '../assets/css/iconfont/iconfont.css';
@import '../assets/css/regist.css';

</style>

