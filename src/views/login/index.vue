<template>
  <div class="dataview-login-container">
    <div class="login-pos">
      <div class="login-pos-title">智慧职专数据可视化平台</div>
      <div class="login-pos-inner">
        <div>
          <img style="width:140rem;" src="../../assets/dataview/login-5.png" />
        </div>
        <div class="login-pos-text">用户登录</div>
        <div class="t-input-area">
          <img style="width:24rem;" src="../../assets/dataview/login-3.png" />
          <input class="t-input" v-model="mobile" placeholder="请输入用户名" />
        </div>
         <div class="t-input-area">
          <img style="width:24rem;" src="../../assets/dataview/login-7.png" />
          <input class="t-input" v-model="password" placeholder="请输入密码" />
        </div>
        <div class="login-btn" @click="login">
          登录
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "login",
  data() {
    return {
      mobile: '',
      password: '',
      remember: ''
    }
  },
  methods:{
    login() {
      
    }
  }

};
</script>
<style scoped>
.dataview-login-container {
  background: url("../../assets/dataview/login-1.png") no-repeat;
  background-size: 100% 100%;
  height: 100vh;
  width: 100vw;
  position: relative;
  text-align: center;
}
.login-pos {
  position: absolute;
  right: 259rem;
  top: 50%;
  transform: translateY(-50%);
}
.login-pos-inner {
  width: 570rem;
  height: 536rem;
  background: url("../../assets/dataview/login-2.png") no-repeat;
  background-size: 100% 100%;
  padding: 25rem 84rem 36rem;
}
.login-pos-title {
  font-size: 36rem;
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: bold;
  color: #9bcffe;
  line-height: 47rem;
  letter-spacing: 3rem;
  margin-bottom: 53rem;
}
.login-pos-text {
  font-size: 28rem;
  font-family: MicrosoftYaHei;
  color: #00d6df;
  line-height: 37rem;
  letter-spacing: 2rem;
  margin: 25rem 0 29rem;
}
.t-input-area {
  background: url("../../assets/dataview/login-6.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  padding: 11rem;
   margin-bottom: 28rem;
}
.t-input {
  background-color: transparent;
  flex: 1;
  font-size: 18rem;
  font-family: MicrosoftYaHei;
  color: #ffffff;
  line-height: 24rem;
  border:none;
  outline: none;
  margin-left: 15rem;
  letter-spacing: 1rem;
}
.t-input::placeholder {
  font-size: 18rem;
  font-family: MicrosoftYaHei;
  color: #ffffff;
  line-height: 24rem;
  letter-spacing: 1rem;
}
.t-input:focus{
  border: none;
  outline: none;
}
.login-btn {
  background: url("../../assets/dataview/login-8.png") no-repeat;
  background-size: 100% 100%;
  font-size: 24rem;
font-family: MicrosoftYaHeiLight;
color: #FFFFFF;
line-height: 32rem;
letter-spacing: 2rem;
padding: 11rem 0;
}
</style>
