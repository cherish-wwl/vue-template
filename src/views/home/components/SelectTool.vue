<template>
  <div class="select-area">
    <div class="area" style="display:flex;">
      <span class="label">区域</span>
      <select v-model="areaValue">
        <option value="0" checked>北京-通州</option>
      </select>
    </div>
    <div style="display:flex;">
      <span class="label">日期</span>
      <input v-model="dateValue" type="date"/>
    </div>
  </div>
</template>
<script>
export default {
  props:['area','date'],
  data() {
    return {
      dateValue: '',
      areaValue: '0'
    }
  },
  watch:{
    areaValue(val) {
      this.$emit('update:area',val)
    },
    dateValue(val) {
      this.$emit('update:date',val)
    }
  }
}
</script>
<style lang="scss" scoped>
.select-area{
  display: flex;
  margin-bottom: 14px;
  .area{
    margin-right: 20px;
  }
}
.label {
  font-size: 16px;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 38px;
  margin-right: 11px;
}
select, input {
  height: 40px;
  width: 180px;
  background: #0F2089;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 400;
  padding: 0 10px 0 17px;
  border: none;
}
input{
  width: 160px;
}
</style>