<template>
  <div>
    <div class="title">日报告</div>
    <div style=" background: #0E1072;"> 
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
        <div ref="stepLine" style="width: 100%; height:100%"></div>
      </div>
      <div class="summary">
        <div>
          <p class="label2">清醒</p>
          <p class="val2">24%</p>
        </div>
        <div>
          <p class="label2">梦境</p>
          <p class="val2">24%</p>
        </div>
        <div>
          <p class="label2">浅睡</p>
          <p class="val2">24%</p>
        </div>
        <div>
          <p class="label2">中睡</p>
          <p class="val2">24%</p>
        </div>
        <div>
          <p class="label2">深睡</p>
          <p class="val2">24%</p>
        </div>
      </div>
    </div>
    <div class="heart_chart_card">
      <div class="chart-title">
        心率（次/分）
        <span>82</span>
      </div>
      <div class="chart_div" >
        <div ref="heartLine" style="width: 100%; height:100%"></div>
      </div>
    </div>
    <div class="heart_chart_card">
      <div class="chart-title">
        呼吸率（次/分）
        <span>82</span>
      </div>
      <div class="chart_div">
        <div ref="breathLine" style="width: 100%; height:100%"></div>
      </div>
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
      heartChart:"",
      breathChart:"",
      option: {
        grid: {
          left: "10%",
          right: "4%",
          bottom: "3%",
          // containLabel: true
        },
        xAxis: {
          type: "category",
          data: ["19:20", "19:20", "19:20", "19:20", "19:20", "19:20", "19:20"],
        },
        yAxis: {
          type: "value",
          max: 400,
          min: 0,
          splitNumber: 4,
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
            },
          },
        },
        series: [
          {
            name: "Step End",
            type: "line",
            step: "start",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
        ],
      },
      heartOption: {
        xAxis: {
          show: false,
        },
        yAxis: {
          type: "value",
          scale: true,
          "splitLine": {     //网格线
            "show": false
          }
        },
        series: [
          {
            name: "最高气温",
            type: "line",
            data: [10, 11, 13, 11, 12, 12, 9],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" },
              ],
            }
          },
        ],
      },
      breathOption: {
        xAxis: {
          show: false,
        },
        yAxis: {
          type: "value",
          scale: true,
          "splitLine": {     //网格线
            "show": false
          }
        },
        series: [
          {
            name: "最高气温",
            type: "line",
            data: [10, 11, 13, 11, 12, 12, 9],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" },
              ],
            }
          },
        ],
      },
    };
  },
  mounted() {
    var chartDom = this.$refs.stepLine;
    this.myChart = echarts.init(chartDom);
   

    this.heartChart = echarts.init(this.$refs.heartLine);
 

    this.breathChart = echarts.init(this.$refs.breathLine);
    
    this.$nextTick(() => {
      this.myChart.setOption(this.option);
      this.heartChart.setOption(this.heartOption);
		
      this.breathChart.setOption(this.breathOption);
		})
		window.addEventListener('resize',() => {
			this.myChart.resize()
      this.heartChart.resize()
      this.breathChart.resize()
		})
  },
};
</script>
<style lang="scss" scoped>
.chart_div{
  height:157px;
}
.chart-area{
  height:175px;
}
.title {
  background: #0F2089;
  font-size: 20px;
  font-weight: 500;
  color: #FFFFFF;
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
    color: #FFFFFF;
    line-height: 38px;
    padding: 10px;
    margin-top: 10px;

    span {
      float: right;
    }
  }
}
.label2{
  font-size: 14px;
}
.val2{
  font-size: 14px;
}
</style>
