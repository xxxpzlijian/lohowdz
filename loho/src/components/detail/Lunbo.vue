<template>
  <div class="swiper">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in detail">
                <img :src="'http://image.loho88.com/'+item" alt="">
            </div>
        </div>
    </div>
    <div class="gradient"></div>
  </div>
</template>
<script>
import axios from 'axios'
import Swiper from 'swiper'
export default {
  name : 'Lunbo',
  data (){
      return {
          detail:[]
      }
  },
  activated(){
		console.log(this.$route.params.fid);
		var id = this.$route.params.fid;
		axios.get(`/goods/${id}`)
		.then((res)=>{
            this.detail = res.data.result.info.pics;
           this.$nextTick(function(){
               var mySwiper = new Swiper('.swiper-container', {
                autoplay: true,
                loop:true
              })
           })
		})
	}
}

</script> 
<style scoped>
   @import '../../assets/css/swiper.min.css';
   .swiper-slide{
       height:2.2rem!important;
       width:100%
   }
   .swiper-slide img{
       width:100%;
       height:auto;
       border:none;
       padding:0.4rem 0 0;
       display: inline-block;
       vertical-align: middle;
   }
   .swiper .gradient{
       height:0.8rem;
        background:linear-gradient(bottom,#c8c8c8,rgba(255,255,255,0));
   }
   .swiper{
       margin-bottom:0.1rem;
       background:#fff;
   }
</style>
