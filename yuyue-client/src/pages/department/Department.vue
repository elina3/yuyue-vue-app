<template>
  <div class="department-page">
    <div class="yy-grid">
      <wv-grid>
        <wv-grid-item :key="item.id" v-for="item in departments">
          <img :src="item.thumb" >
          <span>{{item.name}}</span>
        </wv-grid-item>
      </wv-grid>
    </div>
  </div>
</template>

<script>
import { getDepartments } from '@/services/department'
import config from '@/common/config'

export default {
  name: 'Department',
  data () {
    return {
      departments: [],
      thumb: '/client/static/images/department/default.png'
    }
  },
  mounted () {
    this.loadDepartments()
  },
  methods: {
    loadDepartments () {
      getDepartments({}).then(res => {
        console.log('load')
        console.log(res)
        if (res.departments) {
          this.departments = res.departments.map(item => {
            return {
              id: item._id,
              name: item.name,
              thumb: item.title_pic ? config.imageUrl + item.title_pic : this.thumb
            }
          })
        }
      },
      err => {
        console.log('err:', err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.department-page{
  .yy-grid {
    border: none;
    margin: 0 auto;

    .weui-grids {
      border: none !important;
      background: #fff;
      margin: 0 auto;

      .weui-grid {
        img {
          display: block;
          margin: 0.5rem auto;
          margin-top: 1rem;
          width: 4rem;
          height: 4rem;
        }

        span {
          margin-bottom: 1rem;
          display: block;
        }
      }
    }
  }
}
</style>
