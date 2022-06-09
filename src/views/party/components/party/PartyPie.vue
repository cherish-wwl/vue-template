<template>
  <div ref="barchart" style="width:100% ;height: 190rem;"></div>
</template>
<script>
export default {
  props: ["pieData"],
  data() {
    return {
      myChart: null,
      option: {},
    };
  },
  watch: {
    pieData() {
      this.resizeEchart();
    },
  },
  methods: {
    resizeEchart() {
      this.initOption();
      this.myChart.setOption(this.option);
      this.myChart.resize();
    },
    initOption() {
      this.option = {
        color: ["#42e061", "#a05153", "#20c6cd"],

        series: [
          {
            left: -10,
            right: -10,
            name: "",
            radius: [0, "70%"],
            type: "pie",
            label: {
              alignTo: "edge",

              formatter: (data) => {
                return `{name|${data.name}}\n{time|${data.value}人} {time|${data.percent}%}`;
              },
              minMargin: 10,
              edgeDistance: 10,
              lineHeight: this.transformFontSize(30),
              rich: {
                name: {
                  color: "#fff",
                  fontWeight: "400",
                  fontSize: this.transformFontSize(18),
                },
                time: {
                  fontSize: this.transformFontSize(18),
                  color: "#fff",
                },
              },
            },
            labelLine: {
              length: this.transformFontSize(15),
              length2: 0,
              maxSurfaceAngle: 80,
            },
            labelLayout: (params) => {
              const isLeft = params.labelRect.x < this.myChart.getWidth() / 2;
              const points = params.labelLinePoints;
              // Update the end point.
              points[2][0] = isLeft
                ? params.labelRect.x
                : params.labelRect.x + params.labelRect.width;
              return {
                labelLinePoints: points,
              };
            },
            data: this.pieData || [],
          },
        ],
      };
    },
    barEcharts() {
      this.initOption();
      this.myChart = this.$echarts.init(this.$refs.barchart);
      // 配置图表

      this.myChart.setOption(this.option);
      this.myChart.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: 1,
      });
    },
  },
  mounted() {
    this.barEcharts();
  },
};
</script>
