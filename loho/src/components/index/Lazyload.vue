<template>
  <div class="lazy">
    <div class="btn" @click="more()">
        <span>你可能喜欢</span>
        <i class="iconfont icon-moreunfold"></i>
    </div>
    <ul>
        
            <li v-for="item in lazy" v-if="flag">
            <span>NEW</span>
            <router-link to="/">
                <p>
                    <img :src="'http://image.loho88.com/'+item.img" alt="">
                </p>
            </router-link>
            <p>{{item.title}}</p>
            <p>￥{{item.price}}</p>
            </li>
        
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name : 'Lazyload',
  data(){
      return {
         lazy:[],
         flag:false 
      }
  },
  methods:{
      more(){
       this.flag=!this.flag
      }
  },
  mounted(){
      var that=this
    axios.get('/search/?sort=o6&e=249&page=2').then(function (res) {
        that.lazy=res.data.result.data;
    }).catch(function (error) {
         console.log(error);
       });
    }
}
</script>
<style scoped>
 .btn{
     text-align:center;
    font-size:20px;
    height:50px;
    background:#fff;
    line-height:50px;
 }
 .btn i{
     font-size:22px!important;
 }
 .lazy ul li{
     background: #fff;
     width:50%;
     overflow: hidden;
     border-top: 1px #e1e1e1 solid;
     float: left;
     text-align:center;
     color:#333;
 }
 .lazy ul li span{
     font-size:14px;
     display:block;
     text-align:left;
 }
 .lazy ul li:nth-child(2n+1){
     border-right: 1px #e1e1e1 solid;
 }
 .lazy ul li p img{
     display:inline-block;
     border:none;
     width:100%;
     height:100%;
     margin-top:0.2rem;
     padding:0.1rem;
 }
 .lazy ul li p:nth-of-type(1){
     font-size:14px;
     margin-top:0.2rem;
 }
 .lazy ul li p:nth-of-type(23){
     color:red;
     font-size:16px;
     margin-top:0.1rem;
 }
</style>