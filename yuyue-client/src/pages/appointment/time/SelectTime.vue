<template>
  <div class="doctor-detail-page">
      <div class="doctor-title-area">
          <div class="left">
              <img src="../../../assets/images/doctor/default2.jpg"/>
          </div>
          <div class="right">
              <div class="doctor-info">
                <strong>牛二</strong>
                <p>主任医师</p>
                <span class="orange">专家门诊</span> <span class="green">30元</span>

                <wv-button class="yy-default-button" type="primary" :plain='true' :mini='true'>医生简介</wv-button>
              </div>
          </div>
      </div>
      <div class="date-select">
          <span @click="openPicker()">{{pickerValue.Format('yyyy-MM-dd')}}</span>
          <div>

          </div>
           <wv-datetime-picker
                ref="picker"
                type="date"
                v-model="pickerValue">
            </wv-datetime-picker>
      </div>
      <wv-panel class="select-time-range" title="请选择就诊时段">
        <wv-cell title="08:00-09:30" is-link to="/appointment/sure"></wv-cell>
        <wv-cell title="09:30-10:00" is-link to="/appointment/sure"></wv-cell>
      </wv-panel>

  </div>
</template>
<script>

export default {
  name: 'DoctorDetail',
  data () {
    return { msg: '', thumb: '/static/images/department/default.png', pickerValue: new Date() }
  },
  methods: {
    openPicker () {
      this.$refs.picker.open()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../../assets/css/common';
</style>
<style lang="scss" scoped>
@import '../../../assets/css/define';
    .doctor-detail-page{
        background: #fff;
        min-height: 100%;
        .doctor-title-area{
            padding: 0 0.5rem;
            background: url('/static/images/doctor/background.jpeg') no-repeat top left;
            background-size: cover;
            width: 100%;
            height: 10rem;

            .left, .right{
                display: inline-block;
                float: left;
                height: 100%;
            }

            .left{
                width: 25%;
                img{
                    margin: 3rem auto;
                    display: block;
                    width: 60%;
                    height: auto;
                    border: 1px solid #fff;
                    border-radius: 2rem;
                }
            }
            .right{
                width: 75%;

                .doctor-info{
                    margin-top: 2rem;
                    padding-right: 1rem;
                    overflow:hidden;
                    >span, strong, p{
                        text-align: left;
                        color: #fff;
                    }
                    >strong{
                        display: block;
                        font-size: 1.25rem;
                    }
                    >span{
                        display: inline-block;
                        float: left;
                        border-radius: 0.5rem;
                        padding: 0 0.5rem;
                        font-weight: bold;
                    }
                    p{
                        line-height: 2rem;
                        font-weight: bold;
                    }
                    span.orange{
                        background: $color-orange;
                    }
                    span.green{
                        background: $color-green;
                        margin-left: 1rem;
                    }

                    .yy-default-button{
                        width: 4rem;
                        float: right;
                    }
                }
            }
        }
        .doctor-detail-item{
            overflow: hidden;
            margin: 1rem auto;
            padding: 0 0.5rem;
            label{
                display: inline-block;
                float: left;
                width: 0.25rem;
                height: 1.5rem;
                background: $color-primary-blue;
            }
            strong{
                display: inline-block;
                float: left;
                line-height: 1.5rem;
                margin-left: 0.5rem;
            }

            p{
                display: block;
                float: left;
                padding: 0.5rem;
                text-align: left;
                text-indent: 1rem;
            }
        }
        .select-time-range{
            padding: 0 0.5rem;
        }
    }
</style>
