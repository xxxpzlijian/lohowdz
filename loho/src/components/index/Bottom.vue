<template>
  <div class="bottom">
    <div>
         <router-link to="/shop">
            <p>
                <i class="iconfont icon-map"></i>
                <span>欢迎来体验店试戴</span>
            </p>
        </router-link>
        <p>
            <i class="iconfont icon-iconfontfuwushichang"></i>
            <span>预约电话</span>
        </p>
    </div>
    <div>
        <img src="../../assets/img/logo.png" alt="">
    </div>
    <div>
        ©2005-2016 深圳市乐活电子商务有限公司版权所有，并保留所有权利。
    </div>
  </div>
</template>

<script>

export default {
  name : 'Bottom',
  data(){
      return {
         lazy:[]
      }
  }
}
</script>
<style scoped>
.bottom{
    overflow: hidden;
}
.bottom div:nth-child(1){
    height:0.84rem;
    background-color: #1d1d1d;
    border-bottom:2px solid #000;
}
.bottom div:nth-child(1) p{
    width:50%;
    line-height:0.84rem;
    float: left;
    text-align:center;
}
.bottom div:nth-child(1) p i{
    font-size:22px!important;
    color:red;
}
.bottom div:nth-child(1) p span{
    font-size:14px;
    color:#fff;
}
.bottom div:nth-child(1) p:nth-child(1){
    border-right:1px solid #000;
}
.bottom div:nth-child(2){
    height:0.98rem;
    background-color: #1d1d1d;
    border-bottom:2px solid #000;
    text-align: center;
    line-height: 0.98rem;
    padding:0.25rem 1.5rem
}
.bottom div:nth-child(2) img{
    width:100%;
    height:100%;
    display:inline-block;
}
.bottom div:nth-child(3){
background-color: #1d1d1d;
border-bottom:2px solid #000;
 height:0.5rem;
 line-height:0.5rem;
 text-align:center;
 font-size:14px;
 color:#999;
}
</style>