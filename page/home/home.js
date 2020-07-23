// page/home/home.js
Page({
  handleShowToast(){
    wx.showToast({
      title: '加载中...',
      //停留时间
      duration: 3000,
      icon: 'loading',
      mask: true
    })
  },
  handleShowModal(){
    wx.showModal({
      title: '我是标题',
      content: '我是内容，哈哈哈哈',
      //不要取消按钮
      //showCancel: false,
      //将取消改成别的文字
     //cancelText: '退出',
      success(res){
        if(res.cancel){
          console.log('用户点击了取消按钮')
        }
        if(res.confirm){
          console.log('用户点击了确定按钮')
        }
      }
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: '加载ing',
      mask: true
    })

    setTimeout(()=>{
      //必须手动调用hideLoading才会让loading消失
      wx.hideLoading()
    },1000)
  },
  handleShowAction(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      itemColor: 'red',
      success:function(res){
        console.log(res)
      }
    })
  },
  onShareAppMessage:function(options){
    return {
      title: '你好啊',
      path: '/page/about/about.wxml',
      imageUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595477780680&di=e88102d8e4fcc36326b34b9a1ff24cff&imgtype=0&src=http%3A%2F%2Fa1.att.hudong.com%2F62%2F02%2F01300542526392139955025309984.jpg'
    }
  }
})