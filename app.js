//注册小程序示例
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log('小程序初始化完成')
    //获取用户信息
    wx.getUserInfo({
      //属于异步调用,最后才调用
      success: function(res){
        console.log(res)
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    // 1 判断小程序的进入场景
    //console.log(options)

  //   // 2 获取用户信息，并且获取用户信息之后，将用户的信息传递给服务器
  //  wx.getUserInfo({
  //   success: function(res){
  //     console.log(res)
  //   }
  //  })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide,离开后可存活两小时
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  globalData:{
    name: 'why',
    age: 18
  }
})
