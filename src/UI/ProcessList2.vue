<template>
  <div>
    <div class="processPanel" v-for="(item,index) in nList" :key="index">
        <span class="processPanelTitle">{{item.name}}</span>
        <div class="process">
          <div class="inner" :style="'width: '+item.percent+'%;'"></div>
        </div>
        <span class="processPanelNum">{{item.value}} {{unit}}</span>
      </div>
  </div>
</template>
<script>
export default {
  props:['list','unit'],
  computed: {
    nList() {
      const total = this.list.reduce((r,c) => r+c.value,0) || 1
      return this.list.map(e => {
        e.percent =( (e.value / total) * 100).toFixed(2)
        return e
      })
    }
  }
}
</script>
<style scoped>
.processPanel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10rem;
  padding-right: 20%;
}
.processPanelTitle {
  font-size: 20rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 20rem;
  width: 160rem;
  text-align: right;
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