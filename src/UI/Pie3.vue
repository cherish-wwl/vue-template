<template>
  <div>
    <!-- <div class="bar-title" v-if="title">
      {{title}}
    </div> -->
    <div
      ref="barchart"
      :style="'width:100% ;height: ' + (height || '240rem') + ';'"
    ></div>
  </div>
</template>
<script>
export default {
  props: ["title", "pieData", "height", "radius","totalTitel","unit","totalUnit"],
  data() {
    return {
      myChart: null,
      option: {},
    };
  },
  watch: {
    pieData: {
      handler(val) {
        if (!this.option.series) return;
        this.option.series[0].data = val;
        this.myChart.setOption(this.option);
      },
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

                z: 2,
        title: this.title
          ? {
              show: true,
              top: this.transformFontSize(15),
              text: this.title,
              left: "center",
              padding: [this.transformFontSize(5), this.transformFontSize(10)],
              borderRadius: 5,
              borderColor: "#6AF9FF",
              borderWidth: 1,
              shadowColor: "#6AF9FF",
              shadowBlur: this.transformFontSize(6),

              width: this.transformFontSize(200),
              textStyle: {
                color: "#fff",

                fontSize: this.transformFontSize(18),
                lineHeight: this.transformFontSize(20),
              },
            }
          : null,
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
          },
        ],

        series: [
          {
            top: this.title ?  this.transformFontSize(35) : "",
            // startAngle: 170,
            name: "",
            radius: this.radius || ["55%", "75%"],
            type: "pie",
            label: {
              // alignTo: "edge",
              overflow: 'none',
              formatter: (data) => {
                return `{name|${data.name}}\n{time|${data.value}${this.unit || '个'}} {time|${data.percent}%}`;
              },
              minMargin: 10,
              edgeDistance: 0,
              lineHeight: this.transformFontSize(30),
              rich: {
                name: {
                  color: "#fff",
                  fontWeight: "400",
                  fontSize: this.transformFontSize(18),
                  align: "center",
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
      if(this.totalTitel){
        this.option.series.push({
            top: this.title ?  this.transformFontSize(35) : "",
            name: "",
            type: "pie",
            radius: ["55%", "55%"],
            labelLine: {
              show: false,
            },
            label: {
              show: true,
              position: "center",
              formatter: [`{c|{c}${this.totalUnit}}`, "{b|{b}}"].join("\n"),
              rich: {
                c: {
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: this.transformFontSize(26),
                },
                b: {
                  height: 30,
                  color: "#fff",
                  fontWeight: "400",
                  fontSize: this.transformFontSize(20),
                },
              },
            },

            data: [
              {
                value: this.pieData.reduce((t,c) => t +c.value,0),
                name: this.totalTitel,
                emphasis:{
                  disabled: true
                },
                itemStyle: {
                  color: "#5fe1e8",
                  shadowColor: "#fff",
                  shadowOffsetX:0,
                  shadowOffsetY:0,
                  shadowBlur: 10,
                },
              },
            ],
          })
      }
    },
    barEcharts() {
      this.initOption();
      this.myChart = this.$echarts.init(this.$refs.barchart);
      // 配置图表

      this.myChart.setOption(this.option);
    },
  },
  mounted() {
    this.barEcharts();
  },
};
</script>

<style scoped>
.bar-title {
  width: 120rem;
  height: 40rem;
  font-size: 20rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 40rem;
  /* text-shadow: 0rem 1rem 2rem #6af9ff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  display: inline-block;
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0rem 0rem 6rem 0rem #6af9ff;
  border-radius: 8rem;
  border: 1rem solid #6af9ff;
  margin: 20rem auto 0;
}
</style>
