<template>
  <div>
    <div class="title">睡眠健康</div>
    <HealthyChart />
    <div class="detail_card">
      <div class="line">
        <label class="label">睡眠效率</label>
        <span class="value"> 4小时43分钟</span>
        <span class="status"></span>
      </div>
      <div class="line">
        <label class="label">体动频率</label>
        <span class="value"> 4小时43分钟</span>
        <span class="status"></span>
      </div>
      <div class="line">
        <label class="label">基准心率</label>
        <span class="value"> 4小时43分钟</span>
        <span class="status"></span>
      </div>
      <div class="line">
        <label class="label">基准呼吸率</label>
        <span class="value"> 4小时43分钟</span>
        <span class="status"></span>
      </div>
      <div class="line">
        <label class="label">心率变异性</label>
        <span class="value"> 238ms</span>
        <span class="btn">PRO</span>
      </div>
      <div class="line">
        <label class="label">疲劳程度</label>
        <span class="value"> 47</span>
        <span class="btn">PRO</span>
      </div>
    </div>
  </div>
</template>
<script>
import HealthyChart from './HealthyChart.vue'
export default {
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
    background: red;
    border-radius: 50%;
    float: right;
    position: relative;
    top: 15px;
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
