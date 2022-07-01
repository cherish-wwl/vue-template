<template>
  <div class="circleProcess">
    <div class="circleProcessBar" style="height: 240rem;">
      <div ref="barchart" style="width:100% ;height: 180rem;"></div>
    </div>
    <div class="totalArea">
      <span>教案总数 </span>
      <span>{{ pieData.reduce((t, c) => t + c.value, 0) }}份</span>
    </div>
    <div class="lineArea">
      <div class="text" >已检查 </div>
      <div>{{ text }}</div>
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
      this.myChart.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: 0,
      });
    },
    initOption() {
      if(this.pieData[1]) {
        this.pieData[1].name = "";
        this.pieData[1].label = {
          show: false,
        };
      }
     
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
                color: "#1CC5CC", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#79F2F6", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        ],
        grid: {
          top: 100,
          left:"10%",
          bottom: "10%",
        },
        series: [
          {
            name: "",
            type: "pie",
            minAngle: 40,
            startAngle: 70,
            radius: ["50%", "70%"],
            center: ["30%", "50%"],
            label: {
              show:false
            },
            data: this.pieData || [],
            
          },
        ],
      };
    },
    barEcharts() {
      this.initOption();
      this.myChart = this.$echarts.init(this.$refs.barchart);
      this.myChart.setOption(this.option);
      this.myChart.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: 0,
      });
    },
  },
  computed:{
    text() {
      console.log('______text',this.pieData)
      if(this.pieData && this.pieData.length){
        const total = this.pieData[1].value + this.pieData[0].value  ;
        return `${this.pieData[0].value}人 ${(this.pieData[0].value/(total || 1)*100).toFixed(2)}%`
      }else {
        return '0人 0%'
      }
    }
  }
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
  bottom: 12rem;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;

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
.lineArea {
  position: absolute;
  right: 10rem;
  left: 135rem;
  top: 31rem;
  font-size: 18rem;
}
.lineArea .text {
  border-bottom: 1px solid #fff;
  
}
.lineArea div {
  padding-left: 32rem;
  white-space: nowrap;
  text-align: end;
  width: 151rem;
}
</style>
