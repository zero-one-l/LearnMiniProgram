// page/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: '你好小程序',
    age: 20,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 45,
    movies: ['星际穿越','盗梦空间','大话西游'],
    letters: ['a','b','c']
  },
  onLoad(){
    setInterval(() =>{
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    })
  },
  handleSwitchColor(){
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleSwitchSHow(){
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handleIncrement(){
    this.setData({
      score: this.data.score + 6
    })
  }
})