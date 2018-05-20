/*
* @Author: WoodenMan001
* @Date:   2018-05-14 11:56:24
* @Last Modified by:   WoodenMan001
* @Last Modified time: 2018-05-20 22:48:27
*/
requirejs.config({
    paths: {
        'jquery': '../common/jquery.min',
        'cookie':"../common/jquery.cookie",
    }
});
require(['jquery','addData','init','cookie'], function ($,add,init,fn){
	//页面初始化
	init.init($)
	add.init($);
});