<template>
  <div class="department-detail-page">
      <div class="department-title">
          <label></label>
          <strong>心血管内科{{$route.params.id}}</strong>

          <wv-button class="yy-default-button" type="primary" :plain='true' :mini='true' @click="jump()">专家</wv-button>
      </div>
      <div class="detail">
          <div class="picture-area">
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=993242006,2591297731&fm=26&gp=0.jpg"/>
          </div>
          <p>
为长宁区重点学科，拥有整齐的学科梯队，目前医生共37人，其中主任医师4名，副主任医师7名，主治医师14名；博士4名，硕士16名。作为长宁区“十大名科”之一，心内科诊治的疾病涵盖了心血管的主要病种，已经建立了急性心肌梗死救治绿色通道，正在建设胸痛中心；有心脏专用DSA机2台，年完成心脏经皮冠状动脉介入手术900余例；开展心脏起搏器植入术（包括埋藏式电除颤仪ICD及心脏同步化治疗CRT的植入）以及快速性心律失常射频消融术等。参加美国心脏协会和中华医学会心血管病学分会合作开展的“中国心血管疾病医疗质量改善项目（CCC）”，2015年度、2016年度先后2次获得急性冠脉综合征医疗质量金奖，2017年获得急性冠脉综合征医疗质量银奖。年门诊量达19万人次，年出院近3000人次。 科室特色 冠心病的治疗：常规开展冠心病的药物治疗及冠脉介入诊疗，包括冠状动脉造影术、冠脉内支架植入术、冠脉斑块旋磨术，以及血管内超声（IVUS）、血流储备分数(FFR)、主动脉内球囊反搏（IABP）等诊疗技术。是上海首批加入“中国急性心肌梗死救治项目”的医院之一。 心律失常治疗：开展缓慢型心律失常如病态窦房结综合冠心病的药物治疗及冠脉介入诊疗，包括冠状动脉造影术、冠脉内支架植入术、冠脉斑块旋磨术，以及血管内超声（IVUS）、血流储备分数(FFR)、主动脉内球囊反搏（IABP）等诊疗技术。是上海首批加入“中国急性心肌梗死救治项目”的医院之一。 心律失常治疗：开展缓慢型心律失常如病态窦房结综合征、II度及以上房室传导阻滞等的起搏治疗，目前已成功开展His起搏、左束支起搏等生理性起搏技术；针对慢性心衰患者的器械治疗，包括埋藏式心脏除颤器( ICD）及心脏再同步化治疗（CRTP/CRTD）；针对心肌梗死后猝死ICD的一级和二级预防；针对快速型心律失常，如阵发性室上性心动过速、室早、室性心动过速等开展射频消融治疗；针对心房颤动患者，具有心脏三维标测系统（Carto），开展射频消融、冷冻消融、左心耳封堵术，以及药物抗凝治疗包括华法林和新型口服抗凝药（NOAC）。开设起搏器程控随访、房颤、心律失常和抗栓专病门诊
          </p>
      </div>
  </div>
</template>
<script>

export default {
  name: 'DepartmentDetail',
  data () {
    return { msg: '', thumb: '/static/images/department/default.png' }
  },
  methods: {
    jump () {
      this.$router.push({ path: '/doctor/list?id=12' })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../assets/css/define';
    .department-detail-page{
        background: #fff;
        min-height: 100%;
        .department-title{
            margin: 1rem auto;
            padding: 0 0.5rem;
            height: 2rem;
            label{
                display: inline-block;
                float: left;
                width: 0.5rem;
                height: 2rem;
                background: $color-primary-blue;
            }
            strong{
                display: inline-block;
                float: left;
                line-height: 2rem;
                margin-left: 0.5rem;
            }

            .yy-default-button{
                width: 4rem;
                float: right;
            }
        }
        .detail{
            .picture-area{
                margin: 0 0.5rem;

                img{
                    width: 100%;
                    height: auto;
                    border-radius: 1rem;
                }
            }
            p{
                padding: 0.5rem;
                text-align: left;
                text-indent: 1rem;
            }
        }
    }
</style>
