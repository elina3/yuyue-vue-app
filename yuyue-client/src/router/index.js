import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/Home'
import Hospital from '@/pages/hospital/Hospital'
import Department from '@/pages/department/Department'
import DepartmentList from '@/pages/department/list/List'
import DepartmentDetail from '@/pages/department/detail/Detail'

import Appointment from '@/pages/me/appointment/Appointment'
import Report from '@/pages/me/report/Report'
import Waiting from '@/pages/me/waiting/Waiting'
import MedicalCard from '@/pages/me/medical_card/MedicalCard'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/hello_world',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '医院服务'
    }
  },
  {
    path: '/hospital',
    name: 'Hospital',
    component: Hospital,
    meta: {
      title: '医院介绍'
    }
  },
  {
    path: '/department/list',
    name: 'DepartmentList',
    component: DepartmentList,
    meta: {
      title: '科室列表'
    }
  },
  {
    path: '/department/detail/:id',
    name: 'DepartmentDetail',
    component: DepartmentDetail,
    meta: {
      title: '科室详情'
    }
  },
  {
    path: '/department',
    name: 'Department',
    component: Department,
    meta: {
      title: '科室矩阵'
    }
  },
  {
    name: '个人中心/我的预约',
    path: '/me/appointment',
    component: Appointment,
    meta: {
      title: '我的预约'
    }
  },
  {
    name: '个人中心/我的报告',
    path: '/me/report',
    component: Report,
    meta: {
      title: '我的报告'
    }
  },
  {
    name: '个人中心/我的候诊',
    path: '/me/waiting',
    component: Waiting,
    meta: {
      title: '我的候诊'
    }
  },
  {
    name: '个人中心/我的就诊卡',
    path: '/me/medical_card',
    component: MedicalCard,
    meta: {
      title: '我的就诊卡'
    }
  }]
})
