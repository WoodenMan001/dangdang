/*
* @Author: WoodenMan001
* @Date:   2018-05-16 15:59:29
* @Last Modified by:   WoodenMan001
* @Last Modified time: 2018-05-16 16:28:49
*/
requirejs.config({
    paths: {
        'jquery': '../common/jquery.min',
        'cookie':"../common/jquery.cookie",
    }
});
require(['jquery','init','cookie'], function ($,init){
	init.init($);
	
});