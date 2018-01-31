<template>
  <div class="ppp">
      
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name : 'Ppp',
  data (){
      return {
          unioned:[]
      }
  },
  mounted(){
        var id = this.$route.params.fid;
        console.log(id)
		axios.get(`/goods/${id}`)
		.then((res)=>{
            console.log(res);
            this.unioned = res.data.result.unioned;
            console.log(this.unioned);
		})
	}
}

</script> 
<style scoped>
   @import '../../assets/css/swiper.min.css';
   
</style>