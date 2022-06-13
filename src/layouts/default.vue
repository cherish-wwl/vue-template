<template>
  <div class="dataview-container">
    <div class="title">
      校园大数据
      <span class="current_time">{{ current_time }}</span>
    </div>
    <!-- <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          1
        </div>
        <div class="swiper-slide">
          2
        </div>
        <div class="swiper-slide">
          3
        </div>
      </div>
    </div> -->

    <router-view></router-view>
  </div>
</template>
<script>
import moment from "moment";
import Swiper from "swiper/swiper-bundle.min.js";
import "swiper/swiper-bundle.min.css";
export default {
  name: "default",
  data() {
    return {
      timer: null,
      current_time: moment(Date.now()).format("YYYY-MM-DD HH:mm"),
    };
  },

  created() {
    window.addEventListener("load", this.resizeZoom);
    window.addEventListener("resize", this.resizeZoom);
    this.startTimer();
    // this.togglePage();
  },
  mounted() {
    this.myswiper();
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeZoom);
    window.removeEventListener("load", this.resizeZoom);

    clearInterval(this.timer);
    this.timer = null;
  },
  watch: {
    $route() {
      // this.resizeZoom()
      // this.togglePage()
    },
  },
  methods: {
    myswiper() {
      // eslint-disable-next-line no-undef
      new Swiper(".swiper", {
        loop: true,
        // autoplay: true
        // autoplay: {
        //   delay: 10000,
        //   disableOnInteraction: false,
        //   stopOnLastSlide: false,
        //   pauseOnMouseEnter: true,
        // },
      });
    },

    togglePage() {
      const list = ["/home", "/party", "/practice", "/teacher"];
      console.log(this.$route.path, this.$router);
      const currentIndex = list.findIndex((e) => e === this.$route.path) || 0;
      setTimeout(() => {
        this.$router.replace(list[(currentIndex + 1) % 4]);
      }, 10000);
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.current_time = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
      }, 1000);
    },
    init() {
      this.getLeft();
      this.getCenter();
      this.getRight();
    },
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 80vh;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  color: #000;
}
.dataview-container {
  color: #fff;
  min-height: 100vh;
  min-width: 100vw;
}

.title {
  font-size: 40rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #6af9ff;
  line-height: 40rem;
  text-align: center;
  background-image: url("../assets/dataview/nav.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 30rem 0 46rem;
  position: relative;
}
.current_time {
  font-size: 30rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #6af9ff;
  line-height: 30rem;
  position: absolute;
  right: 30rem;
  bottom: 9rem;
}
</style>
<style>
html {
  font-size: 6.25%;
  background-color: #000;
  width: 1920rem;
  overflow-x: auto;
}
</style>
