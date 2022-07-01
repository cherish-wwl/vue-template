<template>
  <div class="part-content">
    <TitleC size="small"> {{ fetchData.report.year }}年 教学总结 </TitleC>
    <Pie2
      :pieData="fetchData.report.pie"
      title="总份数"
      unit="份"
      :formatter="'{name|{b}}\n{time|{c}份} {time|{d}%}'"
    />
    <TitleC size="small">
      {{ fetchData.plan.start }}-{{ fetchData.plan.end }}学年第二学期 教案管理
    </TitleC>
    <div :style="{ padding: '20rem 50rem' }">
      <LeftBorderLabel>
        <span>今日提交</span>
        <span>{{ fetchData.plan.today }}份</span>
      </LeftBorderLabel>
      <ReportPlanPie :pieData="fetchData.plan.pie" />
    </div>
    <TitleC size="small"> {{ fetchData.reform.year }}年 教学改革 </TitleC>
    <CircleNum>
      <div class="reform">
        {{ fetchData.reform.count }}个
        <div class="reform_title">教学改革文件</div>
      </div>
    </CircleNum>
  </div>
</template>
<script>
import TitleC from "@/UI/Title.vue";
import LeftBorderLabel from "@/UI/LeftBorderLabel.vue";
import CircleNum from "@/UI/CircleNum.vue";
import Pie2 from "@/UI/Pie2.vue";
import ReportPlanPie from "./ReportPlanPie.vue";
export default {
  props: ["fetchData"],
  components: {
    TitleC,
    Pie2,
    LeftBorderLabel,
    ReportPlanPie,
    CircleNum,
  },
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
  text-align: center;
}
.reform_title {
  font-size: 18rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 28rem;
  text-shadow: 0rem 0rem 1rem #6af9ff;
  margin-top: 2rem;
}
</style>
