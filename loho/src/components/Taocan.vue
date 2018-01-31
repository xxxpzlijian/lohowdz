<template>
  <div id="detail">
      <Header></Header>
      <div class="content">
          <Lunbo />
          <Asd />
      </div>
      <Ppp />
  </div>
</template>


<script>
import Header from './detail/Header'
 import Lunbo from './detail/Lunbo'
 import Asd from './detail/Asd'
import Ppp from './detail/Ppp'
// import Lazyload from './detail/Lazyload'
// import Footer from './detail/Footer'
// import Bottom from './detail/Bottom'
export default {
  name: 'Detail',
  components:{
      Header,
    Lunbo,
    Asd,
    Ppp
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
         background: #F2F2F2;
     }

</style>