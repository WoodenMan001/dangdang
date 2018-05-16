/*
* @Author: WoodenMan001
* @Date:   2018-05-16 16:22:39
* @Last Modified by:   WoodenMan001
* @Last Modified time: 2018-05-16 18:22:37
*/

define([], function (){
	return {
		init: function($) {
			//页面打开就弹出弹出框提醒
			this.setFrame($);
			//查询账号秘密,并设置input
			this.setInput($);


		},
		setInput: function($) {
			//获取cookie中的账号密码
			let username = $.cookie("username");
			let password = $.cookie("password");

			//如果有账号密码，则隐藏提示，并填入账号密码
			if(username!='' && password!='') {
				let pw =  $('#txtPassword')[0];
				let user =  $('#txtUsername')[0];
				let placeholders = $('.placeholder');
				$(placeholders).each(function(i,item) {
					$(item).hide();
				});
				$(pw).val(password);
				$(user).val(username);
			}
		},
		setFrame: function($) {
			let box = $('.pop_up_frame')[0];
			let btn = $('.pop_up_frame .btn')[0];

			$(box).show();
			//点击按钮，隐藏弹出框
			$(btn).click(function() {
				$(box).hide();
			})
		}
	}
});