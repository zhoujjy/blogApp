import request from '@/request'


export function getCommentsByArticle(id) {
  return request({
    url: `/comments/${id}`,
    method: 'get'
  })
}

export function publishComment(comment,token) {
  return request({
    // headers: {'Authorization': token},
    url: '/comments',
    method: 'post',
    data: comment
  })
}
