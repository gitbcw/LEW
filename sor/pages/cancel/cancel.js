
Page({

  /**
   * 页面的初始数据
   */
  data: {
    projLv: ['重点项目', '一般项目', '特殊项目'],
    projStatus: ['已立项', '已推荐', '未推荐'],
    projName: ['高校党建开放研究', '功能化石墨烯基因载体研究', '湖南省城乡体育公共化服务研究'],
    projInfo: [
      { projName: '高校党建开放研究', projNum: '69', leader: '王教授', projLv: '重点项目', projStatus: '已立项' },
      { projName: '功能化石墨烯基因载体研究', projNum: '84', leader: '张教授', projLv: '特殊项目', projStatus: '已推荐' },
      { projName: '湖南省城乡体育公共化服务研究', projNum: '64', leader: '刘教授', projLv: '一般项目', projStatus: '未推荐' }
    ]

  },
  //取消结题申请
  cancel:function(e){
    console.log(e);
    var id = e.target.id;
    var desc = this.data.projInfo[id].projName;
    wx.showModal({
      title: '提示',
      content: '确定要取消《'+desc+'》项目的结题申请吗？',
      success:res=>{
        if(res.confirm){
          wx.showModal({
            title: '提示',
            content: '该项目结题申请已取消！',
          })
        }else{
          return 0;
        }
      }
    })
  },
  //选择项目级别
  chooseLv: function (e) {
    this.setData({
      'index[0]': e.detail.value
    })
  },
  //选择项目状态
  chooseStatus: function (e) {
    this.setData({
      'index[1]': e.detail.value
    })
  },
  //back
  back: function () {
    wx.redirectTo({
      url: '../menu/menu',
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