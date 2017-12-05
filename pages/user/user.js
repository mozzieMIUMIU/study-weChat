


Page({
    data:{
        //当前登录方式状态
        activeLogin:true,
        //用户名
        suerName:'',
        //密码
        password:''
    },
    //登录方式切换
    loginWay(event){
        let loginId = event.currentTarget.id;
        switch (loginId){
            case 'password':
                this.setData({
                    activeLogin:true
                })
                break;
            case 'phone':
                this.setData({
                    activeLogin:false
                })
                break;
        }
    },
    //登录
    login(){
        //https://sapi.tongtongmall.com/api/user/login
        wx.request({
            url: 'https://sapi.tongtongmall.com/api/user/login',
            method:'POST',
            data: {
                loginname:this.suerName,
                pwd:this.password,
                tk:'2',
                vercode:''
            },
            success: function(res) {
               if(res.data.code==200){
                   wx.showToast({
                       title:res.data.msg,
                       icon: '',
                       duration: 2000
                   })
               }else{
                   wx.showToast({
                       title:res.data.msg,
                       icon: '',
                       duration: 2000
                   })
               }

            },
            fail: function(res) {
                wx.showToast({
                    title:res.data.msg,
                    icon: '',
                    duration: 2000
                })
            }
        })
    },
    //手机号失去焦点验证
    verifyPhone(e){
        var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if(!reg.test(e.detail.value)) {
            wx.showToast({
                title: '手机号格式错误',
                image:'!',
                duration: 2000
            })
            return false;
        }
    }

})