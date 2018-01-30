<template>
<<<<<<< HEAD
  <div id="index">
    <Header></Header>
    <div class="content">
      <Swiper />
      <Nav />
      <Ad />  
    </div>
    <Footer></Footer>
=======
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
>>>>>>> dad552ea96b3d6810a28f6a4ed12c0fb55b5de67
  </div>
</template>


<script>
import Header from './index/Header'
import Swiper from './index/Swiper'
import Nav from './index/Nav'
import Ad from './index/Ad'
import Footer from './index/Footer'
export default {
  name: 'Index',
  components:{
    Header,
    Footer,
    Swiper,
    Nav,
    Ad
  }
}
</script>

<<<<<<< HEAD


<style>
     @import '../assets/css/iconfont/iconfont.css';
     @import '../assets/css/style.css';
     #index{
       width:100%;
       height:100%
     }
     .content{
       background: #F2F2F2;
       overflow: hidden;
       position: relative;
       padding-top: 0.6rem;
       padding-bottom: 0.54rem;
     } 
=======
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
>>>>>>> dad552ea96b3d6810a28f6a4ed12c0fb55b5de67
</style>
