/*
* @Author: WoodenMan001
* @Date:   2018-05-18 17:42:17
* @Last Modified by:   WoodenMan001
* @Last Modified time: 2018-05-20 18:05:58
*/
requirejs.config({
    paths: {
        'jquery': '../common/jquery.min',
        'cookie':"../common/jquery.cookie",
    }
});
require(['jquery','init','cartFn','cookie'], function ($,init,ctmfn){
	init.init($);
	ctmfn.init($);
});