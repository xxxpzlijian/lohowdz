<template>
  <div id="app">
     <!-- <router-link to='/go'>购物车</router-link>
     <router-link to='/list'>商品</router-link>
     <router-link to='/den'>登录</router-link>
     <router-link to='/di'>地点</router-link> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './assets/css/style.css';

/* @import './assets/css/iconfont.css'; */

#app{
  display:flex;
  height:100%;
  width:100%;
}

</style>
