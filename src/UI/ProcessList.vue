<template>
  <div>
    <div class="processPanel" v-for="(item,index) in list" :key="index">
        <span class="processPanelTitle">{{item.name}}</span>
        <div class="process">
          <div class="inner" :style="'width: '+item.percent+'%;'"></div>
        </div>
        <span class="processPanelNum">{{item.count}}</span>
      </div>
  </div>
</template>
<script>
export default {
  props:['list']
}
</script>
<style scoped>
.processPanel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15rem 10rem;
}
.processPanelTitle {
  font-size: 20rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 20rem;
  text-shadow: 0rem 0rem 2rem #6af9ff, 0rem 0rem 2rem #6af9ff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  min-width: 60rem;
  text-align: center;
}
.processPanelNum {
  font-size: 20rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 20rem;
}
.processPanel .process {
  flex: 1;
  padding: 0 10rem;
}
.processPanel .process .inner {
  background: linear-gradient(90deg, rgba(9, 108, 175, 0.2) 0%, #6af9ff 100%);
  height: 10rem;
  width: 20%;
}
</style>