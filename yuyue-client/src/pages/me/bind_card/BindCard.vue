<template>
  <div class="sure-appointment-page">
    <span class="page-title">添加就诊卡:</span>
    <wv-group class="appointment-info">
      <wv-input label="卡类型" placeholder="请输入内容"  v-model="card.type"></wv-input>
      <wv-input label="卡号" placeholder="请输入内容"  v-model="card.number"></wv-input>
      <wv-input label="姓名" placeholder="请输入内容" v-model="card.name"></wv-input>
      <wv-input label="性别" placeholder="请输入内容"  v-model="card.sex"></wv-input>
      <wv-input label="身份证号" placeholder="请输入内容"  v-model="card.IDCard"></wv-input>
      <wv-input label="联系电话" placeholder="请输入内容" v-model="card.mobile"></wv-input>
    </wv-group>

    <div class="sure">
      <wv-button class="" type="primary" @click="bindCard()">绑定就诊卡</wv-button>
    </div>
  </div>
</template>

<script>
import { Dialog, Toast } from 'we-vue'
export default {
  name: 'MedicalCard',
  data () {
    return { msg: '',
      card: {
        type: '医保卡',
        number: '1938629-139',
        name: '王可云',
        sex: '女',
        IDCard: '119236198902146823',
        mobile: '13217670989'
      },
      noCard: false
    }
  },
  methods: {
    bindCard () {
      Dialog.confirm({
        title: '提示信息',
        message: '您确定要绑定该卡吗？',
        skin: 'ios',
        showCancelBtn: true
      }).then(action => {
        Toast('success')
        this.$router.push({ path: '/me/medical_card' })
      })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../../assets/css/define';
@import '../../../assets/css/common';

.appointment-info .weui-cells{
  margin-top: 0;
  p{
    padding: 1rem;
    text-align: left;
  }
  .weui-cell{
    padding: 1rem;
    .weui-cell__hd .weui-label{
      text-align: left;
      color: #333;
    }

    .weui-cell__bd input.weui-input{
      color: $color-primary-blue;
    }
  }
}
</style>
<style lang="scss" scoped>
 .sure-appointment-page{
        min-height: 100%;
        .page-title{
          display: block;
          padding: 0.5rem 1rem;
          text-align: left;
        }
        .my-card{
          margin-top: 0;
        }
        .appointment-info .weui-cells{
          margin-top: 0;
        }
        .sure{
          overflow: hidden;
          padding: 0.5rem 1rem;
        }
    }
</style>
