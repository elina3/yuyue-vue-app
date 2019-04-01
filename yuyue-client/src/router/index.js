import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/Home'
import Hospital from '@/pages/hospital/Hospital'
import Department from '@/pages/department/Department'
import DepartmentList from '@/pages/department/list/List'
import DepartmentDetail from '@/pages/department/detail/Detail'
import DoctorList from '@/pages/doctor/list/List'
import DoctorSelectDepartment from '@/pages/doctor/departments/List'
import DoctorDetail from '@/pages/doctor/detail/Detail'

import SelectDepartment from '@/pages/appointment/department/SelectDepartment'
import SelectDoctor from '@/pages/appointment/doctor/SelectDoctor'
import SelectTime from '@/pages/appointment/time/SelectTime'
import SureAppointment from '@/pages/appointment/sure/SureAppointment'
import AppointmentDetail from '@/pages/appointment/detail/Detail'

import MyAppointmentList from '@/pages/appointment/my_list/List'
import Report from '@/pages/me/report/Report'
import Waiting from '@/pages/me/waiting/Waiting'
import MedicalCard from '@/pages/me/medical_card/MedicalCard'
import BindCard from '@/pages/me/bind_card/BindCard'

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
    path: '/doctor/list/:id',
    name: 'DoctorList',
    component: DoctorList,
    meta: {
      title: '专家介绍'
    }
  },
  {
    path: '/doctor/select_department',
    name: 'DoctorSelectDepartment',
    component: DoctorSelectDepartment,
    meta: {
      title: '专家科室选择'
    }
  },
  {
    path: '/doctor/detail/:id',
    name: 'DoctorDetail',
    component: DoctorDetail,
    meta: {
      title: '专家详情'
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
    name: '预约/选科室',
    path: '/appointment/select-department',
    component: SelectDepartment,
    meta: {
      title: '选科室'
    }
  },
  {
    name: '预约/选医生',
    path: '/appointment/select-doctor/:id',
    component: SelectDoctor,
    meta: {
      title: '选医生'
    }
  },
  {
    name: '预约/选时间',
    path: '/appointment/select-time/:id',
    component: SelectTime,
    meta: {
      title: '预约'
    }
  },
  {
    name: '预约/确认',
    path: '/appointment/sure',
    component: SureAppointment,
    meta: {
      title: '确认预约'
    }
  },
  {
    name: '预约/详情',
    path: '/appointment/detail/:id',
    component: AppointmentDetail,
    meta: {
      title: '预约详情'
    }
  },
  {
    name: '个人中心/我的预约',
    path: '/me/appointment',
    component: MyAppointmentList,
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
  },
  {
    name: '个人中心/绑定就诊卡',
    path: '/me/bind_card',
    component: BindCard,
    meta: {
      title: '绑定就诊卡'
    }
  }]
})
