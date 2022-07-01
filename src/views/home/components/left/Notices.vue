<template>
  <div class="notices">
    <!-- 显示跳转图标，新页面打开，target定义同a标签定义 -->
    <TitleC size="small" link="/xxx/xxx" target="_blank"> {{ data.notice.month || 0 }} 通知公告检查 </TitleC>
    <!-- 显示跳转图标，当前页面打开 -->
    <!-- <TitleC size="small" link="/xxx/xxx" > {{ data.notice.month || 0 }} 通知公告检查 </TitleC> -->
    <!-- 不显示跳转图标 -->
    <!-- <TitleC size="small" > {{ data.notice.month || 0 }} 通知公告检查 </TitleC> -->

    <div class="nums">
      <div class="nums-item">
        <span class="num">{{ data.notice.type_1 || 0 }} 条</span>
        <div class="num_text">通知</div>
        <img
        class="num_icon nums_animate"
          style="width:50rem "
          src="./../../../../assets/dataview/notice_type_3.png"
        />
      </div>
      <div class="nums-item">
        <span class="num">{{ data.notice.type_2 || 0 }} 条</span>
        <div class="num_text">公告</div>
        <img
          class="num_icon nums_animate"
          style="width:45rem"
          src="./../../../../assets/dataview/notice_type_2.png"
        />
      </div>
      <div class="nums-item">
          <span class="num">{{ data.notice.type_3 || 0 }} 条</span>
          <div class="num_text">检查</div>
          <img
            class="num_icon nums_animate"
            style="width:50rem"
            src="./../../../../assets/dataview/notice_type_1.png"
          />
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
  inject: ["fetchData"],
  computed: {
    data() {
      return this.fetchData();
    },
  },
};
</script>
<style scoped>
.notices .nums {
  display: flex;
  justify-content: space-around;

  text-align: center;
  padding: 20rem 0;
}
.notices .nums .nums-item {
  background-image: url("./../../../../assets/dataview/notice_type_bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 140rem;
  width: 100rem;
  position: relative;
}
.notices .nums .nums-item .num {
  font-size: 26rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 26rem;

  padding-top: 12rem;
  display: inline-block;
}
.num_text {
  font-size: 20rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 20rem;
  text-shadow: 0rem 0rem 2rem #6af9ff, 0rem 0rem 2rem #6af9ff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 10rem;
}
.nums_animate {
  animation: topDown 2.5s linear infinite;
}
@keyframes topDown {
  0% {
   margin-top: 8rem;
  }
  50%  {
    padding-top: 5rem;
  }
  100%{
   margin-top: 8rem;
  }
}
</style>
