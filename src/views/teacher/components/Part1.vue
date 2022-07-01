<template>
  <div class="part-content">
    <TitleC size="small">
      {{fetchData.clockin.date}} 今日考勤
    </TitleC>
    <div class="clockin-panel">
      <div class="clockin-item"><span class="clockin-dot">请假</span> {{fetchData.clockin.leave}}人</div>
      <div class="clockin-item"><span class="clockin-dot">外出</span> {{fetchData.clockin.away}}人</div>
      <div class="clockin-item"><span class="clockin-dot">出差</span> {{fetchData.clockin.travel}}人</div>
      <div class="clockin-item"><span class="clockin-dot">未出勤</span> {{fetchData.clockin.not}}人</div>
      <div class="clockin-item"><span class="clockin-dot">正常出勤</span> {{fetchData.clockin.normal}}人</div>
    </div>
     <TitleC size="small">
      {{fetchData.evaluate.start}}-{{fetchData.evaluate.end}}学年第{{fetchData.evaluate.term}}学期 评教
    </TitleC>
    <div class="evaluate-panel">
      <LeftBorderLabel class="evaluate-item ">评教条数 <span>{{fetchData.evaluate.count}}条</span></LeftBorderLabel>
      <LeftBorderLabel class="evaluate-item ">班级数量 <span>{{fetchData.evaluate.grade}}个</span></LeftBorderLabel>
      <LeftBorderLabel class="evaluate-item ">学生数量 <span>{{fetchData.evaluate.user}}人</span></LeftBorderLabel>
      <LeftBorderLabel class="evaluate-item ">教师数量 <span>{{fetchData.evaluate.teacher}}人</span></LeftBorderLabel>
    </div>
    <TitleC size="small" :hideArrow="true">
      教研组数量
    </TitleC>
    <Pie2 :pieData="teachData"  title="教研组数" :formatter="formatter" :label="{padding: [this.transformFontSize(20),0,0,0]}"/>
  </div>
</template>
<script>
import TitleC from "@/UI/Title.vue";
import LeftBorderLabel from '@/UI/LeftBorderLabel.vue'
import Pie2 from "@/UI/Pie2.vue";
export default {
  props:['fetchData'],
  components: {
    TitleC,
    LeftBorderLabel,
    Pie2
  },
  data() {
    return {
      formatter:"{name|{b}}\n{time|教研组：{c}个}\n  {time|教师：{@users}位}"
    }
  },
  computed: {
    teachData() {
      return this.fetchData.teach.map(e => {
        return {
          name: e.name,
          value: e.counts,
          users:e.users
        }
      })
    }
  }
};
</script>
<style scoped>
.part-content {
  width: 420rem;
  height: 910rem;
  background: linear-gradient(
    180deg,
    rgba(7, 87, 141, 0.3) 0%,
    rgba(0, 31, 52, 0.5) 100%
  );
  box-shadow: inset 0rem 0rem 8rem 0rem #6af9ff;
  padding: 14rem 10rem;
}
.clockin-panel {
  background: linear-gradient(180deg, rgba(0, 42, 70, 0.5) 0%, rgba(0, 152, 255, 0.5) 100%);
  box-shadow: inset 0rem 0rem 8rem 0rem #6AF9FF;
  border: 2rem solid #6AF9FF;
  margin: 20rem 10rem;
   padding: 7.5rem 10rem;
}
.clockin-item {
  font-size: 20rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 20rem;
  padding: 7.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.clockin-dot::before{
  content: "";
  display: inline-block;
  width: 10rem;
height: 10rem;
background: #6AF9FF;
border-radius: 50%;
box-shadow: 0rem 0rem 8rem 0rem rgba(213, 253, 255, 0.8);
margin-right: 10rem;
}
.evaluate-panel {
  padding: 0 20rem;
}
.evaluate-item {
  margin: 20rem 0;
}
</style>
