loganPages  jQuery分页插件
=======================================================

## 简单说明插件用法

插件提供一个jQuery对象方法$('#default').loganPages(opts,callback);该方法需要传入参数opts，并提供点击切换页码之后的回调函数callback.

opts = {
    'nowPage' : nowPage,
    'totalPage' : totalPage
}
nowPage是分页初始被选中的页码，totalPage顾名思义就是总页数。

callback = function (nowPage, totalPage) {}

回调函数同样提供nowPage, totalPage供回调使用，nowPage是点击之后的页码，和bootstrap一起用就不用自己写样式啦。

## PS
前端开发实习将近半年了，最近想学习jQuery插件开发，碰巧遇到再项目中需要一个靠谱的分页功能，于是乎这个东西就花了点时间写出来了。

                                                        								----前端开发小白Logan

