<template>
  <div>
    <TitleC size="small">
      {{data.project.year}}年 项目情况
    </TitleC>
    <div class="p-row">
      <div class="p-num">
        {{data.project.status_1}}个 <span style="color:#FF1E1E;font-weight: 400;">未开始</span>
      </div>
      <div class="p-num">
        {{data.project.status_2}}个 <span style="color:#6AF9FF; font-weight: 400;">进行中</span>
      </div>
      <div class="p-num">
        {{data.project.status_3}}个 <span style=" font-weight: 400;">已结束</span>
      </div>
    </div>
    <div ref="barchart" style="width:100% ;height: 190rem;"></div>
  </div>
</template>
<script>
import TitleC from "@/UI/Title.vue";
export default {
  components: {
    TitleC,
  },
  inject: ['fetchData'],
  computed:{
    data(){
      return this.fetchData()
    }
  },
  watch: {
    data() {
      // this.option.series[0].data = this.data.project.pie
      // this.option.series[1].data[0].value = (this.data.project.pie || []).reduce((t,c) => {
      //   return t + c.value
      // },0)
      // console.log(' this.option.series[1].data[0].value ', this.option.series[1].data[0].value )
      // this.myChart.setOption(this.option)
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
            label: {
              alignTo: "edge",
              formatter: "{name|{b}}\n{time|{c}个} {time|{d}%}",
              minMargin: 10,
              edgeDistance: 20,
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
            data: this.data.project.pie,
          },
          {
            name: "",
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
                value: (this.data.project.pie || []).reduce((t,c) => {
        return t + c.value
      },0),
                name: "总项目数",
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
  background-image: url("./../../../../assets/dataview/btn-border.png");
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
