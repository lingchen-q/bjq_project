<template>
  <div class="city">
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
          <p>城市</p>
        </div>
      </div>
      <div class="city-ad">
        <img
          src="https://wx1.sinaimg.cn/large/008c7v7Tgy1gk1sxnnmppj31h90u0118.jpg"
          @click="newmovies"
        />
        <p>叫做武汉的地方</p>
      </div>
      <div
        class="nav-china"
        v-for="(item, index) in list"
        :key="index"
        @click="newmovies"
      >
        <div class="navchina-title">
          <p class="navchina-title-p1">{{ item.name.c_name }}</p>
          <p class="navchina-title-p2">{{ item.name.e_name }}</p>
        </div>
        <ul class="navchina-ul">
          <li
            class="navchina-li"
            v-for="(content_item, content_index) in item.content_list"
            :key="content_index"
          >
            <ul>
              <li
                v-for="(img_item, img_index) in content_item"
                :key="img_index"
              >
                <img v-if="img_item.image" :src="img_item.image" alt />
                <p v-if="img_item.c_name" class="navchina-li-p1">
                  {{ img_item.c_name }}
                </p>
                <p v-if="img_item.e_name" class="navchina-li-p2">
                  {{ img_item.e_name }}
                </p>
              </li>
            </ul>
          </li>
        </ul>
        <div class="navchina-btn">
          <button>more</button>
        </div>
      </div>
      <div class="nav-ad" @click="newmovies">
        <div class="nav-ad-img">
          <img
            src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=636070350,3804873683&fm=26&gp=0.jpg"
          />
          <div class="nav-ad-p">
            <p>寻找小丑的哥谭</p>
          </div>
        </div>
        <div class="navad-des">
          <p>熟悉而陌生的纽约</p>
        </div>
      </div>
      <div class="nav-all" @click="newmovies">
        <div class="navall-left">
          <h4>全部</h4>
        </div>
        <div class="navall-middle">
          <ul>
            <li>亚洲</li>
            <li>大洋洲</li>
            <li>欧洲</li>
            <li>北美洲</li>
          </ul>
        </div>
        <div class="navall-right">
          <div class="navall-right-near">
            <span>附近</span>
          </div>
          <p>NEARBY</p>
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
      list: [
        {
          name: {
            c_name: "中国内地",
            e_name: "CHINA",
          },
          content_list: [
            [
              {
                image: false,
              },
              {
                image:
                  "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=202392158,4003043144&fm=26&gp=0.jpg",
              },
              {
                c_name: "北京",
                e_name: "Beijing",
                image: false,
              },
            ],
            [
              {
                image:
                  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp6.itc.cn%2Fq_70%2Cc_lfill%2Cw_228%2Ch_148%2Cg_faces%2Fimages01%2F20201216%2Fcc11c9d653ac4e71ac74f460854c1a32.jpeg&refer=http%3A%2F%2Fp6.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613990676&t=c4a933179f40dfb578ed3811420fdc69",
              },
              {
                c_name: "重庆",
                e_name: "Chongqing",
                image: false,
              },
              {
                image: false,
              },
            ],
            [
              {
                image: false,
              },
              {
                image:
                  "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3610341113,322031816&fm=26&gp=0.jpg",
              },
              {
                c_name: "上海",
                e_name: "Shanghai",
                image: false,
              },
            ],
            [
              {
                image:
                  "https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/baike/s=220/sign=54968faabc315c6047956cedbdb0cbe6/4610b912c8fcc3ce7795ea8c9245d688d43f2033.jpg",
              },
              {
                c_name: "南京",
                e_name: "Nanjing",
                image: false,
              },
              {
                image: false,
              },
            ],
          ],
        },
        {
          name: {
            c_name: "亚洲",
            e_name: "Asia",
          },
          content_list: [
            [
              {
                c_name: "东京",
                e_name: "Tokyo",
                image: false,
              },
              {
                image:
                  "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3765874826,1278807802&fm=26&gp=0.jpg",
              },
              {
                image: false,
              },
            ],
            [
              {
                image: false,
              },
              {
                c_name: "北海道",
                e_name: "Hokkaido",
                image: false,
              },
              {
                image:
                  "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4100938987,1991054835&fm=26&gp=0.jpg",
              },
            ],
            [
              {
                c_name: "曼谷",
                e_name: "Bangkok",
                image: false,
              },
              {
                image:
                  "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=694669658,2432036954&fm=15&gp=0.jpg",
              },
              {
                image: false,
              },
            ],
            [
              {
                image: false,
              },
              {
                c_name: "神奈川",
                e_name: "Kanagawa",
                image: false,
              },
              {
                image:
                  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb2-q.mafengwo.net%2Fs11%2FM00%2F59%2FF4%2FwKgBEFq00zSAJbCVABQSixjqJyw450.png%3FimageView2%2F2%2Fw%2F510%2Fh%2F8000%2Fq%2F100&refer=http%3A%2F%2Fb2-q.mafengwo.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613990976&t=3d913235d94cda60f816178d2e3dd673",
              },
            ],
          ],
        },
        {
          name: {
            c_name: "欧洲",
            e_name: "EUROPE",
          },
          content_list: [
            [
              {
                image: false,
              },
              {
                image:
                  " https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3440624616,3981375293&fm=26&gp=0.jpg",
              },
              {
                c_name: "伦敦",
                e_name: "London",
                image: false,
              },
            ],
            [
              {
                image:
                  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171024%2F5a50cdd0905a4142b91f6e76b435727b.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614006133&t=107fc5c6fbbe6af382c5ce265dd95eec",
              },
              {
                c_name: "布拉格",
                e_name: "Prague",
                image: false,
              },
              {
                image: false,
              },
            ],
            [
              {
                image: false,
              },
              {
                image:
                  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161104%2Fb116e1c9473b40a8911fe781c7051934_th.jpeg&refer=http%3A%2F%2Fimg.mp.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614006178&t=45c05db6ba95016aed0e909f3a2aa6fd",
              },
              {
                c_name: "巴黎",
                e_name: "Paris",
                image: false,
              },
            ],
            [
              {
                image:
                  "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1363193528,1426334530&fm=26&gp=0.jpg",
              },
              {
                c_name: "威尼斯",
                e_name: "Venice",
                image: false,
              },
              {
                image: false,
              },
            ],
          ],
        },
        {
          name: {
            c_name: "北美洲",
            e_name: "NORTH AMERICA",
          },
          content_list: [
            [
              {
                c_name: "纽约",
                e_name: "New York City",
                image: false,
              },
              {
                image:
                  "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3765874826,1278807802&fm=26&gp=0.jpg",
              },
              {
                image: false,
              },
            ],
            [
              {
                image: false,
              },
              {
                c_name: "波士顿",
                e_name: "Boston",
                image: false,
              },
              {
                image:
                  "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4100938987,1991054835&fm=26&gp=0.jpg",
              },
            ],
            [
              {
                c_name: "洛杉矶",
                e_name: "Los Angles",
                image: false,
              },
              {
                image:
                  "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=694669658,2432036954&fm=15&gp=0.jpg",
              },
              {
                image: false,
              },
            ],
            [
              {
                image: false,
              },
              {
                c_name: "芝加哥",
                e_name: "Chicago",
                image: false,
              },
              {
                image:
                  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb2-q.mafengwo.net%2Fs11%2FM00%2F59%2FF4%2FwKgBEFq00zSAJbCVABQSixjqJyw450.png%3FimageView2%2F2%2Fw%2F510%2Fh%2F8000%2Fq%2F100&refer=http%3A%2F%2Fb2-q.mafengwo.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613990976&t=3d913235d94cda60f816178d2e3dd673",
              },
            ],
          ],
        },
        {
          name: {
            c_name: "其他",
            e_name: "OTHER",
          },
          content_list: [
            [
              {
                image: false,
              },
              {
                image:
                  " https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3440624616,3981375293&fm=26&gp=0.jpg",
              },
              {
                c_name: "摩洛哥",
                e_name: "Morocco",
                image: false,
              },
            ],
            [
              {
                image:
                  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171024%2F5a50cdd0905a4142b91f6e76b435727b.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614006133&t=107fc5c6fbbe6af382c5ce265dd95eec",
              },
              {
                c_name: "埃及",
                e_name: "Egypt",
                image: false,
              },
              {
                image: false,
              },
            ],
            [
              {
                image: false,
              },
              {
                image:
                  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161104%2Fb116e1c9473b40a8911fe781c7051934_th.jpeg&refer=http%3A%2F%2Fimg.mp.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614006178&t=45c05db6ba95016aed0e909f3a2aa6fd",
              },
              {
                c_name: "乌斯怀亚",
                e_name: "Ushuaia",
                image: false,
              },
            ],
            [
              {
                image:
                  "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1363193528,1426334530&fm=26&gp=0.jpg",
              },
              {
                c_name: "突尼斯",
                e_name: "Tunisia",
                image: false,
              },
              {
                image: false,
              },
            ],
          ],
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
/* 内地导航 */
.nav-china {
  margin: 0 10px;
  height: 540px;
  border-bottom: 1px dashed #c0c0c0;
}
.navchina-title {
  height: 80px;
  /* text-align: right; */
}
.navchina-title-p1 {
  font-size: 16px;
  font-weight: bold;
  margin: 20px 68px 0;
}
.navchina-title-p2 {
  color: #c0c0c0;
  font-size: 40px;
  font-weight: 600;
  margin-left: 10px;
}
.navchina-ul {
  height: 410px;
}
.navchina-li ul {
  display: flex;
  justify-content: space-between;
}
.navchina-li img {
  width: 100%;
  height: 100%;
}
.navchina-li li {
  width: 33%;
  height: 80px;
}
.navchina-li {
  margin-bottom: 16px;
}
.navchina-li-p1 {
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 600;
  color: #000000;
}
.navchina-li-p2 {
  text-align: center;
  margin-top: 4px;
  color: #000000;
}
.navchina-btn button {
  /* margin-top: 20px; */
  width: 100%;
  box-sizing: border-box;
  height: 20px;
  background-color: transparent;
  outline: 0;
  border-radius: 2px;
}
/* 亚洲导航 */
.nav-asia {
  margin: 0 10px;
  height: 540px;
  border-bottom: 1px dashed #c0c0c0;
}
.navasia-title {
  height: 80px;
  /* text-align: right; */
}
.navasia-title-p1 {
  font-size: 16px;
  font-weight: bold;
  margin: 20px 68px 0;
}
.navasia-title-p2 {
  color: #c0c0c0;
  font-size: 40px;
  font-weight: 600;
  margin-left: 10px;
}
.navasia-ul {
  height: 410px;
}
.navasia-li ul {
  display: flex;
  justify-content: space-between;
}
.navasia-li img {
  width: 100%;
  height: 100%;
}
.navasia-li li {
  width: 33%;
  height: 80px;
}
.navasia-li {
  margin-bottom: 16px;
}
.navasia-li-p1 {
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 600;
  color: #000000;
}
.navasia-li-p2 {
  text-align: center;
  margin-top: 4px;
  color: #000000;
}
.navasia-btn button {
  /* margin-top: 20px; */
  width: 100%;
  box-sizing: border-box;
  height: 20px;
  background-color: transparent;
  outline: 0;
  border-radius: 2px;
}
/* 欧洲导航 */
.nav-europe {
  margin: 0 10px;
  height: 540px;
  border-bottom: 1px dashed #c0c0c0;
}
.naveurope-title {
  height: 80px;
  /* text-align: right; */
}
.naveurope-title-p1 {
  font-size: 16px;
  font-weight: bold;
  margin: 20px 68px 0;
}
.naveurope-title-p2 {
  color: #c0c0c0;
  font-size: 40px;
  font-weight: 600;
  margin-left: 10px;
}
.naveurope-ul {
  height: 410px;
}
.naveurope-li ul {
  display: flex;
  justify-content: space-between;
}
.naveurope-li img {
  width: 100%;
  height: 100%;
}
.naveurope-li li {
  width: 33%;
  height: 80px;
}
.naveurope-li {
  margin-bottom: 16px;
}
.naveurope-li-p1 {
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 600;
  color: #000000;
}
.naveurope-li-p2 {
  text-align: center;
  margin-top: 4px;
  color: #000000;
}
.naveurope-btn button {
  /* margin-top: 20px; */
  width: 100%;
  box-sizing: border-box;
  height: 20px;
  background-color: transparent;
  outline: 0;
  border-radius: 2px;
}
.nav-ad {
  margin: 40px 10px;
  height: 240px;
  border-bottom: 1px dashed #c0c0c0;
}
.nav-ad-img {
  width: 100%;
  height: 180px;
  position: relative;
}
.nav-ad-img img {
  width: 100%;
  height: 100%;
  position: relative;
}
.nav-ad-p {
  width: 130px;
  height: 30px;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: #fff;
}
.nav-ad-p p {
  text-align: center;
  margin-top: 4px;
  font-size: 16px;
  font-weight: bold;
}
.navad-des {
  font-size: 12px;
  margin-top: 10px;
  color: grey;
  font-weight: bold;
}
/* 全部导航 */
.nav-all {
  margin: 0 10px;
  height: 100px;
}
.navall-left {
  width: 25%;
  float: left;
}
.navall-left h4 {
  font-size: 18px;
  margin-top: 14px;
  font-weight: 600;
  margin-left: 2px;
}
.navall-middle {
  width: 45%;
  float: left;
}
.navall-middle ul {
  display: flex;
  flex-wrap: wrap;
}
.navall-middle li {
  width: 50%;
  margin-bottom: 12px;
  font-size: 17px;
  font-weight: 600;
}
.navall-right {
  width: 30%;
  height: 100%;
  float: left;
  position: relative;
}
.navall-right p {
  font-size: 18px;
  margin-top: 40px;
  margin-left: 34px;
  /* color: grey; */
}
.navall-right-near {
  border-left: 3px solid grey;
  width: 20px;
  height: 60px;
  position: absolute;
  left: 0;
  bottom: 40%;
}
.navall-right-near span {
  display: block;
  font-size: 20px;
  font-weight: 600;
  margin-left: 8px;
  margin-top: 8px;
}
/* 空盒子 */
.userless-box {
  height: 100px;
}
</style>