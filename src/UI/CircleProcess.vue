<template>
  <div class="circleProcess">
    <div class="circleProcessWrapper">
      <div class="left">
        <div class="leftcircle" :style="leftDeg"></div>
      </div>
      <div class="right">
        <div class="rightcircle" :style="rightDeg"></div>
      </div>
      <img class="tangyuan" src="../assets/dataview/tangyuan.png" />
    </div>
     <div class="totalArea">
      <div>党员总人数</div>
      <span>100个</span>
    </div>
    <div>
      <span>党员占总教职工比例</span>
      <span>{{ process }}%</span>
    </div>
   
  </div>
</template>
<script>
export default {
  props: ["process"],
  computed: {
    leftDeg() {
      console.log("this.process", this.process);
      if ((this.process || 0) < 50) {
        return "transform: rotate(45deg)";
      }
      const range = (225 - 45) / 50;
      const deg = Math.floor(range * (this.process - 50));
      return `transform: rotate(${45 + deg}deg)`;
    },
    rightDeg() {
      console.log("this.process", this.process);
      if (!this.process) {
        return "transform: rotate(45deg)";
      }
      if (this.process >= 50) {
        return "transform: rotate(225deg)";
      }
      const range = (225 - 45) / 50;
      const deg = Math.floor(range * this.process);
      return `transform: rotate(${45 + deg}deg)`;
    },
  },
};
</script>
<style scoped>
.circleProcess {
  text-align: left;
  position: relative;
  padding: 20rem 0;
}
.circleProcessWrapper {
  display: inline-flex;
  position: relative;

    transform: rotate(90deg);
}

.tangyuan {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);

  width: 25rem;

}
.circleProcessWrapper .left {
  width: 50rem;
  height: 100rem;
  position: relative;
  overflow: hidden;


}

.circleProcessWrapper .leftcircle {
  width: 100rem;
  height: 100rem;
  border: 30rem solid #6af9ff;
  position: absolute;
  border-radius: 50%;
  left: 0rem;
  top: 0rem;
  border-bottom: 30rem solid #808c94;
  border-left: 30rem solid #808c94;
  transform: rotate(45deg);
  
}

.circleProcessWrapper .right {
  width: 50rem;
  height: 100rem;
  position: relative;
  overflow: hidden;
}

.circleProcessWrapper .rightcircle {
  width: 100rem;
  height: 100rem;
  border-radius: 50%;
  border: 30rem solid #6af9ff;
  position: absolute;
  border-top: 30rem solid #808c94;
  border-right: 30rem solid #808c94;
  right: 0rem;
  top: 0rem;
  transform: rotate(45deg);
}
.totalArea {
  background: rgba(0, 0, 0, 0.3);
  display: inline-block;
  box-shadow: 0rem 0rem 6rem 0rem #6af9ff;
  border: 1rem solid #6af9ff;
  padding: 6rem 22rem;
   font-size: 20rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 20rem;

    position: absolute;
    top:20rem;
    right: 50rem;

}
  
.totalArea div {

  font-size: 20rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 25rem;
  text-shadow: 0rem 0rem 2rem #6af9ff, 0rem 0rem 2rem #6af9ff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
}
</style>
