//index.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    lessonsList: [
      {
        url: 'https://lionmusician.oss-cn-hangzhou.aliyuncs.com/simpleryo/%E7%9F%A2%E9%87%8F%E6%99%BA%E8%83%BD%E5%AF%B9%E8%B1%A15%402x.png',
        name: 'Fitness & Swimming'
      },
      {
        url: 'https://lionmusician.oss-cn-hangzhou.aliyuncs.com/simpleryo/1d71f4d2b4170e959e567235975b78a0014625bc293bf-P7Mvha_fw658%402x.png',
        name:'Private Yoga'
      },
      {
        url: 'https://lionmusician.oss-cn-hangzhou.aliyuncs.com/simpleryo/%E7%9F%A2%E9%87%8F%E6%99%BA%E8%83%BD%E5%AF%B9%E8%B1%A17%402x.png',
        name:'Bowling'
      },
      {
        url: 'https://lionmusician.oss-cn-hangzhou.aliyuncs.com/simpleryo/%E7%9F%A2%E9%87%8F%E6%99%BA%E8%83%BD%E5%AF%B9%E8%B1%A19%402x.png',
        name:'Puzzle Game'
      },
      {
        url: 'https://lionmusician.oss-cn-hangzhou.aliyuncs.com/simpleryo/%E7%9F%A2%E9%87%8F%E6%99%BA%E8%83%BD%E5%AF%B9%E8%B1%A16%402x.png',
        name: 'Chinese For Children'
      },
      {
        url: 'https://lionmusician.oss-cn-hangzhou.aliyuncs.com/simpleryo/%E7%9F%A2%E9%87%8F%E6%99%BA%E8%83%BD%E5%AF%B9%E8%B1%A18%402x.png',
        name: 'Management Science'
      },
      {
        url: 'https://lionmusician.oss-cn-hangzhou.aliyuncs.com/simpleryo/%E7%9F%A2%E9%87%8F%E6%99%BA%E8%83%BD%E5%AF%B9%E8%B1%A14%402x.png',
        name: 'IT Actual Combat'
      },
      {
        url: 'https://lionmusician.oss-cn-hangzhou.aliyuncs.com/simpleryo/%E7%9F%A2%E9%87%8F%E6%99%BA%E8%83%BD%E5%AF%B9%E8%B1%A110%402x.png',
        name:'Speech Skills'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})