<template>
    <div ref="barchart" style="width:100% ;height: 190rem;"></div>

</template>
<script>
export default {

  props:['pieData','title','formatter','label'],

  watch: {
    pieData(val) {
      console.log('pieData',val)
      this.resizeEchart()
    },
  },
  data() {
    return {
      myChart: null,
      option:{}
    };
  },
  methods: {
    resizeEchart() {
      this.initOption()

      this.myChart.setOption(this.option);
      this.myChart.resize()
    },
    initOption() {
       console.log('scaleRatio',this.scaleRatio)
      this.option =  {
        color:['#42e061','#20c6cd'],
        grid: {
          top: 100,
          bottom: '10%'
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["60%", "80%"],
             startAngle: 45,
              minAngle: 10,
            label: {
              // alignTo: "edge",
               overflow: 'none',
              formatter: this.formatter || "{name|{b}}\n{time|{c}个} {time|{d}%}",
              minMargin: 10,
              edgeDistance: 0,
              lineHeight: this.transformFontSize(30),
              rich: {
                name: {
                  color: "#fff",
                  fontWeight: "400",
                  fontSize: this.transformFontSize(20),
                },
                time: {
                 fontWeight: "400",
                  color: "#fff",
                  fontSize: this.transformFontSize(20),
                },
              },
              ...this.label
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
              if (!points) return params;
              points[2][0] = isLeft
                ? params.labelRect.x
                : params.labelRect.x + params.labelRect.width;
              return {
                labelLinePoints: points,
              };
            },
            data: [
              {
                value: 26,
                name: "招标类",
               
              },
              {
                value: 74,
                name: "非招标类",
                
              },
            ],
          },
          {
            name: "",
             startAngle: 45,
              minAngle: 10,
            type: "pie",
            radius: ["50%", "55%"],
            labelLine: {
              show: false,
            },
            label: {
              show: true,
              position: "center",
              formatter: ["{c|{c}个}", "{b|{b}}"].join("\n"),
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
                value: 100,
                name: this.title,
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
          },
        ],
      }
      this.option.series[0].data = this.pieData
      this.option.series[1].data[0].value = (this.pieData|| []).reduce((t,c) => {
        return t + c.value
      },0)
      console.log(' this.option.series[1].data[0].value ', this.option.series[1].data[0].value )
  
    },
   
    barEcharts() {
      this.myChart = this.$echarts.init(this.$refs.barchart);
      // 配置图表

      this.myChart.setOption(this.option);
    },
  },
  mounted() {
    this.initOption()
   
    this.barEcharts();
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
  background-image: url("./../assets/dataview/btn-border.png");
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
