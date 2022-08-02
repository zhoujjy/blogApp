import request from '@/request'

export function upload(formdata) {
  return request({
    headers: {'Content-Type': 'multipart/form-data'},
    url: '/articles/upload',
    method: 'post',
    data: formdata
  })
}
