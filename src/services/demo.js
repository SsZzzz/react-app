import request from './request';

export function postApi(data) {
  return request.post('/api/post', { data });
}
