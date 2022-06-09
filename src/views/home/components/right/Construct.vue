<template>
  <div class="constructs">
    <TitleC size="small">
     {{data.introduce.start}}-{{data.introduce.end}}年 示范校建设
    </TitleC>
    <div class="nums">
      <div class="nums-item">
        <span class="num">{{data.introduce.construct || 0}}个</span>
      </div>
      <div class="nums-item construct2" >
        <span class="num">{{data.introduce.attainment || 0}}个</span>
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

.constructs .nums {
  display: flex;
  justify-content: space-around;

  text-align: center;
  padding: 59rem 0 75rem;
}
.constructs .nums .nums-item {
  background-image: url("./../../../../assets/dataview/construct1.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 102rem;
  width: 142rem;
  position: relative;
}
.constructs .nums .nums-item.construct2{
  background-image: url("./../../../../assets/dataview/construct2.png");
}
.constructs .nums .nums-item .num {
  position: absolute;
  bottom: 17rem;
  left: 0;
  right: 0;
  font-size: 30rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #FFFFFF;
  line-height: 30rem;
}
</style>
