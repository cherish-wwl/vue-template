<template>
  <div class="container">
    <div class="logo-image" style="min-height: 350px">
      <img width="100%" src="/img/bg.png">
    </div>
    <div style="padding: 0 2rem;">
      <div class="card">
        <h3 class="title">恭喜您完成打卡</h3>
        <h4 class="subTitle">填写信息制作您独一无二的行李牌</h4>
        <div class="inner">
          <div class="row">
            <div class="col borderRight" >
              <input type="text" :class="{error: error === 'name'}" v-model="name" placeholder="您的姓名"/>
            </div>
            <div class="col">
              <input type="text" :class="{error: error === 'phone'}" v-model="phone" placeholder="您的手机号"/>
            </div>
          </div>
          <div class="row borderTop mt">
            <div class="col">
              <textarea rows="3" maxlength="8" :class="{error: error === 'content'}" v-model="content" width="100%" placeholder="输入您想刻印在行李牌上的文案"/>
            </div>
          </div>
          <div class="row" style="justify-content: center;">
            <button class="col btn" @click="confrim">提交</button>
          </div>
        </div>
      </div>
    </div>
    <Success v-if="show" :show.sync="show"/>
  </div>
</template>
<script>
import Success from './components/success';
import HTTP from '@/utils/http';
export default {
  components:{
    Success
  },
  data(){
     return {
       name:"",
       phone:"",
       content:"",
       show: false,
       error:''
     }
  },
  methods:{
    confrim(){
      this.error = ''
      if (!this.name) {
        this.error= "name"
        return
      }
      if (!this.phone) {
        this.error= "phone"
        return
      }
      if (!this.content) {
        this.error= "content"
        return
      }
      HTTP({
        url:'/submit',
        method:"post",
        data:{
          username: this.name,
          mobile: this.phone,
          msg: this.content,
        }
      }).then( () => {
        this.show = true
      }).catch((e) => {
        console.log('失败', e)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.container{
  min-height: 100vh;
  width: 100%;
  // background-image: url('/img/bg.png');
  // background-size: 100%;
  background-repeat: no-repeat;
  background-color: rgba(46, 46, 46, 1);
  font-family: DFLiJinHeiW8-GB;
  position: relative;
  padding-bottom: 30px;
}

.card {
  background-color: #F6EED7;
  border-radius: 1rem;
  padding: 2.9rem 1.8rem 4.7rem;
  position: relative;
  margin-top: -9rem;
  .title {
    font-size: 3rem;
    font-weight: 600;
    color: #D8273C;
    line-height: 1.5;
  }
  .subTitle{
    font-size: 2rem;
    font-weight: 400;
    color: #B50029;
    line-height: 1.5;
  }
}
.inner{
  background: #EBE3CB;
  border-radius: 1rem;
  padding: 1.8rem 2.5rem;
  margin-top: 2rem;
}
.row{
  display: flex;
  .col{
    flex:1;
    padding: 1rem 0;
  }
}
.borderRight{
  border-right: 1px solid #C4B794;
  margin-right: .6rem;
}
.borderTop{
    border-top: 1px solid #C4B794; 
}
.mt{
  margin-top: 1rem;
}
input,textarea {
  width: 100%;
  border: none;
  background-color: transparent;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.3;
}
textarea {
  resize:none;
  font-size: 2.5rem;
}
input::placeholder,textarea::placeholder{
  font-size: 2rem;
  font-weight: 400;
  color: #C4B794;
  line-height: 1.3;
  background-color: transparent;
}
input:focus, textarea:focus{
  border: none;
  outline: none;
}
input.error::placeholder,textarea.error::placeholder{
  color: #B50029;
}

.btn{
  background-color: #B50029;
  border: none;
  border-radius: 2rem;
  font-size: 2rem;
  font-weight: bold;
  color: #F6EED7;
  flex: .8 !important;
  // letter-spacing: 2rem;
}

</style>