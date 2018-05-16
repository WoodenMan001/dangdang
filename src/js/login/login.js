/*
* @Author: WoodenMan001
* @Date:   2018-05-16 15:59:29
* @Last Modified by:   WoodenMan001
* @Last Modified time: 2018-05-16 16:56:07
*/
requirejs.config({
    paths: {
        'jquery': '../common/jquery.min',
        'cookie':"../common/jquery.cookie",
    }
});
require(['jquery','init','formFn','cookie'], function ($,init,fn){
	//页面初始化
	init.init($);
	
	//表单处理
	fn.main($);
});