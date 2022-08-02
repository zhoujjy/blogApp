import request from '@/request'

export function login(account, password) {
  const data = {
    account,
    password
  }
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function logout(token) {
  return request({
    // headers: {'token': token},
    url: '/user/logout',
    method: 'get'
  })
}

export function getUserInfo(token) {
  return request({
    // headers: {'token': token},
    url: '/user/currentUser',
    method: 'get'
  })
}

export function register(account, nickname, password,avatar) {
  const data = {
    account,
    nickname,
    password,
    avatar
  }
  return request({
    url: '/user/register',
    method: 'post',
    data
  })
}
