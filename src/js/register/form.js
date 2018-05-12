/*
 * @Author: ljgoh
 * @Date:   2018-05-11 15:01:29
 * @Last Modified by:   ljgoh
 * @Last Modified time: 2018-05-12 11:10:16
 */
define([], function() {
	return {
		judgeArr: {},
		//表单验证
		formValidation: function() {
			//配置验证项钥匙
			let inputs = [...document.querySelectorAll('table input:not([type="checkbox"])')];
			inputs.forEach(item => {
				this.judgeArr[item.id] = false;
			});
			//添加得到焦点事件
			this.focus(inputs);
			//验证手机号码
			this.tel();

			//密码验证
			this.password();
		},
		password: function() {
			let me = this;
			//提示语句
			let warnArr = ['密码过于简单', '试试字母、符号、数字的组合更安全', '密码设置安全，放心使用']
			let regLen = '^[0-9a-zA-Z]{6,20}$';
			let regArr = ['[0-9]', '[a-z]', '[A-Z]'];
			let oPw = document.getElementById('password');
			let oSpan = document.getElementsByName('warn')[1];
			let oSpans = [...oSpan.children];
			let eles = [...oPw.offsetParent.children];
			
			//实时判断输入结果
			oPw.oninput = function() {
				let val = oPw.value;
				let num = 0;

				//重置password的状态
				// me.judgeArr[oPw.getAttribute('id')] = 0;
				//判断内容是否为空
				if (!me.blur(oPw, eles)) return;
				//获取reg验证结果
				if (me.reg(regLen, val)) {
					me.modifyState_true(eles);
					me.judgeArr[oPw.getAttribute('id')] = true;
					regArr.forEach(reg => {
						if (me.reg(reg, val))
							num++;
					});
				}

				//判断密码强度
				if (num) {
					me.setDisplay(oSpan,'block');
					oSpans.forEach((it, i) => {
						if (i == 3) {
							it.style = 'position:relative;display:inline-block;float: left;top: 0;line-height: 14px;';
							it.innerHTML = warnArr[num - 1];
						} else {
							it.style = 'float: left;position:relative;display:inline-block;width: 22px;height:10px;top: 0;margin:0;margin-left:3px;padding:2px 0';

							if (i < num) {
								it.style.background = '#ff3600';
							} else {
								it.style.background = '#d6d6d6';
							}
						}
					});
				}

				oPw.onblur = function() {
					if(val.length < 6) {
						me.modifyState_false(eles);
						// oSpan.style.
						// oSpans[3]
					}
				}
			}
		},
		//手机验证
		tel: function() {
			let me = this;
			let oTel = document.getElementById('tel');
			let oSpan = document.getElementsByName('warn')[0];

			oTel.onblur = function() {
				let telNum = oTel.value;
				let eles = [...oTel.offsetParent.children];
				let reg = "^1[3|5|7|8]([0-9]){9}$";
				let regResult = false;

				//判断内容是否为空
				if (!me.blur(oTel, eles)) 
					return;
				//获取reg验证结果
				regResult = me.reg(reg, oTel.value);
				//根据验证结果修改样式
				
				if (regResult) {
					//ajax判断
					me.modifyState(eles);
				} else {
					me.setDisplay(oSpan,'block');
					oSpan.innerHTML = '手机格式不正确，请重新输入';
				}
			}
		},
		//根据若正则结果为true修改样式
		modifyState_true: function(items) {
			items.forEach(item => {
				if (item.getAttribute('name') == 'yz') {
					thie.setDisplay(item,block);
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
				item.onfocus = function() {
					let oHint = document.querySelectorAll('table span[name="hint"]')[i];
					me.displayNo([...item.offsetParent.children]);
					me.setDisplay(oHint,'block');
					item.style = 'border: 1px solid #969696;color: #505050';
				}
			});
		},
		inputBlur: function(item) {
			item.style = 'border: 1px solid #e6e6e6;color: #333';
		},
		//失去焦点  判断内容和验证reg
		//对象，对象父元素的所有子元素，正则，index
		blur: function(inp, items) {
			console.log(inp)
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