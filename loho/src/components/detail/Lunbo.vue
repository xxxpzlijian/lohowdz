<template>
  <div class="swiper">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in detail">
                <img :src="'http://image.loho88.com/'+item" alt="">
            </div>
        </div>
    </div>
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
  mounted(){
        console.log(this);
		console.log(this.$route.params.fid);
		var id = this.$route.params.fid;
		axios.get(`/goods/${id}`)
		.then((res)=>{
            console.log(res);
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
       height:1.875rem;
       width:100%
   }
   .swiper-slide img{
       width:100%;
       height:100%;
       border:none;
   }
</style>
