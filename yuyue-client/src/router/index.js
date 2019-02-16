import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/Home'
import Hospital from '@/pages/hospital/Hospital'
import Department from '@/pages/department/Department'
import DepartmentList from '@/pages/department/list/List'

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
    component: Home
  },
  {
    path: '/hospital',
    name: 'Hospital',
    component: Hospital
  },
  {
    path: '/department/list',
    name: 'DepartmentList',
    component: DepartmentList
  },
  {
    path: '/department',
    name: 'Department',
    component: Department
  },
  {
    name: '个人中心/我的预约',
    path: '/me/appointment',
    component: Appointment
  },
  {
    name: '个人中心/我的报告',
    path: '/me/report',
    component: Report
  },
  {
    name: '个人中心/我的候诊',
    path: '/me/waiting',
    component: Waiting
  },
  {
    name: '个人中心/我的就诊卡',
    path: '/me/medical_card',
    component: MedicalCard
  }]
})
