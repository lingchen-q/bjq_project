<template>
  <div>
    <div class="place">
      <van-pull-refresh
        v-model="isLoading"
        @refresh="onRefresh"
        success-text="刷新成功"
      >
        <div class="searchBox">
          <div class="searchBox-img">
            <!-- <i class="iconfont icon-sousuo searchbox-i"></i> -->
          </div>
          <div class="searchBox-title">
            <p>地点</p>
          </div>
        </div>
        <div class="city-ad">
          <img
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11983703613%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613975333&t=fdb04bc8c83c59d6d79ec081834ab1eb"
            @click="newmovies"
          />
          <p>一起爬山吗?</p>
        </div>
        <div class="maps-nearby">
          <div class="maps-img">
            <img
              src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3409008777,3689822072&fm=26&gp=0.jpg"
              @click="newmovies"
              alt
            />
          </div>
          <div class="mapsleft">
            <p>地图</p>
            <p>MAP</p>
          </div>
          <div class="mapsright">
            <p>附近</p>
            <p>NEARBY</p>
          </div>
        </div>
        <div class="allnavlist" @click="newmovies">
          <div class="allnav">
            <div class="allnav-top">
              <p>全部</p>
            </div>
            <div class="allnav-middle">
              <ul>
                <li>中国大陆</li>
                <li>香港</li>
                <li>英国</li>
                <li>美国</li>
              </ul>
            </div>
            <div class="allnav-bottom">
              <ul>
                <li>旅游景点</li>
                <li>历史建筑</li>
                <li>自然风光</li>
                <li>餐饮</li>
                <li>商铺</li>
                <li>酒店</li>
                <li>地标</li>
                <li>宗教场所</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="userless-box"></div>
      </van-pull-refresh>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    onRefresh() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
    newmovies() {
      this.$router.push({ path: "./newmovies" });
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
/* 广告 */
.city-ad {
  margin: 0 10px;
  height: 320px;
  border-bottom: 1px dashed #c0c0c0;
}
.city-ad img {
  width: 100%;
  height: 225px;
}
.city-ad p {
  font-size: 20px;
  font-weight: bold;
}
/* 地图 */
.maps-nearby {
  margin: 0 10px;
  height: 300px;
  position: relative;
}
.maps-img {
  width: 300px;
  height: 300px;
  margin: 60px auto;
}
.maps-img img {
  width: 100%;
  height: 100%;
}
.mapsleft {
  text-align: center;
  width: 100px;
  font-size: 0.733333rem;
  font-weight: bold;
  position: absolute;
  left: 18%;
  top: 45%;
  border-right: 0.026667rem solid #000;
}
.mapsright {
  text-align: center;

  position: absolute;
  font-size: 0.733333rem;
  font-weight: bold;
  left: 52%;
  top: 45%;
}
/* 导航 */
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
  height: 10%;
}
.allnav-top p {
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
}
.allnav-middle {
  width: 100%;
  height: 30%;
}
.allnav-middle ul {
  width: 220px;
  height: 100%;
  margin: 20px auto;
  text-align: center;
}
.allnav-middle li {
  text-align: center;
  width: 100px;
  height: 30px;
  font-size: 22px;
  float: left;
  font-weight: 600;
  /* text-align: right; */
  margin-right: 10px;
  margin-bottom: 20px;
}
.allnav-bottom {
  margin-top: 40px;
  width: 100%;
  height: 40%;
}
.allnav-bottom ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.allnav-bottom li {
  width: 25%;
  margin-bottom: 10px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #505050;
}
/* 空盒子 */
.userless-box {
  height: 80px;
}
</style>