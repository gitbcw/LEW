// pages/application/reqComplete/addAccessory/addAccessory.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status:'未选择文件',
    statu:'状态',
    filePath:''
  },
  //选择文件
  chooseFile:function(){
    wx.chooseImage({
      success: (res)=> {
        console.log(res);
        this.setData({
          status:res.tempFilePaths[0],
          statu:'临时路径'
        })
      },
    })
  },
  //上传文件
  upload:function(){
    wx.showModal({
      title: '提示',
      content: '上传成功',
      showCancel:false,
      success:res=>{
        if(res.confirm){
          wx.navigateTo({
            url: '../reqComplete',
          })
        }
      }
    })
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