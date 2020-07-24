// page/home/home.js
import {
  getMultiData,
  getGoodsData
} from '../../service/home.js'

const TOP_DISTANCE = 1000;
const types = ['pop','new','sell']

Page({
  data: {
    banner: [],
    recommends: [],
    title:['流行','新款','精选'],
    goods:{
      'pop': {page: 1, list: []},
      'new': {page: 1, list: []},
      'sell': {page: 1, list: []}
      },
      currentType: 'pop',
      showBackTop:false,
      isTabFixed: false,
      tabScrollTop: 0
    },
  onLoad: function (options) {
    //1 请求轮播图以及推荐数据
   this._getMultidata()

   //2 请求商品数据
   this._getGoodsData('pop')
   this._getGoodsData('new')
   this._getGoodsData('sell')
  },
  //--------------------网络请求的函数-----------------
  _getMultidata(){
    getMultiData().then(res => {
      //取出轮播图和推荐的数据
      const banner = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      this.setData({
        banner: banner,
        recommends: recommends
      })
     })
  },
  _getGoodsData(type){
    // 1 获取页码
    const page = this.data.goods[type].page;
    // 2 发送网络请求
    getGoodsData(type,page).then(res =>{
      //console.log(res)
     // 2.1 取出数据
     const list = res.data.data.list;
  
      // 2.将数据临时获取
      const goods = this.data.goods;
      goods[type].list.push(...list)
      goods[type].page += 1;

      // 3.最新的goods设置到goods中
      this.setData({
        goods: goods
      })
    })
  },
  //--------------------事件监听的函数------------------------
  tabClick(event){
    //取出index
    const index = event.detail.index;
    this.setData({
      currentType: types[index]
    })
  },
  handleImageLoad(){
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
      // console.log(rect)
      this.data.tabScrollTop = rect.top
    }).exec()
  },
  onReachBottom(){
    //上拉加载滚动
    this._getGoodsData(this.data.currentType)
  },
  onPageScroll(options){
    const scrollTop = options.scrollTop;
     //修改showBackTop
    const flag = scrollTop >=TOP_DISTANCE;
    if(flag != this.data.showBackTop){
      this.setData({
        showBackTop: flag
      })
    }

    //修改isTabFixed
    const flag2 = scrollTop >= this.data.tabScrollTop;
    if(flag2 != this.data.isTabFixed){
      this.setData({
        isTabFixed: flag2
      })
    }
  }

})