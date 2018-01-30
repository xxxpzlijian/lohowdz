<template>
    <div class="floor">
        <ul>
            <li v-for="item in list">
                <div class="goods-nav">
                    <h2>
                        <span>{{item.title.word}}</span>
                        <router-link class="more" to="/">
                         {{item.more.word}}
                        </router-link>
                    </h2>
                </div>
                <router-link to="/" class="top-pic">
                <img :src="item.img.pic" alt="">
                </router-link>
                <ul class="show">
                    
                        <li v-for="goods in item.show">
                            <router-link :to="{name:'Detail', params:{fid: goods.gid}}">
                                <p>{{goods.tag}}</p>
                                <p>{{goods.tag_en}}</p>
                                <p><img :src="goods.pic" alt=""></p>
                             </router-link>
                        </li>
                   
                </ul>
               
                <!-- <router-link to="/">
                <li class="floor-right"></li>
                </router-link>
                <router-link to="">
                <li class="floor-left"></li>
                </router-link> -->
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
         list:[]
      }
  },
  mounted(){
      var that=this
    axios.get('/index').then(function (res) {
        that.popularity=res.data.result.popular;
        that.list=res.data.result.classify;
    }).catch(function (error) {
         console.log(error);
       });
    }
}
</script>
<style scoped>
.floor ul li{
    margin-bottom:0.1rem;
    overflow: hidden;
}
.floor ul li div h2{
    background-color: #fff;
    padding: .5em 0.2rem;
    font-size: 16px;
    font-weight: 700;
}
.floor ul li div h2::before{
    /* width: .4rem;
    height: 1em;
    background-color: red;
    border-radius: 1rem;
    margin-right: .25rem;
    vertical-align: baseline; */
}
.floor ul li div h2 span{
    display: inline-block;
    margin-right:1.8rem;
}
.more{
    display:inline-block;
    float:right;
    color: #bdbdbd;
    font-size:14px;
}
.top-pic{
    display: block;
    height:1.066rem;
}
.top-pic img{
    width:100%;
    height:100%;
}
.show{
    overflow: hidden;
}
.floor ul .show li:nth-child(1){
    display:inline-block;
    vertical-align: middle;
    border-bottom: 0;
    border-right: 1px solid #E6E6E6;
    width:50%;
    height:2.8rem;
    float:left;
    padding:0.2rem;
    background: #fff;
}
.show li:nth-child(1) p:nth-child(1){
     margin-top:0.5rem;
}
.show li:nth-child(1) p:nth-child(2){
     margin-bottom:0.3rem;
}
.show li:nth-child(1) p:nth-child(3){
     margin-bottom:0.3rem;
}
.show li p img{
    width:100%;
    height:100%;
}
 .floor ul .show  li{
    border-top: 1px solid #E6E6E6;
    text-align:center;
    font-family: inherit;
    float: right;
    height:1.4rem;
    width:50%;
    font-size: 14px;;
    font-weight: 700;
    padding: 0.2rem;
    background: #fff;
    margin-bottom:0!important;
}
.show li p:nth-child(1){
    line-height: 1.6;
    font-size:14px;
    color:#333;
    font-weight: 400;
}
.show li p:nth-child(2){
    line-height: 1.2;
    font-size:12px;
    color: #c1c1c1;
    text-rendering: optimizeLegibility;
}
.show li p:nth-child(3){
 
}
.floor ul li:nth-child(6) .show li:nth-child(1){
    width:50%;
    height:1.4rem!important;
}
.floor ul li:nth-child(6) .show li:nth-child(1) p{
    margin:0!important;
}
</style>