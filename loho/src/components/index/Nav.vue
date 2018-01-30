<template>
  <div class="nav">
      <ul>
          <li v-for="item in list">
              <router-link to="/">
                  <p><img :src="item.pic" alt=""></p>
                  <span>{{item.tag}}</span>
              </router-link>
          </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name : 'Nav',
  data(){
      return {
         list:[] 
      }
  },
  mounted(){
      var that=this
    axios.get('/index').then(function (res) {
        console.log(res);
        that.list=res.data.result.cates;
    }).catch(function (error) {
         console.log(error);
       });
    }
}
</script>

<style scoped>
    .nav{
        overflow: hidden;
        background:#fff;
        border-bottom: 1px solid #e1e1e1;
        margin: 0 auto .1rem;
        padding: 0 0 0.3rem;
    }
    .nav ul li{
        float:left;
        width:25%;
        text-align: center;
    }
    .nav ul li p{
        height: 0.8639rem;
        padding-top: 0.1rem;
        display: -webkit-box;
        -webkit-box-align: center;
        -webkit-box-pack: center;
    }
    .nav ul li p img{
        width:54%;
        height:auto;
        display: inline-block;
        vertical-align: middle;     
    }
    .nav ul li span{
        font-size: 14px;
        color: #333;
        display: block;
    }
</style>