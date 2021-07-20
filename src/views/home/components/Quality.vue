<template>
  <div>
    <div class="title">睡眠质量</div>
    <Radar />
  </div>
</template>
<script>
import Radar from './Radar'
export default {
  components: {
    Radar
  }
}
</script>
<style lang="scss" scoped>
.title{
  font-size: 24px;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 40px;
  margin-bottom: 14px;
}

</style>