<template>
  <div class="competitions">
    <TitleC size="small">
      {{data.competition.start}}-{{data.competition.end}}年 技能大赛
    </TitleC>
    <div class="nums">
      <div class="nums-item">
        <span class="num">{{data.competition.count}}个</span>
      </div>
      <div class="nums-item competition2">
        <span class="num">{{data.competition.user}}个</span>
      </div>
      <div class="nums-item competition3">
        <span class="num">{{data.competition.prize}}个</span>
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
.competitions .nums {
  padding: 30rem 20rem;
}
.competitions .nums .nums-item {
  background-image: url("./../../../../assets/dataview/competition1.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 70rem;
  width: 100%;
  position: relative;
}
.competitions .nums .nums-item:not(:last-child) {
  margin-bottom: 40rem;
}

.competitions .nums .nums-item.competition2 {
  background-image: url("./../../../../assets/dataview/competition2.png");
}
.competitions .nums .nums-item.competition3 {
  background-image: url("./../../../../assets/dataview/competition3.png");
}
.competitions .nums .nums-item .num {
  position: absolute;
  bottom: 9rem;
  left: 72rem;
  right: 0;
  font-size: 26rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 26rem;
}
</style>
