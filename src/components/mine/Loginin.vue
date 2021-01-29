<template>
  <div>
    <div class="login-back">
      <van-icon name="arrow" class="goback" @click="goback" />
    </div>
    <div class="loginin-title">
      <p>登录</p>
    </div>
    <van-form @submit="onSubmit">
      <van-field
        class="usernameinput"
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[
          { required: true, message: '请填写用户名' },
          {
            pattern: /^[_$a-z][_$0-9a-z]{4,9}$/i,
            message: '请输入正确的用户名',
            trigger: 'onChange',
          },
        ]"
      />
      <van-field
        class="userpwdinput"
        v-model="password"
        type="userpwd"
        label="密码"
        placeholder="密码"
        :rules="[
          { required: true, message: '请填写密码' },
          {
            pattern: /^[0-9a-z]{6,12}$/i,
            message: '请输入数字字母组成长度6到12位',
            trigger: 'onChange',
          },
        ]"
      />

      <div style="margin: 16px">
        <van-button class="submit" round block type="info" native-type="submit"
          >登&emsp;&emsp;&emsp;&emsp;录</van-button
        >
      </div>
    </van-form>
    <div class="login-bottom">
      <van-divider
        :style="{ color: '#c0c0c0', borderColor: '#c0c0c0', padding: '0 40px' }"
        >没有故事地点终究是冰冷的</van-divider
      >
    </div>
  </div>
</template>
<script>
import bus from "../../../bus";
import userModel from "../../model/userModel";
import { Toast } from "vant";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  mounted() {
    bus.$emit("changeFlag", false);
  },
  beforeDestroy() {
    bus.$emit("changeFlag", true);
  },
  methods: {
    // gotoRegister() {
    //   this.$router.history.push("/register");
    // },
    onSubmit(info) {
      console.log("info", info);
      userModel
        .query({
          username: info.username,
          userpwd: info.userpwd,
        })
        .then((res) => {
          // console.log(res.data);
          if (res.data.length) {
            //有数据就是登录成功  data是一个集合
            let userinfo = res.data[0];
            window.localStorage.setItem("userid", userinfo.id);
            window.localStorage.setItem("username", userinfo.username);
            this.$router.history.push("/mine");
          } else {
            Toast.fail("用户名和密码不匹配");
          }
        });
    },
    goback() {
      this.$router.go(-1);
    },
  },
};
</script>
<style >
.loginin-title {
  margin-top: 30px;
  margin-bottom: 80px;
  width: 100%;
  height: 30px;
}
.loginin-title p {
  font-size: 22px;
  font-weight: bold;
  text-align: center;
}
.usernameinput {
  margin-top: 40px;
}
.userpwdinput {
  margin-top: 10px;
}
.submit {
  margin-left: 20px;
  margin-top: 60px;
  width: 90%;
  height: 40px;
  background-color: transparent;
  color: #000000;
  font-weight: 600;
  border-color: grey;
}
.login-bottom {
  margin-top: 270px;
}
</style>
