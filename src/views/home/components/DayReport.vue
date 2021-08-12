<template>
  <div>
    <div class="title">日报告</div>
    <div style=" background: #0E1072;">
      <div class="summary">
        <div class="part">
          <div class="label">上床</div>
          <div>{{ reportData.inbedTime | formatTime }}</div>
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
      <div class="chart-area">
        <div ref="stepLine" style="width: 100%; height:100%"></div>
      </div>
      <div class="summary">
        <div>
          <p class="label2" style="color:#FFDE33">清醒</p>
          <p class="val2" style="color:#FFDE33">{{reportData.soberPercent || '--'}}%</p>
        </div>
        <div>
          <p class="label2" style="color: #FF9933;">梦境</p>
          <p class="val2" style="color: #FF9933;">{{reportData.dreamPercent || '--'}}%</p>
        </div>
        <div>
          <p class="label2" style="color:#0FE9BA;">浅睡</p>
          <p class="val2" style="color:#0FE9BA;">{{reportData.lightSleepPercent || '--'}}%</p>
        </div>
        <div>
          <p class="label2" style="color:#09A5FF;">中睡</p>
          <p class="val2" style="color:#09A5FF;">{{reportData.moderateSleepPercent || '--'}}%</p>
        </div>
        <div>
          <p class="label2" style="color:#660099;">深睡</p>
          <p class="val2" style="color:#660099;">{{reportData.deepPercent || '--'}}%</p>
        </div>
      </div>
    </div>
    <div class="heart_chart_card">
      <div class="chart-title">
        心率（次/分）
        <span>{{reportData.avgHR}}</span>
      </div>
      <div class="chart_div">
        <div ref="heartLine" style="width: 100%; height:100%"></div>
      </div>
    </div>
    <div class="heart_chart_card">
      <div class="chart-title">
        呼吸率（次/分）
        <span>{{reportData.avgBR}}</span>
      </div>
      <div class="chart_div">
        <div ref="breathLine" style="width: 100%; height:100%"></div>
      </div>
    </div>
    <div class="heart_chart_card">
      <div class="chart-title">
        体动（次/夜）
        <span>{{reportData.movCounts}}</span>
      </div>
      <div class="chart_div">
        <div ref="moveLine" style="width: 100%; height:100%"></div>
      </div>
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
  data() {
    return {
      myChart: "",
      heartChart: "",
      breathChart: "",
      moveChart: "",
      option: {
        grid: {
          // x: 100,
          // y2: 100,
          // x: 20,
          left: '5%',
          right: "4%",
          top: "10%",
          bottom: "20%",
        },
        xAxis: {
          type: "category",
          offset:-2,
          boundaryGap : [0,0],
          axisLine: {
            show:false,
          },
          axisTick: {
            show:false
          },
          axisLabel:{
            color:'#16BAFF',
            fontSize: 12,
            showMaxLabel: true
          },
          data: [],
        },
        yAxis: {
          offset: 20,
          type: "value",
          scale: true,
          max: 5,
          min: 0,
          boundaryGap : [0,0],
          splitNumber: 4,   
          axisLabel: {
            inside: true,
            formatter: function(value) {
              var texts = [];
              console.log('texts')
              if (value > 4) {
                texts.push("");
              } else if (value == 4) {
                texts.push("{a|深}");
              } else if (value <= 3 && value > 2) {
                texts.push("{b|中}");
              } else if (value <= 2 && value > 1) {
                texts.push("{c|浅}" );
              } else if (value <= 1  && value > 0) {
                texts.push("{d|梦}");
              } else {
                texts.push("{e|清}");
              }
              return texts;
            },
            rich: {
              a: {
                  color: '#FFDE33',
                  lineHeight: 15
              },
              b: {
                  color: '#FF9933',
                  lineHeight: 15
              },
              c: {
                  color: '#0FE9BA',
                  lineHeight: 15
              },
              d: {
                  color: '#09A5FF',
                  lineHeight: 15
              },
              e: {
                  color: '#660099',
                  lineHeight: 15
              },
             },
            fontSize: 9,
            verticalAlign: 'bottom'
          },
          splitLine: {
            lineStyle: {
              color: "#33",
              width: 1,
              type: 'dashed'
            }
          },

        },
        series: [
          {
            name: "Step End",
            type: "line",
            step: "start",
            symbol: "none",
            lineStyle:{
              color:"#0FE9BA",
              width: 1
            },
            data: [],
          },
        ],
      },
      heartOption: {
        xAxis: {
          type: "category",
          data: [],
          axisLine: {
            show: false,
          },
          show : false,
        },

        yAxis: {
          scale: true,
          type: "value",
          splitNumber:1,
          showMinLabel: true,
          showMaxLabel: true,
          axisLabel: {
            textStyle: {
              color: "#09A5FF",
            },
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            data: [],
            symbol: "none",
            lineStyle:{
              color:"#0FE9BA",
              width: 1
            },
            type: "line",
            markPoint: {
              symbolSize:[24,31],
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" },
              ],
              label: {
                  fontSize: 10
              },
              itemStyle: {
                color: '#FFDE33'
              }
            },
          },
        ],
          grid: {
          x: 40,
          // y: 25,
          // x2: 30,
          y2: 50,
          right: 10,
        }
      },
      breathOption: {
        xAxis: {
          type: "category",
          data:[],
          show: false,
          axisLine: {
            show: false,
          },
        },
        yAxis: {
          scale: true,
          type: "value",
          splitNumber:1,
          showMinLabel: true,
          showMaxLabel: true,
          axisLabel: {
            textStyle: {
              color: "#09A5FF",
            },
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            data: [],
            symbol: "none",
            lineStyle:{
              color:"#0FE9BA",
              width: 1
            },
            type: "line",
             markPoint: {
              symbolSize:[24,31],
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" },
              ],
              label: {
                  fontSize: 10
              },
              itemStyle: {
                color: '#FFDE33'
              }
            },
          },
        ],
        grid: {
          x: 40,
          // y: 25,
          // x2: 30,
          y2: 50,
          right: 2,
        }
      },
      moveOption: {
        xAxis: {
          type: "category",
          data: [],
          show: false,
          axisLine: {
            show: false,
          },
        },
        yAxis: {
          scale: true,
          type: "value",
          min: function(v) {return v.min},
          max: function(v) {return v.max},
          axisLabel: {
            textStyle: {
              color: "#09A5FF",
            },
            interval:200
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          { 
            data: [],
            lineStyle:{
              color:"#0FE9BA",
              width: 1
            },
            symbol: "none",
            type: "line",
            color: "#5AA9F3",
            
          },
        ],
        grid: {
          x: 50,
          // x2: 30,
          y2: 100,
          right: 2,
        },
      },
    };
  },
  filters:{
    formatTime(value) {
      if(!value) return '--'
      return moment(value).format('hh:mm')
    },
  },
  watch:{
    reportData(val){
       let option = {
        ...this.option
      }
      option.xAxis = {
        ...option.xAxis,
        data: val.timeAxis
      }
      option.series[0] = {
        ...option.series[0],
        data: val.sleepStage.map(e => e > 0 ? e : 1)
      }
      this.myChart.setOption(option)

      let heartOption = {
        ...this.heartOption
      }
      heartOption.xAxis = {
        ...heartOption.xAxis,
        data: val.arrayHR
      }
      heartOption.series[0] = {
        ...heartOption.series[0],
        data: val.arrayHR
      }
      this.heartChart.setOption(heartOption)

      let breathOption = {
        ...this.breathOption
      }
      breathOption.xAxis = {
        ...breathOption.xAxis,
        data: val.arrayBR
      }
      breathOption.series[0] = {
        ...breathOption.series[0],
        data: val.arrayBR
      }

      this.breathChart.setOption(breathOption)
      let moveOption = {
        ...this.moveOption
      }
      moveOption.xAxis = {
        ...moveOption.xAxis,
        data: val.arrayMov
      }
      moveOption.series[0] = {
        ...moveOption.series[0],
        data: val.arrayMov
      }
      this.moveChart.setOption(moveOption)
    }
  },
  mounted() {
    var chartDom = this.$refs.stepLine;
    this.myChart = echarts.init(chartDom);

    this.heartChart = echarts.init(this.$refs.heartLine);

    this.breathChart = echarts.init(this.$refs.breathLine);
    this.moveChart = echarts.init(this.$refs.moveLine);

    this.$nextTick(() => {
      this.myChart.setOption(this.option);
      this.heartChart.setOption(this.heartOption);

      this.breathChart.setOption(this.breathOption);
      this.moveChart.setOption(this.moveOption);
    });
    window.addEventListener("resize", () => {
      this.myChart.resize();
      this.heartChart.resize();
      this.breathChart.resize();
      this.moveChart.resize();
    });
  },
};
</script>
<style lang="scss" scoped>
.chart_div {
  height: 100px;
}
.chart-area {
  height: 120px;
}
.title {
  background: #0f2089;
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
  line-height: 38px;
  padding: 10px 16px;
}
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
.heart_chart_card {
  background: #0d1780;
  .chart-title {
    font-size: 20px;
    font-weight: 400;
    color: #ffffff;
    line-height: 38px;
    padding: 10px;
    margin-top: 10px;

    span {
      float: right;
    }
  }
}
.label2 {
  font-size: 14px;
}
.val2 {
  font-size: 14px;
}
</style>
