<template>
  <div ref="barchart" style="width:100% ;height: 190rem;"></div>
</template>
<script>
export default {
  props: ["barData", "yAxis","unit",'title'],
  data() {
    return {
      option: {},
      myChart: null,
    };
  },
  watch: {
    barData() {
      this.resizeEchart();
    },
  },
  mounted() {
    this.resizeEchart();
    this.$eventBus.$on("resize", this.resizeEchart);
  },
  methods: {
    resizeEchart() {
      this.initOption();
      if (this.myChart) {
        this.myChart.setOption(this.option);
        this.myChart.resize();
      } else {
        this.myChart = this.$echarts.init(this.$refs.barchart);
        // 配置图表
        this.myChart.setOption(this.option);
      }
    },
    initOption() {
      const xAxisData = this.barData.map(e => e.name)
      const series1Data = this.barData.map(e => e.value)
      this.option = {
        grid: {
          top: "20%",
          bottom: "15%",
        },
        tooltip: {
          trigger: "axis",
          formatter: (params) => {
            let val0 = params[0]["value"];

            let circle = `<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;left:5px;background-color:`;
            let data0 = `${circle}rgba(9, 108, 175, 1)"></span> ${params[0]["seriesName"]}: ${val0}${this.unit}`;
            if (params[1]) {
              let val1 = params[1]["value"];
              let data1 = `${circle}rgba(132, 255, 106, 1)"></span> ${params[1]["seriesName"]}: ${val1}${this.unit}`;

              return `${params[0].axisValueLabel}<br/>${data0}<br/>${data1}`;
            }

            return `${params[0].axisValueLabel}<br/>${data0}`;
          },
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
            data: xAxisData || [],
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },

            axisLabel: {
              color: "#fff",
              fontSize: this.transformFontSize(20),
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              color: "#fff",
              fontSize: this.transformFontSize(18),
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.3)",
              },
            },
            nameTextStyle: {
              color: "#fff",
              fontSize: this.transformFontSize(18),
              align: "right",
            },
            nameGap: 20,

            ...this.yAxis,
          },
        ],

        series: [
          {
            type : "bar",
            name: this.title,
            data: series1Data || []
          }
        ]
      };
    },
  },
};
</script>
