<template>
  <div id="app">
    <img src="./assets/img/梁朝伟.jpg">
    <!-- <HelloWorld msg="this is belong to RQP"/> -->
    <router-link to="/rqp">阮启朋</router-link>
    <router-link to="/sdb">宋德斌</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img{
  border-radius: 50%;
}
</style>
