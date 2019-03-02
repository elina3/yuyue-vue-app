<template>
  <div class="sure-appointment-page">
    <span v-show="!noCard"  class="page-title">我的就诊卡:</span>
    <wv-group v-show="!noCard" class="appointment-info">
      <wv-input label="卡类型" placeholder="请输入内容" :readonly="true" v-model="card.type"></wv-input>
      <wv-input label="卡号" placeholder="请输入内容" :readonly="true" v-model="card.number"></wv-input>
      <wv-input label="姓名" placeholder="请输入内容" :readonly="true" v-model="card.name"></wv-input>
      <wv-input label="性别" placeholder="请输入内容" :readonly="true" v-model="card.sex"></wv-input>
      <wv-input label="身份证号" placeholder="请输入内容" :readonly="true" v-model="card.IDCard"></wv-input>
      <wv-input label="联系电话" placeholder="请输入内容" :readonly="true" v-model="card.mobile"></wv-input>
    </wv-group>

    <div v-show="!noCard && !hideButton" class="sure">
      <wv-button class="" type="primary" @click="unbind()">解绑就诊卡</wv-button>
    </div>

    <span v-show="noCard" class="page-title">提示:</span>
    <wv-group  v-show="noCard" class="appointment-info">
      <p>你还没有绑定就诊卡，请前往绑定</p>
      <!-- <wv-input label=""  :readonly="true"></wv-input> -->
    </wv-group>
    <div v-show="noCard && !hideButton" class="sure">
      <wv-button class="" type="primary" @click="bindCard()">绑定就诊卡</wv-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { unbindCard } from '@/services/member'
import config from '@/common/config'
import { Dialog, Toast } from 'we-vue'
export default {
  name: 'MedicalCard',
  data () {
    return { msg: '',
      card: {},
      noCard: true,
      hideButton: true
    }
  },
  methods: {
    ...mapMutations({
      setMemberInfo: 'SET_MEMBERINFO'
    }),
    bindCard () {
      this.$router.push({ path: '/me/bind_card' })
    },
    unbind () {
      Dialog.confirm({
        title: '提示信息',
        message: '您确定要解除该卡的绑定吗？',
        skin: 'ios',
        showCancelBtn: true
      }).then(action => {
        // 确定后要执行的内容r
        alert('unbind')
        alert(this.$store.state.wechatInfo)
        alert(this.$store.state.wechatInfo.openid)
        unbindCard({open_id: this.$store.state.wechatInfo.openid}).then(res => {
          if (res.err) {
            Toast(res.err.zh_message)
            return
          }
          alert('res.member:' + JSON.stringify(res.member))
          if (res.member) {
            this.setMemberInfo(res.member)
            this.noCard = true
            Toast('解绑成功！')
          }
        })
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
    // if (!this.$store.state.memberInfo) {
    //   this.noCard = true
    // } else if (!this.$store.state.memberInfo.IDCard) {
    //   this.noCard = true
    // } else {
    //   this.noCard = false
    //   this.card = {
    //     name: this.$store.state.memberInfo.nickname,
    //     number: this.$store.state.memberInfo.card_number,
    //     type: config.card_type[this.$store.state.memberInfo.card_type],
    //     sex: config[this.$store.state.memberInfo.sex],
    //     IDCard: config[this.$store.state.memberInfo.sex],
    //     mobile: this.$store.state.memberInfo.mobile_phone
    //   }
    // }
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
