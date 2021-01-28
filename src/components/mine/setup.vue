<template>
  <div class="setup" ref="homePage">
    <div class="loginBack">
      <van-icon name="arrow" class="goback" @click="goback" />
      <h4>个人设置</h4>
    </div>
    <van-cell-group class="setup-top">
      <van-cell title="片场头像" class="pcpic">
        <template #right-icon>
          <van-uploader v-model="fileList" multiple :max-count="1" />
        </template>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="setup-middle">
      <van-cell title="片场用户名" is-link value="1" />
      <van-cell title="手机号码" value="1" />
      <van-cell title="修改登录密码" is-link />
    </van-cell-group>
    <div class="general">
      <p>通用</p>
    </div>
    <van-cell-group class="setup-middle">
      <van-cell title="片场头像">
        <template #right-icon>
          <van-switch v-model="checked" />
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group class="setup-bottom">
      <van-cell title="清除缓存" is-link value="10M" />
      <van-cell title="意见反馈" is-link />
      <van-cell title="关于片场" is-link value="版本号：1.2.1" />
      <van-cell title="用户协议" is-link />
      <van-cell title="隐私政策" is-link />
      <van-cell title="隐私权限设置" is-link />
      <van-cell title="注销账号" is-link />
    </van-cell-group>
    <div class="userless-box"></div>
  </div>
</template>
<style scoped>
.setup {
  overflow-y: scroll;
  /* overflow-x: none; */
}
.loginBack {
  height: 40px;
  width: 100%;
  text-align: center;
}
.goback {
  float: left;
}
.login-back h4 {
  margin-left: 108px;
  margin-top: 18px;
  text-align: center;
  font-size: 20px;
  float: left;
}
.general {
  width: 100%;
  font-size: 20px;
  text-align: center;
  font-weight: 600;
  margin: 10px 0;
}
.pcpic span {
  line-height: 90px;
  font-size: 16px;
  font-weight: 600;
}
.userless-box {
  height: 60px;
}
</style>
<script>
import bus from "../../../bus";
export default {
  data() {
    return {
      checked: true,
      clientHeight: "",
      fileList: [],
    };
  },
  created() {
    bus.$emit("changeFlag", false);
  },
  beforeDestroy() {
    bus.$emit("changeFlag", true);
  },
  mounted() {
    // 获取浏览器可视区域高度
    this.clientHeight = `${document.documentElement.clientHeight}`; //document.body.clientWidth;
    //console.log(self.clientHeight);
    window.onresize = function temp() {
      this.clientHeight = `${document.documentElement.clientHeight}`;
    };
  },
  watch: {
    // 如果 `clientHeight` 发生改变，这个函数就会运行
    clientHeight: function () {
      this.changeFixed(this.clientHeight);
    },
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    changeFixed(clientHeight) {
      //动态修改样式
      console.log(clientHeight);
      this.$refs.homePage.style.height = clientHeight + "px";
      console.log(
        this.$refs.homePage.style.height,
        " this.$refs.homePage.style.height"
      );
    },
  },
};
</script>