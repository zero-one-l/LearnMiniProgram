// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentindex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemClick(e){
      this.setData({
        currentindex:e.currentTarget.dataset.index
      })
      //发出事件
      const data = {index: this.data.currentindex}
      this.triggerEvent("tabClick", data , {})
    }
  }
})
