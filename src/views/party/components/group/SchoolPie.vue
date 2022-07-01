<template>
  <div class="circleProcess">
    <div class="circleProcessBar" style="height: 260rem;">
      <div ref="barchart" style="width:100% ;height: 210rem;"></div>
    </div>
    <div class="totalArea">
      <span>在校总人数</span>
      <span>{{ pieData.reduce((t, c) => t + c.value, 0) }}个</span>
    </div>
  </div>
</template>
<script>
// import _ from 'lodash'
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
      console.log("watch");
      this.resizeEchart();
    },
  },
  mounted() {
    this.resizeEchart()
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
      this.myChart.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: 0
      });
    },
    initOption() {
      this.option = {
        color: [
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
                color: "#90FFB5", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#01C619", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        ],
        grid: {
          top: 100,
          bottom: "10%",
        },
        series: [
          {
            name: "",
            type: "pie",
             minAngle: 40,
            startAngle: 70,
            radius: ["50%", "70%"],
            center: ["20%", "50%"],
            label: {
              formatter: (data) => {
                return `{name|${data.name}}\n{time|${data.value}人} {time|${data.percent}%}`;
              },
              minMargin: this.transformFontSize(10),
              lineHeight: this.transformFontSize(30),
              rich: {
                name: {
                  color: "#fff",
                  fontWeight: "400",
                  fontSize: this.transformFontSize(20),
                },
                time: {
                  fontSize: this.transformFontSize(20),
                  color: "#fff",
                },
              },
            },
            labelLine: {
              length: this.transformFontSize(15),
              length2: this.transformFontSize(200),
              maxSurfaceAngle: this.transformFontSize(80),
            },
            labelLayout: (params) => {
              const isLeft = params.labelRect.x < this.myChart.getWidth() / 2;
              const points = params.labelLinePoints;
              // Update the end point.
              if (!points) return params;
              points[2][0] = isLeft
                ? params.labelRect.x
                : params.labelRect.x + params.labelRect.width;
              console.log("params", params);
              return {
                x: 160.5800495731844,
                y: 48.16212212999844,
                width:300,
                // verticalAlign: "middle",
                // align: "left",
                labelLinePoints: [
                  [106.19606341322788, 52.240554911394],
                  [113.58004957318438, 49.16212212999844],
                  [this.transformFontSize(350), 49.16212212999844],
                ],
              };
            },
            data: this.pieData || [],
            // [
            //   {
            //     value: 30,
            //     name: "团员总人数",
            //   },
            //   {
            //     value: 84,
            //     name: "",
            //     label: {
            //       show: false,
            //     },
            //   },
            // ],
          },
        ],
      };
    },
    barEcharts() {
      this.initOption()
      this.myChart = this.$echarts.init(this.$refs.barchart);
      this.myChart.setOption(this.option);
       this.myChart.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: 0,
      });
    },
  },
};
</script>

<style scoped>
.circleProcess {
  text-align: left;
  position: relative;
}
.circleProcessBar {
  position: relative;
  /* display: inline-block; */
}

.totalArea {
  display: inline-block;
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0rem 0rem 6rem 0rem #6af9ff;
  border: 1rem solid #6af9ff;
  padding: 6rem 10rem;
  font-size: 20rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 28rem;
  text-align: center;
  position: absolute;
  bottom: 40rem;
  right: 50rem;
}

.circleProcessTip {
  position: absolute;
  right: 20rem;
  bottom: 0;
  left: 128rem;
}
.circleProcessTip:after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  height: 1rem;
  background: #fff;
  bottom: 57rem;
}
.circleProcessTip .text {
  position: absolute;
  right: 10rem;
  bottom: 31rem;
  text-align: center;
  font-size: 20rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 20rem;
}
.circleProcessTip .text div {
  font-size: 20rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 55rem;
  text-shadow: 0rem 0rem 2rem #6af9ff, 0rem 0rem 2rem #6af9ff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.totalArea::before {
  content: "";
  display: inline-block;
  width: 10rem;
  height: 10rem;
  background: #6af9ff;
  box-shadow: 0rem 0rem 6rem 0rem #6af9ff;
  border: 1rem solid;
  border-radius: 50%;
  margin-right: 10rem;
}
</style>
