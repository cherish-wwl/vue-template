<template>
  <div>
    <div class="bar"></div>
    <div class="header">
      <div class="inner">
        <span class="title">鹤福堂智能床垫数据大盘</span>
      </div>
    </div>
    <div class="main-content">
      <div class="part part1">
        <List @refresh="refresh"/>
      </div>
      <div class="part part2">
        <Quality :reportData="reportData"/>
      </div>
      <div class="part part2">
        <Healthy :reportData="reportData"/>
      </div>
      <div class="part part2">
        <Trend :reportData="reportData"/>
      </div>
    </div>
  </div>
</template>
<script>
// import { state, actions, mutations } from "./store";
import List from './components/List.vue'
import Quality from './components/Quality.vue'
import Healthy from './components/Healthy.vue'
import Trend from './components/Trend.vue'
import moment from 'moment'
export default {
  components:{
    List,
    Quality,
    Healthy,
    Trend
  },
  data() {
    return {
      clientID: '9VkKyF838peoHJO8',
      clientSecret: 'VHRAN4amCb8AWFDThSqFnSqEsnqfKywy',
      signatureNonce: '',
      signature: '',
      timestamp: '',
      reportData: {}
    }
  },
  mounted(){
    function guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    this.signatureNonce = guid()
    
    let hmac = this.CryptoJS.HmacSHA1(this.signatureNonce, this.clientSecret);

    this.signature = hmac.toString(this.CryptoJS.enc.Base64)
    this.timestamp = moment(new Date()).format("YYYY-MM-DD") +'T12:00:00Z'


  },
  methods: {
    refresh({item,day}){
      this.getReportData(item,day)
    },
    getReportData(item, day) {
      console.log(item)
      const { devID } = item
      this.$http({
        method: 'GET',
        url: `http://api.sleepthing.com/data/getDaySleepReport?format=JSON&version=${moment(new Date()).format("YYYY-MM-DD")}&signature=${this.signature}&signatureMethod=HMAC-SHA1&signatureVersion=1.0&signatureNonce=${this.signatureNonce}&timestamp=${this.timestamp}&clientID=${this.clientID}`,
        params: {
          devID: devID,
          day: day,
          outbedTime: ''
        }
      }).then(res => {
        console.log('res',res)
        this.reportData = res.data
        this.reportData.timeAxis  =  this.reportData.timeAxis.map(e => {
          return moment(e).format('HH:mm')
        })
      }).catch(() => {
        this.reportData = {
          arrayScoreAssigned: [],
          arrayScore:[],
          sleepStage: [],
          arrayHR:[],
          arrayBR:[],
          arrayMov: [],
          timeAxis: []
        }
      
        // this.reportData = {
        //   devID: devID,
        //   day: "",  // 日期
        //   sleepQualityScore: -, //  睡眠得分
        //   sleepEfficiency: -, // 睡眠效率（有效睡眠时长/在床总时长）
        //   arrayScoreAssigned: [25, 20, 10, 20, 20, 20, 10, 20], // 评分标准，各项总分 
        //   arrayScore: [4,5,7,8,9,12,3,7], // 各项睡眠因素得分
        //   inbedTime:  1547476626, // 上床时间
        //   outbedTime: 1549909000, // 起床时间
        //   asleepTime: 1547478559, // 入睡时间
        //   awakeTime: 1547509327, // 醒来时间
        //   sleepOnsetLatency: 1933, // 入睡时长，单位 s
        //   sleepDuration: 30768, // 睡眠时长，单位 s
        //   soberPercent: 7, // 清醒占比，百分数
        //   dreamPercent: 23, // REM 睡眠占比，百分数
        //   lightSleepPercent: 2, // 浅睡眠占比，百分数
        //   moderateSleepPercent: 52, //  中睡眠占比，百分数
        //   deepPercent: 16, // 深睡眠占比，百分数
        //   avgHR: 64, // 睡眠平均心率
        //   avgBR: 17, // 睡眠平均呼吸率
        //   movCounts: 73, // 睡眠体动次数
        //   // 睡眠阶段分布
        //   sleepStage: [-5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 
        //   4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5, -5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 
        //   // 睡眠心率变化，分辨率 1min
        //   arrayHR: [90, 73, 75, 76, 76, 73, 75, 70, 75, 73, 78, 75, 70, 75, 73, 78, 73, 71, 72, 69, 64, 60, 
        //   65, 70, 71, 70, 60, 63, 65, 62, 67, 63, 68, 73, 72, 68, 65, 70, 0, 0, 0, 0, 0, 0],
        //   // 睡眠呼吸率变化，分辨率 1min
        //   arrayBR: [27, 17, 16, 15, 17, 17, 16, 13, 16, 18, 18, 17, 16, 19, 16, 13, 15, 18, 15, 16, 16, 17, 
        //   19, 18, 15, 17, 19, 16, 14, 14, 16, 15, 18, 19, 18, 21, 18, 0, 0, 0, 0, 0, 0, 0],
        //   // 睡眠体动变化，分辨率 1min
        //   arrayMov: [75, 557, 103, 280, 136, 51, 149, 121, 85, 130, 56, 133, 48, 93, 639, 395, 155, 
        //   684, 69, 263, 54, 29, 400, 166, 66, 80, 121, 881, 32, 93, 49, 3, 3, 15, 7, 3, 2, 3],
        //   // 睡眠时间轴
        //   timeAxis: [1547476626, 1547476684, 1547476743, 1547476801, 1547476860, 
        //   1547476919, 1547476977, 1547477036, 1547509971, 1547510030, 1547510088, 
        //   1547510147, 1547510206, 1547510264, 1547510323],
        //   SDNN: 169, // 心率变异性指数
        //   fatigue: 80  // 疲劳压力程度
        // }
      
       })
    }
  }
};
</script>
<style lang="scss" scoped>
.bar {
  background: linear-gradient(0deg, var(--main-bg-color) ,var(--main-bg-color2));
  height: 59px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 0;
}
.header {
  z-index: 2;
  width: 1280px;
  height: 99px;
  margin: 0 auto;
  background: linear-gradient(0deg, #142786, #0630A6);
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.4);
  border-bottom-right-radius: 20%;
  border-bottom-left-radius:20%;
  position: relative;
  .inner {
    text-align: center;
    padding-top: 28px;
  }
  .title {
    font-size: 48px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 38px;
  }
}

.main-content{
  display: flex;
  padding: 25px 40px 53px;
  .part1 {
    width: 450px;
    flex-shrink: 0;
    position: relative;
  }
  .part2 {
    width: 440px;
    margin-left: 21px;
  }
}
</style>

