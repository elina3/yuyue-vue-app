<template>
  <div class="doctor-detail-page">
      <div class="doctor-title-area">
          <div class="left">
              <img src="../../../assets/images/doctor/default2.jpg"/>
          </div>
          <div class="right">
              <div class="doctor-info">
                <strong>牛二</strong>
                <p>主任医师 心外科</p>
                <span class="orange">专家门诊</span> <span class="green">30元</span>

                <wv-button class="yy-default-button" type="primary" :plain='true' :mini='true'>预约</wv-button>
              </div>
          </div>
      </div>
      <div class="doctor-detail-item">
          <label></label>
          <strong>擅长{{$route.params.id}}</strong>
          <p>
              诊疗特色为低位直肠癌保肛术，熟练掌握普通外科疾病，尤其是胃肠道及肛门良、恶性疾病的诊断和治疗。擅长结直肠肿瘤（结肠癌、直肠癌、低位直肠癌、肛管癌、小肠间质瘤、结直肠间质瘤）、胃癌（胃间质瘤）、食管癌、胰腺癌、腹壁疝、炎症性肠病（溃疡性结肠炎、克罗恩氏病）、便秘、肠瘘的外科治疗，肛门良性病（痔疮、肛裂、肛周脓肿、肛瘘）等手术治疗和微创治疗
          </p>
      </div>

      <div class="doctor-detail-item">
          <label></label>
          <strong>简介{{$route.params.id}}</strong>
          <p>
              牛二，外科学博士，中山大学附属第六医院副研究员，医学百事通志愿者医师，外科学硕士生导师，美国营养学会 (ASN)会员，美国微生物学会 (ASM)会员，“广东省医学会肠外肠内营养学分会青年委员会”委员，中山大学“百人计划”引进人才。为Ann Surg，Am J Clin Nutr, Infect Immun, Aliment Pharmacol Ther等多个SCI杂志审稿人。
          </p>
      </div>
  </div>
</template>
<script>

export default {
  name: 'DoctorDetail',
  data () {
    return { msg: '', thumb: '/static/images/department/default.png' }
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
            background: url('../../../assets/images/doctor/background.jpeg') no-repeat top left;
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
                        border-radius: 2rem;
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
    }
</style>
