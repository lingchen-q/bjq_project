<template>
  <div class="home">
    <van-pull-refresh
      v-model="isLoading"
      @refresh="onRefresh"
      success-text="刷新成功"
    >
      <div class="searchBox">
        <div class="searchBox-img">
          <!-- <img src="../../icon/sousuo.png" /> -->
          <i class="iconfont icon-sousuo searchbox-i" @click="search"></i>
        </div>
      </div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0105%252F15257905j00qmg13y001cc000vj00hom.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614048757&t=f1bf32782183374852efce9537783b4a"
            @click="newmovies"
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F08%2F20161008074924_X3Ccn.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614052365&t=5c9f5565c48cc2ab393ce59675d19be7"
            @click="newmovies"
            alt
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3619277484,1071573902&fm=26&gp=0.jpg"
            @click="newmovies"
            alt
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=820813105,1657528262&fm=26&gp=0.jpg"
            @click="newmovies"
            alt
          />
        </van-swipe-item>
      </van-swipe>
      <div class="news">
        <div class="news-title">
          <p>最近更新</p>
        </div>
        <ul class="news-list">
          <li
            class="news-list-li"
            v-for="(item, index) in newslist"
            :key="index"
            @click="gotodetails"
          >
            <img :src="item.img" />
            <p>{{ item.name }}</p>
            <p>{{ item.des }}</p>
          </li>
        </ul>
        <div class="news-more">
          <button @click="newmovies">more</button>
        </div>
      </div>
      <div class="hot-movies">
        <div class="hotmovies-head">
          <p>热门电影</p>
        </div>
        <div class="hotmovies-left">
          <img
            src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1859532173,1500231475&fm=26&gp=0.jpg"
            @click="gotodetails"
            alt
          />
          <p class="hotmovies-title">信条</p>
          <p class="hotmovies-introduce">2020 / 美国 / 科幻 / 动作 / 剧情</p>
          <p class="hotmovies-site">
            <span class="hotmovies-site-span1">片场</span>
            &emsp; &emsp;
            <span class="hotmovies-site-span2">31</span>
          </p>
          <button @click="newmovies">
            <span>more</span>
          </button>
        </div>
        <div class="hotmovies-right">
          <ul>
            <li
              v-for="(item, index) in hotmovieslist"
              :key="index"
              @click="gotodetails"
            >
              <img :src="item.img" />
              <p>{{ item.name }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="hot-places">
        <div class="hotplaces-title">
          <p>热门地点</p>
        </div>
        <div class="hotplaces-ad">
          <img
            src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=573465671,3963372622&fm=15&gp=0.jpg"
            alt
          />
          <div class="hotplaces-tips">
            <button>FILMED</button>
            <span>隐秘的角落</span>
          </div>
        </div>
        <ul class="hotplaces-list">
          <li v-for="(item, index) in hotplaces" :key="index">
            <img :src="item.img" />
            <p>{{ item.name }}</p>
          </li>
        </ul>
        <div class="hotplaces-more">
          <button @click="newmovies">more</button>
        </div>
      </div>
      <div class="hot-ways">
        <div class="hotways-title">
          <p>热门路线</p>
        </div>
        <div class="hotways-di">
          <div class="hotwaysdileft">
            <div class="hotwaysdi-img">
              <p>连江县</p>
              <img
                src="https://img1.qunarzz.com/travel/d3/1609/41/004646bed84d62b5.jpg_r_720x480x95_46011c82.jpg"
                alt
              />
            </div>
            <div class="hotwaysdi-des">
              <h4>海角天涯的《地久天长》</h4>
              <button>FILMED</button>
              <h5>地久天长</h5>
              <p>
                跟随王小帅的《地久天长》到黄岐半岛走一遭
                <br />包钢工人夫妻为逃离丧子之痛，来到人称“天涯海角的北茭村。”
              </p>
            </div>
          </div>
          <div class="hotwaysdiright">
            <button>FREE</button>
          </div>
        </div>
        <div class="hotways-lun">
          <div class="hotways-top">
            <div class="hotwaysluleft">
              <button>$1.00</button>
            </div>
            <div class="hotwaysluright">
              <div class="hotwayslu-img">
                <p>伦敦</p>
                <img
                  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11374110786%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614148632&t=52d817990246de4cb2b6a5d7f56a6162"
                  alt
                />
              </div>
            </div>
          </div>
          <div class="hotwayslu-des">
            <h4>伦敦：泰晤士河漫步</h4>
            <div class="hotways-tips">
              <button>FILMED</button>
            </div>
            <h5>
              神探夏洛克 第二季|碟中谍5：神秘国度|轻音少女
              剧场版|猜火车|BJ单身日记|BJ
            </h5>
            <p>
              伦敦，无比想去又不敢去的城市。一步一景，太多喜欢的影视剧发生在这里，上演着古今各种节奏激荡文化跳跃的故事。冒昧的拆分一下，这个路线是泰晤士河畔一日游~~不远处的大英博物馆和国王十字火车站还得有完整一天专门去。
            </p>
          </div>
        </div>
        <div class="hotways-more">
          <button @click="newmovies">more</button>
        </div>
      </div>
      <div class="log-keeper">
        <div class="logkeeper-title">
          <p>场记</p>
        </div>
        <div class="log-sq">
          <div class="log-sqtop">
            <div class="log-sqleft">
              <p>神奇华盛顿</p>
              <p>比神奇女侠更神奇</p>
            </div>
            <div class="log-sqright">
              <img
                src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.jiemian.com%2F101%2Foriginal%2F20160725%2F146938220839639400.jpg&refer=http%3A%2F%2Fimg1.jiemian.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614173799&t=86450fff37b2eee7e88a7f1a58d21952"
                alt
              />
            </div>
          </div>
          <div class="log-sqbottom">
            <p>电影重灾区华盛顿，现实比电影更神奇</p>
          </div>
        </div>
        <div class="log-fw">
          <div class="log-fwtop">
            <div class="log-fwleft">
              <p>
                暂停营业变成永久停业，这些看片煲剧时朝思暮想的风味竟然再也吃不到了！
              </p>
              <img
                src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp1.meituan.net%2Fdeal%2F8174e51b814dac73e46c9fed5be0fbeb122307.jpg&refer=http%3A%2F%2Fp1.meituan.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614175507&t=6406b14fbb4f8cbba96a4a7fef250e69"
                alt
              />
            </div>
            <div class="log-fwright">
              <p>停留在2020的风味</p>
            </div>
          </div>
          <div class="log-more">
            <button @click="newmovies">more</button>
          </div>
        </div>
      </div>
      <div class="log-bottom">
        <p>片场/您的电影旅行指南</p>
      </div>
      <div class="userless-box"></div>
    </van-pull-refresh>
  </div>
</template>
<script>
//import movielist from '../model/filmModel'
export default {
  data() {
    return {
      isLoading: false,
      newslist: [
        {
          img:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3216740130,130267283&fm=26&gp=0.jpg",
          name: "神奇女侠",
          des: "2017 美国 片场23",
        },
        {
          img:
            "https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/w=580/sign=bdf7f1eda244ad342ebf878fe0a30c08/7aa2ad345982b2b7fc766ac432adcbef77099b2f.jpg",
          name: "食神",
          des: "1996 中国香港 片场7",
        },
        {
          img:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fphoto%2Fm%2Fpublic%2Fp2543796124.jpg&refer=http%3A%2F%2Fimg3.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613891410&t=47400e983a16b60ccb1e7fb3bf75b686",
          name: "神奇女侠1984",
          des: "2020 美国 片场35",
        },
      ],
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
      ],
      hotplaces: [
        {
          img:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1896992378,3621708935&fm=26&gp=0.jpg",
          name: "霍尔布鲁克彩色沙漠",
        },
        {
          img:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4004449576,920112837&fm=26&gp=0.jpg",
          name: "八官神社",
        },
        {
          img:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2131107460,2441315453&fm=15&gp=0.jpg",
          name: "库木塔克沙漠景区",
        },
      ],
    };
  },
  methods: {
    gotodetails() {
      this.$router.push({ path: "./details" });
    },
    search() {
      this.$router.push({ path: "./search" });
    },
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
/* @import url(//at.alicdn.com/t/font_2043861_bif8ak2m0hi.css); */
/* 轮播图 */
.my-swipe {
  margin: 0 10px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 180px;
  text-align: center;
  background-color: #39a9ed;
}
.van-swipe-item img {
  width: 100%;
  height: 100%;
  display: block;
}
.van-swipe {
  height: 180px;
}
/* 搜索 */
.searchBox {
  width: 100%;
  height: 60px;
}
.searchBox-img {
  width: 40px;
  height: 40px;
  line-height: 70px;
  margin-top: 16px;
  margin-left: 16px;
  background-color: white;
}
.searchbox-i {
  font-size: 20px;
  width: 100%;
  height: 100%;
}
/* 最近更新 */
.news {
  width: 100%;
  /* margin: 0 10px; */
}
.news-title {
  width: 100%;
  height: 50px;
}
.news-title p {
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  line-height: 50px;
  margin-top: 20px;
}
.news-list {
  width: 100%;
  display: flex;
  justify-content: space-around;
  /* height: 100px; */
}
.news-list-li {
  width: 28%;
}
.news-list img {
  width: 100%;
  height: 150px;
}
.news-list-li p {
  margin-top: 2px;
}
.news-more {
  height: 60px;
  margin: 0 10px;
  overflow: hidden;
}
.news-more button {
  margin-top: 20px;
  width: 100%;
  box-sizing: border-box;
  height: 20px;
  background-color: transparent;
  outline: 0;
  border-radius: 2px;
}
/* 热门电影 */
.hotmovies-head {
  width: 100%;
  text-align: center;
  height: 50px;
  /* margin: 10px 0 20px 0; */
}
.hotmovies-head p {
  font-size: 16px;
  font-weight: 600;
  line-height: 50px;
}
.hot-movies {
  margin: 0 10px;
  height: 540px;
}
.hotmovies-left {
  float: left;
  width: 70%;
}
.hotmovies-left img {
  width: 220px;
  height: 320px;
}
.hotmovies-title {
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0px;
}
.hotmovies-introduce {
  font-size: 14px;
  color: gray;
}
.hotmovies-site {
  text-align: right;
  /* margin-right: 50px; */
  margin: 10px 22px 10px;
}
.hotmovies-site-span1 {
  font-size: 16px;
  font-weight: 600;
}
.hotmovies-site-span2 {
  font-size: 40px;
  font-weight: 600;
}
.hotmovies-left button {
  margin-top: 5px;
  width: 220px;
  box-sizing: border-box;
  height: 20px;
  background-color: transparent;
  outline: 0;
  border-radius: 2px;
}
.hotmovies-right {
  float: left;
  width: 30%;
}
.hotmovies-right li {
  width: 100px;
  height: 160px;
  margin-bottom: 4px;
}
.hotmovies-right img {
  /* margin: 0 auto; */
  display: block;
  text-align: center;
  width: 100%;
  height: 80%;
}
.hotmovies-right p {
  margin-top: 6px;
  font-size: 14px;
  font-weight: bold;
  /* text-align: center; */
}
/* 热门地点 */

.hot-places {
  /* width: 100%; */
  height: 430px;
  margin: 0 10px;
}
.hotplaces-title p {
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  line-height: 50px;
  margin-top: 20px;
}
.hotplaces-ad {
  width: 100%;
  height: 200px;
}
.hotplaces-ad img {
  width: 100%;
  height: 90%;
}
.hotplaces-tips {
  text-align: center;
}
.hotplaces-ad span {
  /* text-align: center; */
  line-height: 26px;
  font-size: 12px;
  font-weight: bold;
}
.hotplaces-ad button {
  line-height: 20px;
  font-size: 10px;
  outline: none;
  height: 20px;
  padding: 0 2px;
  border-color: silver;
  background-color: transparent;
  margin-right: 6px;
}
.hotplaces-list {
  margin: 14px 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
}
.hotplaces-list li {
  width: 32%;
  height: 70px;
}
.hotplaces-list img {
  width: 100%;
  height: 100%;
}
.hotplaces-list p {
  margin: 6px 0;
  font-weight: 700;
}
.hotplaces-more {
  height: 60px;
  /* margin: 0 10px; */
  overflow: hidden;
}
.hotplaces-more button {
  margin-top: 20px;
  width: 100%;
  box-sizing: border-box;
  height: 20px;
  background-color: transparent;
  outline: 0;
  border-radius: 2px;
}
/* 热门路线 */
.hot-ways {
  margin: 0 10px;
  height: 800px;
}
.hotways-title {
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  line-height: 50px;
  margin-top: 20px;
}
.hotways-di {
  height: 340px;
  border-bottom: 1px dashed #c0c0c0;
}
.hotwaysdileft {
  width: 80%;
  float: left;
}
.hotwaysdi-img {
  width: 260px;
  height: 180px;
}
.hotwaysdi-img img {
  width: 100%;
  height: 86%;
}
.hotwaysdi-img p {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
}

.hotwaysdi-des {
  height: 120px;
}
.hotwaysdi-des h4 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
}
.hotwaysdi-des button {
  width: 50px;
  padding: 1px 0;
  margin: 6px 0;
  background-color: transparent;
}
.hotwaysdi-des h5 {
  font-size: 14px;
  font-weight: 600;
  margin: 4px 0;
}
.hotwaysdi-des p {
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hotwaysdiright {
  float: left;
  height: 100%;
}
.hotwaysdiright button {
  background-color: transparent;
  outline: 0;
  width: 50px;
  height: 20px;
  border-radius: 2px;
  margin-top: 220px;
  margin-left: 14px;
}
.hotways-lun {
  margin-top: 40px;
  height: 340px;
  margin: 40px 10px 0 10px;
}
.hotways-top {
  height: 180px;
}
.hotwaysluleft {
  float: left;
  width: 30%;
  height: 100%;
}
.hotwaysluleft button {
  background-color: transparent;
  outline: 0;
  width: 50px;
  height: 20px;
  border-radius: 2px;
  margin-top: 140px;
  margin-left: 14px;
}
.hotwaysluright {
  float: right;
  width: 70%;
  height: 100%;
}
.hotwayslu-img {
  width: 100%;
  height: 150px;
}
.hotwayslu-img p {
  text-align: right;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
}
.hotwayslu-img img {
  width: 100%;
  height: 100%;
}
.hotwayslu-des {
  height: 220px;
  width: 100%;
}
.hotwayslu-des h4 {
  text-align: right;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
}
.hotwayslu-des h3 {
  text-align: right;
}
.hotways-tips {
  text-align: right;
}
.hotwayslu-des button {
  /* float: right; */
  width: 50px;
  padding: 1px 0;
  margin: 6px 0;
  background-color: transparent;
}
.hotwayslu-des h5 {
  font-size: 14px;
  font-weight: 600;
  margin: 4px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hotwayslu-des p {
  margin-top: 10px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.hotways-more {
  /* width: 100%; */
  margin: 0 10px;
  height: 100px;
}
.hotways-more button {
  margin-top: 20px;
  width: 100%;
  box-sizing: border-box;
  height: 20px;
  background-color: transparent;
  outline: 0;
  border-radius: 2px;
}
/* 场记 */
.log-keeper {
  width: 100%;
  margin-top: 40px;
}
.logkeeper-title p {
  text-align: center;

  font-weight: bold;
  font-size: 0.426667rem;
  line-height: 1.333333rem;
}
.log-sq {
  /* width: 100%; */
  margin: 0 10px;
  height: 160px;
  border-bottom: 1px dashed #c0c0c0;
}
.log-sqtop {
  width: 100%;
  height: 90%;
}
.log-sqleft {
  float: left;
  width: 60%;
  height: 100%;
}
.log-sqright {
  float: left;
  width: 40%;
  height: 100%;
}
.log-sqright img {
  width: 100%;
  height: 80px;
}
.log-fw {
  height: 180px;
  margin-top: 30px;
}
.log-fwtop {
  height: 90%;
}
.log-fwleft {
  width: 70%;
  float: left;
}
.log-fwleft img {
  width: 180px;
  height: 100px;
}
.log-fwright {
  width: 30%;
  float: left;
}
.log-more {
  /* width: 100%; */
  margin: 0 10px;
  height: 100px;
}
.log-more button {
  margin-top: 20px;
  width: 100%;
  box-sizing: border-box;
  height: 20px;
  background-color: transparent;
  outline: 0;
  border-radius: 2px;
}
.log-bottom {
  width: 100%;
  text-align: center;
  margin-top: 60px;
  height: 10px;
}
.log-bottom p {
  color: grey;
}
/* 空盒子 */
.userless-box {
  height: 70px;
}
</style>
