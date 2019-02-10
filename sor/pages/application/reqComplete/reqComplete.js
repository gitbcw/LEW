// pages/application/reqComplete/reqComplete.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    projInfo:[],
    id:0,
    // projInfo: [
    //   { projName: '高校党建开放研究', projNum: '69', leader: '王教授', projLv: '重点项目', projStatus: '已立项' },
    //   { projName: '功能化石墨烯基因载体研究', projNum: '84', leader: '张教授', projLv: '特殊项目', projStatus: '已推荐' },
    //   { projName: '湖南省城乡体育公共化服务研究', projNum: '64', leader: '刘教授', projLv: '一般项目', projStatus: '未推荐' }
    // ],
    titleGather:['项目名称','项目类别','研究类型','申请日期','研究年限','申请人','所在学校','所属学科','所属批次','参与人员','预期成果','已完成成果','附件'],
    projBase:[
      ['高校党建开放研究','重点项目','王教授','','','','','','','点击查看人员信息'],
      ['功能化石墨烯基因载体研究', '特殊项目', '张教授', '', '', '', '', '', '', '点击查看人员信息'],
      ['湖南省城乡体育公共化服务研究', '一般项目', '刘教授', '', '', '', '', '', '', '点击查看人员信息']
    ],
  },
  //处理点击事件
  handle:function(e){
    console.log(e);
    var id = e.currentTarget.id;
    if (id == 0){
      wx.downloadFile({
        url: 'https://example.com/audio/123', // 仅为示例，并非真实的资源
        success(res) {
          // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        }
      })
    }else if(id == 9){
      wx.navigateTo({
        url: 'personInfo/personInfo',
      })
    }
  },
  //添加附件
  addFile:function(){
    wx.navigateTo({
      url: 'addAccessory/addAccessory',
    })
  },
  //添加论文信息
  addThesis:function(){
    wx.navigateTo({
      url: 'addThesis/addThesis',
    })
  },
  //申请结题
  reqComplete:function(){
    wx.showModal({
      title: '提示',
      content: '申请已提交',
      success:res=>{
        if(res.confirm){
          wx.navigateTo({
            url: '../application',
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (res) {
    console.log(res);
    var temp = JSON.parse(res.data);
    var id = res.id;
    this.setData({
      projInfo:temp,
      id:id
    })
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