//index.js
//获取应用实例
var time = require("../../utils/util");
var app = getApp();
Page({
    data: {
        motto: '今天我们吃什么',
        vue:'和vue很像嘛',
        imgUrls: [
            {
                sid:'img1',
                url:'../../image/eat.jpg',
            },{
                sid:'img2',
                url:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            },{
                sid:'img3',
                url:'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            }
        ],
        indicatorDots:true,
        autoplay:true,
        interval:5000,
        circular:true,
        //知乎数据
        listData:[],
        //更多？
        vMore:true,
        //参数
        zhihuDay:time.formatTime(new Date())
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },

    //今天吃什么
    eatViewTap: function (e) {
        switch (e.currentTarget.id){
            case 'img1':
                wx.navigateTo({
                    url: '../eat/eat'
                })
                break;
        }
    },
    onLoad: function () {
        console.log('onLoad')
        var that = this;
        wx.request({
            url: 'https://news-at.zhihu.com/api/2/news/before/'+this.data.zhihuDay,
            method:'GET',
            success: function(res) {
                that.data.listData.push(res.data)
                console.log(that.data.listData)
                that.setData({
                    listData:that.data.listData,
                    listDateCurrent:res.data.display_date
                })
            }
        })
    },

    //发现
    findTap(){
        wx.request({
            url: 'https://www.easy-mock.com/mock/59a38131960a33213da0adfd/list/list-02',
            method:'GET',
            success: function(res) {
                console.log(res.data)
            }
        })
    },
    //底部菜单跳转
    menuTap(event){
        let menuId = event.currentTarget.id;
        if(menuId ==='index')return;
        wx.navigateTo({
            url: '../'+menuId+'/'+menuId
        })
    },
    onReachBottom: function() {
        console.log('next');
        /*
            参数格式20171202
            只获取当月的列表
        */
        var monthClose = this.data.zhihuDay.toString();
        var monthCloseSub = monthClose.substring(0,7)+'2';
        if(this.data.vMore){
            this.data.zhihuDay--;
            var that = this;
            wx.request({
                url: 'https://news-at.zhihu.com/api/2/news/before/'+that.data.zhihuDay,
                method:'GET',
                success: function(res) {
                    if(that.data.zhihuDay==monthCloseSub){
                        that.setData({
                            vMore:false
                        })
                    }
                    that.data.listData.push(res.data)
                    //重新写入数据
                    that.setData({
                        listData: that.data.listData,
                        listDateCurrent:res.data.display_date
                    })
                }
            })
        }else{
            this.setData({
                vMore:false
            })
        }
    },
    modalTap(e){
        //txt-分享到微信朋友圈
        console.log(e.target.dataset.share)
    },

    //返顶
    goTop(){
        wx.pageScrollTo({
            scrollTop: 0
        })
    },

    //去详情
    goDetail(e){
        console.log(e.target.dataset.id)
        wx.navigateTo({
            url: '../detail/detail?id='+e.target.dataset.id
        })
    }
});
