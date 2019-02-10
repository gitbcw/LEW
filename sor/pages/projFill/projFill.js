// pages/projFill/projFill.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      index:[0,0,0,0,0,0],
      Index:[0,0,0,0,0],

      researchType:['基础研究','进阶研究','骨干研究','高端科研'],
      jobTitle:['正科级','正处级','正厅级','正国级'],
      unit:['湖南师范大学','中南大学','国防科级大学','湖南大学'],
      edu:['学士','硕士','博士','博士后'],

      startDate:'2014-01-01',
      endDate:'2014-01-31',

      num:['0','1','2','3','4','5','6','7','8','9','10'],

      form1:{
        name:'',idcard:'',projName:'',edu:'',jobTitle:'',researchType:'',projCost:0,startDate:'',
        endDate:''
      },
      form2:{
        name:'',idcard:'',edu:'',jobTitle:'',unit:''
      },
      form3:{
        thesis:0,patent:0,SCI:0,SSCI:0,EI:0
      },

      toastText:'',
      showToast:true,
      status:'未选择文件',
  },
  //弹窗函数
  showToast:function(){
    this.setData({
      showToast:false
    });
    setTimeout(()=>{
      this.setData({
        showToast:true
      })
      } ,1500);
  },
  //学历选择事件
  chooseEdu:function(e){
    var value = e.detail.value;
    var index = 'index['+ 0 +']';
    this.setData({
      [index]:value,
      'form1.edu':this.data.edu[value]
    })
  },
  //职称选择事件
  chooseJob:function(e){
    var value = e.detail.value;
    var index = 'index[' + 1 + ']';
    this.setData({
      [index]: value,
      'form1.jobTitle':this.data.jobTitle[value]
    })
  },
  //相关人员学历选择事件
  chooseEdu1:function(e){
    var value = e.detail.value;
    var index = 'index['+ 2 +']';
    this.setData({
      [index]:value,
      'form2.edu':this.data.edu[value]
    })
  },
  //相关人员职称选择事件
  chooseJob1:function(e){
    var value = e.detail.value;
    var index = 'index[' + 3 + ']';
    this.setData({
      [index]: value,
      'form2.jobTitle':this.data.jobTitle[value]
    })
  },
  //研究类型选择事件
  chooseType:function(e){
    var value = e.detail.value;
    var index = 'index[' + 4 + ']';
    this.setData({
      [index]: value,
      'form1.researchType':this.data.researchType[value]
    })
  },
  //相关人员所在单位选择事件
  chooseUnit:function(e){
    var value = e.detail.value;
    var index = 'index[' + 5 + ']';
    this.setData({
      [index]: value,
      'form2.unit':this.data.unit[value]
    })
  },
  //项目起始日期选择事件
  changeDate1:function(e){
    var value = e.detail.value;
    this.setData({
      startDate:value,
      'form1.startDate':value
    })
  },
  //项目结束日期选择事件
  changeDate2:function(e){
    var value = e.detail.value;
    this.setData({
      endDate:value,
      'form1.endDate':value
    })
  },
  //预期成果选择事件Num1-5
  chooseNum1:function(e){
    var value = e.detail.value;
    var Index = 'Index[' + 0 + ']';
    this.setData({
      [Index]: value,
      'form3.thesis':value
    })
  },
  chooseNum2:function(e){
    var value = e.detail.value;
    var Index = 'Index[' + 1 + ']';
    this.setData({
      [Index]: value,
      'form3.patent':value
    })
  },
  chooseNum3:function(e){
    var value = e.detail.value;
    var Index = 'Index[' + 2 + ']';
    this.setData({
      [Index]: value,
      'form3.SCI':value
    })
  },
  chooseNum4:function(e){
    var value = e.detail.value;
    var Index = 'Index[' + 3 + ']';
    this.setData({
      [Index]: value,
      'form3.SSCI':value
    })
  },
  chooseNum5:function(e){
    var value = e.detail.value;
    var Index = 'Index[' + 4 + ']';
    this.setData({
      [Index]: value,
      'form3.EI':value
    })
  },
  //返回申请项目页面
  back:function(){
    wx.redirectTo({
      url: '../request/request',
    })
  },
  //添加相关人员信息事件
  add:function(e){
    console.log(e);
    this.setData({
      toastText:'添加成功!'
    });
    this.showToast();
  },
  //删除相关人员信息事件
  del:function(e){
    console.log(e);
    this.setData({
      toastText: '已删除相关人员信息!'
    });
    this.showToast();
  },
  //选择本地文件事件
  chooseFile:function(){
    wx.chooseImage({
      success: (res)=> {
        this.setData({
          status:res.tempFilePaths
        })
      },
    })
  },
  //上传本地文件事件
  upLoadFile:function(){
    wx.saveFile({
      tempFilePath: this.data.status[0],
      success:(res)=>{
        this.setData({
          status:res.savedFilePath
        })
      }
    })
  },
  //查看缓存文件事件
  see:function(){
    wx.getSavedFileList({
      success:(res)=>{
        console.log(res);
        var temp = JSON.stringify(res.fileList[0].filePath);
        var temp1 = JSON.parse(temp);
        this.setData({
          toastText:temp1
        })
        this.showToast();
      }
    })
  },
  //确认提交项目申请
  submit:function(){
    wx.showModal({
      title: '提示',
      content: '确定提交该项目申请吗？',
      success:(res)=>{
        if(res.confirm){
          this.setData({
            toastText:'提交成功！'
          })
          this.showToast();
          setTimeout(()=>{
            wx.redirectTo({
              url: '../menu/menu',
            })
          },1800)
        
        }
      }
    })
  },
  //获取输入信息事件--姓名、身份证号码、项目名称、项目经费、相关人员信息
  name:function(e){
    this.setData({
      'form1.name':e.detail.value
    })
  },
  idcard:function(e){
    this.setData({
      'form1.idcard':e.detail.value
    })
  },
  projName:function(e){
    this.setData({
      'form1.projName':e.detail.value
    })
  },
  projCost:function(e){
    this.setData({
      'form1.projCost':e.detail.value
    })
  },
  relativeName:function(e){
    this.setData({
      'form2.name':e.detail.value
    })
  },
  relativeIdcard:function(e){
    this.setData({
      'form2.idcard':e.detail.value
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