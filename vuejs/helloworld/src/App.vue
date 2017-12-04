<template>
  <div id="app">
    <MainHeader></MainHeader>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import MainHeader from ".components/global/Header"
export default {
  name: 'app',
  components: {
    MainHeader
  }
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
</style>

<style scoped>
body {
  margin: 0;
  color: #706D7F;
}

#app {
  font-family: PingFang SC Hiragino Sans GB, Microsoft YaHei, Arial,sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#content {
  padding: 100px 0px 60px;
}

a {
  text-decoration: none;
  color: #706D7F;
}
</style>
