<template>
  <div>
    <TitleC size="small" >
      {{data.news.year}}年 新闻动态数量
    </TitleC>
    <div style="padding: 13rem 68rem 20rem;">

      <DashLabel :animate="true">
        {{data.news.count}}条
      </DashLabel>
    </div>
  </div>
</template>
<script>
import TitleC from "@/UI/Title.vue";
import DashLabel from "@/UI/DashLabel.vue"
export default {
  inject: ['fetchData'],
  computed:{
    data(){
      return this.fetchData()
    }
  },
  components: {
    TitleC,
    DashLabel
  },
};
</script>
<style scoped>
.new-num{
   background-image: url("./../../../../assets/dataview/btn-border2.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  font-size: 30rem;
font-family: PingFangSC-Semibold, PingFang SC;
font-weight: 600;
color: #3CDD5A;
line-height: 30rem;
text-align: center;
padding:  16rem 0;
}
</style>
