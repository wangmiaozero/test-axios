import $http from '@/api/index';
export const getBanner  = () =>{ return $http.get('/txm/txmhome/get_banner_list')}
export const getData = (data) => {return $http.post(`http://txm_home_test.xindianmao.com/txm/txmhome/test`,data)}

