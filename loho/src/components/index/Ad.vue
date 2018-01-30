<template>
  <div class="ad">
      <p v-for="item in ad">
      <img :src="item.pic" alt="">
      </p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name : 'Ad',
  data(){
      return {
         ad:[] 
      }
  },
  mounted(){
      var that=this
    axios.get('/index').then(function (res) {
    
        that.ad=res.data.result.ad;
    
    }).catch(function (error) {
         console.log(error);
       });
    }
}
</script>
<style scoped>
    .ad{
        overflow: hidden;
        height:1.5rem;
        margin: 0 auto 0.1rem;
        padding: 0 2.66%;
    }
    .ad img{
        width:100%;
        height:100%;
        border:none;
    }
</style>
