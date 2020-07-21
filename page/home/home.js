Page({
  data:{
    name: 'World',
    age: 18,
    movice:[
      {id:110, name: 'zhangsan', age: 18},
      {id:111, name: 'lisi', age: 19},
      {id:112, name: 'wangwu', age: 20},
      {id:113, name: 'liming', age: 17}
    ],
    counter: 0
  },
  handleBtnClick(){
    //数据确实发生了改变，但是界面不会刷新
    //this.data.counter++

    //使用setData
    this.setData({
      counter: this.data.counter +1
    })
  },
  delBtnClick(){
    this.setData({
      counter: this.data.counter -1
    })
  }
})