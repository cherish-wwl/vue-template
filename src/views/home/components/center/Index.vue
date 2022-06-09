<template>
  <div class="center-content">
    <Catagary />
    <Map />
    <Process />
  </div>
</template>
<script>
import Catagary from "./Catagary.vue";
import Map from "./Map.vue";
import Process from "./Process.vue";
export default {
  components: {
    Catagary,
    Map,
    Process,
  },
   props:['fetchData'],
  provide(){
    return {
      fetchData: () => this.fetchData
    }
  }
};
</script>
<style scoped></style>
