<template>
  <div id="detail">
      <Header></Header>
      <div class="content">
          <Lunbo />
      </div>
  </div>
</template>


<script>
import Header from './detail/Header'
 import Lunbo from './detail/Lunbo'
// import Nav from './detail/Nav'
// import Ad from './detail/Ad'
// import Floor from './detail/Floor'
// import Lazyload from './detail/Lazyload'
// import Footer from './detail/Footer'
// import Bottom from './detail/Bottom'
export default {
  name: 'Detail',
  components:{
      Header,
    Lunbo
  }
}
</script>
<style>
     @import '../assets/css/iconfont/iconfont.css';
     @import '../assets/css/style.css';
     #detail{
       width:100%;
       height:100%
     }
     .content{
         padding-top:0.6rem;
     }

</style>