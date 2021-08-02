<template>
  <div>
    <div class="title">睡眠质量</div>
    <Radar :reportData="reportData" />
    <div class="detail_card">
      <div class="line">
        <label class="label">睡眠时长</label>
        <span class="value">
          {{ reportData.sleepDuration | formatSeconds }}</span
        >
        <span class="status" v-if="!!reportData.arrayScore" :class="{
          green: getColorCircle(reportData.arrayScore[0],20) == 1,
          yellow: getColorCircle(reportData.arrayScore[0],20) == 2
        }"></span>
      </div>
      <div class="line">
        <label class="label">入睡时刻</label>
        <span class="value"> {{ reportData.asleepTime | formatTime }}</span>
        <span class="status" v-if="!!reportData.arrayScore" :class="{
          green: getColorCircle(reportData.arrayScore[1],10) == 1,
          yellow: getColorCircle(reportData.arrayScore[1],10) == 2
        }"></span>
      </div>
      <div class="line">
        <label class="label">入睡时长</label>
        <span class="value">
          {{ reportData.sleepOnsetLatency | formatSeconds }}</span
        >
        <span class="status" v-if="!!reportData.arrayScore" :class="{
          green: getColorCircle(reportData.arrayScore[2],10) == 1,
          yellow: getColorCircle(reportData.arrayScore[2],10) == 2
        }"></span>
      </div>
      <div class="line">
        <label class="label">深度睡眠</label>
        <span class="value">
          {{ reportData.deepPercent | formatPer(reportData) }}</span
        >
        <span class="status" v-if="!!reportData.arrayScore" :class="{
          green: getColorCircle(reportData.arrayScore[3],20) == 1,
          yellow: getColorCircle(reportData.arrayScore[3],20) == 2
        }"></span>
      </div>
      <div class="line">
        <label class="label">做梦多少</label>
        <span class="value">
          {{ reportData.dreamPercent | formatPer(reportData) }}</span
        >
        <span class="status" v-if="!!reportData.arrayScore" :class="{
          green: getColorCircle(reportData.arrayScore[4],10) == 1,
          yellow: getColorCircle(reportData.arrayScore[4],10) == 2
        }"></span>
      </div>
      <div class="line">
        <label class="label">睡中觉醒</label>
        <span class="value">
          {{ reportData.soberPercent | formatPer(reportData) }}</span
        >
        <span class="status" v-if="!!reportData.arrayScore" :class="{
          green: getColorCircle(reportData.arrayScore[5],10) == 1,
          yellow: getColorCircle(reportData.arrayScore[5],10) == 2
        }"></span>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import Radar from "./Radar";
export default {
  props: {
    reportData: {
      type: Object,
      default: function() {
        return {};
      },
    },
  },
  components: {
    Radar,
  },
  filters: {
    formatSeconds(value) {
      if (!value) return "--";
      let result = parseInt(value);
      let h =
        Math.floor(result / 3600) < 10
          ? "0" + Math.floor(result / 3600)
          : Math.floor(result / 3600);
      let m =
        Math.floor((result / 60) % 60) < 10
          ? "0" + Math.floor((result / 60) % 60)
          : Math.floor((result / 60) % 60);
      // let s = Math.floor((result % 60)) < 10 ?'0' + Math.floor((result % 60)) : Math.floor((result % 60));

      let res = "";
      if (h !== "00") res += `${h}小时`;
      if (m !== "00") res += `${m}分钟`;
      // res += `${s}秒`;
      return res;
    },
    formatTime(value) {
      if (!value) return "--";
      return moment(value).format("hh:mm");
    },
    formatPer(time, data) {
      if (!time) return "--";
      let outbedDate = moment(data.outbedTime).format("YYYY-MM-DD HH:mm:ss");
      let inbedDate = moment(data.inbedTime).format("YYYY-MM-DD HH:mm:ss");
      let t = new Date(outbedDate).getTime() - new Date(inbedDate).getTime();
      console.log(new Date(data.outbedTime));
      console.log(new Date(data.inbedTime), t);
      let value = (t / 1000) * (time / 100);
      let result = parseInt(value);
      let h =
        Math.floor(result / 3600) < 10
          ? "0" + Math.floor(result / 3600)
          : Math.floor(result / 3600);
      let m =
        Math.floor((result / 60) % 60) < 10
          ? "0" + Math.floor((result / 60) % 60)
          : Math.floor((result / 60) % 60);
      // let s = Math.floor((result % 60)) < 10 ?'0' + Math.floor((result % 60)) : Math.floor((result % 60));

      let res = "";
      if (h !== "00") res += `${h}小时`;
      if (m !== "00") res += `${m}分钟`;
      return res;
    },
  },
  methods: {
    getColorCircle(val, score) {
      switch (score) {
        case 20:
          if (val <= 7) {
            return 1;
          } else if (val > 7 && val <= 15) {
            return 2;
          } else if (val > 15) {
            return 3;
          }
          break;
        case "10":
          if (val <= 3) {
            return 1;
          } else if (val > 3 && val <= 7) {
            return 2;
          } else if (val > 7) {
            return 3;
          }
          break;
        default:
          break;
      }
    },
  },
};
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
    padding: 13px 35px;
    background: #0f2089;
    margin-bottom: 2px;
  }
  .label {
    font-size: 18px;
    font-weight: 400;
    color: #16baff;
    line-height: 38px;
    margin-right: 61px;
  }
  .value {
    font-size: 22px;
    font-weight: 500;
    color: #00ffff;
    line-height: 38px;
  }
  .status {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #fc7369;
    border-radius: 50%;
    float: right;
    position: relative;
    top: 15px;
    &.green {
      background: #00fb96;
    }
    &.yellow {
      background: #ffde33;
    }
  }
}
</style>
