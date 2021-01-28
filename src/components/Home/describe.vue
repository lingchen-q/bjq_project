<template>
  <div>
    <div class="loginback">
      <van-icon name="arrow" class="goback" @click="goback" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
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
</style>