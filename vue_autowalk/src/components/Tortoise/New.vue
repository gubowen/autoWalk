<template>
    <div class="news">
      <div class="TurtleSwiper">
          <div class="swiper"></div>
          <div class="content"></div>
      </div>
      <div class="center"></div>
    </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .Tortoise{
    .news{
      height:600px;
      display:flex;
      .TurtleSwiper{
        flex:0 0 400px;
        width:400px;

        float:left;
        .swiper{
          width:100%;
          height:300px;
          background: #000;
        }
        .content{
          height:150px;
          width:100%;
          background: #fff;
        }
      }
      .center{
        flex:1;
        height:450px;
        background:#fff;
      }
    }
  }


</style>
