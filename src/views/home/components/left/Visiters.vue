<template>
  <div>
    <TitleC size="small" :hideArrow="true">
      {{data.visitor.date}} 今日来访
    </TitleC>
    <div>
      <div class="v1-num v-row">
        {{data.visitor.type_1 || 0}}人
      </div>
      <div class="v2-num v-row">
        {{data.visitor.type_1 || 0}}人
      </div>
      <div class="v3-num v-row">
        {{data.visitor.type_1 || 0}}人
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
    }
  },
};
</script>
<style scoped>
.v-row {
 
  background-repeat: no-repeat;
  background-size: 100% 100%;
  font-size: 26rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 26rem;
  padding: 7rem 20rem;
  text-align: right;
  margin: 20rem 10rem;
}
.v1-num {
 background-image: url("./../../../../assets/dataview/v3.png");
}
.v2-num {
 background-image: url("./../../../../assets/dataview/v1.png");
}
.v3-num {
 background-image: url("./../../../../assets/dataview/v2.png");
}
</style>
