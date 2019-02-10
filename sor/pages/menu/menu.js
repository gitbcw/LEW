
var temp = 0;
var temp1 = 0;
var temp2 = 0;
Page({

  data: {
    btn:[
      {firstBtn:'申报项目',secondBtn:'查看已申报项目',flag:true},
      {firstBtn:'成果申报',secondBtn:'取消结题申请',flag:true},
      {firstBtn:'身份信息',secondBtn:'修改密码',flag:true}
    ],
    flag:false,
  },

  flash:function(e){
    var up = 'btn[' + e + '].flag';
    temp++;
    if (temp % 2 == 1) {
      this.setData({
        [up]: false,
      });
    } else {
      this.setData({
        [up]: true,
      });
    }
  },
  flash1:function(e){
    var up = 'btn[' + e + '].flag';
    temp1++;
    if (temp1 % 2 == 1) {
      this.setData({
        [up]: false,
      });
    } else {
      this.setData({
        [up]: true,
      });
    }
  },
  flash2:function(e){
    var up = 'btn[' + e + '].flag';
    temp2++;
    if (temp2 % 2 == 1) {
      this.setData({
        [up]: false,
      });
    } else {
      this.setData({
        [up]: true,
      });
    }
  },
  
  first:function(e){
    var id = e.target.id;
    if(id == 0){
      wx.redirectTo({
        url: '../request/request',
      })
    }else if(id == 1){
      wx.navigateTo({
        url: '../application/application',
      })
    }else{
      wx.navigateTo({
        url: '../info/info',
      })
    }
  },
  second:function(e){
    console.log(e);
    var id = e.target.id;
    if (id == 0) {
      wx.redirectTo({
        url: '../lookProj/lookProj',
      })
    } else if (id == 1) {
      wx.redirectTo({
        url: '../cancel/cancel',
      })
    } else {
      wx.navigateTo({
        url: '../changePw/changePw',
      })
    }
  },

  projectManage:function(){
    this.flash(0);
  },

  finalManage:function(){
    this.flash1(1);
  },
  personalInfo:function(){
    this.flash2(2);
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