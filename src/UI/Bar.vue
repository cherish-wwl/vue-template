<template>
  <div ref="barchart" style="width:100% ;height: 250rem;"></div>
</template>
<script>
export default {
  data() {
    return {
      option: {},
      myChart: {},
    };
  },
  mounted() {
    this.initOption()
    this.barEcharts()
  },
  methods: {
    resizeEchart() {
      this.initOption()
      this.myChart.setOption(this.option);
      this.myChart.resize()
    },
    initOption() {
      this.option = {
        grid:{
          top: '25%',
          bottom: '15%',
        },
        legend: {
          itemWidth:this.transformFontSize(20),
          itemHeight: this.transformFontSize(20),
          itemGap: this.transformFontSize(20),
          textStyle: {
            fontSize: this.transformFontSize(20),
            color: "#FFFFFF",
          },
          data: ["必修课", "选修课"],
          itemStyle: {
      borderColor: "#fff",
      borderWidth: 1
    }
        },
        color: [
          {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 1,
                color: "rgba(9, 108, 175, 0)", // 0% 处的颜色
              },

              {
                offset: 0,
                color: "rgba(9, 108, 175, 1)", // 100% 处的颜色
              },
            ],
            global: false,
          },
          {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(132, 255, 106, 1)", // 0% 处的颜色
              },

              {
                offset: 1,
                color: "rgba(132, 255, 106, 0)", // 100% 处的颜色
              },
            ],
            global: false,
          },
        ],

        xAxis: [
          {
            type: "category",
            data: ["一年级", "二年级", "三年级"],
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              color: "#fff",
              fontSize: this.transformFontSize(20)
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            interval: 20,
            axisLabel: {
              color: "#fff",
              fontSize: this.transformFontSize(18)
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.3)",
              },
            },
          },
        ],
         label: {
              formatter: "{c}个",
              show: true,
              position: "top",
               color: "#fff",
              fontSize: this.transformFontSize(20),
              fontWeight: "500"
            },
        series: [
          {
            name: "必修课",
            type: "bar",
            data: [43, 34, 25],
          },
          {
            name: "选修课",
           
            type: "bar",
            data: [94, 14, 34],
          },
        ],
      };
    },
    barEcharts() {
      this.myChart = this.$echarts.init(this.$refs.barchart);
      // 配置图表

      this.myChart.setOption(this.option);
    }
    
  },
};
</script>
