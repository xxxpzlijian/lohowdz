<template>
  <div class="footer">
      <div>
          <router-link class="box" to="/">
            <span><i class="iconfont icon-wxbzhuye"></i></span>
            <span>首页</span>
          </router-link>
      </div>
      <div>
          <router-link class="box" to="/purchase">
            <span><i class="iconfont icon-shouye1"></i></span>
            <span>团购</span>
          </router-link>
      </div>
      <div>
          <router-link class="box" to="/service">
            <span><i class="iconfont icon-iconfontfuwushichang"></i></span>
            <span>客服</span>
          </router-link>
      </div>
      <div>
          <router-link class="box" to="/shop">
            <span><i class="iconfont icon-map"></i></span>
            <span>附近体验店</span>
          </router-link>
      </div>
      <div>
          <router-link class="box" to="/login">
            <span><i class="iconfont icon-account"></i></span>
            <span>我的</span>
          </router-link>
      </div>
  </div>
</template>

<script>
    export default {
  name: 'Footer',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
@import '../../assets/css/iconfont/iconfont.css';
@import '../../assets/css/style.css';	
    .footer{
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 99;
        height:0.54rem;
        display:flex;
        justify-content:space-around;
        align-items:center;
        background: #fff;
    }
    .footer .box{
        display:flex;
        flex-direction:column;
        justify-content: space-around;
        align-items:center;
        font-size:10px;
        color:#333;
        font-weight:600;
    }
    .footer .box span i{
        font-size:24px!important;
    }
</style>
