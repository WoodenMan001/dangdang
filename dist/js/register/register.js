/*
* @Author: ljgoh
* @Date:   2018-05-10 16:13:48
* @Last Modified by:   ljgoh
* @Last Modified time: 2018-05-11 15:34:37
*/
require(['dropDown-min','proving-min','form'], function (dd,pr,fm){
	//鼠标经过显示隐藏下拉框
	dd.mouseover();
	//初始化验证码,验证码存入cookie
	pr.setCode();
	//验证码点击更换
	pr.codeBtn();

	fm.formValidation();
});