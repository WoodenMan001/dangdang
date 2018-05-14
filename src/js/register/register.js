/*
* @Author: ljgoh
* @Date:   2018-05-10 16:13:48
* @Last Modified by:   WoodenMan001
* @Last Modified time: 2018-05-14 13:49:35
*/
require(['../common/dropDown-min','proving-min','form'], function (dd,pr,fm){
	//鼠标经过显示隐藏下拉框
	dd.mouseover(["fa fa-sort-asc","fa fa-sort-desc"]);
	//初始化验证码,验证码存入cookie
	pr.setCode();
	//验证码点击更换
	pr.codeBtn();

	fm.formValidation();
});