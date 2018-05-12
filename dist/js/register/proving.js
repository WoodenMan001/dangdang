/*
* @Author: ljgoh
* @Date:   2018-05-11 09:47:15
* @Last Modified by:   ljgoh
* @Last Modified time: 2018-05-11 11:31:41
*/
define(["../common/random-min","../common/cookieJar-min"],function(rd,ck){
	return {
		//设置验证码，验证码存入cookie
		setCode: function() {
			let code = document.getElementById('code');
			let codeStr = '';
			for (var i = 0; i < 4; i++) {
				codeStr += rd.getCode();
			}

			code.innerHTML = codeStr;
			code.style.background = rd.getColor();
			ck.setCookie('codeStr',codeStr,1);
		},
		codeBtn: function() {
			let me = this;
			let codebtn = document.querySelector('#code +a');
			codebtn.onclick = function() {
				me.setCode();
			}
			return this.codeStr;
		}
	}
});