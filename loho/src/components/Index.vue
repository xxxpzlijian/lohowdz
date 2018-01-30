<template>
  <div id="index">
    <Header></Header>
    <div class="content">
      <Swiper />
      <Nav />
      <Ad />
      <Floor /> 
      <Lazyload />
      <Bottom />
    </div>
    <Footer></Footer>
  </div>
</template>


<script>
import Header from './index/Header'
import Swiper from './index/Swiper'
import Nav from './index/Nav'
import Ad from './index/Ad'
import Floor from './index/Floor'
import Lazyload from './index/Lazyload'
import Footer from './index/Footer'
import Bottom from './index/Bottom'
export default {
  name: 'Index',
  components:{
    Header,
    Footer,
    Swiper,
    Nav,
    Ad,
    Floor,
    Lazyload,
    Bottom
  }
}
</script>
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
</style>