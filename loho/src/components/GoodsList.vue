<template>
  <div class="goodslist">
  	<div class="header"> 		
  			<a href="">
  				<router-link to="/">
  					<img src="../assets/img/1517286454(1).png"/>
  				</router-link>
  			</a>
  			<p>新品上市</p>
  			<div class="right">
  				<h2 class="iconfont icon-cart"></h2>
  				<h3 class="iconfont icon-all"></h3>
  			</div> 		
  	</div>
  	
  	<div class="nav">
  		<a href="####">综合</a>
  		<a href="####">销量</a>
  		<a href="####">价格</a>
  		<a href="####">筛选</a>
  	</div>
  	
   	<ul>
				<li v-for="item in list">
						<img :src='"http://image.loho88.com/"+item.img'/>
						<span>{{item.title}}</span>
						<i>￥{{item.price}}</i>
						<em>{{item.salesNum}}人已买</em>
				</li>
		</ul>
  </div>
</template>
<script>
import axios from 'axios';
export default {
	name: "goodslist",
	data: function() {
		return {
			list: []
		}
	},
	mounted() {
		axios.get("/search/?e=222&page=1")
		.then((res)=>{
			console.log(res);
			this.list = res.data.result.data

		})
	}
}
</script>
<style scoped>
	@import '../assets/css/iconfont/iconfont.css';
	@import '../assets/css/style.css';
	.goodslist{
		background:#f2f2f2;
		width:100%;
		height:100%;
	}

	ul{
		height:100%;
		flex: 1;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	li{
		width:49.22%;
		height:2.1rem;
		align-content: space-between;
		margin-top: 0.05rem;
		background:#fff;
		text-align: center;
		/*background:yellow;*/
	}
	li img{
		width:1.37rem;
		height:1.2rem;
		padding-top:0.33rem;
		padding-bottom: 0.33rem;
		display: inline;
		vertical-align: middle;
	}
	span{
		font-size: 0.14rem;
		width:1.64rem;
		height:0.4rem;
		display: block;
		overflow: hidden;
		color:#333;
		font-weight: 400;
		margin-left: 0.1rem;
	}
	i{
		font-size: 0.16rem;
		color:#E51C23;
		font-weight: 700;
		float: left;
		margin-top: 0.1rem;
		margin-left: 0.1rem;
	}
	em{
		font-size: 0.12rem;
		font-weight: 400;
		color:#c1c1c1;
		float: right;
		margin-top: 0.13rem;
		margin-right: 0.1rem;
	}
	.nav{
		display: flex;
		justify-content:space-around;
		height:0.47rem;
		background:#fff;
	}
	.nav a{
		font-size: 0.16rem;
		line-height: 0.47rem;
		color:#444;

	}
	.header{
		height:0.5rem;
		background:#fff;
		border-bottom: 0.5px solid #333;
		width:100%;
		position: fixed;
		top:0;
		left:0;
	}
	.header a img{
		width:0.28rem;
		height:0.28rem;
		margin:0.11rem 0 0 0.11rem;
		float: left;
	}
	.header p{
		float: left;
		height:0.5rem;
		color:#444;
		line-height: 0.5rem;
		font-size: 0.18rem;
		font-weight: 400;
		margin-left: 30%;
	}
	.header .right{
		float:right;
		height:0.5rem;
		line-height: 0.5rem;
	}

	.header .right h3{
		float: left;
		font-size: 0.2rem;
		font-size: 800;
		color:#000;
		width:0.3rem;
	}
		.header .right h2{
		float: left;
		font-size: 0.2rem;
		font-size: 800;
		color:#000;
		width:0.6rem;
	}
</style>


