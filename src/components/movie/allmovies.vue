<template>
  <div>
    <van-pull-refresh
      v-model="isLoading"
      @refresh="onRefresh"
      success-text="刷新成功"
    ></van-pull-refresh>
    <div class="login-back">
      <van-icon name="arrow" class="goback" @click="goback" />
      <h4>{{ className || "全部电影" }}</h4>
    </div>
    <ul class="choose">
      <li
        v-for="(item, index) in list"
        :key="index"
        @click="classChange(item)"
        :style="{
          background: className == item.name ? 'black' : '#c0c0c0',
        }"
      >
        {{ item.name }}
      </li>
      <!-- <li>爱情</li>
      <li>喜剧</li>
      <li>悬疑</li>
      <li>惊悚</li>
      <li>动作</li>
      <li>科幻</li>
      <li>奇幻</li>
      <li>剧情</li>
      <li>家庭</li>
      <li>冒险</li> -->
    </ul>
    <div class="item">
      <!-- <div class="box"></div> -->
      <ul
        class="movies"
        v-for="(item, index) in movielist"
        :key="index"
        v-show="
          (item.class && item.class.indexOf(className) > -1) ||
          className == '全部'
        "
      >
        <li class="moviesleft">
          <img :src="item.src" />
        </li>
        <li class="moviesmiddle">
          <h4>{{ item.name }}</h4>
          <h5>{{ item.foreignlanguages }}</h5>
          <p>{{ item.des }}</p>
          <span>{{ item.place }}</span>
        </li>
        <li class="moviesright">
          <p>{{ item.num }}</p>
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
      // clasString: "",
      isLoading: false,
      movielist: [],
      className: "全部",
      list: [
        { id: 1, name: "全部" },
        { id: 2, name: "爱情" },
        { id: 3, name: "喜剧" },
        { id: 4, name: "悬疑" },
        { id: 5, name: "惊悚" },
        { id: 6, name: "动作" },
        { id: 7, name: "科幻" },
        { id: 8, name: "奇幻" },
        { id: 9, name: "剧情" },
        { id: 10, name: "家庭" },
        { id: 11, name: "冒险" },
      ],
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
    classChange(item) {
      this.className = item.name;
    },
  },
  created() {
    console.log(this.$router.history.current.query);
    console.log(this.$router);
    var className = this.$router.history.current.query.className;
    movielist.movielist().then((res) => {
      var list = res.data;
      if (className) {
        list = res.data.filter((item) => {
          if (item.class) {
            return item.class.indexOf(className) > -1;
          }
          return false;
        });
        this.className = className;
      }
      console.log(className, res.data, list);
      this.movielist = list;
    });

    bus.$emit("changeFlag", false);
  },
  beforeDestroy() {
    bus.$emit("changeFlag", true);
  },
};
</script>
<style >
.login-back {
  width: 100%;
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #fff;
  /* margin-bottom: 40px; */
}
.item {
  height: 120px;
}
.goback {
  float: left;
}
/* .box {
  height: 60px;
} */
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
.choose {
  /* width: 100%; */
  margin: 0 10px;
  height: 80px;
  margin-top: 100px;
}
.choose li {
  text-align: center;
  background-color: #c0c0c0;
  width: 40px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  height: 20px;
  border-radius: 4px;
  margin-left: 18px;
  margin-bottom: 8px;
  float: left;
}
</style>