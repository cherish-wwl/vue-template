<template>
  <div :class="(size || 'small') + 'titleb titleb'">
    <slot></slot>
    <a v-if="link" :href="link" :target="target">
    <img
        style="width:30rem;"
        src="./../assets/dataview/right-awarr.png"
      />
    </a>
   
  </div>
</template>
<script>
export default {
  props: ["size", "link",'target'],
};
</script>
<style scoped>
.titleb {
  background-image: url("./../assets/dataview/title-small.png");
  background-repeat: no-repeat;
  background-size: auto 100%;
  padding: 5rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
<style>
.dataview-container .smalltitleb{
    font-size: 20rem;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #6AF9FF;
    line-height: 20rem;
    height: 40rem;
}
.dataview-container .largetitleb{
  font-size: 30rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #6AF9FF;
  line-height: 30rem;
  padding: 15rem 10rem;
}
</style>
