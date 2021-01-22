<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        首页
        <!-- <img src="../" alt /> -->
      </router-link>
      <router-link to="/about">电影</router-link>
      <router-link to="/city">城市</router-link>
      <router-link to="/place">地点</router-link>
      <router-link to="/mine">个人</router-link>
      <!-- a标签 -->
    </div>
    <router-view />
    <!-- <component :is=""></component> -->
  </div>
</template>

<style>
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: cornsilk;
  z-index: 9999;
  width: 100%;
  height: 80px;
}

#nav a {
  color: #2c3e50;
  flex: 1;
  text-align: center;
  text-decoration: none;
  font-size: 15px;
}
</style>
