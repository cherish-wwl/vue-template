<template>
  <div ref="barchart" style="width:100% ;height: 250rem;"></div>
</template>
<script>
export default {
  props:['barData'],
  data() {
    return {
      option: {},
      myChart: null,
    };
  },
  watch: {
    barData(){
      this.resizeEchart()
    }
  },
mounted() {
    this.resizeEchart()
    this.$eventBus.$on("resize", this.resizeEchart);
  },
  methods: {
    resizeEchart() {
      this.initOption()
      console.log('this.option ',this.option )
      if(this.myChart){
        this.myChart.setOption(this.option);
        this.myChart.resize()
      }else{
        this.myChart = this.$echarts.init(this.$refs.barchart);
        // 配置图表
        this.myChart.setOption(this.option);
      }
    },
    initOption() {
      this.option = {
        grid:{
          top: '25%',
          bottom: '15%',
        },
        legend: {
          itemWidth:this.transformFontSize(20),
          itemHeight: this.transformFontSize(20),
          itemGap: this.transformFontSize(20),
          textStyle: {
            fontSize: this.transformFontSize(20),
            color: "#FFFFFF",
          },
          data: this.barData.series.map(e =>e.name),
          itemStyle: {
      borderColor: "#fff",
      borderWidth: 1
    }
        },
        color: [
          {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 1,
                color: "rgba(9, 108, 175, 0)", // 0% 处的颜色
              },

              {
                offset: 0,
                color: "rgba(9, 108, 175, 1)", // 100% 处的颜色
              },
            ],
            global: false,
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
                color: "rgba(132, 255, 106, 1)", // 0% 处的颜色
              },

              {
                offset: 1,
                color: "rgba(132, 255, 106, 0)", // 100% 处的颜色
              },
            ],
            global: false,
          },
        ],

        xAxis: [
          {
            type: "category",
            data:  this.barData.axis,
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              color: "#fff",
              fontSize: this.transformFontSize(20)
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            interval: 20,
            axisLabel: {
              color: "#fff",
              fontSize: this.transformFontSize(18)
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.3)",
              },
            },
          },
        ],
         label: {
              formatter: "{c}个",
              show: true,
              position: "top",
               color: "#fff",
              fontSize: this.transformFontSize(20),
              fontWeight: "500"
            },
        series: this.barData.series.map( e => {
          e.type = "bar"
          return e
        })
      };
    }    
  },
};
</script>
