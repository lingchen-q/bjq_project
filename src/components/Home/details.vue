<template>
  <div>
    <div class="loginback">
      <van-icon name="arrow" class="goback" @click="goback" />
    </div>
    <div class="title">
      <p>神奇女侠</p>
      <p>Wonder Woman</p>
    </div>
    <div class="movie-item">
      <div class="movieitemleft">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp2.itc.cn%2Fimages01%2F20200531%2F206a712ab8d44c5ca55ecfd2c6a98224.jpeg&refer=http%3A%2F%2Fp2.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614239973&t=4304271578994e36248b076841909792"
          alt=""
        />
      </div>
      <div class="movieitemright">
        <div class="rightnum">
          <p class="rightnump1">片场</p>
          <p class="rightnump2">23</p>
        </div>
        <p class="rightnump3">动作/奇幻/冒险</p>
        <p class="rightnump4">美国</p>
        <p class="rightnump5">2017</p>
        <button @click="moviedes">more</button>
      </div>
    </div>
    <div class="movie-des">
      <p>
        电影主要取景于意大利和英国，并有大量影棚镜头和后期修饰。<br />
        前半段天堂岛实景全部取自意大利南部。世界文化遗产马泰拉洞窟民居成为天堂岛民居，辛波乃别墅成为亚马逊女战士的训练场，东南部维纳诺提卡海滩成为戴安娜和史蒂夫首次相遇的天堂岛海滩。<br />
        影片中段的伦敦实景采用了伦敦保留19世纪风貌的诸多古建筑，如林肯律师学院旧广场和石楼巷，澳大利亚楼，维多利亚楼，西西里大街，大乔治街一号，以及国王十字车站。<br />
        影片后段的比利时/法国战争前线，均在英格兰南部取景，包括蒂尔伯里要塞及客运码头，奥德利城堡，伯恩树林，哈特菲尔德庄园和卢顿胡庄园老农场等。<br />
        影片开头的卢浮宮画面是唯一来自法国的实景，而卢浮宮内景为伦敦大英博物馆。
      </p>
    </div>
    <van-tabs v-model="activeName" class="navname">
      <van-tab title="剧情" name="a">
        <ul class="storyline" v-for="(item, index) in storylist" :key="index">
          <li>
            <p>{{ item.time }}</p>
            <p>{{ item.spot }}</p>
            <p>{{ item.foreign }}</p>
            <p>{{ item.place }}</p>
            <p>{{ item.des }}</p>
          </li>
          <li>
            <img
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171108%2Fad8f3c70b26d46f893485aa110df4558.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614410578&t=28d378ff2ce70116cb4677a07c94a2cf"
              alt=""
            />
          </li>
        </ul>
      </van-tab>
      <van-tab title="距离" name="b">
        <ul class="distance" v-for="(item, index) in dislist" :key="index">
          <li>
            <p>{{ item.time }}</p>
            <p>{{ item.spot }}</p>
            <p>{{ item.foreign }}</p>
            <p>{{ item.place }}</p>
            <p>{{ item.des }}</p>
          </li>
          <li>
            <img
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fc45c835d66bb43123663135849ad6b8dfc652af9.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614410986&t=582427e73c288e171dca6976fb967c0d"
              alt=""
            />
          </li>
        </ul>
      </van-tab>
      <van-tab title="城市" name="c">
        <ul class="city" v-for="(item, index) in citylist" :key="index">
          <li>
            <p>{{ item.time }}</p>
            <p>{{ item.spot }}</p>
            <p>{{ item.foreign }}</p>
            <p>{{ item.place }}</p>
            <p>{{ item.des }}</p>
          </li>
          <li>
            <img
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171108%2Fad8f3c70b26d46f893485aa110df4558.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614410578&t=28d378ff2ce70116cb4677a07c94a2cf"
              alt=""
            />
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>
<style scoped>
.loginback {
  margin: 0 10px;
  height: 40px;
}
.title {
  width: 100%;
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
}
.movie-item {
  /* width: 100%; */
  height: 200px;
  margin: 0 10px;
}
.movieitemleft {
  width: 110px;
  height: 170px;
  float: left;
}
.movieitemleft img {
  width: 100%;
  height: 100%;
}
.movieitemright {
  width: 220px;
  float: left;
  margin-left: 10px;
}
.rightnump1 {
  text-align: right;
  font-size: 16px;
  font-weight: 600;
}
.rightnump2 {
  text-align: right;
  font-size: 24px;
  font-weight: 600;
}
.rightnump3 {
  margin-top: 34px;
  margin-bottom: 6px;
  font-weight: 600;
  font-size: 12px;
  color: #c0c0c0;
}
.rightnump4 {
  /* margin-top: 20px; */
  margin-bottom: 6px;
  font-weight: 600;
  font-size: 12px;
  color: #c0c0c0;
}
.rightnump5 {
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 12px;
  color: #c0c0c0;
}
.movieitemright button {
  width: 220px;
  height: 20px;
  background: transparent;
}
.movie-des {
  margin: 0 10px;
  color: #c0c0c0;
  font-size: 12px;
  height: 200px;
  /* font-weight: 600; */
}
.navname {
  margin: 0 10px;
  height: 200px;
}
.navname ul {
  height: 100px;
}
.storyline li {
  width: 50%;
  float: left;
  height: 100px;
  margin-top: 10px;
  /* margin-bottom: 10px; */
}
.storyline img {
  width: 100%;
  height: 100%;
}
.storyline p {
  margin-top: 2px;
  font-size: 12px;
  font-weight: 600;
}
.distance li {
  width: 50%;
  float: left;
  height: 100px;
  margin-top: 10px;
  /* margin-bottom: 10px; */
}
.distance img {
  width: 100%;
  height: 100%;
}
.distance p {
  margin-top: 2px;
  font-size: 12px;
  font-weight: 600;
}
.city li {
  width: 50%;
  float: left;
  height: 100px;
  margin-top: 10px;
  /* margin-bottom: 10px; */
}
.city img {
  width: 100%;
  height: 100%;
}
.city p {
  margin-top: 2px;
  font-size: 12px;
  font-weight: 600;
}
</style>
<script>
import bus from "../../../bus";

export default {
  data() {
    return {
      activeName: "a",
      storylist: [
        {
          id: 1,
          time: "01:25",
          spot: "卢浮宫",
          foreign: "Louvre Museum",
          place: "法国 巴黎市",
          des: "戴安娜的现代工作地",
        },
        {
          id: 2,
          time: "01:25",
          spot: "卢浮宫",
          foreign: "Louvre Museum",
          place: "法国 巴黎市",
          des: "戴安娜的现代工作地",
        },
        {
          id: 3,
          time: "01:25",
          spot: "卢浮宫",
          foreign: "Louvre Museum",
          place: "法国 巴黎市",
          des: "戴安娜的现代工作地",
        },
        {
          id: 4,
          time: "01:25",
          spot: "卢浮宫",
          foreign: "Louvre Museum",
          place: "法国 巴黎市",
          des: "戴安娜的现代工作地",
        },
        {
          id: 5,
          time: "01:25",
          spot: "卢浮宫",
          foreign: "Louvre Museum",
          place: "法国 巴黎市",
          des: "戴安娜的现代工作地",
        },
        {
          id: 6,
          time: "01:25",
          spot: "卢浮宫",
          foreign: "Louvre Museum",
          place: "法国 巴黎市",
          des: "戴安娜的现代工作地",
        },
        {
          id: 7,
          time: "01:25",
          spot: "卢浮宫",
          foreign: "Louvre Museum",
          place: "法国 巴黎市",
          des: "戴安娜的现代工作地",
        },
      ],
      dislist: [
        {
          id: 1,
          time: ">100km",
          spot: "马泰拉洞窟民居",
          foreign: "Sassi di Matera",
          place: "意大利 马泰拉",
          des: "天堂岛",
        },
        {
          id: 2,
          time: ">100km",
          spot: "马泰拉洞窟民居",
          foreign: "Sassi di Matera",
          place: "意大利 马泰拉",
          des: "天堂岛",
        },
        {
          id: 3,
          time: ">100km",
          spot: "马泰拉洞窟民居",
          foreign: "Sassi di Matera",
          place: "意大利 马泰拉",
          des: "天堂岛",
        },
        {
          id: 4,
          time: ">100km",
          spot: "马泰拉洞窟民居",
          foreign: "Sassi di Matera",
          place: "意大利 马泰拉",
          des: "天堂岛",
        },
        {
          id: 5,
          time: ">100km",
          spot: "马泰拉洞窟民居",
          foreign: "Sassi di Matera",
          place: "意大利 马泰拉",
          des: "天堂岛",
        },
        {
          id: 6,
          time: ">100km",
          spot: "马泰拉洞窟民居",
          foreign: "Sassi di Matera",
          place: "意大利 马泰拉",
          des: "天堂岛",
        },
        {
          id: 7,
          time: ">100km",
          spot: "马泰拉洞窟民居",
          foreign: "Sassi di Matera",
          place: "意大利 马泰拉",
          des: "天堂岛",
        },
      ],
      citylist: [
        {
          id: 1,
          time: "法国 巴黎市",
          spot: "卢浮宫",
          foreign: "Louvre Museum",
          place: "法国 巴黎市",
          des: "戴安娜的现代工作地",
        },
        {
          id: 2,
          time: "法国 巴黎市",
          spot: "卢浮宫",
          foreign: "Louvre Museum",
          place: "法国 巴黎市",
          des: "戴安娜的现代工作地",
        },
        {
          id: 3,
          time: "法国 巴黎市",
          spot: "卢浮宫",
          foreign: "Louvre Museum",
          place: "法国 巴黎市",
          des: "戴安娜的现代工作地",
        },
        {
          id: 4,
          time: "法国 巴黎市",
          spot: "卢浮宫",
          foreign: "Louvre Museum",
          place: "法国 巴黎市",
          des: "戴安娜的现代工作地",
        },
        {
          id: 5,
          time: "法国 巴黎市",
          spot: "卢浮宫",
          foreign: "Louvre Museum",
          place: "法国 巴黎市",
          des: "戴安娜的现代工作地",
        },
        {
          id: 6,
          time: "法国 巴黎市",
          spot: "卢浮宫",
          foreign: "Louvre Museum",
          place: "法国 巴黎市",
          des: "戴安娜的现代工作地",
        },
        {
          id: 7,
          time: "法国 巴黎市",
          spot: "卢浮宫",
          foreign: "Louvre Museum",
          place: "法国 巴黎市",
          des: "戴安娜的现代工作地",
        },
      ],
    };
  },
  mounted() {
    bus.$emit("changeFlag", false);
  },
  beforeDestroy() {
    bus.$emit("changeFlag", true);
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    moviedes() {
      this.$router.push({ path: "./describe" });
    },
  },
};
</script>