// page/home/home.js
import request from '../../service/network.js'

Page({
  data: {

  },
  onLoad: function (options) {
    //----------1 原生的方式发送网络请求--------
    //发送网络请求
  //   wx.request({
  //     url: 'http://152.136.185.210:8000/api/n3/home/data',
  //     //默认情况下是GET请求
  //     //method: 'post',如果是post请求，携带的参数，必须写在data里面。
  //     data:{
  //       type:'sell',
  //       page:1
  //     },
  //     success:function(res){
  //       console.log(res)
  //     }
  //   })

  //------------2 使用封装的request发送网络请求-----------
  //Promise可以防止回调地狱
  request({
    url: 'http://152.136.185.210:8000/api/n3/home/data',
    data:{
            type:'sell',
            page:1
          },
  }).then(res =>{
    console.log(res)
  }).catch(err =>{
    console.log(err)
  })
   }

 
})