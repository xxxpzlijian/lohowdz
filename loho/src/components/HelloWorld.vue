<template>
  <div class="hello">
     <div class="header_1">

     </div>
     <div class="main_1"></div>
     <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  display:flex;
  height:100%;
  width:100%;
  flex-direction: column;
}
.header_1{
  display:flex;
  height:0.6rem;
  width:100%;
  background:green;
}
.main_1{
  display:flex;
  flex : 1;
  
  background:yellow
}
.footer{
  display:flex;
  height:0.6rem;
  width:100%;
  background:red;
}
</style>
