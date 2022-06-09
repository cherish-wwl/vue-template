<template>
  <div>
    <TitleC size="large" :hideArrow="true">
      {{data.school.name}}
    </TitleC>
    <div class="catagrays">
      <div class="catagray-item catagray1">
        <span class="num">{{data.school.campuses}}个</span>
      </div>
      <div class="catagray-item catagray2">
        <span class="num">{{data.school.institute}}个</span>
      </div>
      <div class="catagray-item catagray3">
        <span class="num">{{data.school.department}}个</span>
      </div>
      <div class="catagray-item catagray4">
        <span class="num">{{data.school.major}}个</span>
      </div>
      <div class="catagray-item catagray5">
        <span class="num">{{data.school.grade}}个</span>
      </div>
      <div class="catagray-item catagray6">
        <span class="num">{{data.school.teacher}}个</span>
      </div>
      <div class="catagray-item catagray7">
        <span class="num">{{data.school.student}}个</span>
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
.catagrays {
  display: flex;
  justify-content: space-between;
  margin-top: 20rem;
}
.catagray-item {
  background-image: url("./../../../../assets/dataview/c1.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 130rem;
  height: 110rem;
  position: relative;
}
.catagray-item.catagray2 {
   background-image: url("./../../../../assets/dataview/c2.png");
}
.catagray-item.catagray3 {
   background-image: url("./../../../../assets/dataview/c3.png");
}
.catagray-item.catagray4 {
   background-image: url("./../../../../assets/dataview/c4.png");
}
.catagray-item.catagray5 {
   background-image: url("./../../../../assets/dataview/c5.png");
}
.catagray-item.catagray6 {
   background-image: url("./../../../../assets/dataview/c6.png");
}
.catagray-item.catagray7 {
   background-image: url("./../../../../assets/dataview/c7.png");
}
.catagray-item .num {
  font-size: 26rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 30rem;
  position: absolute;
  bottom: 20rem;
  right: 15rem;

}
</style>
