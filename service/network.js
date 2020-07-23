export default function requset(option){
  return new Promise((resolve,reject) =>{
    wx.request({
    url: option.url,
    method: option.method || 'get',
    data: option.data || {},
    success:function(res){
     resolve(res)
    },
    fail:function(err){
     reject(res)
    }
  })
  })
  
}