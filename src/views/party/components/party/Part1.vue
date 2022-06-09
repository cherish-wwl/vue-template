<template>
  <div class="part1">
    <TitleC size="small">
     本校党员
    </TitleC>
    <CircleProcess :circleData="circleData"/>
    <div>
      <img src="@/assets/dataview/diviver.png" width="100%" />
    </div>
    <PartyPie :pieData="fdata.party.pie2"/>
    <div>
      <img src="@/assets/dataview/diviver.png" width="100%" />
    </div>
    <Gender :man="fdata.party.man" :woman="fdata.party.woman"/>
     <TitleC size="small" :hideArrow="true">
     今日政治生日党员
    </TitleC>
    <Brith :birthday="fdata.birthday"/>
  </div>
</template>
<script>
import TitleC from "@/UI/Title.vue";
import CircleProcess from './CircleProcess.vue'
import PartyPie from './PartyPie'
import Brith from './Brith.vue'
import Gender from './Gender.vue'
export default {
  inject:['fetchData'],
  computed:{
    fdata() {
      return this.fetchData()
    },
    circleData() {
      return this.fdata.party.pie1
    },
  },
  components: {
    TitleC,
    CircleProcess,
    PartyPie,
    Brith,
    Gender
  }, 


}
</script>
<style scoped>
.part1 {
  width: 420rem;
  /* height: 645rem; */
  padding: 14rem 10rem;
  background: linear-gradient(
    180deg,
    rgba(7, 87, 141, 0.3) 0%,
    rgba(0, 31, 52, 0.5) 100%
  );
  box-shadow: inset 0rem 0rem 8rem 0rem #6af9ff;
  text-align: center;

}
</style>