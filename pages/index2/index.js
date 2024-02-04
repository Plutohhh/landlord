Page({
    data: {
        boxArray: new Array(6).fill(0), // 假设有 6 个框框，你可以根据实际情况修改
    },
    onReachBottom: function () {
        console.log('到底')
    }
});