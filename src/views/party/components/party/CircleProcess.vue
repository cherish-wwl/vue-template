<template>
  <div class="circleProcess">
    <div class="circleProcessBar">
      <div ref="barchart" style="width:200rem ;height: 180rem;"></div>
      <img class="tangyuan" src="../../../../assets/dataview/tangyuan.png" />
    </div>
    <div class="totalArea">
      <div>党员总人数</div>
      <span>{{ this.circleData[0].value }}个</span>
    </div>
    <div class="circleProcessTip">
      <div class="text">
        <div>党员占总教职工比例</div>
        <span>{{ process }}%</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["circleData"],
  computed: {
    process() {
      console.log(
        "circleData",
        this.circleData[0].value /
          (this.circleData[0].value + this.circleData[1].value)
      );
      return Math.floor(
        (this.circleData[0].value /
          (this.circleData[0].value + this.circleData[1].value)) *
          100
      );
    },
  },
  watch: {
    circleData(val) {
      this.option.series[0].data = val;
      this.myChart.setOption(this.option);
      this.myChart.resize();
    },
  },
  data() {
    return {
      myChart: null,
      option: {
        color: ["#6af9ff", "#808c94"],
        grid: {
          top: 100,
          bottom: "10%",
        },
        series: [
          {
            name: "",
            type: "pie",
            startAngle: 0,
            radius: ["30%", "80%"],
            label: {
              show: false,
            },
            data: [
              {
                value: 84,
                name: "党员占总教职工比例",
              },
              {
                value: 30,
                name: "",
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    resizeEchart() {
      this.myChart.resize();
    },

    barEcharts() {
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
.circleProcess {
  text-align: left;
  position: relative;
}
.circleProcessBar {
  position: relative;
  display: inline-block;
}
.circleProcessBar .tangyuan {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30rem;
}
.totalArea {
  background: rgba(0, 0, 0, 0.3);
  display: inline-block;
  box-shadow: 0rem 0rem 6rem 0rem #6af9ff;
  border: 1rem solid #6af9ff;
  padding: 6rem 22rem;
  font-size: 20rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 20rem;
  text-align: center;
  position: absolute;
  top: 20rem;
  right: 50rem;
}

.totalArea div {
  font-size: 20rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 25rem;
  text-shadow: 0rem 0rem 2rem #6af9ff, 0rem 0rem 2rem #6af9ff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
</style>
