// page/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath: ''
  },
  handleChooseAlbum(){
    //系统API，让用户在相册中选择图片（或拍照）
    wx.chooseImage({
     success :(res) => {
      // console.log(res)
      //取出路径
      const path = res.tempFilePaths[0]
      this.setData({
        imagePath: path
      })
     }
    })
  },
  handleImageLoad(){
    console.log('图片加载完成')
  }
 
})