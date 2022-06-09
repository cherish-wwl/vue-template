<template>
  <div class="part-content">
    <TitleC size="small"> {{ fetchData.consult.year }}年 招生数据 </TitleC>
    <div style="margin-top:20rem;">
      <BorderLabel>
        咨询人数
      </BorderLabel>
    </div>
    <div class="consult-panel">
      <DotLabel class="consult-item">
        咨询人数
        <span>{{ fetchData.consult.online }}人</span>
      </DotLabel>
    </div>
    <div>
      <img src="@/assets/dataview/diviver.png" width="100%" />
    </div>
    <div style="margin-top:20rem;">
      <BorderLabel>
        招生人数
      </BorderLabel>
    </div>
    <div class="consult-panel">
      <DotLabel class="consult-item">
        报名人数
        <span>{{ fetchData.consult.form_0 }}人</span>
      </DotLabel>
      <DotLabel class="consult-item">
        待审核人数
        <span>{{ fetchData.consult.form_1 }}人</span>
      </DotLabel>
      <DotLabel class="consult-item">
        批准人数
        <span>{{ fetchData.consult.form_2 }}人</span>
      </DotLabel>
      <DotLabel class="consult-item">
        录取人数
        <span>{{ fetchData.consult.form_3 }}人</span>
      </DotLabel>
    </div>
    <div>
      <img src="@/assets/dataview/diviver.png" width="100%" />
    </div>
    <div style="margin-top:20rem;">
      <BorderLabel>
        志愿采集
      </BorderLabel>
    </div>
    <div class="consult-panel">
      <DotLabel class="consult-item">
        志愿采集人数
        <span>{{ fetchData.consult.apply }}人</span>
      </DotLabel>
    </div>
    <TitleC size="small" :hideArrow="true"> 教材数量 </TitleC>
    <ProcessList class="processes" :list="list" />
  </div>
</template>
<script>
import TitleC from "@/UI/Title.vue";
import DotLabel from "@/UI/DotLabel.vue";
import BorderLabel from "@/UI/BorderLabel.vue";
import ProcessList from "@/UI/ProcessList.vue";
export default {
  props: ["fetchData"],
  components: {
    TitleC,
    DotLabel,
    BorderLabel,
    ProcessList,
  },
  computed: {
    list() {
      const ls = this.fetchData.textbook || [];
      const total = ls.reduce((t, c) => {
        return t + c.value;
      }, 0);
      ls.forEach((e) => {
        e.percent = total ? ((e.value / total) * 100).toFixed(2) : 1;
        e.count = e.value + "种";
      });
      console.log("ls", ls, this.fetchData);
      return ls;
    },
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
.consult-panel {
  padding: 10rem 45rem 0;
}
.consult-item {
  display: flex;
  width: auto;
  margin-bottom: 20rem;
}
.processes {
  padding-top: 20rem;
}
.processes >>> .processPanel{
  padding: 7.5rem 10rem;
}
</style>
