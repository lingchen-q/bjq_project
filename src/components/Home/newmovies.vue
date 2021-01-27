<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功"></van-pull-refresh>
    <div class="login-back">
      <van-icon name="arrow" class="goback" @click="goback" />
      <h4>最新电影</h4>
    </div>
    <div class="item">
      <ul class="movies" v-for="(item,index) in movielist" :key="index">
        <li class="moviesleft">
          <img :src="item.src" />
        </li>
        <li class="moviesmiddle">
          <h4>{{item.name}}</h4>
          <h5>{{item.foreignlanguages}}</h5>
          <p>{{item.des}}</p>
          <span>{{item.place}}</span>
        </li>
        <li class="moviesright">
          <p>{{item.num}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import bus from "../../../bus";
import movielist from "../../model/filmModel";
export default {
  data() {
    return {
      isLoading: false,
      movielist: [],
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    onRefresh() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
  },
  created() {
    movielist.movielist().then((res) => {
      // console.log();
      this.movielist = res.data;
    });
    bus.$emit("changeFlag", false);
  },
  beforeDestroy() {
    bus.$emit("changeFlag", true);
  },
};
</script>
<style>
.login-back {
  width: 100%;
  text-align: center;
}
.item {
  height: 120px;
}
.goback {
  float: left;
}
.login-back h4 {
  margin-left: 108px;
  margin-top: 18px;
  text-align: center;
  font-size: 20px;
  float: left;
}
.movies {
  /* width: 100%; */
  height: 100%;
  margin: 0 10px;
}
.movies li {
  /* float: left; */
  margin: 10px 0;
}
.moviesleft {
  float: left;
  width: 20%;
}
.moviesleft img {
  margin-right: 10px;
  width: 100%;
  height: 90px;
}
.moviesmiddle {
  width: 70%;
  float: left;
  box-sizing: border-box;
  padding-left: 10px;
}
.moviesmiddle h4 {
  font-size: 16px;
  margin-bottom: 4px;
  font-weight: 600;
}
.moviesmiddle h5 {
  font-size: 14px;
  margin-bottom: 4px;
}
.moviesmiddle p {
  font-weight: 600;
  margin-bottom: 4px;
}
.moviesmiddle span {
  display: block;
  color: grey;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.moviesright {
  width: 10%;
  float: left;
}
.moviesright p {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 600;
}
</style>