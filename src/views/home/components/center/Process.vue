<template>
  <div class="process-content">
    <TitleC size="small" :hideArrow="true">
      {{data.pipeline.date}} 实时工作流程
    </TitleC>
    <div class="process">
      <div v-for="(item,index) in fristRow" :key="index" class="process-item">
        {{item.name}}
        <span class="num">{{item.count}}个</span>
      </div>
    </div>
    <div class="process">
      <div v-for="(item,index) in secondRow" :key="index" class="process-item">
        {{item.name}}
        <span class="num">{{item.count}}个</span>
      </div>
    </div>
  </div>
</template>
<script>
import TitleC from "@/UI/Title.vue";
export default {
  components: {
    TitleC,
  },
   inject: ['fetchData'],
  computed:{
    data(){
      return this.fetchData()
    },
   fristRow () {
      return (this.data.pipeline.list || []).slice(0,5) || []
    },
     secondRow () {
      return (this.data.pipeline.list || []).slice(5) || []
    }

  },
};
</script>
<style scoped>
.process-content{
  position: absolute;
  left: 16rem;
  right: 16rem;
  bottom: 20rem;
}
.process {
  display: flex;
  justify-content: space-between;
  margin-top: 20rem;
}
.process-item {
  background-image: url("./../../../../assets/dataview/process.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 182rem;
  font-size: 20rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 20rem;
  padding: 8rem 8rem 8rem 30rem;
  display: flex;
  justify-content: space-between;
}
</style>
