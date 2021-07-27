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
      heartOption:  {
        xAxis: {
          type: "category",
          data: [],
          max: 20,
          axisLine: {
            show: false,
          },
        },

        yAxis: {
          type: "value",
          min: "dataMin",
          max: "dataMax",
          minInterval: 1,
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
            data: [
              0,
              73,
              75,
              76,
              76,
              73,
              75,
              70,
              75,
              73,
              78,
              75,
              70,
              75,
              73,
              78,
              73,
              71,
              72,
              69,
              64,
              60,
              65,
              70,
              71,
              70,
              60,
              63,
              65,
              62,
              67,
              63,
              68,
              73,
              72,
              68,
              65,
              70,
              0,
              0,
              0,
              0,
              0,
              0,
            ],
            type: "line",
            color: "#ff8181",
              markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
          },
        ],
        grid: {
          // x: 50,
          y: 25,
          // x2: 50,
          y2: 20,
          right: 2
        },
      },
      breathOption: {
        xAxis: {
          type: "category",
          data: [],
          max: 20,
          axisLine: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          min: "dataMin",
          max: "dataMax",
          minInterval: 1,
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
            data: [17, 17, 16, 15, 17, 17, 16, 13, 16, 18, 18, 17, 16, 19, 16, 13, 15, 18, 15, 16, 16, 17, 
19, 18, 15, 17, 19, 16, 14, 14, 16, 15, 18, 19, 18, 21, 18, 0, 0, 0, 0, 0, 0, 0],
            type: "line",
            color: "#5AA9F3",
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
          },
        ],
        grid: {
          // x: 50,
          y: 25,
          // x2: 30,
          y2: 25,
          right: 2
        },
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
