<template>
  <div id="index">
    <Header></Header>
    <div class="content">
      <Swiper />
      <Nav />
      <Ad />
      <Floor /> 
      <Lazyload />
      
    </div>
    <Bottom />
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







      

/* Add "scoped" attribute to limit CSS to this component only */
<style scoped>
@import '../assets/css/iconfont/iconfont.css';
	@import '../assets/css/style.css';
     #index{
       width:100%;
       height:100%
     }
     .content{
       background: #F2F2F2;
       min-height: 800px;
       overflow: hidden;
       position: relative;
       padding-top: 0.6rem;
     }
.index{
  font-size:20px;
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
