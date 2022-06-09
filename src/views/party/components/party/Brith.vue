<template>
  <div class="brithContainer">
    <div class="brith-title">
      <div class="brith-icons">
        <img
          class="brith-icon"
          style="width: 30rem;"
          src="@/assets/dataview/birth.png"
        />
        <img
          class="brith-light-icon"
          style="width: 30rem;"
          src="@/assets/dataview/birthlight.png"
        />
      </div>
      {{birthday.count}}人
    </div>
    <div class="brith-content">
      <div
        class="brith-man"
        v-for="(item, index) in (birthday.list || []).slice(0, 13)"
        :key="index"
      >
        {{ item.name }}
      </div>
      <div class="brith-man last-brith" v-if="birthday.count > 13">
        ...
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['birthday'],
  data() {
    return {
      // list: [
      //   {
      //     name: "张七一",
      //   },
      //   {
      //     name: "张七一",
      //   },
      //   {
      //     name: "张七一",
      //   },
      //   {
      //     name: "张七一",
      //   },
      //   {
      //     name: "张七一",
      //   },
      //   {
      //     name: "张七一",
      //   },
      //   {
      //     name: "张七一",
      //   },
      //   {
      //     name: "张七一",
      //   },
      //   {
      //     name: "张七一",
      //   },
      //   {
      //     name: "张七一",
      //   },
      //   {
      //     name: "张七一",
      //   },
      //   {
      //     name: "张七一",
      //   },
      //   {
      //     name: "张七一",
      //   },
      //   {
      //     name: "张七一",
      //   },
      //   {
      //     name: "张七一",
      //   },
      // ],
    };
  },
};
</script>
<style scoped>
.brithContainer {
  background: linear-gradient(
    180deg,
    rgba(7, 87, 141, 0.3) 0%,
    rgba(0, 31, 52, 0.5) 100%
  );
  box-shadow: inset 0rem 0rem 8rem 0rem #6af9ff;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -165rem;
  text-align: left;
  height: 170rem;
  padding: 10rem 38rem 0;
}
.brithContainer:after {
  content: "";
  position: absolute;
  left: 0;
  width: 420rem;
  height: 14rem;
  top: 0rem;
  background-color: #041421;
  box-shadow: inset 20rem 0rem 8rem -20rem #6af9ff;
}
.brith-content {
  margin: 0 -10rem;
}
.brith-man {
  display: inline-block;
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0rem 0rem 6rem 0rem #6af9ff;
  border: 1rem solid #6af9ff;
  font-size: 20rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 20rem;
  padding: 7rem 0;
  margin: 8rem 10rem;
  width: 100rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.brith-title {
  display: flex;
  align-items: center;
  font-size: 20rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 20rem;
  margin-bottom: 10rem;
}
.last-brith {
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0rem 0rem 6rem 0rem #ff6a6a;
  border: 1rem solid #ff6a6a;
}
.brith-icons {
  position: relative;
}
.brith-light-icon {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateY(-50%);
  animation: breath 2s ease-in-out infinite;
  opacity: 0;
}

@keyframes breath {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
