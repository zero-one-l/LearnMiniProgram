// page/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: ''
  },
  handleInput(event){
    console.log('用户输入内容', event)
    this.setData({
      message: event.detail.value
    })
  },
  handleFocus(event){
    console.log('input获取焦点', event)
  },
  handleBlur(event){
    console.log('input失去焦点', event)
  }
})