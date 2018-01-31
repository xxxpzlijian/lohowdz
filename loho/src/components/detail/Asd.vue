<template>
  <div class="asd">
      <div class="goods-detail">
          <div class="left">
              <p>{{asd.goodsName}}</p>
          </div>
          <div class="right">
            
          </div>
      </div>
      <ul class="price">
          <li>￥{{asd.shopPrice}}</li>
          <li>快递：免运费</li>
          <li>{{asd.salesNum}}人已买</li>
      </ul>
      <ul class="hd">
          <li v-for="item in asd.promiseTag">
              <span>{{item}}</span>
          </li>
      </ul>
      <div class="models">
          <p>颜色选择</p>
          <div class="two">
              <li v-for="goods in models">
                    <span>{{goods.color}}</span>
              </li>
          </div>
      </div>
      <div class="unioned">
        <span>查看配镜套餐</span>
      </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name : 'Asd',
  data (){
      return {
          asd:[],
          models:[],
          unioned:[],
          img:[]
      }
  },
  mounted(){
        console.log(this);
		console.log(this.$route.params.fid);
        var id = this.$route.params.fid;
        console.log(id)
		axios.get(`/goods/${id}`)
		.then((res)=>{
            console.log(res);
            this.asd = res.data.result.info;
            this.models = res.data.result.models;
            this.unioned = res.data.result.unioned;
            this.img = res.data.result.unioned[0].goods
            console.log(this.img);
		})
	}
}

</script> 
<style scoped>
   @import '../../assets/css/swiper.min.css';
   .asd{
      
   }
.goods-detail{
    background:#fff;
    height:0.68rem;
    width:100%;
     padding:0 10px;
     border-bottom: 1px solid #e1e1e1;
}
.goods-detail .left{
    width:75%;
    padding:6px 0;
    font-size:14px;
    line-height: 1.6;
    border-right: 1px solid #e1e1e1;
    
}
.price{
    height:0.54rem;
    background:#fff;
     padding:0 10px;
     display:flex;
     justify-content: space-between;
     align-items:center;
     border-bottom: 1px solid #e1e1e1;
}
.price li{
    font-size:12px;
}
.price li:nth-child(1){
    font-size:16px;
    color:red;
}
.hd{
    height:.36rem;
    padding:0 10px;
}
.hd li{
    float:left;
    width:25%;
    line-height:0.36rem;
    text-align:center;
    font-size:14px;
}
.models{
    border-top: solid #e1e1e1 1px;
    border-bottom: solid #e1e1e1 1px;
    background-color: #fff;
    height:0.93rem;
    padding:0 10px;
}
.models p{
    font-size:14px;
    color:#333;
    line-height:14px;
    padding:10px 0;
}
.models .two{
    height:0.6rem;
}
.models .two li{
    float:left;
    text-align: center;
    margin-top:0.2rem;
    margin-right:0.1rem;
    font-size:14px;
    cursor: pointer;
}
.models .two li span{
     background:#F2F2F2;
     padding:8px 8px;
}
.models .two li span:hover{
    color: #fff;
    background: #f60!important;
}
.unioned{
    height:1.08rem;
    padding:10px;
}
.unioned div:nth-child(1){
    width:0.87rem;
    height:100%;
}
</style>