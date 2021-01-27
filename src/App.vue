<template>
  <div id="app">
    <div id="nav" v-show="flag">
      <van-tabbar v-model="active" @change="onChange">
        <van-tabbar-item icon="home-o">
          <div>首页</div>
        </van-tabbar-item>
        <van-tabbar-item icon="video-o">
          <div>电影</div>
        </van-tabbar-item>
        <van-tabbar-item icon="hotel-o">
          <div>城市</div>
        </van-tabbar-item>
        <van-tabbar-item icon="location-o">
          <div>地点</div>
        </van-tabbar-item>
        <van-tabbar-item icon="manager-o">
          <div>个人</div>
        </van-tabbar-item>
      </van-tabbar>
    </div>
    <router-view />
  </div>
</template>
<script>
import bus from "../bus";
export default {
  data() {
    return {
      active: 0,
      flag: true,
    };
  },
  methods: {
    onChange(index) {
      console.log("index", index);
      switch (index) {
        case 0:
          this.$router.push({ path: "./" });
          break;
        case 1:
          this.$router.push({ path: "./movie" });
          break;

        case 2:
          this.$router.push({ path: "./city" });
          break;

        case 3:
          this.$router.push({ path: "./place" });
          break;

        case 4:
          this.$router.push({ path: "./mine" });
          break;
      }
    },
  },
  created() {
    bus.$on("changeFlag", (flag) => {
      //消失下面的
      //注册了一个全局的方法
      this.flag = flag;
    });
  },
};
</script>
<style>
@import "//at.alicdn.com/t/font_2043861_1gw563qpqa9.css";

* {
  padding: 0;
  margin: 0;
}
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

/* #nav {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: cornsilk;
  z-index: 9999;
  width: 100%;
  height: 80px;
} */

/* #nav a {
  color: #2c3e50;
  flex: 1;
  text-align: center;
  text-decoration: none;
  font-size: 15px;
} */
</style>
