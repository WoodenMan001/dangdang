/*
 * @Author: ljgoh
 * @Date:   2018-05-11 15:01:29
 * @Last Modified by:   WoodenMan001
 * @Last Modified time: 2018-05-16 15:52:58
 */
define([], function() {
	return {
		judgeArr: {},
		isClick: false,
		//表单验证
		formValidation: function($) {
			//配置验证项钥匙
			let inputs = $('table input');
			$(inputs).each((i,item) => {
				this.judgeArr[$(item).attr('id')] = false;
			});
			//协议默认勾选
			this.judgeArr['check'] = true;
			//添加得到焦点事件
			this.focus($,inputs.slice(0,inputs.length-1));
			//验证手机号码
			this.tel($);

			//密码验证
			this.password($);
			//二次密码
			this.repassword($);
			//验证码
			this.identifyingCode($);
			//复选框点击事件
			this.check($);
			//按钮
			this.btn($);

		},
		//复选框
		check: function($) {
			let me = this;
			let oCheck = $('#check');
			let warn = $('#check').siblings('[name="warn"]')[0];
			
			$(oCheck).click(function() {
				if(!$(oCheck).is(":checked")) {
					$(warn).css('display','block');
				} else {
					$(warn).css('display','none');
				}
			});
		},
		//点击按钮，触发所有input的验证事件
		btn: function($) {
			let me = this;
			let btn = $('#btn');
			let inputs = $('input');
			
			$(btn).click(function() {
				$(inputs).each((i,item) => {
					me.isClick = true;
					if(i != inputs.length - 1) {
						$(item).blur();

						let warn = $(item).siblings()[1];
						if($(item).attr('id') == 'password') { 
							$(warn).text('密码不能为空');
						}
					}
				});
				me.isClick = false;
				let isTrue = true;
				console.log($(me.judgeArr))
				$.each(me.judgeArr,function(i,item){
					if(item == false) isTrue = false;
				});

				if(isTrue){
					me.register_ajax($);
				}
			});
		},
		register_ajax: function($) {
			let me = this;
			let $password = $('#password').val();
			let $username = $('#tel').val();

			$.post('http://localhost/project/dangdang/src/php/register.php'
					,{'username':$username,'password':$password}
					,function(data){
						if(data==1){
							$.cookie("username",$username);
							$.cookie("password",$password);
							alert('注册成功'+data);

							var timer=setInterval(function(){
				                var $t=$('#win strong').text();
				                $t--;
				                if($t<0){
				                  clearInterval(timer);
				                  $(window).attr('location','http://localhost/project/dangdang/src/index.html');
				                }else{
				                  $('#win strong').text($t);
				                }     
				              },1000)

						} else {
							alert('该用户已被注册'+data)
						}
					});


		},
		//验证码
		identifyingCode: function($) {
			let me = this;
			let oInput = $('#identifyingCode');
			let eles = $(oInput).siblings();
			let warn = eles[3];

			$(oInput).blur(function() {
				let codeCk = $.cookie('codeStr').toLowerCase();//获取cookie中存储的code值
				let val = $(oInput).val().toLowerCase();

				if (!me.valIsNull($,oInput, eles) && !me.isClick) 
					return;

				if(val != codeCk) {
					$(warn).css('display',"block");
					$(warn).text('图形验证码输入错误，请重新输入');
					me.modifyState_false($,eles);
				} else {
					me.judgeArr[oInput.attr('id')] = true;
					me.modifyState_true($,eles);
				}
			});
		},
		//密码二次验证
		repassword: function($) {
			let me = this;
			let oInput = $('#repassword');
			let eles = $(oInput).siblings();
			let warn = eles[1];

			$(oInput).blur(function() {
				let val = $(oInput).val();
				let oPwV = $('#password').val();
				if (!me.valIsNull($,oInput, eles) && !me.isClick) 
					return;

				//判断两次密码是否一致
				if(val != oPwV || me.isClick) {
					$(warn).css({
						'display':"block",
						'color': 'red'
					});
					

					me.modifyState_false($,eles);
					if(val== '' || val.length == 0) {
						$(warn).text('登入密码不能为空');
					} else if(val != oPwV) {
						$(warn).text('两次输入的密码不一致，请重新输入');
					} else {
						$(warn).text('');
						me.judgeArr[oInput.attr('id')] = true;
						me.modifyState_true($,eles);
					}
				} else {
					me.judgeArr[oInput.attr('id')] = true;
					me.modifyState_true($,eles);
				}
			});
		},
		//密码验证
		password: function($) {
			let me = this;
			//提示语句
			let warnArr = ['密码过于简单', '试试字母、符号、数字的组合更安全', '密码设置安全，放心使用']
			let regLen = '^[0-9a-zA-Z]{6,20}$';
			let regArr = ['[0-9]', '[a-z]', '[A-Z]'];
			let colorArr = ['#ff3600','#ffc000','#71b300'];
			let oPw = $('#password');
			let warnSpan = $('#password +span')[0];
			let oSpan = $('.intensity')[0];
			let oSpans = $(oSpan).children();
			let eles = $(oPw).siblings();
			let upperCaseSpan = $('span.upperCase')[0];
			let num = 0;
			//实时判断输入结果
			$(oPw).bind('input propertychange', function() {
				let val = $(oPw).val();
				let lastValCode = '';
				num = 0;

				//判断内容是否为空
				if (!me.valIsNull($,oPw, eles)) return;
				//获取输入元素的charcodeAt
				lastValCode = val[val.length-1].charCodeAt();
				//获取reg验证结果
				if (me.reg(regLen, val)) {
					me.modifyState_true($,eles);
					me.judgeArr[oPw.attr('id')] = true;
					$(regArr).each((i,reg) => {
						if (me.reg(reg, val)){
							num++;
						}
					});
				}
				//提示大写字母
				if(65 <= lastValCode && lastValCode <= 90) {
					$(upperCaseSpan).css('display','block');
				} else if (num) {
					//判断密码强度
					$(oSpan).css('display','block');
					$(oSpans).each((i, it) => {
						if (i == 3) {
							$(it).css({
								'width':'200px',
								'position':'relative',
								'display':'inline-block',
								'float':'left',
								'top':'0',
								'line-height':'14px',
							})
							$(it).text(warnArr[num - 1])
						} else {
							if(i < num){
								$(it).css('background',colorArr[i]);
							} else {
								$(it).css('background','#d6d6d6');
							}
						}
					});
				}
			})
			//失去焦点，判断长度是否小于6
			
			$(oPw).blur(function() {
				//判断内容是否为空
				if (!me.valIsNull($,oPw, eles)  && !me.isClick) return;
				if($(oPw).val().length < 6) {
					$(warnSpan).css('display','block');
					$(warnSpan).text('密码长度6-20个字符，请重新输入')
					me.modifyState_false($,eles);
				} else {
					me.modifyState_true($,eles);
					$(oSpan).css("display","block");
				}
			});
		},
		//手机验证
		tel: function($) {
			let me = this;
			let reg = "^1[3|5|7|8]([0-9]){9}$";
			let oTel = $('#tel');
			let oSpan = $('[name="warn"]')[0];
			let eles = $(oTel).siblings();
			$(oTel).blur(function() {
				let telNum = oTel.val();
				let regResult = false;

				//判断内容是否为空
				if (!me.valIsNull($,oTel, eles) && !me.isClick) 
					return;
				//获取reg验证结果
				regResult = me.reg(reg, $(oTel).val());
				//根据验证结果修改样式
				if (regResult) {
					//ajax判断
					me.judgeArr[$(oTel).attr('id')] = true;
					me.modifyState_true($,eles);
				} else {
					$(oSpan).css('display','block');
					me.modifyState_false($,eles);
					$(oSpan).text('手机格式不正确，请重新输入');
				}
			});
		},
		//根据若正则结果为true修改样式
		modifyState_true: function($,items) {
			$(items).each((i,item) => {
				if ($(item).attr('name') == 'yz') {
					$(item).css('display',"block");
					$(item).removeClass('fa-times');
					$(item).addClass('fa-check');
				}
				if ($(item).attr('tagName') == 'INPUT') {
					$(item).css('borderColor','#969696');
					$(item).parent().css('color','#505050');
				}
			});
		},
		//根据若正则结果为false修改样式
		modifyState_false: function($,items) {
			this.isClick = false;
			$(items).each((i,item) => {
				if ($(item).attr('name') == 'yz') {
					$(item).css('display',"block");
					$(item).addClass('fa-times');
					$(item).removeClass('fa-check');
				}
				if ($(item).attr('tagName') == 'INPUT') {
					$(item).css('borderColor','red');
					$(item).parent().css('color','red');
				}
			});
		},
		//input获得焦点，则显示提示
		focus: function($,inputs) {
			const me = this;
			inputs.each((i, item) => {
				$(item).focus(function(){
					let oHint = $('table span[name="hint"]')[i];
					//隐藏所有span
					$(item).siblings('span,i').css('display','none');
					$(oHint).css('display','block');

					$(item).css({'border':'1px solid #969696','color':'#505050'});
				});
			});
		},
		//失去焦点之后将设置input样式
		inputBlur: function($,item) {
			$(item).css({
				'border':'1px solid #e6e6e6',
				'color':'#333'
			});
		},
		//失去焦点  判断内容和验证reg
		//对象，对象父元素的所有子元素，正则，index
		valIsNull: function($,inp, items) {
			let val = inp.val();
			this.displayNo($,items);
			if (val == '' || val.length == 0) {
				this.inputBlur($,inp);
				return false;
			} else {
				return true;
			}
		},
		//隐藏span和i
		displayNo: function($,items) {
			$(items).siblings("span,i").css('display','none');
		},
		//验证reg
		reg: function(regstr, val) {
			const reg = new RegExp(regstr, "g");
			return reg.test(val);
		}
	}
});