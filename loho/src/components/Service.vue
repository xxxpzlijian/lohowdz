<template>
  <div class="service">
      <div class="top">
      	<div class="left">
      		<router-link class="box" to="/">
      			<img src="../assets/img/1517286454(1).png"/>
      			<span>返回</span>
      		</router-link>
      	</div>
      	<i>loho眼镜生活：樱桃</i>
      </div>
      <div class="information">
      	<ul>
        	<li v-for="item in messages">{{item}}</li>
      	</ul>
      </div>
      
      <div class="footer">
      	<img src="../assets/img/1517372332(1).png"/>
      	<textarea class="text" v-model="message"></textarea>
        <button v-on:click="dealMessage">发送</button>
      </div>
  </div>
</template>

<script>
export default {
  name : 'Service',
  data(){
      return {
         messages:[],
         message:""
      }
  },
  methods:{
  	dealMessage:function(){
  		this.messages.push(this.message)
  		this.message=""
  	}
  }
}
</script>

<style scoped>
	.service{
		width:100%;
		height:100%;
		
	}
   .top{
   	width:100%;
   	height:0.4rem;
   	position: fixed;
   	top:0;
   	left:0;
   	background:#fff;
   	text-align: center;
   	border-bottom: 1px solid #555555;
   }
   .top .left img{
   	float: left;
   	width:0.2rem;
   	height:0.2rem;
   	margin:0.1rem 0 0 0.1rem;
   }
   .top .left span{
   	float: left;
   	font-size: 0.14rem;
   	color:#666;
   	height:0.4rem;
   	line-height: 0.4rem;
   }
   .top i{
   	text-align: center;
   	height:0.4rem;
   	line-height: 0.4rem;
   	font-size: 0.18rem;
   	color:#333;
   	margin-right: 0.6rem;
   }
   ul{
   	width:100%;
   	height:100%;
   	flex: 1;
   	display: flex;
   	flex-direction: column;
   	margin-top: 0.4rem;
   }
   ul li{
   	min-width:0.45rem;
   	min-height:0.21rem;
   	font-size: 0.18rem;
   	color:#000;
 		background:#dfdfdf;
 		margin-top: 0.1rem;
   }
   .footer{
   	width:100%;
   	height:0.4rem;
   	position:fixed;
   	left:0;
   	bottom: 0;
   	border-top: 1px solid #555555;
   	background:#fff;
   }
   .footer img{
   	float: left;
   	width:0.3rem;
   	height:0.3rem;
  
   	margin:0.05rem 0 0 0.06rem;
   }
   .footer button{
   	width:0.5rem;
   	height:0.32rem;
   	border:none;
   	float: right;
   	font-size: 0.18rem;
   	background:#fff;
   	outline: none;
   	margin:0.03rem 0 0 0.06rem;
   }
   .footer .text{
   	width:2.78rem;
   	height:0.32rem;
   	outline: none;
   	border-radius:8px;
   	resize:none;
   	font-size:0.18rem;
   	margin:0.05rem 0 0 0.05rem;
   }
</style>