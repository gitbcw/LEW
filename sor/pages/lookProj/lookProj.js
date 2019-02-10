// pages/lookProj/lookProj.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:[0,0,0,0,0],
    projName:['高校党建开放研究','功能化石墨烯基因载体研究','湖南省城乡体育公共化服务研究'],
    leader:['王教授','张教授','刘教授'],
    projLv:['重点项目','一般项目','特殊项目'],
    projStatus:['已立项','已推荐','未推荐'],
    projNum:['69','84','64'],
    projInfo:[
      {projName:'高校党建开放研究',projNum:'69',leader:'王教授',projLv:'重点项目',projStatus:'已立项'},
      {projName:'功能化石墨烯基因载体研究',projNum:'84',leader:'张教授',projLv:'特殊项目',projStatus:'已推荐'},
      {projName:'湖南省城乡体育公共化服务研究',projNum:'64',leader:'刘教授',projLv:'一般项目',projStatus:'未推荐'}
    ]

  },
  trial:function(e){
    console.log(e);
    var id = e.target.id;
    var param =this.data.projInfo[id];
    param = JSON.stringify(param);
    wx.navigateTo({
      url: 'detail/detail?data='+param,
    })
  },
  //选择项目级别
  chooseLv:function(e){
    this.setData({
      'index[0]':e.detail.value
    })
  },
  //选择项目状态
  chooseStatus:function(e){
    this.setData({
      'index[1]':e.detail.value
    })
  },


  moreInfo:function(e){
    var title = this.data.projName[0];
    wx.navigateTo({
      url: 'detail/detail?data='+title,
    })
  },
  //back
  back:function(){
    wx.navigateTo({
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