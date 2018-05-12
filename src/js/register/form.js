/*
 * @Author: ljgoh
 * @Date:   2018-05-11 15:01:29
 * @Last Modified by:   WoodenMan001
 * @Last Modified time: 2018-05-12 17:03:33
 */
define(["../common/cookieJar-min"], function(ck) {
	return {
		judgeArr: {},
		isClick: false,
		//表单验证
		formValidation: function() {
			//配置验证项钥匙
			let inputs = [...document.querySelectorAll('table input')];
			inputs.forEach(item => {
				this.judgeArr[item.id] = false;
			});
			//协议默认勾选
			this.judgeArr['check'] = true;
			//添加得到焦点事件
			
			this.focus(inputs.slice(0,inputs.length-1));
			//验证手机号码
			this.tel();

			//密码验证
			this.password();
			//二次密码
			this.repassword();
			//验证码
			this.identifyingCode();
			//按钮
			this.btn();
		},
		btn: function() {
			let me = this;
			let btn = document.getElementById('btn');
			let inputs = document.querySelectorAll('input');
			console.log(inputs)
			btn.onclick = function() {
				me.isClick = true;

				inputs.forEach((item,i) => {
					if(i != inputs.length - 1)
						item.onblur();
				})
			}

		},
		identifyingCode: function() {
			let me = this;
			let oInput = document.getElementById('identifyingCode');
			let eles = [...oInput.offsetParent.children];
			let warn = eles[4];

			oInput.onblur = function() {
				let codeCk = ck.getCookie('codeStr');//获取cookie中存储的code值
				let val = oInput.value;

				if (!me.valIsNull(oInput, eles) && !me.isClick) 
					return;

				if(val != codeCk) {
					me.setDisplay(warn,"block");
					warn.innerHTML = '换张图 图形验证码输入错误，请重新输入';
					me.modifyState_false(eles);
				} else {
					me.judgeArr[oInput.getAttribute('id')] = true;
					me.modifyState_true(eles);
				}
			}
		},
		repassword: function() {
			let me = this;
			let oInput = document.getElementById('repassword');
			let eles = [...oInput.offsetParent.children];
			let warn = eles[2];

			oInput.onblur =  function() {
				let val = oInput.value;
				let oPwV = document.getElementById('password').value;
				if (!me.valIsNull(oInput, eles) && !me.isClick) 
					return;

				//判断两次密码是否一致
				if(val != oPwV) {
					me.setDisplay(warn,"block");
					warn.innerHTML = '两次输入的密码不一致，请重新输入';
					me.modifyState_false(eles);
				} else {
					me.judgeArr[oInput.getAttribute('id')] = true;
					me.modifyState_true(eles);
				}
			}
		},
		password: function() {
			let me = this;
			//提示语句
			let warnArr = ['密码过于简单', '试试字母、符号、数字的组合更安全', '密码设置安全，放心使用']
			let regLen = '^[0-9a-zA-Z]{6,20}$';
			let regArr = ['[0-9]', '[a-z]', '[A-Z]'];
			let colorArr = ['#ff3600','#ffc000','#71b300'];
			let oPw = document.getElementById('password');
			let warnSpan = document.querySelectorAll('#password +span')[0];
			let oSpan = document.querySelector('.intensity');
			let oSpans = [...oSpan.children];
			let eles = [...oPw.offsetParent.children];
			let upperCaseSpan = document.querySelector('span.upperCase');
			//实时判断输入结果
			oPw.oninput = function() {
				let val = oPw.value;
				let lastValCode = '';
				let num = 0;

				//判断内容是否为空
				if (!me.valIsNull(oPw, eles) && !me.isClick) return;
				//获取输入元素的charcodeAt
				lastValCode = val[val.length-1].charCodeAt();
				//获取reg验证结果
				if (me.reg(regLen, val)) {
					me.modifyState_true(eles);
					me.judgeArr[oPw.getAttribute('id')] = true;
					regArr.forEach(reg => {
						if (me.reg(reg, val))
							num++;
					});
				}
				//提示大写字母
				if(65 <= lastValCode && lastValCode <= 90) {
					me.setDisplay(upperCaseSpan,"block");
				} else if (num) {
					//判断密码强度
					me.setDisplay(oSpan,'block');
					oSpans.forEach((it, i) => {
						if (i == 3) {
							it.style = 'width:200px;position:relative;display:inline-block;float: left;top: 0;line-height: 14px;';
							it.innerHTML = warnArr[num - 1];
						} else {
							it.style = '';
							if(i < num){
								it.style.background = colorArr[i];
							} else {
								it.style.background = '#d6d6d6';
							}
							
						}
					});
				}
			}
			//失去焦点，判断长度是否小于6
			oPw.onblur = function() {
				//判断内容是否为空
				if (!me.valIsNull(oPw, eles)) return;
				if(oPw.value.length < 6) {
					me.modifyState_false(eles);
				} else {
					me.modifyState_true(eles);
				}
			}
		},
		//手机验证
		tel: function() {
			let me = this;
			let reg = "^1[3|5|7|8]([0-9]){9}$";
			let oTel = document.getElementById('tel');
			let oSpan = document.getElementsByName('warn')[0];
			let eles = [...oTel.offsetParent.children];

			oTel.onblur = function() {
				let telNum = oTel.value;
				let regResult = false;

				//判断内容是否为空
				console.log(me.isClick)
				if (!me.valIsNull(oTel, eles) && !me.isClick) 
					return;
				//获取reg验证结果
				regResult = me.reg(reg, oTel.value);
				//根据验证结果修改样式
				
				if (regResult) {
					//ajax判断
					me.judgeArr[oTel.getAttribute('id')] = true;
					me.modifyState_true(eles);
				} else {
					me.setDisplay(oSpan,'block');
					me.modifyState_false(eles);
					oSpan.innerHTML = '手机格式不正确，请重新输入';
				}
			}
		},
		//根据若正则结果为true修改样式
		modifyState_true: function(items) {
			items.forEach(item => {
				if (item.getAttribute('name') == 'yz') {
					this.setDisplay(item,"block");
					item.className = 'fa fa-check';
				}
				if (item.tagName == 'INPUT') {
					item.style.borderColor = '#969696';
					item.offsetParent.style.color = '#505050';
				}
			});
		},
		//根据若正则结果为false修改样式
		modifyState_false: function(items) {
			this.isClick = false;
			items.forEach(item => {
				if (item.getAttribute('name') == 'yz') {
					this.setDisplay(item,'block');
					item.className = 'fa fa-close';
				}
				if (item.tagName == 'INPUT') {
					item.style.borderColor = 'red';
					item.style.color = 'red';
				}
			});
		},
		//input获得焦点，则显示提示
		focus: function(inputs) {
			const me = this;
			inputs.forEach((item, i) => {
				item.onfocus = function(){
					let oHint = document.querySelectorAll('table span[name="hint"]')[i];
					//隐藏所有span
					me.displayNo([...item.offsetParent.children]);
					me.setDisplay(oHint,'block');
					item.style = 'border: 1px solid #969696;color: #505050';
				}
			});
		},
		//失去焦点之后将设置input样式
		inputBlur: function(item) {
			item.style = 'border: 1px solid #e6e6e6;color: #333';
		},
		//失去焦点  判断内容和验证reg
		//对象，对象父元素的所有子元素，正则，index
		valIsNull: function(inp, items) {
			let val = inp.value;
			this.displayNo(items);
			if (val == '' || val.length == 0) {
				this.inputBlur(inp);
				return false;
			} else {
				return true;
			}
		},
		//隐藏span和i
		displayNo: function(items) {
			items.forEach(ele => {
				if (ele.tagName == 'SPAN' || ele.tagName == 'I') {
					this.setDisplay(ele,'none');
				}
			});
		},
		//验证reg
		reg: function(regstr, val) {
			const reg = new RegExp(regstr, "g");
			if (reg.test(val)) {
				return true;
			} else {
				return false;
			}
		},
		//设置display
		setDisplay: function(ele,attVal) {
			ele.style.display = attVal;
		}
	}
});