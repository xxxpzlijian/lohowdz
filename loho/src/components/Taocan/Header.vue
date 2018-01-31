<template>
  <div class="header">
      <div class="header-left">
          <a href="javascript:history.go(-1)">
              <i class="iconfont icon-moreunfold"></i>
          </a>
      </div>
      <div class="header-logo"></div>
      <div class="header-right">
          <ul>
              <li>
                  <a href="/cart/">
                    <i class="iconfont icon-cart"></i>
                  </a>
              </li>
              <li>
                  <a href="/user/index.do">
                    <i class="iconfont icon-account"></i>
                  </a>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
    export default {
  name: 'Header',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
    .header{
        background: #fff;
        display: flex;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        line-height: 0.6rem;
        height: 0.6rem;
        z-index: 99;
    }
    .header-left{
        float:left;
    }
    .header-left a{
        width:1.2rem;
        display:block;
        text-align:center;
        color:#333;
        font-size:14px;
    }
    .header-left a i{
        font-size:18px!important;
    }
    .header-logo{
        margin: auto;
        width: 72px;
        height: 31px;
        background-size: contain;
    }
    .header-right{
        float: right !important;
        width: auto;
        padding: 0;
        top: 0;
        right: 0;
    }
    .header-right ul{
        width:1.2rem;
        height:100%;
    }
    .header-right ul li{
        float:left;
        width:0.6rem;
        text-align:center;
    }
    .header-right ul li a i{
        font-size:0.22rem!important;
        font-weight:600;
        color:#333;
    }
</style>
