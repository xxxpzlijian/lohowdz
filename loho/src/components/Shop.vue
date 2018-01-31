<template>
  <div class="shop">
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
      <div class="list">
          <p><a href="#">列表</a></p>
          <p><a href="#" id="nobor">地图</a></p>
      </div>
      <div class="tyd">
          <p>共29家体验店(全国共家)</p>
          <span></span>
      </div>
  </div>
</template>

<script>
export default {
  name : 'Shop',
  data(){
      return {
          
      }
  }
}
</script>

<style scoped>
@import '../assets/css/shop.css';
</style>