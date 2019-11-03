<template>
  <div class="top">
    <div class="logo"></div>
      <ul>
        <router-link to="/">Home</router-link>
        <router-link to="/">自走棋</router-link>
        <router-link to="/tortoise">龟</router-link>
        <router-link to="/">博客</router-link>
        <router-link to="/">音乐</router-link>
        <router-link to="/" class="login">登录</router-link>

      </ul>
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
  .top{
    width:800px;
    margin:0 auto;
    background: #ccc;
    height:60px;
    padding:5px;
    box-sizing: border-box;
    .logo{
      float: left;
    }
    ul{
      float:right;
      li{
        padding: 4px 10px;
        float:left;
        display:inline-block;
        cursor:pointer;
      }
      &:after{
        content:'';
        clear: both;
        display: block;
        visibility: hidden;
      }
    }
    .login{
      float:right;
    }
  }


</style>
