<template>
  <div class="sure-appointment-page">
    <span class="page-title">添加就诊卡:</span>
    <wv-group class="appointment-info">
      <div class="yy-select-item">
        <div class="yy-select-item-left">
          <label>就诊卡类型</label>
        </div>
        <div class="yy-select-item-right">
          <select v-model="card.type">
            <option value="">无</option>
            <option value="health_care">医保卡</option>
            <option value="medical">诊疗卡</option>
          </select>
        </div>
      </div>
      <wv-input label="卡号" placeholder="请输入内容"  v-model="card.number"></wv-input>
      <wv-input label="姓名" placeholder="请输入内容" v-model="card.name"></wv-input>
      <div class="yy-select-item has-top">
        <div class="yy-select-item-left">
          <label>性别</label>
        </div>
        <div class="yy-select-item-right">
          <select v-model="card.sex">
            <option value="male">男</option>
            <option value="female">女</option>
          </select>
        </div>
      </div>
      <wv-input label="身份证号" placeholder="请输入内容"  v-model="card.IDCard"></wv-input>
      <wv-input label="联系电话" placeholder="请输入内容" v-model="card.mobile"></wv-input>
    </wv-group>

    <div v-show="!hideButton" class="sure">
      <wv-button  class="" type="primary" @click="bindCard()">绑定就诊卡</wv-button>
    </div>
  </div>
</template>

<script>
import config from '@/common/config'
import { bindCard } from '@/services/member'
import { mapMutations, mapGetters } from 'vuex'
import { Dialog, Toast } from 'we-vue'
export default {
  name: 'MedicalCard',
  data () {
    return {
      wechatInfo: {},
      memberInfo: {},
      card: {
        type: '',
        sex: 'female'
      },
      noCard: true,
      hideButton: true
    }
  },
  methods: {
    ...mapMutations({
      setMemberInfo: 'SET_MEMBERINFO'
    }),
    isPhoneAvailable: function (phone) {
      let regex = /^[1][3,4,5,7,8][0-9]{9}$/
      if (!regex.test(phone)) {
        return false
      } else {
        return true
      }
    },
    isCardNo: function (card) {
      // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
      var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
      return reg.test(card)
    },
    bindCard () {
      if (!this.$store.state.wechatInfo) {
        Toast('请用微信打开页面')
        return
      }
      if (!this.card.name) {
        Toast('请填写姓名')
        return
      }
      if (!this.card.IDCard) {
        Toast('请填写身份证号')
        return
      }
      if (!this.isCardNo(this.card.IDCard)) {
        Toast('身份证号不正确')
        return
      }
      if (!this.card.sex) {
        Toast('请选择性别')
        return
      }
      if (!this.card.mobile) {
        Toast('请填写手机号')
        return
      }
      if (!this.isPhoneAvailable(this.card.mobile)) {
        Toast('手机号格式不正确')
        return
      }
      if (this.card.type && !this.card.number) {
        Toast('选择就诊卡之后必须填写就诊卡号')
        return
      }
      Dialog.confirm({
        title: '提示信息',
        message: '您确定要绑定该卡吗？',
        skin: 'ios',
        showCancelBtn: true
      }).then(action => {
        this.registerMemberAndBindCard()
      }, cancel => {
        console.log(cancel)
      })
    },
    registerMemberAndBindCard () {
      let obj = {
        nickname: this.card.name,
        sex: this.card.sex === '女' ? 'female' : 'male',
        IDCard: this.card.IDCard,
        mobile_phone: this.card.mobile,
        card_type: this.card.type,
        card_number: this.card.card_number
      }
      alert('obj:' + JSON.stringify(obj))
      bindCard({
        open_id: this.$store.state.wechatInfo.openid,
        wechat_info: this.$store.state.wechatInfo,
        member_info: obj}).then(res => {
        if (res.err) {
          Toast(res.err.zh_message)
          return
        }

        this.setMemberInfo(res.member)
        alert(JSON.stringify(this.$store.state.memberInfo))
        Toast('绑卡成功！')
        this.$router.push({ path: '/me/medical_card' })
      })
    }
  },
  computed: {
    ...mapGetters(['memberInfo']),
    getMemberInfo () {
      return this.$store.state.memberInfo
    }
  },
  watch: {
    getMemberInfo (val) {
      if (!val) {
        this.noCard = true
      } else if (!val.IDCard) {
        this.noCard = true
      } else {
        this.noCard = false
        this.card = {
          name: val.nickname,
          number: val.card_number,
          type: config.card_type[val.card_type],
          sex: config[val.sex],
          IDCard: val.IDCard,
          mobile: val.mobile_phone
        }
      }
      this.hideButton = false
    }
  },
  mounted () {
    alert('bindcard:' + JSON.stringify(this.$store.state.wechatInfo))
    this.wechatInfo = this.$store.state.wechatInfo
    if (!this.$store.state.wechatInfo || !this.$store.state.wechatInfo.openid) {
      alert('请用微信打开页面')
      return
    }
    var memberInfo = this.$store.state.memberInfo
    if (!memberInfo) {
      this.noCard = true
    } else if (!memberInfo.IDCard) {
      this.noCard = true
    } else {
      this.noCard = false
      this.card.name = memberInfo.nickname
      this.card.number = memberInfo.card_number
      this.card.type = config[memberInfo.card_type]
      this.card.sex = config[memberInfo.sex]
      this.card.IDCard = memberInfo.IDCard
      this.card.mobile = memberInfo.mobile_phone
    }
    this.hideButton = false
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
.yy-select-item{
  display: flex;
  padding: 1rem;
  align-items: center;
  position: relative;

  &.has-top{
    padding-left: 0;
    margin-left: 1rem;
    border-top: 0.01rem solid #f2f2f2;
  }

  .yy-select-item-left{
    label{
      display: block;
      width: 100px;
      text-align: left;
    }
  }
  .yy-select-item-right{
    flex: 1;
    select{
      width: 100%;
      outline: none;
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
