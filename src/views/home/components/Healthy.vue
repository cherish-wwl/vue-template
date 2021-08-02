<template>
  <div>
    <div class="title">睡眠健康</div>
    <HealthyChart :reportData="reportData"/>
    <div class="detail_card">
      <div class="line">
        <label class="label">睡眠效率</label>
        <span class="value"> {{reportData.sleepEfficiency || '--'}}%</span>
        <span class="status green" v-if="reportData.sleepEfficiency >= 90"></span>
        <span class="status yellow" v-else-if="reportData.sleepEfficiency >= 85"></span>
        <span class="status " v-else></span>
      </div>
      <div class="line">
        <label class="label">体动频率</label>
        <span class="value"> {{reportData.movCounts || '--'}} 次/小时</span>
        <span class="status green" v-if="reportData.movCounts < 15"></span>
        <span class="status yellow" v-else-if="reportData.movCounts <= 18"></span>
        <span class="status " v-else></span>
      </div>
      <div class="line">
        <label class="label">基准心率</label>
        <span class="value"> {{reportData.avgHR}}次/分</span>
        <span class="status green" v-if="reportData.avgHR <= 65"></span>
        <span class="status yellow" v-else-if="reportData.avgHR <= 69"></span>
        <span class="status " v-else></span>
      </div>
      <div class="line">
        <label class="label">基准呼吸率</label>
        <span class="value"> {{reportData.avgBR}}次/分</span>
        <span class="status green" v-if="reportData.avgBR <= 20 && reportData.avgBR >= 12"></span>
        <span class="status yellow" v-else-if="(reportData.avgBR <= 11 && reportData.avgBR >= 10) || (reportData.avgBR <= 24 && reportData.avgBR >= 21)"></span>
        <span class="status " v-else></span>
      </div>
      <div class="line">
        <label class="label">心率变异性</label>
        <span class="value"> {{reportData.SDNN}}ms</span>
        <span class="btn">PRO</span>
      </div>
      <div class="line">
        <label class="label">疲劳程度</label>
        <span class="value"> 
          {{reportData.fatigue}}
        </span>
        <span class="btn">PRO</span>
      </div>
    </div>
  </div>
</template>
<script>
import HealthyChart from './HealthyChart.vue'
export default {
  props:{
    reportData: {
      type: Object,
      default: function (){
        return {}
      }
    }
  },
  components: {
    HealthyChart
  }
}
</script>
<style lang="scss" scoped>

.title {
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  line-height: 40px;
  margin-bottom: 14px;
}
.detail_card {
  background-image: url("~@/assets/radar.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 450px;
  margin-top: 20px;
  padding: 20px 14px;
  .line {
    padding: 13px 30px 13px 35px;
    background: #0f2089;
    margin-bottom: 2px;
  }
  .label {
    font-size: 18px;
    font-weight: 400;
    color: #16baff;
    line-height: 38px;
    width: 133px;
    display: inline-block;
  }
  .value {
    font-size: 22px;
    font-weight: 500;
    color: #00ffff;
    line-height: 38px;
  }
  .status {
    width: 10px;
    height: 10px;
    background: #FC7369;
    border-radius: 50%;
    float: right;
    position: relative;
    top: 15px;
    &.green {
      background: #00FB96;
    }
    &.yellow {
      background: #FFDE33;
    }
  }
  .btn {
    float: right;
    font-size: 16px;
    font-weight: 400;
    padding: 0 10px;
    color: #fefefe;
    line-height: 28px;
    background: #036cd5;
    border-radius: 4px;
    height: 28px;
    position: relative;
    top: 5px;
  }
}
</style>
