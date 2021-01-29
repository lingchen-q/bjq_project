<template>
  <div>
    <div class="loginback">
      <van-icon name="arrow" class="goback" @click="goback" />
    </div>
    <div class="head">
      <img
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp2.itc.cn%2Fimages01%2F20200531%2F206a712ab8d44c5ca55ecfd2c6a98224.jpeg&refer=http%3A%2F%2Fp2.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614239973&t=4304271578994e36248b076841909792"
        alt=""
      />
      <h4>神奇女侠</h4>
      <p>Wonder Woman</p>
    </div>
    <div class="moviemes">
      <p>影片信息</p>
      <p>导演：<span>派蒂 杰金斯</span></p>
      <p>主演：<span>盖尔·加朵、克里斯·派恩、罗宾·怀特、康妮·尼尔森</span></p>
      <p>类型：<span>动作/奇幻/冒险</span></p>
      <p>制片国家/地区：<span>美国</span></p>
      <p>制片年：<span>2017</span></p>
    </div>
    <div class="moviedes">
      <h5>剧情简介</h5>
      <p>
        戴安娜·普林斯（盖尔·加朵饰）生活在亚马逊天堂岛，岛上只有女性，作为众神之王宙斯与亚马逊女王希波吕忒（康妮·尼尔森饰）的女儿，在她的成长过程中，一直受到母亲和姨母安提俄珀（罗宾·怀特饰）的悉心呵护。直到有一天，一架战机坠入天堂岛附近海域，戴安娜的平静生活由此被打破。戴安娜将坠海的飞行员史蒂夫·特雷弗（克里斯·派恩饰）救起，但其母亲对这位普通男人的世界没有一点兴趣。史蒂夫强调自己的目标是结束第一次世界大战，而戴安娜则认为这场人类的浩劫或许是战神阿瑞斯捣的鬼，于是决定与史蒂夫一起前往战争前线，第一次亲身体验到了人类战争的威力，并逐渐理解了身为英雄的意义和代价
      </p>
    </div>
    <!-- <div class="moviesother">
      <p>相关电影</p>
    </div> -->
  </div>
</template>
<script>
import bus from "../../../bus";
export default {
  data() {
    return {};
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
  },
};
</script>
<style scoped>
.loginback {
  margin: 0 10px;
  height: 40px;
}
.head img {
  margin-top: 30px;
  /* margin-left: 35%; */
  width: 120px;
  height: 180px;
}
.head {
  text-align: center;
}
.moviemes {
  text-align: center;
}
.moviedes {
  margin: 0 20px;
}
.moviedes h5 {
  font-size: 12px;
}
</style>