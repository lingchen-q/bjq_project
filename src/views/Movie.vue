<template>
  <div class="movie">
    <van-pull-refresh
      v-model="isLoading"
      @refresh="onRefresh"
      success-text="刷新成功"
    >
      <div class="searchBox">
        <div class="searchBox-img">
          <i class="iconfont icon-sousuo searchbox-i"></i>
        </div>
        <div class="searchBox-title">
          <p>电影</p>
        </div>
      </div>
      <div class="beauty-ad">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.08087.cc%2Fuploads%2F20200128%2F20%2F1580215374-kflMZyIpCK.png&refer=http%3A%2F%2Fimg.08087.cc&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613966875&t=a887340721c0f776b98b2a11dbdbeb34"
          alt
        />
        <p>银幕最美中国画</p>
      </div>
      <div class="allnavlist">
        <div class="allnav" @click="gotoall">
          <div class="allnav-top">
            <div class="allnav-left">
              <p>全部</p>
            </div>
            <div class="allnav-right">
              <ul>
                <li>电影</li>
                <li>电视</li>
                <li>经典</li>
                <li>新片</li>
              </ul>
            </div>
          </div>
          <div class="allnav-bottom">
            <ul>
              <li>中国大陆</li>
              <li>香港</li>
              <li>美国</li>
              <li>英国</li>
              <li>爱情</li>
              <li>喜剧</li>
              <li>科幻</li>
              <li>动作</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="hotmovies">
        <div class="hotmovies-title">
          <p>热门电影</p>
        </div>
        <div class="hotmovies-left">
          <img
            src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1859532173,1500231475&fm=26&gp=0.jpg"
            alt
          />
          <p class="hotmovies-name">信条</p>
          <p class="hotmovies-introduce">2020 / 美国 / 科幻 / 动作 / 剧情</p>
          <button>
            <span>more</span>
          </button>
        </div>
        <div class="hotmovies-right">
          <ul>
            <li v-for="(item, index) in hotmovieslist" :key="index">
              <img :src="item.img" />
              <p>{{ item.name }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="movies-ad">
        <div class="moviesad-img">
          <div class="moviesad-title">
            <p>友情以上</p>
          </div>
          <img
            src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2680290747,401154000&fm=26&gp=0.jpg"
            alt
          />
        </div>
        <div class="moviesad-p">
          <p>去泰国恋爱吧!</p>
        </div>
      </div>
      <div class="userless-box"></div>
    </van-pull-refresh>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: false,
      hotmovieslist: [
        {
          img:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2023352208,3130972443&fm=26&gp=0.jpg",
          name: "隐秘的角落",
        },
        {
          img:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2Fb%2F7f%2Fb9bf2d5df9_130_170.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613895885&t=c999c4b3dcd07e59ae08cbeb32e520f7",
          name: "花木兰",
        },
        {
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1076260257,1234303967&fm=26&gp=0.jpg",
          name: "小妇人",
        },
        {
          img:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3745713292,3303241987&fm=26&gp=0.jpg",
          name: "乔乔的异想世界",
        },
      ],
    };
  },
  methods: {
    onRefresh() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
    gotoall() {
      this.$router.push("./allmovies");
    },
  },
};
</script>
<style scoped>
/* 搜索 */
.searchBox {
  width: 100%;
  height: 80px;
}
.searchBox-img {
  width: 20px;
  height: 20px;
  float: left;
  line-height: 70px;
  margin-top: 16px;
  margin-left: 16px;
  background-color: white;
}
.searchbox-i {
  font-size: 20px;
  /* width: 100%; */
  /* height: 100%; */
}
.searchBox-title {
  float: left;
  width: 80%;
}
.searchBox-title p {
  text-align: center;
  margin-top: 38px;
  font-size: 16px;
  font-weight: bold;
}
/* 广告区 */
.beauty-ad {
  margin: 0 10px;
  height: 320px;
  border-bottom: 1px dashed #c0c0c0;
}
.beauty-ad img {
  width: 100%;
  height: 225px;
}
.beauty-ad p {
  font-size: 20px;
  font-weight: bold;
}
.allnavlist {
  margin: 40px 10px;
  height: 300px;
  position: relative;
  background-color: #f0f6ff;
  /* border-bottom: 1px dashed #c0c0c0; */
}
.allnav {
  width: 90%;
  height: 90%;
  margin: 0 auto;
  position: absolute;
  left: 5%;
  top: 5%;
  background-color: #fff;
}
.allnav-top {
  width: 100%;
  height: 70%;
}
.allnav-left {
  width: 40%;
  float: left;
}
.allnav-left p {
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-top: 60px;
}
.allnav-right {
  width: 60%;
  float: left;
}
.allnav-right ul {
  width: 140px;
  margin-top: 20px;
  margin-left: 10px;
}
.allnav-right li {
  width: 60px;
  height: 30px;
  font-size: 24px;
  float: left;
  font-weight: 600;
  text-align: right;
  margin-right: 10px;
  margin-bottom: 50px;
}
.allnav-bottom {
  width: 100%;
  height: 30%;
}
.allnav-bottom ul {
  display: flex;
  flex-wrap: wrap;
}
.allnav-bottom li {
  width: 25%;
  margin-bottom: 10px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}
/* 热门电影 */
.hotmovies {
  margin: 0 10px;
  height: 390px;
  border-top: 1px dashed #c0c0c0;
  border-bottom: 1px dashed #c0c0c0;
}
.hotmovies-title {
  width: 100%;
}
.hotmovies-title p {
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  margin: 20px 0;
}
.hotmovies-left {
  width: 50%;
  float: left;
}
.hotmovies-left img {
  width: 150px;
  height: 200px;
}
.hotmovies-name {
  font-size: 18px;
  font-weight: bold;
  margin: 6px 0;
}
.hotmovies-introduce {
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hotmovies-left button {
  margin-top: 15px;
  width: 150px;
  box-sizing: border-box;
  height: 20px;
  background-color: transparent;
  outline: 0;
  border-radius: 2px;
}
.hotmovies-right {
  width: 50%;
  float: left;
}
.hotmovies-right ul {
  display: flex;
  flex-wrap: wrap;
}
.hotmovies-right li {
  width: 50%;
  height: 160px;
  margin-bottom: 4px;
}
.hotmovies-right img {
  /* margin: 0 auto; */
  display: block;
  text-align: center;
  width: 80%;
  height: 60%;
}
.hotmovies-right p {
  width: 80%;
  margin-top: 6px;
  font-size: 14px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* text-align: center; */
}
/* 广告 */
.movies-ad {
  margin: 20px 10px;
  height: 240px;
  /* border-bottom: 1px dashed #c0c0c0; */
}
.moviesad-img {
  position: relative;
}
.moviesad-title {
  line-height: 40px;
  font-size: 18px;
  font-weight: bold;
  width: 80px;
  height: 40px;
  background-color: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
}
.moviesad-img img {
  width: 100%;
  height: 90%;
}
.moviesad-p {
  margin-bottom: 20px;
}
.moviesad-p p {
  margin: 8px 0;
  font-size: 13px;
  font-weight: bold;
  color: grey;
}
/* 空盒子 */
.userless-box {
  height: 100px;
}
</style>
