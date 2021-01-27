<template>
  <div>
    <div class="search-box">
      <select v-model="one">
        <option>{{x.name}}{{x.famname}}</option>
      </select>
      <br />
      <ul>
        <option>全部</option>
        <option>电影</option>
        <option>地点</option>
        <option>城市</option>
        <option>路线</option>
        <option>场记</option>
        <option>人物</option>
      </ul>
      <input type="text" />
      <button>取消</button>
    </div>
    <!-- <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="全部"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>-->
    <div class="message">
      <div class="message-top">
        <p>大家都在搜</p>
      </div>
      <div class="message-buttom">
        <ul class="message-buttomul">
          <li>真爱至上</li>
          <li>神奇女侠</li>
          <li>西尔莎 罗南</li>
          <li>倪妮</li>
          <li>克里斯蒂安 贝尔</li>
        </ul>
      </div>
    </div>
    <div class="history">
      <p>历史记录</p>
    </div>
  </div>
</template>
<script>
import bus from "../../bus";
import { Toast } from "vant";
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("取消");
    },
  },

  created() {
    bus.$emit("changeFlag", false);
  },
  beforeDestroy() {
    bus.$emit("changeFlag", true);
  },
};
</script>
<style scoped>
.message {
  height: 160px;
  margin: 0 10px;
}
.message-top {
  margin-top: 30px;
  width: 100%;
  height: 40px;
}
.message-top p {
  text-align: center;
  font-size: 14px;
  font-weight: 600;
}
.message-buttom {
  height: 50px;
}
.message-buttomul li {
  margin-bottom: 20px;
  margin-left: 20px;
  padding: 6px;
  border-radius: 4px;
  background-color: #c0c0c0;
  color: #000000;
  font-weight: 600;
  float: left;
}
.history {
  margin: 0 20px;
  height: 100px;
  background-image: linear-gradient(
    to right,
    #ccc 0%,
    #ccc 50%,
    transparent 50%
  );
  background-size: 8px 1px;
  background-repeat: repeat-x;
}
.history p {
  padding-top: 20px;
  font-size: 14px;
  font-weight: 600;
  color: #c0c0c0;
}
</style>