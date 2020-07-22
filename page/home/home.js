// page/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter: 0
  },
  handleIncrement(){
    this.setData({
      counter: this.data.counter +1
    })
  },
  handleTabControlClick(event){
    console.log(event)
  },
  handleIncrementCpn(){
    //修改my-sel中的counter
    //获取组件对象
    const my_sel = this.selectComponent('#sel-id')
    //通过setData修改组件中的数据（不合理）
  //  my_sel.setData({
  //    counter: my_sel.data.counter + 20
  //  })

   //通过方法进行修改
   my_sel.incrementCounter(10)
   }
  
})