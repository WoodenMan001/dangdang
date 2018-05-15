/*
* @Author: WoodenMan001
* @Date:   2018-05-14 11:56:24
* @Last Modified by:   WoodenMan001
* @Last Modified time: 2018-05-15 11:45:41
*/
require(['../common/jquery-min','init-min','../common/dropDown-min'], function ($,init,dd){

	init.init($);
	//鼠标经过显示隐藏下拉框
	dd.mouseover(["fa fa-angle-up","fa fa-angle-down"]);

	
});