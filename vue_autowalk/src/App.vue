<template>
  <div id="app">
    <TopBar></TopBar>
    <router-view/>
  </div>
</template>
<script>
import TopBar from './components/TopBar/TopBar.vue'
export default {
  name: 'App',
  components:{TopBar}
}
</script>

<style type="text/css">
@import './assets/css/base.css';
#app {
}
</style>
