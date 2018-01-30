<template>
  <div class="goodslist">
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
	@import url("../assets/css/style.css");
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
		width:1.37rem;
		height:0.4rem;
		display: block;
		overflow: hidden;
		/*text-overflow: ellipsis;*/
		/*text-rendering: optimizeLegibility;*/
		color:#333;
		font-weight: 400;
	}
	i{
		font-size: 0.16rem;
		color:#E51C23;
		font-weight: 700;
		float: left;
		margin-top: 0.1rem;
		
	}
	em{
		font-size: 0.12rem;
		font-weight: 400;
		color:#c1c1c1;
		float: right;
		margin-top: 0.13rem;
	}
	
</style>


