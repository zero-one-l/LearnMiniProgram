import request from './network.js'

export function getMultiData(options){
  return request({
    url: 'http://152.136.185.210:8000/api/n3/home/multidata'
  })
}

export function getGoodsData(type, page){
  return request({
    url: 'http://152.136.185.210:8000/api/n3/home/data',
    data:{
      type,
      page
    }
  })
}