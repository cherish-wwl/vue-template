<template>
  <div>
    <div class="title">睡眠趋势</div>
    <div class="card">
      <DayReport :reportData="reportData"/>
    </div>
  </div>
</template>
<script>
import DayReport from './DayReport'
export default {
  props:{
    reportData: {
      type: Object,
      default: function (){
        return {}
      }
    }
  },
  components: {
    DayReport
  }
}
</script>
<style lang="scss" scoped>
.title{
  font-size: 24px;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 40px;
  margin-bottom: 14px;
}
.card {
  background-image: url('~@/assets/column.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 15px 10px ;
  min-height: calc(100vh - 180px);
  overflow-y: auto;
} 

</style>