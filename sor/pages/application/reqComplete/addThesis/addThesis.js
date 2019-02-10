// pages/application/reqComplete/addThesis/addThesis.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    include:['未收录','已收录'],
    sort:['1','2','3','4','5'],
    index:[0,0],
    thesisInfo:{
      name: '',
      thesisName: '',
      periodical: '',
      time: '',
      volumn: '',
      include: '',
      factor: '',
      sort: '',
      quote: '',
      accession: ''
    }
  },
  //收录情况和作者排序的选择器完善以及值的获取
  include:function(e){
    console.log(e);
    this.setData({
      'index[0]':e.detail.value,
      'thesisInfo.include':this.include[e.detail.value]
    })
  },
  sort:function(e){
    console.log(e);
    this.setData({
      'index[1]':e.detail.value,
      'thesisInfo.sort':this.sort[e.detail.value]
    })
  },
  //文本输入值的获取
  name:function(e){
    console.log(e);
    var value = e.detail.value;
    this.setData({
      'thesisInfo.name':value
    })
  },
  thesisName:function(e){
    console.log(e);
    var value = e.detail.value;
    this.setData({
      'thesisInfo.thesisName':value
    })
  },
  periodical:function(e){
    console.log(e);
    var value = e.detail.value;
    this.setData({
      'thesisInfo.periodical':value
    })
  },
  time:function(e){
    console.log(e);
    var value = e.detail.value;
    this.setData({
      'thesisInfo.time':value
    })
  },
  volumn:function(e){
    console.log(e);
    var value = e.detail.value;
    this.setData({
      'thesisInfo.volumn':value
    })
  },
  factor:function(e){
    console.log(e);
    var value = e.detail.value;
    this.setData({
      'thesisInfo.factor':value
    })
  },
  quote:function(e){
    console.log(e);
    var value = e.detail.value;
    this.setData({
      'thesisInfo.quote':value
    })
  },
  accession:function(e){
    console.log(e);
    var value = e.detail.value;
    this.setData({
      'thesisInfo.accession':value
    })
  },
  //提交添加的论文信息
  submit:function(){
    var param = this.thesisInfo;
    wx.showModal({
      title: '提示',
      content: '提交成功',
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