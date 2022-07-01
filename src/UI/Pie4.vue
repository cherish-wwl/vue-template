<template>
  <div ref="barchart" style="width:100% ; min-height: 200rem;"></div>
</template>
<script>
export default {
  props: ["pieData", "title", "formatter", "label", "unit", "startAngle"],

  watch: {
    pieData(val) {
      console.log("pieData", val);
      this.resizeEchart();
    },
  },
  data() {
    return {
      myChart: null,
      option: {},
    };
  },
  mounted() {
    this.resizeEchart();
    this.$eventBus.$on("resize", this.resizeEchart);
  },
  methods: {
    resizeEchart() {
      this.initOption();
      if (!this.myChart) {
        this.myChart = this.$echarts.init(this.$refs.barchart);
      }
      this.myChart.setOption(this.option);
      this.myChart.resize();
    },
    initOption() {
      const colors = [{
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#90FFB5", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#01C619", // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
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
              color: "#C60101", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#FF9090", // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
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
              color: "#1CC5CC", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#79F2F6", // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
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
              color: "#C67501", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#FFB290", // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
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
              color: "#AC01C6", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#FF90F3", // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        }];
      this.option = {
        color: colors,
        grid: {
          top: 100,
          bottom: "10%",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["55%", "70%"],
            startAngle: this.startAngle ||( this.pieData.length ===1 ? 360 : 45),
            minAngle: 5,
            label: {
              // alignTo: "edge",
              overflow: "none",
              formatter:
                this.formatter || "{name|{b}}\n{time|{c}个} {time|{d}%}",
              minMargin: 10,
              edgeDistance: 10,
              lineHeight: this.transformFontSize(30),
              rich: {
                name: {
                  color: (this.pieData || []).length >= 4 ? null : "#fff",
                  fontWeight: "400",
                  fontSize: this.transformFontSize(18),
                },
                time: {
                  fontWeight: "400",
                  color: "#fff",
                  fontSize: this.transformFontSize(18),
                },
              },
              ...this.label,
            },
            labelLine: {
              length: this.transformFontSize(15),
              length2: this.transformFontSize(25),
              maxSurfaceAngle: 80,
            },
            labelLayout: (params) => {
              const isLeft = params.labelRect.x < this.myChart.getWidth() / 2;
              const points = params.labelLinePoints;
              // Update the end point.
              if (!points) return params;
              points[2][0] = isLeft
                ? params.labelRect.x
                : params.labelRect.x + params.labelRect.width;
              return {
                labelLinePoints: points,
              };
            },
            data: [],
          },
          {
            name: "",
            type: "pie",
            radius: ["55%", "55%"],
            labelLine: {
              show: false,
            },
            label: {
              show: true,
              position: "center",
              formatter: [`{c|{c}${this.unit || "个"}}`, "{b|{b}}"].join("\n"),
              rich: {
                c: {
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: this.transformFontSize(26),
                },
                b: {
                  height: 20,
                  color: "#fff",
                  fontWeight: "400",
                  fontSize: this.transformFontSize(20),
                },
              },
            },

            data: [
              {
                value: 100,
                name: this.title,
                emphasis: {
                  disabled: true,
                },
                itemStyle: {
                  color: "#5fe1e8",
                  shadowColor: "#fff",
                  shadowOffsetX: 0,
                  shadowOffsetY: 0,
                  shadowBlur: 10,
                },
              },
            ],
          },
        ],
      };
      if ((this.pieData || []).length >= 4) {
        (this.pieData || []).map((e, index) => {
          e.label = {
            color: colors[index % colors.length].colorStops[0].color || "#fff",
          };
          return e;
        });
      }
      this.option.series[0].data = this.pieData;
      this.option.series[1].data[0].value = (this.pieData || []).reduce(
        (t, c) => {
          return t + c.value;
        },
        0
      );
    },
  },
};
</script>
<style scoped>
.p-row {
  display: flex;
  justify-content: space-between;
  margin-top: 20rem;
}
.p-num {
  background-image: url("/assets/img/dataview/btn-border.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 15rem;
  font-size: 20rem;
  white-space: nowrap;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 20rem;
}
</style>
