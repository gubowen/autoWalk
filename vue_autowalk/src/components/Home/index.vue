<template>
  <div class="holle">
    <Container></Container>
  </div>
</template>

<script>
  import Container from '../Container/Container.vue';
  import axios from 'axios';
export default {
  components:{Container},
  data () {
    return {
    }
  },
  mounted(){
    console.log("!111");
    axios.get('localhost:3000/users',(res)=>{
      console.log(res)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="text/scss" lang="scss">
</style>
