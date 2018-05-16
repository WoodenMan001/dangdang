/*
* @Author: WoodenMan001
* @Date:   2018-05-16 16:22:39
* @Last Modified by:   WoodenMan001
* @Last Modified time: 2018-05-16 16:34:23
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