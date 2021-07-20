<template>
  <div class="column1">
    <SelectTool :area.sync="area"  :date.sync="date" />
    <div class="card">
      <table >
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
          <tr v-for="(item, index) in tableList" :key="index" :class="{'active': index === clickIndex}" @click="handlerClick(item, index)">
            <td class="name"  width="15%">{{item.name}}</td>
            <td class="sleepTime">{{item.sleepTime}}</td>
            <td :class="'status status_' + item.status" >
              <span v-if="item.status === 1"> 体动</span>
              <span v-if="item.status === 2"> 安静</span>
              <span v-if="item.status === 3"> 离床</span>
            </td>
            <td class="isLive">
              <button class="btn" v-if="item.isLive">立即查看</button>
              <button class="btn" disabled v-else>暂无监测</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import SelectTool from './SelectTool'
export default {
  components:{
    SelectTool
  },
  data() {
    return {
      date: '',
      area: '',
      clickIndex: '',
      tableList: [{
        name: '张三',
        status: 1,
        sleepTime: '2020-03-21',
        isLive: true
      },{
        name: '张三',
        status: 2,
        sleepTime: '2020-03-21',
        isLive: true
      },
      {
        name: '张三',
        status: 3,
        sleepTime: '2020-03-21',
        isLive: false
      },
      {
        name: '张三',
        status: 1,
        sleepTime: '2020-03-21',
        isLive: true
      },{
        name: '张三',
        status: 1,
        sleepTime: '2020-03-21',
        isLive: true
      },
      {
        name: '张三',
        status: 1,
        sleepTime: '2020-03-21',
        isLive: true
      },{
        name: '张三',
        status: 1,
        sleepTime: '2020-03-21',
        isLive: true
      },{
        name: '张三',
        status: 1,
        sleepTime: '2020-03-21',
        isLive: true
      },{
        name: '张三',
        status: 1,
        sleepTime: '2020-03-21',
        isLive: true
      },{
        name: '张三',
        status: 1,
        sleepTime: '2020-03-21',
        isLive: true
      },{
        name: '张三',
        status: 1,
        sleepTime: '2020-03-21',
        isLive: true
      }]
    }
  },
  methods:{
    handlerClick(item, index) {
      this.clickIndex = index
    }
  }
}
</script>
<style lang="scss" scoped>
.card {
  background-image: url('~@/assets/column1.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 15px 10px ;
  min-height: 850px;
} 
table {
  table-layout: fixed;
  width:97.8%;
  text-align: center;
  margin: auto;
}
.main-table{
  background-color: #0F2089;
}
th {
  font-size: 20px;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 38px;
  height: 45px;
}
td {
  height: 60px;
  border-bottom: 1px solid #000;
}

.main-table {
  tr{
    &:hover {
      background-color: #162895;
    }
  }
}
tr{
  &.active td:last-child{
    position: relative;
  }
  &.active td:last-child:after{
    content: '';
    position: absolute;
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border: 8px solid #FF9933;
    border-color: transparent transparent transparent #FF9933;
  }
  &.active td:first-child{
    position: relative;
  }
  &.active td:first-child::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0;
    height: 60px;
    width: 6px;
    background-color: #FF9933;
  }
}

.name{
  font-size: 16px;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 60px;
}
.sleepTime{
  font-size: 16px;
  font-weight: 400;
  color: #16BAFF;
  line-height: 60px;
}
.status {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #00FB96;
  line-height: 60px;
  &::before{
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #00FB96;
  }
}
.status_1, .status_2 {
  color: #00FB96;
}
.status_3 {
  color: #FC7369;
    &::before{
    background-color: #FC7369;
  }
}

.btn {
  border: none;
  font-size: 16px;
  font-weight: 400;
  color: #FFFFFF;
  padding: 4px 10px;
  background: #036CD5;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    background: #072FA3;
    color: #0B106B;
  }
}
</style>