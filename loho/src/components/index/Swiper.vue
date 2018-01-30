<template>
  <div class="swiper">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="http://img.loho88.com/images/17sj-lensstyle/750-375-17winner.jpg" alt="">
            </div>
            <div class="swiper-slide">
                <img src="http://img.loho88.com/images/loho-m/111/ljsy.jpg" alt="">
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
export default {
  name : 'Swiper',
  data (){
      return {

      }
  },
  mounted(){
        var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,
        loop:true
    })
  }
}

</script>
<style scoped>
   @import '../../assets/css/swiper.min.css';
   .swiper-slide{
       height:1.875rem;
       width:100%
   }
   .swiper-slide img{
       width:100%;
       height:100%;
       border:none;
   }
</style>
