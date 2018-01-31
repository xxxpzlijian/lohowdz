<template>
	<div class="purchase">
		<div class="top">
			<router-link to="/">
				<img src="../assets/img/1517313007(1).png"/>
			</router-link>
			<span>团购分类</span>
			<i class="iconfont icon-all" @click="flag()"></i>
		</div>
	<div class="toplist" v-if="isshow">
	      <div>
	          <router-link class="box" to="/">
	            <span><i class="iconfont icon-wxbzhuye"></i></span>
	            <span>首页</span>
	          </router-link>
	      </div>
	      <div>
	          <router-link class="box" to="/purchase">
	            <span><i class="iconfont icon-account"></i></span>
	            <span>会员中心</span>
	          </router-link>
	      </div>
	      <div>
	          <router-link class="box" to="/service">
	            <span><i class="iconfont icon-cart"></i></span>
	            <span>购物车</span>
	          </router-link>
	      </div>
	      <div>
	          <router-link class="box" to="/shop">
	            <span><i class="iconfont icon-iconfontfuwushichang"></i></span>
	            <span>在线咨询</span>
	          </router-link>
	      </div>
    </div>
		<ul>
			<router-link to="/">
				<li>
					<img src="../assets/img/img1.jpg"/>
					<span>价值760元1.600MR-8非球面单光镜片配镜套餐代金卷</span>
					<i>优惠价：￥<a href="">399</a></i>
					<em>￥760</em>
					<p>点击下单购买</p>
				</li>
				<li>
					<img src="../assets/img/img2.jpg"/>
					<span>价值640元1.600MR-8防蓝光非球面镜片配镜套餐团购卷，仅限本产品使用</span>
					<i>优惠价：￥<a href="">439</a></i>
					<em>￥640</em>
					<p>点击下单购买</p>
				</li>
				<li>
					<img src="../assets/img/img3.jpg"/>
					<span>价值980元1.552依视路超薄A3配镜套餐代金卷，仅售188</span>
					<i>优惠价：￥<a href="">589</a></i>
					<em>￥980</em>
					<p>点击下单购买</p>
				</li>
				<li>
					<img src="../assets/img/img4.jpg"/>
					<span>价值1740元1.71绿膜单光镜片配镜套餐代金劵，仅售699元</span>
					<i>优惠价：￥<a href="">699</a></i>
					<em>￥1740</em>
					<p>点击下单购买</p>
				</li>
				<li>
					<img src="../assets/img/img5.jpg"/>
					<span>价值1280元1.601依视路钻晶A++配镜套餐代金卷，</span>
					<i>优惠价：￥<a href="">739</a></i>
					<em>￥1280</em>
					<p>点击下单购买</p>
				</li>
				<li>
					<img src="../assets/img/img6.jpg"/>
					<span>价值1940元1.71绿膜单光片配镜套餐代金卷，仅售799元</span>
					<i>优惠价：￥<a href="">799</a></i>
					<em>￥1940</em>
					<p>点击下单购买</p>
				</li>
				<li>
					<img src="../assets/img/img7.jpg"/>
					<span>价值1480元1.600蔡司A60配镜套餐代金卷，仅售839元</span>
					<i>优惠价：￥<a href="">839</a></i>
					<em>￥1480</em>
					<p>点击下单购买</p>
				</li>
				<li>
					<img src="../assets/img/img8.jpg"/>
					<span>价值2000元配镜套餐代金卷，仅售1299元</span>
					<i>优惠价：￥<a href="">2000</a></i>
					<em>￥1299</em>
					<p>点击下单购买</p>
				</li>
			</router-link>
		</ul>
	</div>

</template>

<script>
	
export default {
	name: "purchase",
	data: function() {
		return {
			isshow:false,
		}
	},
	methods:{
		flag:function(){
			this.isshow = !this.isshow;
		}
	}
}
</script>

<style scoped>
	@import '../assets/css/iconfont/iconfont.css';
	@import '../assets/css/style.css';
.purchase{
	width:100%;
	height:100%;
	position:relative;
	/*display: flex;*/
}
.top{
	position:fixed;
	top:0;
	left:0;
	height:0.44rem;
	line-height: 0.44rem;
	width:100%;
	background:#333;
	color:#fff;
	text-align: center;
}
.top img{
	float: left;
	margin:0.11rem 0 0 0.11rem;
	width:0.22rem;
	height:0.22rem;
}
.top span{
	font-size: 0.16rem;
	color:#fff;
	font-weight: 400;
}
.top i{
	float: right;
	margin-right: 0.11rem;
	font-size: 0.14rem;
}
ul{
	height:100%;
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: auto;
	margin-top:0.54rem ;
	
}
ul li{
	width:48%;
	height:2.4rem;
/*	background:yellow;*/
	float: left;
	margin-left: 1.3%;
}
ul li img{
	width:1.86rem;
	height:0.74rem;
	margin:0.25rem 0;
}
ul li span{
	width:1.66rem;
	height:0.35rem;
	display: block;
	overflow: hidden;
	font-size: 0.13rem;
	color:#333;
	background:#eee;
	margin-left: 0.1rem;
}
ul li i{
	color:#ff0000;
	font-weight: 600;
	font-size: 0.13rem;
	margin-left: 0.1rem;
	float: left;
	padding-top:0.2rem 
}
ul li i a{
	color:#ff0000;
	font-weight: 600;
	font-size: 0.15rem;
	
}
ul li em{
	font-weight: 300;
	color:#999;
	font-size: 0.13rem;
	float: right;
	margin-right: 0.1rem;
	margin-top: 0.2rem;
}
ul li p{
	background:#FFB700;
	width:1.76rem;
	height:0.26rem;
	text-align: center;
	line-height: 0.26rem;
	font-size: 0.15rem;
	font-weight: 600;
	color:#000;
	margin-top: 0.5rem;
	margin-left: 0.03rem;
	
}
</style>