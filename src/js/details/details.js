/*
* @Author: WoodenMan001
* @Date:   2018-05-17 09:57:58
* @Last Modified by:   WoodenMan001
* @Last Modified time: 2018-05-17 15:12:43
*/
requirejs.config({
    paths: {
        'jquery': '../common/jquery.min',
        'cookie':"../common/jquery.cookie",
    }
});
require(['jquery','loading','detailsFn','cookie'], function ($,lg,dl,fn){
	//页面初始化
	lg.init($);
	//页面方法
	console.log(dl)
	dl.init($);
});