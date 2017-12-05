// pages/eat/eat.js
//获取应用实例
var timer = null;
Page({
    data: {
        eats:'start',
        food:'鱼丸',
        off:'true'
    },
    //事件处理函数
    eatfoodTap: function () {
        var that = this;
        if (this.data.off){
            this.setData({
                eats: 'stop'
            })
            timer = setInterval(function () {
                random_str();
            }, 100)
        }else{
            this.setData({
                eats: 'start'
            })
            clearInterval(timer);
        }
        this.data.off = !this.data.off;
        //随机
        function random_str() {
            var foodArr = ['鱼丸米线', '酸辣土豆丝', '青椒鸡蛋','油泼面','浙菜','浙菜','粤菜','什么都不吃']
            var str = '';
            var rand = Math.floor(Math.random() * foodArr.length);
            str = foodArr[rand];
            return that.setData({
                food: str
            });
        }
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
