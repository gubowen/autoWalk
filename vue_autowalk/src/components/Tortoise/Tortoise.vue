<template>
  <div class="Tortoise">
    <div class="center">
      <div class="TurtleSwiper"></div>
      <New></New>
    </div>
    <div class="nav">
      <ul>
        <li>龟类百科</li>
        <Baike></Baike>
      </ul>
    </div>
    <div>

    </div>
  </div>
</template>
<script>
  import Baike from './Baike';
  import New from './New'
  export default {
    components:{Baike,New},
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .Tortoise{
    width:800px;
    margin:0 auto;
    background: #eee;
    height:600px;
    .nav{
      width:100%;
      height:40px;
      background:red;
    }
    .kind{
      width:100%;
      text-align: center;
      border-collapse: collapse;
      background:#fff;
    }

  }


</style>
