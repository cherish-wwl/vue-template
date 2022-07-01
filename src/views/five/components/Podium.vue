<template>
  <div class="podium">
    <BorderLabel class="l">{{ title }}</BorderLabel>
    <div class="podium-panel">
      
      <div class="podium-item">
        <div  v-if="rank2.users">{{rank2.users[0]}} {{rank2.users.length > 1? '等...': ''}}</div>
        <div v-if="rank2.score">{{parseInt(rank2.score)}}分</div>
        <img src="@/assets/dataview/five9.png" />
      </div>
      <div class="podium-item">
        <div v-if="rank1.users">{{rank1.users[0]}} {{rank1.users.length > 1? '等...': ''}} </div>
        <div v-if="rank1.score">{{parseInt(rank1.score)}}分</div>
        <img src="@/assets/dataview/five8.png" />
      </div>

      <div class="podium-item">
        <div v-if="rank3.users">{{rank3.users[0]}} {{rank3.users.length > 1? '等...': ''}}</div>
        <div v-if="rank3.score">{{parseInt(rank3.score)}}分</div>
        <img src="@/assets/dataview/five10.png" />
      </div>
    </div>
    <div class="podium-title ">{{exam}}</div>
  </div>
</template>
<script>
import BorderLabel from "@/UI/BorderLabel.vue";
export default {
  props: ["title",'exam','rank1','rank2','rank3'],
  components: {
    BorderLabel,
  },
};
</script>
<style scoped>
.podium {
  padding-top: 12rem;
  text-align: center;
  width: 358rem;
  margin: auto;
}
.l {
  padding: 4rem 20rem;
}
.podium-title {
  background: linear-gradient(
    180deg,
    rgba(7, 87, 141, 0.3) 0%,
    rgba(0, 31, 52, 0.5) 100%
  );
  box-shadow: inset 0rem 0rem 8rem 0rem #6af9ff;
  font-size: 16rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 16rem;
  text-shadow: 0rem 1rem 2rem #6af9ff;
  padding: 8rem 0;
}
.podium-item {
  flex: 0.333;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 20rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 22rem;
}
.podium-item img {
  width: 100%;
  margin-top: 10rem;
}
.podium-panel {
  display: flex;
  margin-top: 10rem;
}
</style>
