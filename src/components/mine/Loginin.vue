<template>
  <div>
    <div class="login-back">
      <van-icon name="arrow" class="goback" @click="goback" />
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' },
                 {pattern:/^[_$a-z][_$0-9a-z]{4,9}$/i,message:'请输入正确的用户名',trigger:'onChange'}]"
      />
      <van-field
        v-model="password"
        type="password"
        name="userpwd"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }, {pattern:/^[0-9a-z]{6,12}$/i,message:'请输入数字字母组成长度6到12位',trigger:'onChange'}]"
      />

      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit" @click="gotologinin">登录</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      userpwd: "",
    };
  },
  methods: {
    login() {
      // alert(this.username);
      //此处省略   表单验证   axios请求验证
      localStorage.setItem("username", this.username);

      this.$router.history.push("/");
    },
    goback() {
      this.$router.go(-1);
    },
  },
};
</script>