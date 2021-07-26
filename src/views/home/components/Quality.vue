<template>
  <div>
    <div class="title">睡眠质量</div>
    <Radar />
    <div class="detail_card">
      <div class="line">
        <label class="label">睡眠时长</label>
        <span class="value"> 4小时43分钟</span>
        <span class="status"></span>
      </div>
      <div class="line">
        <label class="label">入睡时刻</label>
        <span class="value"> 4小时43分钟</span>
        <span class="status"></span>
      </div>
      <div class="line">
        <label class="label">入睡时长</label>
        <span class="value"> 4小时43分钟</span>
        <span class="status"></span>
      </div>
      <div class="line">
        <label class="label">深度睡眠</label>
        <span class="value"> 4小时43分钟</span>
        <span class="status"></span>
      </div>
      <div class="line">
        <label class="label">做梦多少</label>
        <span class="value"> 4小时43分钟</span>
        <span class="status"></span>
      </div>
      <div class="line">
        <label class="label">水中觉醒</label>
        <span class="value"> 4小时43分钟</span>
        <span class="status"></span>
      </div>
    </div>
  </div>
</template>
<script>
import Radar from './Radar'
export default {
  components: {
    Radar
  }
}
</script>
<style lang="scss" scoped>
.title{
  font-size: 24px;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 40px;
  margin-bottom: 14px;
}
.detail_card{
  background-image: url("~@/assets/radar.png");
	background-repeat: no-repeat;
	background-size: 100% 100%;
	height: 450px;
  margin-top: 20px;
  padding: 20px 14px;
  .line {
    padding: 13px 35px;
    background: #0F2089;
    margin-bottom: 2px;
  }
  .label {
    font-size: 18px;
    font-weight: 400;
    color: #16BAFF;
    line-height: 38px;
    margin-right: 61px;
  }
  .value{ 
    font-size: 22px;
    font-weight: 500;
    color: #00FFFF;
    line-height: 38px;
  }
  .status {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: red;
    border-radius: 50%;
    float: right;
    position: relative;
    top: 15px;
  }
}

</style>