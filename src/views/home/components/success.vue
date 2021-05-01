<template>
  <div class="modal">
    <div class="modalBody">
      <div class="card">
        <img width="30%" src="/img/success.png" />
        <p class="text">请联系工作人员，领取行李牌</p>
        <img width="100%" src="/img/adv.png?12323123" />
      </div>
      <div class="close" >
        <img width="36" @click="$emit('update:show',false)" src="/img/close.png"/>
      </div>
    </div>
   
  </div>
</template>
<style lang="scss" scoped>
.modal{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .6);
}
.modalBody{
  position: absolute;
  top: 50%;
  left: 2rem;
  right: 2rem;
  transform: translateY(-50%);
  .card{
    background: #F6EED7;
    border-radius: 1rem;
    width: 100%;
    padding: 6.4rem 1.5rem 1.7rem;
  }
}
.text{
  font-size: 2rem;
  font-weight: 400;
  color: #9c7708;
  line-height: 2;
  margin-bottom: 2rem;
}
.close{
  margin-top: 3rem;
}
</style>