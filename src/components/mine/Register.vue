<template>
  <div v-if="flag">
    <div class="login-back">
      <van-icon name="arrow" class="goback" @click="goback" />
    </div>
    <div class="register-title">
      <p>注册</p>
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        class="usernameinput"
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
        type="password"
        name="userpwd"
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
      <van-field
        class="userpwdinput"
        v-model="password1"
        type="password"
        name="userpwd1"
        label="确认密码"
        placeholder="确认密码"
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
          >注册</van-button
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
<style scoped>
.register-title {
  margin-top: 30px;
  margin-bottom: 70px;
  width: 100%;
  height: 30px;
}
.register-title p {
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
  margin-top: 230px;
}
</style>
<script>
import bus from "../../../bus";
import userModel from "../../model/userModel";
import { Toast } from "vant";
export default {
  data() {
    return {
      flag: true,
      username: "",
      password: "",
      password1: "",
    };
  },
  mounted() {
    bus.$emit("changeFlag", false);
  },
  beforeDestroy() {
    bus.$emit("changeFlag", true);
  },
  methods: {
    onSubmit(info) {
      //成功的以后的结果
      //    console.log('submit', info);
      if (info.userpwd1 === info.userpwd) {
        //  alert("一致");
        //把数据放到数据库
        userModel.query({ username: info.username }).then((res) => {
          //查询用户名是否存在
          if (res.data.length) {
            //有数据 该用户名存在
            Toast.fail("该用户名已经存在");
          } else {
            userModel
              .add({
                //新增
                username: info.username,
                userpwd: info.userpwd,
              })
              .then(() => {
                //    console.log(res.data);  成功以后 会返回成功的结果  是一个对象
                this.$router.push("/login/Loginin");
              });
          }
        });
      } else {
        Toast.fail("两次输入的密码不一致");
      }
    },
    goback() {
      this.$router.go(-1);
    },
  },
};
</script>