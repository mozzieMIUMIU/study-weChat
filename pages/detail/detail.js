//引入WxParse
const WxParse = require('../../wxParse/wxParse.js');
Page({
    onLoad: function( e ) {
        var that = this;
        wx.request({
            url: 'https://news-at.zhihu.com/api/4/news/'+e.id,
            method:'GET',
            success: function(res) {
                var article = res.data.body;
                var databody = WxParse.wxParse('article', 'html', article, that, 5);
                // 重新写入数据
                that.setData( {
                    databody: databody
                });
            }
        })
    }
});