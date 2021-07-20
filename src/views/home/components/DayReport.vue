<template>
  <div>
    <div class="title">日报告</div>
    <div class="summary">
      <div class="part">
        <div class="label">上床</div>
        <div>{{ startTime }}</div>
      </div>
      <div class="part">
        <div class="label">入睡</div>
        <div>{{ sleepTime }}</div>
      </div>
      <div class="part">
        <div class="label">上床</div>
        <div>{{ wakeTime }}</div>
      </div>
      <div class="part">
        <div class="label">上床</div>
        <div>{{ upTime }}</div>
      </div>
    </div>
    <div class="chart-area">
      <div ref="stepLine" style="width: 400px; height:300px"></div>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      startTime: "21:38",
      sleepTime: "21:38",
      wakeTime: "21:38",
      upTime: "21:38",
      myChart: "",
      option: {
        grid: {
          left: "10%",
          right: "4%",
          bottom: "3%",
          // containLabel: true
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value",
          max : 400,
          min : 0,
          splitNumber : 4,
          axisLabel: {
            formatter: function(value) {
              var texts = [];
              if (value == 0) {
                texts.push("深");
              } else if (value <= 100) {
                texts.push("中");
              } else if (value <= 200) {
                texts.push("浅");
              } else if (value <= 300) {
                texts.push("梦");
              } else {
                texts.push("清");
              }
              return texts;
            }
          }
        },
        series: [
          {
            name: "Step End",
            type: "line",
            step: "start",
            data: [120, 132, 101, 134, 90, 230, 210]
          }
        ]
      }
    };
  },
  mounted() {
    var chartDom = this.$refs.stepLine;
    this.myChart = echarts.init(chartDom);
    this.myChart.setOption(this.option);
  }
};
</script>
<style lang="scss" scoped>
.summary {
  display: flex;
  justify-content: space-around;
}
.part {
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: #00ffff;
  line-height: 38px;
  .label {
    font-size: 16px;
    font-weight: 500;
    color: #16baff;
    line-height: 38px;
  }
}
</style>
