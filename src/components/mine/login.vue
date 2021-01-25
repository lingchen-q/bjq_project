<template>
  <div class="login">
    <div class="login-back">
      <van-icon name="arrow" class="goback" @click="goback" />
    </div>
    <div class="login-title">
      <p class="login-title1">欢迎加入</p>
      <p class="login-title2">片场</p>
    </div>
    <div class="allbtn">
      <van-button color="#000000" plain class="loginone">
        <p>一键登录</p>
      </van-button>
      <van-button color="#000000" plain class="loginin" @click="loginin">
        <p>登录</p>
      </van-button>
      <van-button color="#000000" plain class="registerin" @click="registerin">
        <p>注册</p>
      </van-button>
    </div>
    <div class="login-tips">
      <p class="up">
        <span class="user-agreement">《用户协议》</span>和
        <span class="privacy-policy">《隐私政策》</span>
      </p>
      <p class="forgetpwd">忘记密码？</p>
    </div>
    <div class="login-bottom">
      <van-divider
        :style="{ color: '#c0c0c0', borderColor: '#c0c0c0', padding: '0 40px' }"
      >没有故事地点终究是冰冷的</van-divider>
    </div>
  </div>
</template>
<script>
export default {
  // data() {},
  methods: {
    goback() {
      this.$router.go(-1);
    },
    registerin() {
      this.$router.push({ path: "./Register" });
    },
    loginin() {
      this.$router.push({ path: "./Loginin" });
    },
  },
};
</script>
<style >
.login-back {
  margin: 0 10px;
  height: 60px;
}
.goback {
  font-size: 20px;
  margin-top: 20px;
  margin-left: 6px;
}
.login-title {
  height: 290px;
  margin: 0 10px;
  padding: 0 20px;
}
.login-title1 {
  font-size: 50px;
  color: #585858;
  font-weight: 600;
}
.login-title2 {
  font-size: 50px;
  color: #212121;
  font-weight: 600;
}
.allbtn {
  height: 160px;
}
.allbtn button {
  width: 100px;
  height: 36px;
  margin-bottom: 10px;
  margin-left: 250px;
  display: block;
  text-align: right;
}
.allbtn p {
  font-weight: bold;
}
.registerin {
  background-color: #000000;
}
.registerin p {
  color: #fff;
}
.login-tips {
  height: 60px;
  line-height: 60px;
}
.up {
  font-size: 14px;
  font-weight: 600;
  float: left;
  margin-left: 20px;
}
.user-agreement {
  color: skyblue;
}
.privacy-policy {
  color: skyblue;
}
.forgetpwd {
  float: right;
  margin-right: 14px;
  font-size: 14px;
  font-weight: 600;
}
</style>