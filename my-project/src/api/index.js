import { get, post } from '../utils/request'
import {APP_ID, APP_SECRET} from '@/utils/const'

const API_URL = 'https://test.youbaobao.xyz:18081'

export function getHomeData(params) {
  return get(`${API_URL}/book/home/v2`, params)
}

export function getOpenId(code) {
  const params = {
    code,
    appId: APP_ID,
    secret: APP_SECRET
  }
  return get(`${API_URL}/openId/get`, params)
}

export function register(params) {
  return post(`${API_URL}/user/register`, params)
}
