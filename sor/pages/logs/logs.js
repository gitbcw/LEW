// pages/logs/logs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    projLv: ['重点项目', '一般项目', '特殊项目'],
    projStatus: ['已立项', '已推荐', '未推荐'],
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title:options.data
    })
  },
  //跳转修改页面
  change:function(){
    wx.navigateTo({
      url: '../changeReq/changeReq',
    })
  },
  //删除项目信息
  del:function(){
    
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