<template>
<<<<<<< HEAD
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
      // console.log('getReportData',item)
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
        console.log('res++++++++++',res)
        this.reportData = res.data
        this.reportData.timeAxis  =  this.reportData.timeAxis.map(e => {
          return moment(e * 1000).format('HH:mm')
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
=======
  <div class="container">
    <div class="logo-image" style="min-height: 350px">
      <img width="100%" src="/img/bg.png">
    </div>
    <div style="padding: 0 2rem;">
      <div class="card">
        <h3 class="title">恭喜您完成打卡</h3>
        <h4 class="subTitle">填写信息制作您独一无二的行李牌</h4>
        <div class="inner">
          <div class="row">
            <div class="col borderRight" >
              <input type="text" :class="{error: error === 'name'}" v-model="name" placeholder="您的姓名"/>
            </div>
            <div class="col">
              <input type="text" maxlength="11" :class="{error: error === 'phone'}" v-model="phone" placeholder="您的手机号"/>
            </div>
          </div>
          <div class="row borderTop mt">
            <div class="col pos">
              <textarea rows="3" maxlength="8" :class="{error: error === 'content'}" v-model="content" width="100%" placeholder="输入您想刻印在行李牌上的话"/>
              <span class="suffix">{{content.length}}/8</span>
            </div>
          </div>
          <div class="row" style="justify-content: center;">
            <button class="col btn" @click="confrim">提交</button>
          </div>
        </div>
      </div>
    </div>
    <Success v-if="show" :show.sync="show"/>
  </div>
</template>
<script>
import Success from './components/success';
import HTTP from '@/utils/http';
export default {
  components:{
    Success
  },
  data(){
     return {
       name:"",
       phone:"",
       content:"",
       show: false,
       error:''
     }
  },
  methods:{
    confrim(){
      this.error = ''
      if (!this.name) {
        this.error= "name"
         this.$alert('请输入您的姓名')
        return
      }
      if (!this.phone || isNaN(this.phone) || this.phone.length != 11) {
        this.error= "phone"
        this.$alert('请输入11位数手机号码')
        return
      }
      if (!this.content) {
        this.error= "content"
        this.$alert('请输入您的行李牌文案')
        return
      }
      HTTP({
        url:'/Home/index',
        method:"post",
        data:{
          username: this.name,
          mobile: this.phone,
          msg: this.content,
        }
      }).then( () => {
        this.show = true
        this.name = ''
        this.phone = ''
        this.content = ''
      }).catch((res) => {
        console.log('失败', res)
         if(res.msg.indexOf('姓名') != -1){
            this.error= "name"
            this.$alert('请输入您的姓名')
          }
          if(res.msg.indexOf('手机') != -1){
            this.error= "phone"
            this.$alert('请输入11位数手机号码')
          }
          if(res.msg.indexOf('行李') != -1){
            this.error= "content"
            this.$alert('请输入您的行李牌文案')
          }
      })
>>>>>>> feature-zhanhui-dai
    }
  }
}
</script>
<style lang="scss" scoped>
<<<<<<< HEAD
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
  height: 85px;
  margin: 0 auto;
  background: linear-gradient(0deg, #142786, #0630A6);
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.4);
  border-bottom-right-radius: 20%;
  border-bottom-left-radius:20%;
  position: relative;
  .inner {
    text-align: center;
    padding-top: 23px;
  }
  .title {
    font-size: 40px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 38px;
  }
}

.main-content{
  display: flex;
  padding: 25px 40px 20px;
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

=======
.container{
  min-height: 100vh;
  width: 100%;
  // background-image: url('/img/bg.png');
  // background-size: 100%;
  background-repeat: no-repeat;
  background-color: rgba(46, 46, 46, 1);
  font-family: DFLiJinHeiW8-GB;
  position: relative;
  padding-bottom: 30px;
}

.card {
  background-color: #F6EED7;
  border-radius: 1rem;
  padding: 2.9rem 1.8rem 4.7rem;
  position: relative;
  margin-top: -9rem;
  .title {
    font-size: 3rem;
    font-weight: 600;
    color: #D8273C;
    line-height: 1.5;
  }
  .subTitle{
    font-size: 2rem;
    font-weight: 400;
    color: #B50029;
    line-height: 1.5;
  }
}
.inner{
  background: #EBE3CB;
  border-radius: 1rem;
  padding: 1.8rem 2.5rem;
  margin-top: 2rem;
}
.row{
  display: flex;
  .col{
    flex:1;
    padding: 1rem 0;
  }
}
.borderRight{
  border-right: 1px solid #C4B794;
  margin-right: .6rem;
}
.borderTop{
    border-top: 1px solid #C4B794; 
}
.mt{
  margin-top: 1rem;
}
input,textarea {
  width: 100%;
  border: none;
  background-color: transparent;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.3;
}
textarea {
  resize:none;
  font-size: 2.5rem;
}
input::placeholder,textarea::placeholder{
  font-size: 2rem;
  font-weight: 400;
  color: #C4B794;
  line-height: 1.3;
  background-color: transparent;
}
input:focus, textarea:focus{
  border: none;
  outline: none;
}
input.error::placeholder,textarea.error::placeholder{
  color: #B50029;
}

.btn{
  background-color: #B50029;
  border: none;
  border-radius: 2rem;
  font-size: 2rem;
  font-weight: bold;
  color: #F6EED7;
  flex: .8 !important;
  // letter-spacing: 2rem;
}

.pos{
  position: relative;
}
.suffix{
  position: absolute;
  bottom: 15px;
  right: 20px;
  color: #C4B794;
  font-size: 14px;
}
</style>
>>>>>>> feature-zhanhui-dai
