<template>
  <div class="part-content">
    <TitleC size="small">
      {{ fetchData.course.start }}-{{ fetchData.course.end }}学年第{{
        fetchData.course.term
      }}学期 各年级课
    </TitleC>
    <div style="margin-top: 10rem;">
      <BorderLabel>课程数量</BorderLabel>
    </div>
    <div class="course-panel">
      <div class="course-item" v-for="(item,index) in fetchData.course.count" :key="index">
        <div class="course-item-count">{{item.count}}个</div>
        <div class="course-item-name">{{item.name}}</div>
      </div>
    </div>
    <div>
      <img src="@/assets/dataview/diviver.png" width="100%" />
    </div>
     <div>
      <BorderLabel>课程种类</BorderLabel>
    </div>
    <Bar class="barC"/>
    <div>
      <img src="@/assets/dataview/diviver.png" width="100%" />
    </div>
     <div>
      <BorderLabel>课程类别</BorderLabel>
    </div>
    <Bar class="barC"/>
  </div>
</template>
<script>
import TitleC from "@/UI/Title.vue";
import BorderLabel from "@/UI/BorderLabel.vue";
import Bar from "@/UI/Bar.vue";

export default {
  props: ["fetchData"],
  components: {
    TitleC,
    BorderLabel,
    Bar
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
.course-panel {
  display: flex;
  justify-content: space-between;
  margin: 20rem 0;
}
.course-item{
  width: 30%;
  background: linear-gradient(180deg, rgba(0, 42, 70, 0.5) 0%, rgba(0, 152, 255, 0.5) 100%);
box-shadow: inset 0rem 0rem 8rem 0rem #6AF9FF;
border: 1rem solid #6AF9FF;
padding: 20rem 0;
}
.course-item-count {
  font-size: 26rem;
font-family: PingFangSC-Medium, PingFang SC;
font-weight: 500;
color: #FFFFFF;
line-height: 26rem;
margin-bottom: 20rem;
}
.course-item-name {
  font-size: 20rem;
font-family: PingFangSC-Medium, PingFang SC;
font-weight: 500;
color: #FFFFFF;
line-height: 20rem;
}
.barC {
  margin: 10rem 0;
}
</style>
