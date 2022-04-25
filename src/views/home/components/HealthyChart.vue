<template>
  <div class="card">
    <div>
      <div class="summary">
        <div class="part">
          <div class="label">上床</div>
          <div>{{ reportData.inbedTime | formatTime}}</div>
        </div>
        <div class="part">
          <div class="label">入睡</div>
          <div>{{ reportData.asleepTime | formatTime }}</div>
        </div>
        <div class="part">
          <div class="label">醒来</div>
          <div>{{ reportData.awakeTime | formatTime }}</div>
        </div>
        <div class="part">
          <div class="label">起床</div>
          <div>{{ reportData.outbedTime | formatTime }}</div>
        </div>
      </div>
    </div>
    <div class="hchart">
      <div ref="chart" style="width: 100%; height:100%"></div>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";

import moment from 'moment'
export default {
  props:{
    reportData: {
      type: Object,
      default: function (){
        return {}
      }
    }
  },
  filters:{
    formatTime(value) {
      if(!value) return '--'
      return moment(value * 1000).format('hh:mm')
    },
  },
  data() {
    return {
      option: {
        color: ["#660099", "#09A5FF", "#0FE9BA", "#FF9933", "#FFDE33"],
        legend: {
          bottom: "10%",
          data: ["深睡", "中睡", "浅睡", "梦境", "觉醒"],
          textStyle: {
            color: "#16baff",
            fontSize: 10,
          },
          itemGap: 15,
          itemWidth: 12,
          itemHeight: 10,
          icon: "roundRect",
        },
        grid: {
          top: 0,
          left: "0",
          right: "10%",
          bottom: "20%",
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
            showMinLable: true,
            showMaxLabel: true
          },
          axisTick: {
            show: false,
          },
          data: [],
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
            data: [],
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
            data: [],
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
            data: [],
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
            data: [],
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
            data: [],
          },
        ],
      },
      myChart: null,
    };
  },
  watch:{
    reportData(val){
      this.option.xAxis.data =  val.timeAxis
      this.option.series[0].data = val.sleepStage.map( e => {
        if( e === 5) {
          return 5
        } 
        return 0
      })
      this.option.series[1].data = val.sleepStage.map( e => {
        if( e === 4) {
          return 4
        } 
        return 0
      })
      this.option.series[2].data = val.sleepStage.map( e => {
        if( e === 3) {
          return 3
        } 
        return 0
      })
      this.option.series[3].data = val.sleepStage.map( e => {
        if( e === 3) {
          return 3
        } 
        return 0
      })
      this.option.series[4].data = val.sleepStage.map( e => {
        if( e === -5) {
          return 1
        } 
        return 0
      })
      this.myChart.setOption(this.option);
    }
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
  },
};
</script>
<style lang="scss" scoped>
.hchart {
  height: calc(50vh - 200px);
  width: 100%;
}
.summary {
  display: flex;
  height: 90px;
  justify-content: space-around;
  padding-top: 20px;
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
