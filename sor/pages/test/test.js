// pages/test/test.js
var flag = false;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[
      {name:'student',value:'学生',checked:'true'},
      {name:'teacher',value:'教师'},
      {name:'admin',value:'管理员'},
      {name:'sysAdmin',value:'系统管理员'}
    ],
/**    loginArr:[
      {user:'15211627221',pass:'123456'},
      {user:'201530185019',pass:'a123456'},
      {user:'13874597459',pass:'654321'},
    ],*/
    userId:'',
    password:'',
    verify:'',
    showToast:false,
    key:'获取',

  },

//弹窗函数：用于弹出提示框
  showToast:function(){
    this.setData({
      showToast:true,
    })
    setTimeout(() => {
      this.setData({
        showToast: false
      })
    }, 1500
    );
  },
//获取输入的用户名
  userGet:function(e){
    console.log(e);
    var userId = e.detail.value;
    this.setData({
      userId:userId,
    })

  },
//获取输入的密码
  passGet:function(e){
    var psd = e.detail.value;
    this.setData({
      password:psd,
    })
  },

/**  verification:function(){
    var loginArr = this.data.loginArr;
    var user = this.data.userId;
    var pass = this.data.password;
    for(var i=0;i<3;i++){
      if(loginArr[i].user ==user && loginArr[i].pass == pass){
        flag = true;
      }
    }
  },*/
//验证用户名和密码是否匹配
  verification:function(){
    var userid = this.data.userId;
    var pass = this.data.password;
    var userArr = wx.getStorageSync('userStore');
    var passArr = wx.getStorageSync('passStore');
    for(var item in userArr){
        if(userArr[item] == userid && passArr[item] == pass){
          flag = true;
        }
    }
  },
//用户名与密码格式验证
  verify:function(){
    var userid = this.data.userId;
    var len = userid.length;
    if (userid == '') {
      this.setData({
        toastText: '用户名不能为空！'
      });
      this.showToast();
      return 0;
    } else if (len != 11 || userid.charAt(0) != '1') {
      this.setData({
        toastText: '格式不正确'
      })
      this.showToast();
      return 0;
    } else if (this.data.password == '') {
      this.setData({
        toastText: '密码不能为空',
      })
      this.showToast();
      return 1;
    }else if(this.data.password.length < 6){
      this.setData({
        toastText: '密码长度不得小于6位数',
      })
      this.showToast();
      return 1;
    }else if(!flag){
      this.setData({
        toastText: '用户名或密码错误',
      })
      this.showToast();
      return 1;
    }
    return 3;
  },
//获取验证码（功能未实现）
  gain:function(){
    this.verify();
    var second = 5;
    this.countDown(second);

    var num = Math.random()*89999+100000;
    num = Math.floor(num);
    console.log(num);
  },
//验证码倒计时
  countDown:function(num){
    this.setData({
      gainFlag:true,
      key:num,
    });
    if(num < 0) {
      this.setData({
        gainFlag:false,
        key:'获取',
      })
      return;
    }
    setTimeout(()=>{
      this.countDown(num-1);
    },1000)
  },
//登录账户
  logIn:function(){
    this.verification();
    this.verify();
    var key = this.verify();
    if(key != 0 && key != 1 && flag){
      flag = false;
      wx.navigateTo({
        url: '../menu/menu',
      })
    }
  },
//注册当前输入的账号和密码
  register:function(){
    flag = true;
    var key = this.verify();
    flag = false;
    var key1 = this.matching();
    var temp = [];
    var userid = this.data.userId;
    var pass = this.data.password;
    if(key != 0 && key != 1 && key1 != 0){
    var userArr = wx.getStorageSync('userStore') || [];
    var passArr = wx.getStorageSync('passStore') || [];
    userArr.unshift(userid);
    passArr.unshift(pass);
    wx.setStorageSync('userStore', userArr);
    wx.setStorageSync('passStore', passArr);
    console.log(temp = wx.getStorageSync('userStore'));
    this.setData({
      toastText: '注册成功！'
    });
    this.showToast();
    return;
  }
  },
//验证缓存中是否已存在同样的用户名
  matching:function(){
    var userid = this.data.userId;
    var userArr = wx.getStorageSync('userStore');
    for (var item in userArr){
      if(userArr[item] == userid){
        this.setData({
          toastText: '已存在该用户！'
        });
        this.showToast();
        return 0;
      } else {
        return 1;
      }
    }
  },
  radio:function(e){
    console.log(e);
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