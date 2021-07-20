<template>
  <div>
    <div class="bar"></div>
    <div class="header">
      <div class="inner">
        <span class="title">鹤福堂智能床垫数据大盘</span>
      </div>
    </div>
    <div class="main-content">
      <div class="part part1">
        <List />
      </div>
      <div class="part part2">
        <Quality />
      </div>
      <div class="part part2">
        <Healthy />
      </div>
      <div class="part part2">
        <Trend />
      </div>
    </div>
  </div>
</template>
<script>
// import { state, actions, mutations } from "./store";
import List from './components/List.vue'
import Quality from './components/Quality.vue'
import Healthy from './components/Healthy.vue'
import Trend from './components/Trend.vue'
export default {
  components:{
    List,
    Quality,
    Healthy,
    Trend
  }
};
</script>
<style lang="scss" scoped>
.bar {
  background: linear-gradient(0deg, var(--main-bg-color) ,var(--main-bg-color2));
  height: 59px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 0;
}
.header {
  z-index: 2;
  width: 1280px;
  height: 99px;
  margin: 0 auto;
  background: linear-gradient(0deg, #142786, #0630A6);
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.4);
  border-bottom-right-radius: 20%;
  border-bottom-left-radius:20%;
  position: relative;
  .inner {
    text-align: center;
    padding-top: 28px;
  }
  .title {
    font-size: 48px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 38px;
  }
}

.main-content{
  display: flex;
  padding: 25px 40px 53px;
  .part1 {
    width: 450px;
    flex-shrink: 0;
  }
  .part2 {
    width: 440px;
    margin-left: 21px;
  }
}
</style>

