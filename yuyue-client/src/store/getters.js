// 推荐： 一般会把state里面的数据做一层包装，取数据的时候从getter里面取
export const token = state => state.token

export const userInfo = state => state.userInfo

export const loginStatus = state => state.loginStatus
