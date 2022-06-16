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

      const data1 = this.pieData.filter(e => e.name !== '优秀党员')
      const data2 = this.pieData.filter(e => e.name === '优秀党员')
  
      data2[0].itemStyle = {
        
        color: 'rgba(255, 34, 34, 0.5)'
      }
      data2[1] = {
        name: '',
        value: data1.reduce((t,c) => t+c.value,0),
        label:{
          show:false,
        },
        itemStyle:  {
          color: 'rgba(255, 34, 34, 0)'
        }
      }
      this.option = {
        color: ["#42e061",  "#20c6cd"],
        series: [
          {
            left: -10,
            right: -10,
            name: "",
            radius: [0, "60%"],
            type: "pie",
            label: {
              formatter: data => {
                return `{name|${data.name}}\n{time|${data.value}人} {time|${data.percent}%}`;
              },
              // minMargin: 10,
              // edgeDistance: 10,
              lineHeight: this.transformFontSize(30),
              rich: {
                name: {
                  color: "#fff",
                  fontWeight: "400",
                  fontSize: this.transformFontSize(18)
                },
                time: {
                  fontSize: this.transformFontSize(18),
                  color: "#fff"
                }
              }
            },
            // labelLine: {
            //   length: this.transformFontSize(15),
            //   length2: 0,
            //   // maxSurfaceAngle: 80
            // },
            labelLayout: params => {
              const isLeft = params.labelRect.x < this.myChart.getWidth() / 2;
              const points = params.labelLinePoints;
              // Update the end point.
              points[2][0] = isLeft
                ? params.labelRect.x
                : params.labelRect.x + params.labelRect.width;
              return {
                labelLinePoints: points
              };
            },
            data: data1 || []
          },
           {
            left: -10,
            right: -10,
            name: "",
            radius: [0, "70%"],
            type: "pie",
            label: {
              // alignTo: "edge",

              formatter: data => {
                return `{name|其中}\n{name|优秀党员}\n{time|${data.value}人} {time|${data.percent}%}`;
              },
              lineHeight: this.transformFontSize(20),
              rich: {
                name: {
                  color: "#fff",
                  fontWeight: "400",
                  fontSize: this.transformFontSize(18)
                },
                time: {
                  fontSize: this.transformFontSize(18),
                  color: "#fff",
                  lineHeight: this.transformFontSize(50),
                }
              }
            },
            // labelLine: {
            //   length: this.transformFontSize(15),
            //   length2: 0,
            //   // maxSurfaceAngle: 80
            // },
            labelLayout: params => {
              const isLeft = params.labelRect.x < this.myChart.getWidth() / 2;
              const points = params.labelLinePoints;
              // Update the end point.
              points[2][0] = isLeft
                ? params.labelRect.x
                : params.labelRect.x + params.labelRect.width;
              return {
                labelLinePoints: points
              };
            },
            data: data2 || []
          }
        ]
      };
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
