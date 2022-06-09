<template>
  <div class="part1">
    <TitleC size="small">
      {{fdata.league.year}}年 团总支动态
    </TitleC>
    <div class="group_dongtai">
      <div class="group_dongtai_item">
        <div class="breathAnimate">
          <span class="num">{{fdata.league.dynamic}}个</span>
        </div>
      </div>
      <div class="group_dongtai_item group_dongtai_item2">
        <div class="breathAnimate">
        <span class="num">{{fdata.league.special}}个</span>
        </div>
      </div>
    </div>
    <TitleC size="small">
       {{fdata.practice.year}}年 社会实践活动数量
    </TitleC>
    <ProcessList :list="list"/>
    <!-- <div class="processPanel" v-for="(item,index) in list" :key="index">
      <span class="processPanelTitle">{{item.name}}</span>
      <div class="process">
        <div class="inner" :style="'width: '+item.percent+'%;'"></div>
      </div>
      <span class="processPanelNum">{{item.count}}</span>
    </div> -->
   
  </div>
</template>
<script>
import TitleC from "@/UI/Title.vue";
import ProcessList from "@/UI/ProcessList.vue";
export default {
  inject:['fetchData'],
  computed:{
    fdata() {
      return this.fetchData()
    },
    list() {
      const ls = (this.fdata.practice || {}).list || []
      const total  = ls.reduce((t,c)=> {
          return t+ c.count
      },0)
      ls.forEach(e => {
        e.percent =total ?  (e.count / total * 100).toFixed(2) : 1
        e.count = e.count + '个'
      });
      return ls
    }
  },
  components: {
    TitleC,
    ProcessList
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
<style scoped>
.part1 {
  width: 420rem;
  align-self: flex-start;
  padding: 14rem 10rem;
  background: linear-gradient(
    180deg,
    rgba(7, 87, 141, 0.3) 0%,
    rgba(0, 31, 52, 0.5) 100%
  );
  box-shadow: inset 0rem 0rem 8rem 0rem #6af9ff;
  text-align: center;
}

.group_dongtai {
  display: flex;
  justify-content: space-around;
  padding: 20rem 0;
}
.group_dongtai .group_dongtai_item {
  background-image: url("./../../../../assets/dataview/group1.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 102rem;
  width: 142rem;
  position: relative;
}
.group_dongtai .group_dongtai_item.group_dongtai_item2 {
  background-image: url("./../../../../assets/dataview/group2.png");
}
.group_dongtai .group_dongtai_item .num {
  position: absolute;
  bottom: 17rem;
  left: 0;
  right: 0;
  font-size: 30rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 30rem;
}
/* .processPanel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15rem 10rem;
}
.processPanelTitle {
  font-size: 20rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 20rem;
  text-shadow: 0rem 0rem 2rem #6af9ff, 0rem 0rem 2rem #6af9ff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 60rem;
  text-align: center;
}
.processPanelNum {
  font-size: 20rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 20rem;
}
.processPanel .process {
  flex: 1;
  padding: 0 10rem;
}
.processPanel .process .inner {
  background: linear-gradient(90deg, rgba(9, 108, 175, 0.2) 0%, #6af9ff 100%);
  height: 10rem;
  width: 20%;
} */
.breathAnimate {
  box-shadow: 1rem 1rem 10rem 1rem #6af9ff;
    animation: breath 1.8s ease-in-out infinite;
    height: 100%;
    width: 1rem;
    margin-left: 4rem;
}
@keyframes breath {
  0%{
    box-shadow: none;
  }
  50%{
    box-shadow: 1rem 1rem 10rem 1rem #6AF9FF;
  }
  100%{
    box-shadow: none;
  }
}
</style>
