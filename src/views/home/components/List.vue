<template>
  <div class="column1">
    <SelectTool :area.sync="area" :date.sync="date" />
    <div class="card">
      <table>
        <thead>
          <tr>
            <th width="15%">姓名</th>
            <th>睡眠日期</th>
            <th>设备状态</th>
            <th>当前监测</th>
          </tr>
        </thead>
      </table>
      <table class="main-table" cellspacing="0" cellpadding="0">
        <tbody>
          <tr
            v-for="(item, index) in tableList"
            :key="index"
            :class="{ active: index === clickIndex }"
            @click="handlerClick(item, index)"
          >
            <td class="name" width="15%">{{ item.name }}</td>
            <td class="sleepTime">{{ item.sleepTime }}</td>
            <td :class="'status status_' + item.status">
              <span v-if="item.status === 1"> 体动</span>
              <span v-if="item.status === 2"> 安静</span>
              <span v-if="item.status === 3"> 离床</span>
            </td>
            <td class="isLive">
              <button class="btn" @click="showDetail(item)">
                {{ item.isLive ? "立即查看" : "暂无监测" }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="detail" v-show="show">
      <div class="tit">2020-07-18 生命体征实时监控</div>
      <div class="inner">
        <div class="tizheng"><img src="@/assets/anjing.png" /> 安静</div>
        <div class="num_line">
          <div class="">
            <div class="num">67</div>
            <div class="num_text">心率（次/分）</div>
          </div>
          <div class="">
            <div class="num">67</div>
            <div class="num_text">心率（次/分）</div>
          </div>
        </div>
        <div class="xin_area">
          <div class="xin_chart">
            <div class="chart-vital" ref="chartHR"></div>
          </div>
          <div class="progress_area">
            <img src="@/assets/xin.png" />
            <span class="text">心率健康分析</span>
            <progress
              class="progress"
              id="progress-HR"
              value="2"
              max="20"
            ></progress>
            <span class="text_value">63</span>
          </div>
        </div>
        <div class="fei_area">
          <div class="fei_chart">
            <div class="chart-vital" ref="chartBR"></div>
          </div>
          <div class="progress_area">
            <img src="@/assets/fei.png" />
            <span class="text">呼吸健康分析</span>
            <progress
              class="progress"
              id="progress-BR"
              value="2"
              max="20"
            ></progress>
            <span class="text_value">33.2</span>
          </div>
        </div>
        <img class="closeBtn" :src="hover ?hoverCloseICon: closeICon" @mouseenter="hover= true" @mouseleave="hover= false" @click="show = false"/>
      </div>
    
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import SelectTool from "./SelectTool";
export default {
  components: {
    SelectTool,
  },
  data() {
    return {
      hover: false,
      closeICon: require('@/assets/close.png'),
      hoverCloseICon: require('@/assets/close_hover.png'),
      show: false,
      detail: {},
      date: "",
      area: "",
      clickIndex: "",
      tableList: [
        {
          name: "张三",
          status: 1,
          sleepTime: "2020-03-21",
          isLive: true,
        },
        {
          name: "张三",
          status: 2,
          sleepTime: "2020-03-21",
          isLive: true,
        },
        {
          name: "张三",
          status: 3,
          sleepTime: "2020-03-21",
          isLive: false,
        },
        {
          name: "张三",
          status: 1,
          sleepTime: "2020-03-21",
          isLive: true,
        },
        {
          name: "张三",
          status: 1,
          sleepTime: "2020-03-21",
          isLive: true,
        },
        {
          name: "张三",
          status: 1,
          sleepTime: "2020-03-21",
          isLive: true,
        },
        {
          name: "张三",
          status: 1,
          sleepTime: "2020-03-21",
          isLive: true,
        },
        {
          name: "张三",
          status: 1,
          sleepTime: "2020-03-21",
          isLive: true,
        },
        {
          name: "张三",
          status: 1,
          sleepTime: "2020-03-21",
          isLive: true,
        },
        {
          name: "张三",
          status: 1,
          sleepTime: "2020-03-21",
          isLive: true,
        },
        {
          name: "张三",
          status: 1,
          sleepTime: "2020-03-21",
          isLive: true,
        },
      ],
      chart_HR: null,
      chart_BR: null,
      option_chart_HR: {
        xAxis: {
          type: "category",
          data: [],
          max: 20,
          axisLine: {
            show: false,
          },
        },

        yAxis: {
          type: "value",
          min: "dataMin",
          max: "dataMax",
          minInterval: 1,
          axisLabel: {
            textStyle: {
              color: "#00FFFF",
            },
          },

          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            data: [
              73,
              73,
              75,
              76,
              76,
              73,
              75,
              70,
              75,
              73,
              78,
              75,
              70,
              75,
              73,
              78,
              73,
              71,
              72,
              69,
              64,
              60,
              65,
              70,
              71,
              70,
              60,
              63,
              65,
              62,
              67,
              63,
              68,
              73,
              72,
              68,
              65,
              70,
              0,
              0,
              0,
              0,
              0,
              0,
            ],
            type: "line",
            color: "#ff8181",
            markLine: {
              data: [
                {
                  type: "average",
                  name: "平均值",
                  label: {
                    show: false,
                  },
                },
              ],
            },
          },
        ],
        grid: {
          // x: 50,
          y: 25,
          // x2: 50,
          y2: 20,
          right: 2
        },
      },
      option_chart_BR: {
        xAxis: {
          type: "category",
          data: [],
          max: 20,
          axisLine: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          min: "dataMin",
          max: "dataMax",
          minInterval: 1,
           axisLabel: {
            textStyle: {
              color: "#00FFFF",
            },
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            data: [17, 17, 16, 15, 17, 17, 16, 13, 16, 18, 18, 17, 16, 19, 16, 13, 15, 18, 15, 16, 16, 17, 
19, 18, 15, 17, 19, 16, 14, 14, 16, 15, 18, 19, 18, 21, 18, 0, 0, 0, 0, 0, 0, 0],
            type: "line",
            color: "#5AA9F3",
            markLine: {
              data: [
                {
                  type: "average",
                  name: "平均值", label: {
                    show: false,
                  },
                },
              ],
            },
          },
        ],
        grid: {
          // x: 50,
          y: 25,
          // x2: 30,
          y2: 25,
          right: 2
        },
      },
    };
  },
  mounted() {
    this.chart_HR = echarts.init(this.$refs.chartHR);
    this.chart_BR = echarts.init(this.$refs.chartBR);
    this.$nextTick(() => {
      this.chart_HR.setOption(this.option_chart_HR);
      this.chart_BR.setOption(this.option_chart_BR);
    });
  },
  methods: {
    handlerClick(item, index) {
      this.clickIndex = index;
    },
    showDetail(item) {
      this.detail = item;
      this.show = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  background-image: url("~@/assets/column1.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 15px 10px;
  min-height: 850px;
}
table {
  table-layout: fixed;
  width: 97.8%;
  text-align: center;
  margin: auto;
}
.main-table {
  background-color: #0f2089;
}
th {
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
  line-height: 38px;
  height: 45px;
}
td {
  height: 60px;
  border-bottom: 1px solid #000;
}

.main-table {
  tr {
    &:hover {
      background-color: #162895;
    }
  }
}
tr {
  &.active td:last-child {
    position: relative;
  }
  &.active td:last-child:after {
    content: "";
    position: absolute;
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border: 8px solid #ff9933;
    border-color: transparent transparent transparent #ff9933;
  }
  &.active td:first-child {
    position: relative;
  }
  &.active td:first-child::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0;
    height: 60px;
    width: 6px;
    background-color: #ff9933;
  }
}

.name {
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  line-height: 60px;
}
.sleepTime {
  font-size: 16px;
  font-weight: 400;
  color: #16baff;
  line-height: 60px;
}
.status {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #00fb96;
  line-height: 60px;
  &::before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #00fb96;
  }
}
.status_1,
.status_2 {
  color: #00fb96;
}
.status_3 {
  color: #fc7369;
  &::before {
    background-color: #fc7369;
  }
}

.btn {
  border: none;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  padding: 4px 10px;
  background: #036cd5;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    background: #072fa3;
    color: #0b106b;
  }
}
.detail {
  z-index: 99;
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(100%);
  width: calc(100vw - 300px);
  background: linear-gradient(0deg, #0a0c63, #02042a);
  opacity: 0.9;
  bottom: 0;
  padding-left: 20px;
  .tit {
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    line-height: 38px;
    height: 54px;
  }
  .inner {
    width: 440px;
    min-height: 850px;
    padding: 0 14px;
    background-image: url("~@/assets/bg5.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    .closeBtn {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(100%,-50%);
      cursor: pointer;
    }
    .tizheng {
      font-size: 48px;
      padding: 54px 0;
      font-weight: 400;
      color: #00ffff;
      line-height: 18px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .num_line {
      display: flex;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      background: #0f2089;
      padding: 39px 0 29px 0;
      .num {
        font-size: 60px;
        font-weight: 400;
        color: #00ffff;
        line-height: 65px;
      }
      .num_text {
        font-size: 16px;
        font-weight: 400;
        color: #16baff;
        line-height: 18px;
      }
    }
    .text {
      font-size: 16px;
      font-weight: 400;
      color: #16baff;
      line-height: 18px;
    }
    .progress_area {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .text_value {
        font-size: 20px;
        font-weight: 400;
        color: #fc7369;
        line-height: 18px;
        width: 50px;
        text-align: right;
      }
    }
    .fei_area,
    .xin_area {
      margin-top: 10px;
      background: #0f2089;
      padding: 23px 15px;
      .chart-vital {
        width: 100%;
        height: 155px;
      }
    }
    .fei_area .text_value {
      color: #16baff;
    }
    #progress-HR::-webkit-progress-value {
      background-color: #ff8181;
    }
    #progress-BR::-webkit-progress-value {
      background-color: #5aa9f3;
    }
   
  }
}

</style>

<style>
 progress  {
      width: 45%;
      vertical-align: baseline;
      margin-left: 2px;
      height: 14px;
      overflow: hidden;
      background-color: #f5f5f5;
      border-radius: 12px;
      -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 10%);
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, 10%);
      display: inline-block;
    }
  progress::-webkit-progress-bar {
    background-color: rgba(0, 0, 0, 20%);
  }
</style>