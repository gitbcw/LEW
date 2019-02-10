// pages/logs/logs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    projLv: ['重点项目', '一般项目', '特殊项目'],
    projStatus: ['已立项', '已推荐', '未推荐'],
    projInfo:{},
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (res) {
    console.log(res);
    var temp = JSON.parse(res.data);
    this.setData({
      projInfo:temp
    })
  },
  //跳转修改页面
  change: function () {
    var projStatus = this.data.projInfo.projStatus;
    if (projStatus == '已立项' || projStatus == '已推荐'){
      wx.showModal({
        title: '请注意',
        content: '已立项和已推荐的项目无法修改！',
        showCancel:false
      })
      return 0;
    }
    wx.navigateTo({
      url: '../../changeReq/changeReq',
    })
  },
  //删除项目信息
  /*后续可用status置空&循环展示项目信息来做lookProj***此处暂时使用提示框和隐藏标志实现**/
  del: function () {
      var projStatus = this.data.projInfo.projStatus;
      if (projStatus == '已立项' || projStatus == '已推荐') {
        wx.showModal({
          title: '请注意',
          content: '已立项和已推荐的项目无法删除！',
          showCancel: false
        })
        return 0;
      }else{
        wx.showModal({
          title: '提示',
          content: '请确认是否删除该项目',
          success:res=>{
            if(res.confirm){
              wx.showToast({
                title: '项目已删除',
              })
            }else{
              return 0;
            }
          }
        })
      }
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