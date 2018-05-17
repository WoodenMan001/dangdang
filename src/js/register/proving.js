/*
* @Author: ljgoh
* @Date:   2018-05-11 09:47:15
* @Last Modified by:   WoodenMan001
* @Last Modified time: 2018-05-17 15:22:26
*/

define(["../common/random"],function(rd){
	return {
		//设置验证码，验证码存入cookie
		setCode: function($) {
			let code = $('#code');
			let codeStr = '';
			for (var i = 0; i < 4; i++) {
				codeStr += rd.getCode();
			}

			code.text(codeStr);
			code.css('background',rd.getColor());
			$.cookie('codeStr',codeStr,1);
		},
		//点击更换按钮
		codeBtn: function($) {
			let me = this;
			let codebtn = $('#code +a');
			//点击按钮触发 setCode 方法，更换code
			codebtn.click(() => {
				me.setCode($);
			})

			return this.codeStr;
		}
	}
});