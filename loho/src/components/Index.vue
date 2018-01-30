<template>
  <div class="index">
     <div class="header_1">
<<<<<<< HEAD
       <router-link to='/login'>登录</router-link>
=======
				<router-link to='/goodslist'>商品</router-link>
>>>>>>> 3f869622374a6553f6e6dc1af816238d606010c7
     </div>
     <div class="main_1"></div>
     <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
<<<<<<< HEAD
  font-size:20px;
=======
>>>>>>> 3f869622374a6553f6e6dc1af816238d606010c7
  display:flex;
  height:100%;
  width:100%;
  flex-direction: column;
}
.header_1{
  display:flex;
  height:0.6rem;
  width:100%;
  background:green;
}
.main_1{
  display:flex;
  flex : 1;
  
  background:yellow
}
.footer{
  display:flex;
  height:0.6rem;
  width:100%;
  background:red;
}
</style>
