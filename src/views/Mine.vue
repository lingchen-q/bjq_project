<template>
  <div class="mine">
    <van-pull-refresh
      v-model="isLoading"
      @refresh="onRefresh"
      success-text="刷新成功"
    >
      <div class="mine-title">
        <p>个人</p>
      </div>
      <div class="mine-login">
        <div class="login-left">
          <div class="login-pic">
            <img src="../../img/ss.png" alt />
          </div>
          <div class="head-right" v-if="flag">
            <van-button color="#c0c0c0" plain @click="login"
              >立刻登录</van-button
            >
          </div>
          <div class="head-right loginafter" v-if="!flag">
            <p>
              <span>{{ username }}</span>
              的个人主页
            </p>
          </div>
        </div>
        <div class="login-right">
          <div class="login-icon">
            <i class="iconfont icon-xin login login-letter"></i>
            <i
              class="iconfont icon-shezhi1 login login-setup"
              @click="login_setup"
            ></i>
          </div>
        </div>
      </div>
      <div>
        <!-- <van-button
          class="popup"
          plain
          hairline
          v-if="!flag"
          type="primary"
          block
          @click="showPopup"
        >退出</van-button>-->
        <van-button
          class="popup"
          color="#C8C8C8"
          plain
          v-if="!flag"
          type="primary"
          block
          @click="showPopup"
          >退出</van-button
        >
        <van-popup v-model="show">
          <div class="tui">
            <div class="logout1">您确定要退出吗?</div>
            <div class="logout2">
              <p class="confirm" @click="logout">确定</p>
              <p
                class="cancel"
                @click="show = !show"
                style="border-right: 1px solid #666"
              >
                取消
              </p>
            </div>
          </div>
        </van-popup>
      </div>
      <div class="mine-ways">
        <div class="tourbox">
          <p>TOUR ROUTE</p>
        </div>
        <div class="mineways-left">
          <p>我的路线</p>
        </div>
        <div class="mineways-right">
          <img src="../../img/mine1 (1).jpg" alt />
        </div>
      </div>
      <div class="mine-movies">
        <div class="minemoviesleft">
          <div class="moviebox">
            <img src="../../img/mine1 (2).jpg" alt />
          </div>
          <div class="movietitle">
            <span class="movietitle1">电影</span>
            <span class="movietitle2">0</span>
          </div>
        </div>
        <div class="minemoviesmiddle">
          <div class="citytitle">
            <span class="citytitle1">城市</span>
            <span class="citytitle2">0</span>
          </div>
          <div class="minecity">
            <img src="../../img/mine1 (3).jpg" alt />
          </div>
          <div class="logtitle">
            <span class="logtitle1">场记</span>
            <span class="logtitle2">0</span>
          </div>
          <div class="minelog">
            <img src="../../img/mine1 (6).jpg" alt />
          </div>
        </div>
        <div class="minemoviesright"></div>
      </div>
      <div class="mineplace">
        <div class="mineleft">
          <p class="mineplacep1">地点</p>
          <p class="mineplacep2">0</p>
        </div>
        <div class="mineright">
          <img src="../../img/mine1 (4).jpg" alt />
        </div>
      </div>
      <div class="mine-person">
        <div class="minepersonleft"></div>
        <div class="minepersonmiddle">
          <div class="minepersontitle">
            <p>POSTER</p>
          </div>
          <img src="../../img/mine12.jpg" alt />
        </div>
        <div class="minepersonright">
          <p class="minepersonrightp1">0</p>
          <p class="minepersonrightp2">人物</p>
        </div>
      </div>
      <div class="mine-bottom">
        <div class="comment">
          <van-icon name="comment-o" class="comment-o" />
          <p>评论</p>
        </div>
      </div>
      <div class="userlessbox"></div>
    </van-pull-refresh>
  </div>
</template>
<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      isLoading: false,
      flag: true,
      show: false,
      username: localStorage.getItem("username"),
    };
  },
  methods: {
    login() {
      this.$router.push({ path: "login" });
    },

    onRefresh() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
    logout() {
      localStorage.removeItem("username");
      location.reload();
    },
    showPopup() {
      this.show = true;
    },
    login_setup() {
      if (this.username) {
        this.$router.push({ path: "./setup" });
      } else {
        Toast("请先登录");
      }
    },
  },
  created() {
    if (this.username) {
      this.flag = false;
    }
  },
};
</script>
<style scoped>
/* 标题 */
.mine-title {
  width: 100%;
}
.mine-title p {
  text-align: center;
  margin-top: 38px;
  font-size: 16px;
  font-weight: bold;
}
/* 登录 */
.mine-login {
  margin-top: 20px;
  width: 100%;
  height: 300px;
}
.login-left {
  float: left;
  width: 70%;
  height: 100%;
  border: 0.5px dotted #c0c0c0;
  box-sizing: border-box;
  border-radius: 2px;
  position: relative;
}
.login-pic {
  width: 160px;
  height: 200px;
  margin: 0 auto;
  margin-top: 20px;
}
.login-left button {
  width: 180px;
  height: 40px;
  background-color: transparent;
  border-color: #c0c0c0;
  outline: 0;
  margin: 25px 40px;
  border-radius: 4px;
}
.login-right {
  height: 100%;
  overflow: hidden;
  float: left;
  width: 30%;
  position: relative;
  display: block;
}
.login-letter {
  display: block;
  margin-left: 10px;
  margin-bottom: 10px;
}
.login-setup {
  display: block;
  margin-left: 10px;
}
.login-icon {
  width: 24px;
  height: 20px;
  position: absolute;
  right: 34%;
  bottom: 16%;
  margin-left: 10px;
  display: block;
}
.login {
  font-size: 24px;
}
.loginafter {
  margin: 30px 30px;
}
.loginafter p {
  width: 220px;
  font-size: 20px;
  color: #c8c8c8;
}
.popup {
  position: absolute;
  left: 10px;
  top: 0;
  width: 60px;
  height: 30px;
  font-weight: 600;
}
.tui {
  overflow: hidden;
}
.logout1 {
  width: 140px;
  height: 30px;
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
  font-weight: 600;
  color: #c0c0c0;
}
.logout2 {
  font-size: 14px;
  font-weight: 600;
  color: #c0c0c0;
  text-align: center;
}
.confirm {
  float: left;
  width: 40px;
  height: 20px;
  border: 0.5px solid #000000;
  margin-left: 20px;
}
.cancel {
  float: left;
  width: 40px;
  height: 20px;
  border: 0.5px solid #000000;
  margin-left: 10px;
  margin-bottom: 10px;
}
.mine-ways {
  width: 100%;
  height: 150px;
  margin-top: 30px;
  position: relative;
}
.tourbox {
  width: 130px;
  height: 36px;
  background-color: #000000;
  position: absolute;
  left: 4%;
  bottom: 12%;
}
.tourbox p {
  font-weight: 600;
  font-size: 18px;
  color: #fff;
  line-height: 36px;
  text-align: center;
}
.mineways-left {
  float: left;
  width: 36%;
  height: 100%;
}
.mineways-left p {
  font-size: 16px;
  font-weight: 600;
  margin-top: 74px;
  margin-left: 14px;
}
.mineways-right {
  width: 64%;
  border: 0.5px dotted #c0c0c0;
  box-sizing: border-box;
  border-radius: 2px;
  float: left;
  height: 100%;
}
.mineways-right img {
  width: 100%;
  height: 100%;
}
/* 电影 */
.mine-movies {
  width: 100%;
  margin-top: 40px;
  height: 220px;
}
.minemoviesleft {
  /* margin-top: 10x; */
  float: left;
  width: 41%;
  height: 220px;
  position: relative;
}
.moviebox {
  width: 94%;
  height: 190px;
  position: absolute;
  left: 10%;
  bottom: 0;
  border: 0.5px dotted #c0c0c0;
  box-sizing: border-box;
  border-radius: 2px;
}
.moviebox img {
  width: 100%;
  height: 100%;
}
.movietitle {
  position: absolute;
  left: 0;
  bottom: 0;
}
.movietitle1 {
  font-size: 20px;
  font-weight: 600;
  margin-left: 30px;
}
.movietitle2 {
  font-size: 50px;
  /* font-weight: 600; */
  margin-left: 40px;
}
.minemoviesmiddle {
  float: left;
  height: 180px;
  width: 34%;
  margin-left: 12px;
}
.minecity {
  width: 100%;
  height: 80px;
  border: 0.5px dotted #c0c0c0;
  box-sizing: border-box;
  border-radius: 2px;
}
.minelog {
  width: 100%;
  height: 80px;
  border: 0.5px dotted #c0c0c0;
  box-sizing: border-box;
  border-radius: 2px;
}
.minecity img {
  width: 100%;
  height: 100%;
}
.minelog img {
  width: 100%;
  height: 100%;
}
.citytitle1 {
  font-size: 18px;
  font-weight: 600;
}
.citytitle2 {
  font-size: 26px;
  margin-left: 40px;
}
.logtitle1 {
  font-size: 18px;
  font-weight: 600;
}
.logtitle2 {
  font-size: 26px;
  margin-left: 40px;
}
.minemoviesright {
  float: left;
}
/* 地点 */
.mineplace {
  width: 100%;
  height: 150px;
  margin-top: 48px;
}
.mineleft {
  float: left;
  width: 40%;
  height: 100%;
}
.mineplacep1 {
  font-size: 20px;
  margin-top: 90px;
  margin-left: 20px;
  font-weight: 600;
}
.mineplacep2 {
  font-size: 30px;
  font-weight: 600;
  margin-left: 20px;
}
.mineright {
  float: left;
  width: 60%;
  height: 100%;
  border: 0.5px dotted #c0c0c0;
  box-sizing: border-box;
  border-radius: 2px;
}
.mineright img {
  width: 100%;
  height: 100%;
}
/* 人物 */
.mine-person {
  margin-top: 40px;
  width: 100%;
  height: 140px;
  margin-bottom: 50px;
}
.minepersonleft {
  width: 35%;
  height: 100%;
  float: left;
}
.minepersonmiddle {
  width: 30%;
  float: left;
  height: 100%;
  border: 0.5px dotted #c0c0c0;
  box-sizing: border-box;
  border-radius: 2px;
  position: relative;
}
.minepersontitle {
  position: absolute;
  left: 10px;
  top: 0;
}
.minepersonmiddle p {
  text-align: center;
  font-size: 22px;
  /* margin-top: 2px; */
  color: #c0c0c0;
}
.minepersonmiddle img {
  width: 97%;
  height: 94%;
  padding-top: 6px;
  margin-left: 2px;
}
.minepersonright {
  width: 35%;
  float: left;
  height: 100%;
}
.minepersonrightp1 {
  font-size: 18px;
  margin-top: 70px;
  font-size: 30px;
  font-weight: 600;
}
.minepersonrightp2 {
  font-size: 20px;
  font-weight: 600;
}
.mine-bottom {
  display: block;
  margin-top: 40px;
  position: relative;
  margin: 0 15px;
  /* width: 100%; */
  height: 100px;
  border-top: 2px solid #e0e0e0;
  border-bottom: 2px solid #e0e0e0;
}
.comment {
  position: absolute;
  left: 45%;
  bottom: 25%;
}
.comment p {
  font-weight: 600;
  font-size: 14px;
}
.comment-o {
  /* margin-left: 4px; */
  font-size: 24px;
}
/* 无用盒子 */
.userlessbox {
  height: 100px;
}
</style>
