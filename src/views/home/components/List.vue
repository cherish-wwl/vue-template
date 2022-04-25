<template>
  <div class="column1">
    <SelectTool :area.sync="area" :date.sync="date" @change="changeDate" />
    <div class="card">
      <table>
        <thead>
          <tr>
            <th width="25%">姓名</th>
            <th>睡眠日期</th>
            <!-- <th>设备状态</th> -->
            <th>当前监测</th>
          </tr>
        </thead>
      </table>
      <div style="height:74vh; overflow-y:auto;overflow-x:hidden; margin: 0 -10rem;
    padding: 0 10rem;">
        <table class="main-table" cellspacing="0" cellpadding="0">
          <tbody>
            <tr
              v-for="(item, index) in tableList"
              :key="index"
              :class="{ active: index === clickIndex }"
              @click="handlerClick(item, index)"
            >
              <td class="name" width="25%">{{ item.name }}</td>
              <td class="sleepTime">{{ dateText }}</td>
              <!-- <td :class="'status status_' + item.status">
                <span v-if="item.status === 1"> 体动</span>
                <span v-if="item.status === 2"> 安静</span>
                <span v-if="item.status === 3"> 离床</span>
              </td> -->
              <td class="isLive">
                <button class="btn" @click.stop="showDetail(item, index)">
                  立即查看
                  <!-- {{ item.isLive ? "立即查看" : "暂无监测" }} -->
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="detail" v-show="show">
      <div class="tit">{{ nowDateText }} 生命体征实时监控</div>
      <div class="inner">
        <div class="tizheng">
          <img :src="imgMap[stateText]" /> {{ stateText }}
        </div>
        <div class="num_line">
          <div class="">
            <div class="num">{{ HR }}</div>
            <div class="num_text">心率（次/分）</div>
          </div>
          <div class="">
            <div class="num">{{ BR }}</div>
            <div class="num_text">呼吸率（次/分）</div>
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
              ref="progressHR"
              :value="PHR"
              max="20"
            ></progress>
            <span class="text_value">{{ PHR }}</span>
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
              ref="progressBR"
              :value="PBR"
              max="20"
            ></progress>
            <span class="text_value">{{ PBR }}</span>
          </div>
        </div>
        <img
          class="closeBtn"
          :src="hover ? hoverCloseICon : closeICon"
          @mouseenter="hover = true"
          @mouseleave="hover = false"
          @click="show = false"
        />
      </div>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import SelectTool from "./SelectTool";
import moment from "moment";
export default {
  components: {
    SelectTool,
  },
  data() {
    return {
      hover: false,
      closeICon: require("@/assets/close.png"),
      hoverCloseICon: require("@/assets/close_hover.png"),
      show: false,
      detail: {},
      date: moment(new Date()).format("YYYY-MM-DD"),
      area: "",
      imgMap: {
        安静: require("@/assets/anjing.png"),
        离床: require("@/assets/lichuang.png"),
        体动: require("@/assets/tidong.png"),
      },
      clickIndex: 0,
      tableList: [],
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

          boundaryGap: ['50%', '20%'],
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
            data: [],
            type: "line",
            lineStyle: {
                color: '#ff8181'
            },
            symbol: false,
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
          right: 2,
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
            data: [],
            symbol: false,
            type: "line",
            lineStyle: {
                color: '#5AA9F3'
            },
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
          // x2: 30,
          y2: 25,
          right: 2,
        },
      },
      devID: "",
      ioSocket: "",
      URL_SERVER_SOCKET: "http://api.sleepthing.com",
      connect: false,
      state: null,
      HR: "- -",
      BR: "- -",
      PBR: 0,
      PHR: 0,
      count_data_chart: 0,
      data_HR: [],
      data_BR: [],
      data_analysis_HR: [],
      data_analysis_BR: [],
      avgHR: 0,
      maxHR: 0,
      minHR: 0,
      avgBR: 0,
      maxBR: 0,
      minBR: 0,
      bodyStatus: 0,
      inbed: false,
      count_outbed: 0,
      count_still: 0,
      preStateisSensing: "",
      count_data_analysis: 0,
      ajustBreathAnimate: 1,
      stateText: "",
      nowDateText: moment(this.date).format("YYYY-MM-DD"),
    };
  },
  computed:{
    dateText() {
      return moment(this.date).format("YYYY-MM-DD")
    }
  },
  mounted() {
    this.getDevList()
    this.chart_HR = echarts.init(this.$refs.chartHR);
    this.chart_BR = echarts.init(this.$refs.chartBR);
    

    this.ioSocket = window.io.connect(this.URL_SERVER_SOCKET);

    this.ioSocket.on("connect", () => {
      //- 收到server的连接确认
      console.log("ioSocket connected");
      this.connect = true;
    });
    this.ioSocket.on("data_RT", (data) => {
      //data = [state, HR, BR]
      console.log("devID", this.devID);
      console.log("ioSocket data", data);
      this.state = data[0];
      this.HR = data[1];
      this.BR = data[2];
      if (this.state === -1) {
        //state = -1：说明是心跳自适应检测中
        this.switch2SensingState();
        this.count_outbed = 0;
        this.count_still = 0;
        this.preStateisSensing = true;
      } else if (this.state === -2) {
        //state = -2：说明是"碰床"
        this.switch2MovementState();
        this.count_outbed = 0;
        this.count_still = 0;
        this.preStateisSensing = false;
      } else if (this.state === -3) {
        //state = -3：说明是体动
        this.switch2MovementState();
        this.count_outbed = 0;
        this.count_still = 0;
        this.preStateisSensing = false;
      } else if (this.state === 0) {
        //state = 0：说明是“离床”状态
        // 如果是离床状态时发过来一次离床，则需要继续判断，
        // 否则，在床状态时发过来离床，则要计数连续两次后显示“离床”。
        if (!this.inbed) {
          // 如果上一次是“正在感知...”，则累计“离床”次数
          // 否则，直接显示“离床”
          if (this.preStateisSensing) {
            this.count_outbed++;
            if (this.count_outbed == 2) {
              this.switch2OutbedState();
              this.inbed = false;
              this.count_outbed = 0;
            }
          } else {
            this.switch2OutbedState();
          }
        } else {
          this.count_outbed++;
          if (this.count_outbed == 2) {
            this.switch2OutbedState();
            this.inbed = false;
            this.count_outbed = 0;
          }
        }
        this.count_still = 0;
        this.preStateisSensing = false;
      } else if (this.state === 1) {
        //state = 1：说明是正常（安静）状态
        // 如果是在离床状态时上床或在床边走动振出来，则计数连续3次安静状态后显示“安静”，
        // 否则，显示“正在感知...”。
        // 如果是在床状态，则直接显示“安静”。
        if (!this.inbed) {
          this.count_still++;
          if (this.count_still == 1) {
            this.switch2StillState();
            this.inbed = true;
            this.count_still = 0;
          } else {
            this.switch2SensingState();
          }
        } else {
          this.switch2StillState();
        }
        this.count_outbed = 0;
        this.preStateisSensing = false;
      }
    });

    this.ioSocket.on("status_dev_network", (data) => {
      console.log(data.status + " time: " + new Date().getTime());

      if (data.status == "connected" || data.status == "online") {
        //若设备在线
        this.ioSocket.emit("RT_ON", null); //通知设备上发实时监测数据
      } else if (data.status == "offline" || data.status == "disconnected") {
        this.switch2OfflineState();
      }
    });

  },
  methods: {
    init() {
      this.data = {
        ...this.data,
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
              data: [],
              type: "line",
              color: "#ff8181",
              symbol: false,
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
            right: 2,
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
              data: [],
              symbol: false,
              type: "line",
              color: "#5AA9F3",
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
            // x2: 30,
            y2: 25,
            right: 2,
          },
        },
        devID: "",
        ioSocket: "",
        URL_SERVER_SOCKET: "http://api.sleepthing.com",
        connect: false,
        state: null,
        HR: "- -",
        BR: "- -",
        PBR: 0,
        PHR: 0,
        count_data_chart: 0,
        data_HR: [],
        data_BR: [],
        data_analysis_HR: [],
        data_analysis_BR: [],
        avgHR: 0,
        maxHR: 0,
        minHR: 0,
        avgBR: 0,
        maxBR: 0,
        minBR: 0,
        bodyStatus: 0,
        inbed: false,
        count_outbed: 0,
        count_still: 0,
        preStateisSensing: "",
        count_data_analysis: 0,
        ajustBreathAnimate: 1,
        stateText: "",
        dateText: "",
      };
    },
    getDevList() {
      this.$http({
        method: 'post',
        url: 'https://api.hftsq.com/data/selectDevice'
      }).then(res => {
        this.tableList = res.message.map(e => {
          return {
            devID: e.device || '',
            ...e
          }
        })
         this.changeDate();
      })
    },
    changeDate() {
      this.$emit("refresh", {
        item: this.tableList[this.clickIndex],
        day: moment(this.date).format("YYYY-MM-DD"),
      });
    },
    handlerClick(item, index) {
      this.clickIndex = index;
      this.show = false;
      this.$emit("refresh", {
        item,
        day: moment(this.date).format("YYYY-MM-DD"),
      });
    },
    showDetail(item, index) {
      this.init()
      this.detail = item;
      this.show = true;
      this.devID = item.devID; 
      
      this.chart_HR.resize()
      this.chart_BR.resize()
      this.clickIndex = index;
      this.$emit("refresh", {
        item,
        day: moment(this.date).format("YYYY-MM-DD"),
      });
      if (this.connect) {
        this.ioSocket.emit("ASK_JOIN_T", {
          devId: this.devID,
        });
        //询问设备当前状态，并反馈给用户
        this.ioSocket.emit("ASK_STATUS_DEV_NETWORK", null);
      }
    },
    switch2SensingState() {
      this.stateText = "检测中，请保持静止";
    },
    switch2StillState() {
      this.stateText = "安静";
      if (this.HR == 0) {
        this.HR = "- -";
      } 

      if (this.BR == 0) {
        this.BR = "- -";
      } else {
        if (this.ajustBreathAnimate++ == 3) {
          this.ajustBreathAnimate = 1;
        }
      }

      if (this.HR != 0 && this.BR != 0) {
        
        this.drawChartData();
      }
    },
    switch2MovementState() {
      console.log("体动");
      this.stateText = "体动";
    },
    switch2OutbedState() {
      console.log("离床");
      this.stateText = "离床";
    },
    switch2OfflineState() {
      console.log("离床");
      this.stateText = "离床";
    },

    drawChartData() {
      console.log('drawChartData ++++++++',this.data_HR)
      //在图表上绘制数据点
      this.data_HR.push(this.HR);
      this.option_chart_HR.series[0].data = this.data_HR
      this.chart_HR.setOption( this.option_chart_HR);

      this.data_BR.push(this.BR);
      this.option_chart_BR.series[0].data = this.data_BR
      this.chart_BR.setOption( this.option_chart_BR);

      this.count_data_chart++;
      //清空图表数据从头绘制，每20个点
      if (this.count_data_chart % 20 == 0) {
        this.data_analysis_HR = this.data_HR;
        this.data_analysis_BR = this.data_BR;
        this.data_HR = [];
        this.data_BR = [];
        this.count_data_chart = 0;
      }
      //更新数据分析进度条，总共20个数据
      if (this.count_data_analysis < 20) {
        this.count_data_analysis++;
        this.PBR = this.count_data_analysis;
        this.PHR = this.count_data_analysis;
      }
      //心率呼吸分析数据采集完毕
      if (this.count_data_analysis == 20) {
        this.count_data_analysis++;
        var sum = 0;
        var len = this.data_analysis_HR.length;
        for (let i = 0; i < len; i++) {
          sum += this.data_analysis_HR[i];
        }
        this.avgHR = Math.round(sum / len);
        this.maxHR = Math.max.apply(Math, this.data_analysis_HR);
        this.minHR = Math.min.apply(Math, this.data_analysis_HR);
        sum = 0;
        len = this.data_analysis_BR.length;
        for (let i = 0; i < len; i++) {
          sum += this.data_analysis_BR[i];
        }
        this.avgBR = Math.round(sum / len);
        this.maxBR = Math.max.apply(Math, this.data_analysis_BR);
        this.minBR = Math.min.apply(Math, this.data_analysis_BR);
      }
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
  // min-height: 850px;
  min-height: calc(100vh - 180px);
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
  overflow: hidden;
  text-overflow: ellipsis;
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
    // min-height: 850px;
    height: calc(100vh - 180px);
    padding: 0 14px;
    background-image: url("~@/assets/bg5.png");
  
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    .closeBtn {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(100%, -50%);
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
        width: 380px;
        height: calc(14.5vh);
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
progress {
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
