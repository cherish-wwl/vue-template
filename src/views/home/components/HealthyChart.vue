<template>
  <div class="card">
    <div class="hchart">
      <div ref="chart" style="width: 100%; height:100%"></div>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      option: {
        color: ["#660099", "#09A5FF", "#0FE9BA", "#FF9933", "#FFDE33"],
        legend: {
          bottom: 10,
          data: ["深睡", "中睡", "浅睡", "梦境", "觉醒"],
        },
        grid: {
          left: "0",
          right: "4%",
          // bottom: "8%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisLine: {
            show: false,
          },
          axisLabel: {
            color: "#16BAFF",
            fontSize: 12,
          },
          axisTick: {
            show: false,
          },
          data: ["21:29", "21:29", "21:29", "21:29", "21:29", "21:29", "21:29"],
        },
        yAxis: {
          show: false,
          type: "value",
        },
        series: [
          {
            name: "深睡",
            type: "line",
            symbol: "none",
            step: "middle",
            areaStyle: {},
            lineStyle: {
              width: 0,
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "中睡",
            type: "line",
            symbol: "none",
            step: "middle",
            lineStyle: {
              width: 0,
            },
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "浅睡",
            type: "line",
            symbol: "none",
            step: "middle",
            lineStyle: {
              width: 0,
            },
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "梦境",
            type: "line",
            symbol: "none",
            areaStyle: {},
            lineStyle: {
              width: 0,
            },
            step: "middle",
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "觉醒",
            type: "line",
            areaStyle: {},
            lineStyle: {
              width: 0,
            },
            symbol: "none",
            step: "middle",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      },
      myChart:null
    };
  },
  mounted() {
    var chartDom = this.$refs.chart;
    this.myChart = echarts.init(chartDom);
    this.$nextTick(() => {
      this.myChart.setOption(this.option);
     
    });
    window.addEventListener("resize", () => {
      this.myChart.resize();
    });
  }
};
</script>
<style scoped>
.hchart{
  height: 400px;
  width:100%;
}
</style>