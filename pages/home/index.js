import {
    frontZeroLength2
} from '../../utils/index.js'
import {
    mockData
} from '../../utils/mockData.js'

Page({
    data: {
        house: [],
        date: '2017-09'
    },
    onLoad: function () {
        this.initDate();
        this.initHouse()
    },
    // 下拉刷新
    onPullDownRefresh: function () {
        console.log('下拉刷新')
    },
    // 点击房号，跳转房子详情页面
    clickHouse: function (event) {
        wx.navigateTo({
            url: '/pages/detail-house/index?number=' + event.currentTarget.dataset.item.number,
        })
    },
    // 修改日期选择器
    dateChange: function (e) {
        this.setData({
            date: e.detail.value
        })
    },
    // 初始化日期选择器为当前年月（例：2024-01）
    initDate: function () {
        const nowDate = new Date().getFullYear() + '-' + frontZeroLength2(new Date().getMonth() + 1)
        this.setData({
            date: nowDate
        })
    },
    // 初始化房子数据
    initHouse: function () {
        const res = mockData.house.sort((a, b) => {
            return b.number - a.number;
        })
        this.setData({
            house: res
        })
    }
})