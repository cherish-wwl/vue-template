<template>
  <div class="notices">
    <TitleC size="small" :hideArrow="true">
      2020-2022年 科研成果
    </TitleC>
    <div ref="barchart" style="width:100% ;height: 200rem;"></div>
  </div>
</template>
<script>
import TitleC from "@/UI/Title.vue";

export default {
  inject: ['fetchData'],
  computed:{
    data(){
      return this.fetchData()
    }
  },
  components: {
    TitleC,
  },
  data() {
    return {
      myChart:null,
      option: {
        grid: {
          top: "20%",
          right: "10%",
          bottom: "20%",
          borderColor: "#000",
        },
        xAxis: {
          data: ["2020年", "2021年", "2022年"],
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          nameTextStyle: {},
          axisLabel: {
            color: "#fff",
            fontWeight: "400",
            fontSize: this.transformFontSize(20),
          },
        },
        yAxis: {
          axisLabel: {
            color: "#6AF9FF",
            fontWeight: "500",
            fontSize: this.transformFontSize(18),
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,0.3)",
            },
          },
          interval: 5,
        },
        series: [
          {
            name: "",
            label: {
              formatter: "{c}个",
              show: true,
              position: "top",
              color: "#fff",
              fontWeight: "500",
              fontSize: this.transformFontSize(20),
            },
            type: "bar",
            itemStyle: {
              color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 1, color: "rgba(9, 108, 175, 0)" },
                { offset: 0.5, color: "rgba(9, 108, 175, .7)" },
                { offset: 0, color: "#6AF9FF" },
              ]),
            },

            data: [10, 4, 8],
          },
        ],
      },
    };
  },
  methods: {
    resizeEchart() {
      this.myChart.resize()
    },
    barEcharts() {
      this.myChart = this.$echarts.init(this.$refs.barchart);

      this.myChart.setOption(this.option);
    },
  },
  mounted() {
    this.barEcharts();
    this.$eventBus.$on("resize", this.resizeEchart);
  },
};
</script>
<style scoped></style>
