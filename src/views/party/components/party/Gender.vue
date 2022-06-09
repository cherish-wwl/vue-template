<template>
  <div class="gender-container">
    <div class="gender-title">男女党员占比</div>
    <div class="gender-content">
      <img style="width:25rem;" src="@/assets/dataview/male.svg" />
      <div class="gender-process">
        <div class="gender-process-male" :style="'width:'+Math.floor((man/(man+woman)) * 100) +'%;'"></div>
        <div class="gender-process-female" :style="'width:'+Math.ceil((woman/(man+woman)) * 100) +'%;'"></div>
      </div>
      <img style="width:20rem;" src="@/assets/dataview/female.svg" />
    </div>
    <div class="gender-process-text">
      <div class="male-text">
        <div>男性党员</div>
        <div>{{man}}人 {{Math.floor((man/(man+woman)) * 100)}}%</div>
      </div>
      <div class="female-text">
        <div>女性党员</div>
        <div>{{woman}}人  {{Math.ceil((woman/(man+woman)) * 100)}}%</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['man','woman']
}
</script>
<style scoped>
.gender-container {
  padding: 0 10rem;
}
.gender-title {
  font-size: 20rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 28rem;
  margin: 10rem 0;
}
.gender-content {
  display: flex;
  align-items: center;
}
.gender-process {
  height: 10rem;
  flex: 1;
  width: 100%;
  display: flex;
  padding: 0 9rem;
  position: relative;
}
.gender-process .gender-process-male {
  background: linear-gradient(90deg, #096caf 0%, #6af9ff 100%);
  width: 40%;
  height: 100%;
}
.gender-process .gender-process-female {
  background: linear-gradient(90deg, #ff5f77 0%, #ff2222 100%);
  width: 60%;
  height: 100%;
}
.gender-process-text {
  display: flex;
  justify-content: space-between;
  padding: 0 20rem;
  font-size: 20rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 25rem;
  position: relative;
  top: -15rem;
}
.male-text:before,
.female-text:before {
  content: "|";
  display: block;
  margin-bottom: 10rem;
}
/* .gender-process-text > div { */
/* margin-top: 10rem; */
/* } */
</style>
