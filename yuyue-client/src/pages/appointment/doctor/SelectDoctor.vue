<template>
  <div class="select-doctor-page">
    <div class="doctor-list">
        <div class="doctor-item" @click="jump(1)">
            <div class="photo-area">
                <img src="../../../assets/images/doctor/default.png"/>
            </div>
            <div class="base-info-area">
                <strong>牛二{{$route.params.id}} 主任医师</strong>
                <span class="orange">专家门诊</span>
                <span class="arrow">></span>
                <span class="green">30元</span>
            </div>
        </div>
        <div class="doctor-item" @click="jump(2)">
            <div class="photo-area">
                <img src="../../../assets/images/doctor/default.png"/>
            </div>
            <div class="base-info-area">
                <strong>牛二{{$route.params.id}} 主任医师</strong>
                <span class="orange">专家门诊</span>
                <span class="arrow">></span>
                <span class="green">30元</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SelectDoctor',
  data () {
    return { msg: '', thumb: '/static/images/doctor/default.png' }
  },
  methods: {
    jump (id) {
      this.$router.push({ path: '/appointment/select-time/' + id })
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
    .select-doctor-page{
        background: #fff;
        min-height: 100%;
        .doctor-list{
            width: 100%;
            overflow: hidden;
            .doctor-item{
                height: 6rem;
                &:nth-child(1){
                    border-top: none;
                }
                border-top: 1px solid $border-normal-color;
                .photo-area,.base-info-area{
                    display: inline-block;
                    float: left;
                    height: 100%;
                }
                .photo-area{
                    width: 25%;
                    img{
                        width: 60%;
                        margin: 1rem auto;
                        border-radius: 2rem;
                    }
                }
                .base-info-area{
                    width: 70%;
                    >*{
                        text-align: left;
                    }
                    strong{
                        margin: 1.25rem 0 0.5rem 0;
                        display: block;
                    }
                    span{
                        display: inline-block;

                        &.orange, &.green{
                            color: #fff;
                            padding: 0 0.5rem;
                            border-radius: 0.5rem;
                        }
                        &.orange{
                            float: left;
                            background: $color-orange;
                        }
                        &.green{
                            margin-top: -1rem;
                            margin-right: 0.5rem;
                            float: right;
                            background: $color-green;
                        }
                        &.arrow{
                            margin-top: -1rem;
                            display: inline-block;
                            float: right;
                        }
                    }
                }
            }
        }
    }
</style>
