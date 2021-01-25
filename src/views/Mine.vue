<template>
  <div class="mine">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">
      <div class="mine-title">
        <p>个人</p>
      </div>
      <div class="mine-login">
        <div class="login-left">
          <div class="login-pic">
            <img src="../../img/ss.png" alt />
          </div>
          <van-button color="#c0c0c0" plain @click="login">立刻登录</van-button>
        </div>
        <div class="login-right">
          <div class="login-icon">
            <i class="iconfont icon-xin login login-letter"></i>
            <i class="iconfont icon-shezhi1 login login-setup"></i>
          </div>
        </div>
      </div>
    </van-pull-refresh>
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
    login() {
      this.$router.push({ path: "./login" });
    },
    onRefresh() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
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
  border: 1px dashed #c0c0c0;
  box-sizing: border-box;
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
}
.login-icon {
  width: 24px;
  height: 20px;
  position: absolute;
  right: 30%;
  bottom: 10%;
  display: block;
}
/* .login-letter {
  margin-top: 100px;
  margin-left: 80px;
}
.login-setup {
  margin-top: 100px;
  margin-left: 80px;
} */
.login {
  font-size: 24px;
}
</style>
