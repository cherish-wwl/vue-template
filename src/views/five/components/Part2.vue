<template>
  <div class="part-content">
    <TitleC size="small"> {{ fetchData.project.year }}年 教研项目 </TitleC>
    <div class="project">
      <div class="border-label">
        <span style="color:#FF1E1E;">
        <img  src="@/assets/dataview/five1.png"/>未开始</span>
        <span>{{ fetchData.project.count_2 }}个</span>
      </div>
      <div class="border-label">
        <span style="color:#6AF9FF;">
         <img src="@/assets/dataview/five2.png"/>进行中</span>
        <span>{{ fetchData.project.count_1 }}个</span>
      </div>
      <div class="border-label">
        <span> <img src="@/assets/dataview/five3.png"/>已结束</span>
        <span>{{ fetchData.project.count_3 }}个</span>
      </div>
    </div>
    <TitleC size="small"> {{ fetchData.paper.year }}年 论文管理 </TitleC>
    <ProcessList class="five-process" :list="list"/>
    <TitleC size="small"> {{ fetchData.subject.year }}年 课题管理 </TitleC>

    <ProcessList class="five-process" :list="list2"/>
  </div>
</template>
<script>
import TitleC from "@/UI/Title.vue";

import ProcessList from "@/UI/ProcessList.vue";
export default {
  props: ["fetchData"],
  components: {
    TitleC,
    ProcessList
  },
  computed:{
    list() {
      const ls = (this.fetchData.paper || {}).list || []
      const total  = ls.reduce((t,c)=> {
          return t+ c.value
      },0)
      ls.forEach(e => {
        e.percent =total ?  (e.value / total * 100).toFixed(2) : 1
        e.count = e.value + '篇'
      });
      return ls
    },
    list2() {
      const ls = (this.fetchData.subject || {}).list || []
      const total  = ls.reduce((t,c)=> {
          return t+ c.value
      },0)
      ls.forEach(e => {
        e.percent =total ?  (e.value / total * 100).toFixed(2) : 1
        e.count = e.value + '个'
      });
      return ls
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
.border-label {
  background: linear-gradient(
    180deg,
    rgba(0, 42, 70, 0.5) 0%,
    rgba(0, 152, 255, 0.5) 100%
  );
  box-shadow: inset 0rem 0rem 8rem 0rem #6af9ff;
  border: 2rem solid #6af9ff;
  margin: 30rem 0;
  font-size: 20rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #fff;
  line-height: 28rem;
  padding: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.border-label img {
  width: 30rem;
  vertical-align: bottom;
  margin-right: 10rem;
}
.project {
  padding: 10rem 70rem;
}
.five-process{
  padding: 20rem 0;
}
.five-process >>> .processPanel{
  padding:10rem;
}
</style>
