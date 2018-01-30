<template>
  <div class="floor">
     <ul>
         <li v-for="item in floor">
             <h2></h2>
             <div></div>
         </li>
     </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name : 'Floor',
  data(){
      return {
         floor:[] 
      }
  },
  mounted(){
      var that=this
    axios.get('/index').then(function (res) {
        console.log(res);
        that.ad=res.data.result.ad;
        console.log(that.ad);
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