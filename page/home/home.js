const app = getApp()
// console.log(app.globalData.name)
// console.log(app.globalData.age)

// 注册一个页面
Page({
  data:{
    name: 'World',
    age: 18,
    list: []
    // movice:[
    //   {id:110, name: 'zhangsan', age: 18},
    //   {id:111, name: 'lisi', age: 19},
    //   {id:112, name: 'wangwu', age: 20},
    //   {id:113, name: 'liming', age: 17}
    // ],
    // counter: 0
  },
  // handleBtnClick(){
    //数据确实发生了改变，但是界面不会刷新
    //this.data.counter++

    //使用setData
  //   this.setData({
  //     counter: this.data.counter +1
  //   })
  // },
  // delBtnClick(){
  //   this.setData({
  //     counter: this.data.counter -1
  //   })
  // },
  handleGetUserInfo(event){
    console.log(event)
  },

  //---------1 监听页面的生命周期函数 ——---------
  //页面被加载出来
  onLoad(){
    console.log('onload')
    const _this = this
    wx.request({
      url: 'http://152.136.185.210:8000/api/n3/recommend',
      // success: (res) =>{
      //   console.log(res)
      //   this.setData({
      //     list : res.data.data.list
      //   })
      // }
     
      //不用箭头函数，就要给this赋值，不然直接用this，是一个找不到的值
      success: function(res){
        _this.setData({
          list : res.data.data.list
        })
      }
    })
  },
  //页面初次渲染完成时
  onReady(){
    console.log('onReady')
  },
  //页面显示出来时
  onShow(){
    console.log('onShow')
  },
  onHide(){
    console.log('onHide')
  },
  //
  onUnload(){
    console.log('onUnload')
  },
  //------  监听其他事件----------
  //监听页面滚动
  onPageScroll(obj){
    console.log(obj)
  },
  //监听页面滚动到底部
  onReachBottom(){
    console.log('滚动到底部')
  },
  //监听用户下拉
  onPullDownRefresh(){
    console.log('下拉刷新')
  }
})