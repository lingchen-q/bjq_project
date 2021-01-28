<template>
  <div>
    <div class="gotoback">
      <van-icon name="arrow" class="goback" @click="goback" />
    </div>
    <div class="search-box">
      <input type="text" class="pulldowninput" v-model="searchName" />
      <button @click="search">搜索</button>
    </div>
    <div class="message">
      <div class="message-top">
        <p>大家都在搜</p>
      </div>
      <div class="message-buttom">
        <ul class="message-buttomul">
          <li>真爱至上</li>
          <li>神奇女侠</li>
          <li>西尔莎 罗南</li>
          <li>倪妮</li>
          <li>克里斯蒂安 贝尔</li>
        </ul>
      </div>
    </div>
    <div class="history">
      <p>历史记录</p>
    </div>
  </div>
</template>
<script>
import bus from "../../bus";
import movielist from "../model/filmModel";
export default {
  data() {
    return {
      value: "",
      className: "全部",
      movielist: [],
      searchName: "",
    };
  },
  created() {
    movielist.movielist().then((res) => {
      this.movielist = res.data;
    });

    bus.$emit("changeFlag", false);
  },
  computed: {},
  methods: {
    goback() {
      this.$router.go(-1);
    },

    search() {
      console.log(this.searchName);
      if (this.searchName) {
        this.$router.push("/newmovies?name=" + this.searchName);
      } else {
        return false;
      }
    },
  },

  beforeDestroy() {
    bus.$emit("changeFlag", true);
  },
};
</script>
<style scoped>
.gotoback {
  /* width: 100%; */
  height: 50px;
}
.goback {
  margin-left: 20px;
  /* margin-top: ; */
}
.search-box {
  /* width: 100%; */
  height: 40px;
  /* margin: */
}
.pulldown {
  width: 60px;
  height: 40px;
  font-size: 12px;
  border: 0;
  font-weight: 600;
  /* margin-right: 0px; */
}
.pulldowninput {
  width: 250px;
  margin-left: 40px;
  height: 40px;
  /* border-radius: 4px; */
  border-color: #c0c0c0;
  /* outline: non-e; */
  border: 0;
  border-bottom: 0.5px solid #c0c0c0;
  /* border-left: 0.5px solid #c0c0c0; */
}
.search-box button {
  width: 60px;
  height: 40px;
  border-radius: 20px;
  background: transparent;
  border: 0;
  border: 0.5px solid #c0c0c0;
}
.message {
  height: 160px;
  margin: 0 10px;
}
.message-top {
  margin-top: 30px;
  width: 100%;
  height: 40px;
}
.message-top p {
  text-align: center;
  font-size: 14px;
  font-weight: 600;
}
.message-buttom {
  height: 50px;
}
.message-buttomul li {
  margin-bottom: 20px;
  margin-left: 20px;
  padding: 6px;
  border-radius: 4px;
  background-color: #c0c0c0;
  color: #000000;
  font-weight: 600;
  float: left;
}
.history {
  margin: 0 20px;
  height: 100px;
  background-image: linear-gradient(
    to right,
    #ccc 0%,
    #ccc 50%,
    transparent 50%
  );
  background-size: 8px 1px;
  background-repeat: repeat-x;
}
.history p {
  padding-top: 20px;
  font-size: 14px;
  font-weight: 600;
  color: #c0c0c0;
}
</style>