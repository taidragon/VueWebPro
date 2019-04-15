import request from '@/utils/request'
export const login = data => request({ url: '/sys/login/check', method: 'post', data })
