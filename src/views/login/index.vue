<template>
  <div class="dataview-login-container">
    <div class="login-pos">
      <div class="login-pos-title">智慧职专数据可视化平台</div>
      <div class="login-pos-inner">
        <div>
          <img style="width:140px;" src="../../assets/dataview/login-5.png" />
        </div>
        <div class="login-pos-text">用户登录</div>
        <div class="t-input-area">
          <img style="width:24px;" src="../../assets/dataview/login-3.png" />
          <input class="t-input" placeholder="请输入用户名" />
        </div>
         <div class="t-input-area">
          <img style="width:24px;" src="../../assets/dataview/login-7.png" />
          <input class="t-input" placeholder="请输入密码" />
        </div>
        <div class="login-btn">
          登录
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "login",
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
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  width: 570px;
  height: 536px;
}
.login-pos-inner {
  width: 570px;
  height: 536px;
  background: url("../../assets/dataview/login-2.png") no-repeat;
  background-size: 100% 100%;
  padding: 25px 84px 36px;
}
.login-pos-title {
  font-size: 36px;
  font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
  font-weight: bold;
  color: #9bcffe;
  line-height: 47px;
  letter-spacing: 3px;
  margin-bottom: 53px;
}
.login-pos-text {
  font-size: 28px;
  font-family: MicrosoftYaHei;
  color: #00d6df;
  line-height: 37px;
  letter-spacing: 2px;
  margin: 25px 0 29px;
}
.t-input-area {
  background: url("../../assets/dataview/login-6.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  padding: 11px;
   margin-bottom: 28px;
}
.t-input {
  background-color: transparent;
  flex: 1;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  color: #ffffff;
  line-height: 24px;
  border:none;
  outline: none;
  margin-left: 15px;
  letter-spacing: 1px;
}
.t-input::placeholder {
  font-size: 18px;
  font-family: MicrosoftYaHei;
  color: #ffffff;
  line-height: 24px;
  letter-spacing: 1px;
}
.t-input:focus{
  border: none;
  outline: none;
}
.login-btn {
  background: url("../../assets/dataview/login-8.png") no-repeat;
  background-size: 100% 100%;
  font-size: 24px;
font-family: MicrosoftYaHeiLight;
color: #FFFFFF;
line-height: 32px;
letter-spacing: 2px;
padding: 11px 0;
}
</style>
