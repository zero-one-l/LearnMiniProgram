// page/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '哈哈哈哈'
  },
  handlePushDetail(){
    wx.navigateTo({
      url: '/page/detail/detail',
    })
  }
})