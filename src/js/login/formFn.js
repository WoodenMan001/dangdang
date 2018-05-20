/*
* @Author: WoodenMan001
* @Date:   2018-05-16 16:53:53
* @Last Modified by:   WoodenMan001
* @Last Modified time: 2018-05-20 23:02:46
*/
define(['../common/address'], function (ad){
	return {
		main: function($){
			//提示span点击事件
			this.placeholderFn($);
			
			//得到焦点事件
			this.oInputFocus($);

			//失去焦点
			this.oInputBlur($);

			//验证图片
			this.setImg($);

			//表单验证
			this.login($);

		},
		login: function($) {
			let me = this;
			let isTrue = false;
			$('p.btn').on('click','#submitLoginBtn',function() {
				let btn = $('p.btn').find('#submitLoginBtn')[0]; 
				let oInputs = $('input.oInput');
				let oimg = $('#J_rotateVcodeWrap').find('.Rotate-background');
				//验证input是否为空
				$(oInputs).each(function(i,item) {
					if($(item).val() ==''){
						if(item) return;
						let oDiv = $(item).parent();
						let tips = $(oDiv).next('p');
						let tipSpan = $(tips).children('.tip')[0];
						$(oDiv).css('border','1px solid red')
						$(tipSpan).show();

						$(tipSpan).css('color','red');
						if($(item).attr('id') == 'txtUsername') {
							$(tipSpan).text('请填写邮箱/昵称/手机号码');
						} else {
							$(tipSpan).text('请填写长度为6-20个字符的密码');
						}
						isTrue = true;
					}
				})
				//验证图片是否转到0
				$(oimg).each(function(i,o) {
					let positionArr = $(o).css('background-position').split('px');
					if(positionArr[1] != 0) {
						isTrue = true;
					}
				});

				if(!isTrue) {
					me.loginConn($);
				} 
			});

		},
		loginConn: function($) {
			console.log(111)
			let username = $('#txtUsername').val();
			let password = $('#txtPassword').val();
			//ajax
			let address = ad.addres;
			$.post(address+'php/login.php'
					,{'username':username,'password':password}
					,function(data){
						if(data==1){
							//判断是否将账号密码存入cookie
							let check = $('#autologin')[0];
							if($(check).is(":checked")){
								$.cookie("username",username);
								$.cookie("password",password);
							} else {
								$.cookie("username",'');
								$.cookie("password",'');
							}
							
							alert('登入成功'+data);

							var timer=setInterval(function(){
				                var $t=$('#win strong').text();
				                $t--;
				                if($t<0){
				                  clearInterval(timer);
				                  $(window).attr('location',address+'index.html');
				                }else{
				                  $('#win strong').text($t);
				                }     
				              },1000)

						} else {
							$(window).attr('location',address+'login.html');
							alert('账号密码错误，请重试')
						}
					});
			
		},
		//点击图片图片旋转
		setImg: function($) {
			let obox = $('#J_rotateVcodeWrap');

			 $('#J_rotateVcodeWrap').on('click','.Rotate-background',function() {
			 	let index = $(this).index();
			 	let item = $('#J_rotateVcodeWrap').find('.Rotate-background').eq(index-1);
			 	let positionArr = $(item).css('background-position').split('px');
			 	
			 	if(positionArr[1]-76 == -304){
			 		$(item).css('background-position',positionArr[0]+'px 0px');
			 	} else {
			 		$(item).css('background-position',positionArr[0]+'px   '+(positionArr[1]-76)+'px');
			 	}
			 	
			 })
		},
		oInputBlur:function($){
			let oInputs = $('input.oInput');

			$(oInputs).each(function(i,item) { 
				$(item).blur(function() {
					let oDiv = $(item).parent();
					let tips = $(oDiv).next('p');
					let tipSpan = $(tips).children('.tip')[0];
					$(oDiv).css('border','1px solid #e6e6e6')
					$(tipSpan).hide();
				});
			})
		},
		oInputFocus: function($) {
			let oInputs = $('input.oInput');

			$(oInputs).each(function(i,item) { 
				$(item).focus(function() {
					let oDiv = $(item).parent();
					let tips = $(oDiv).next('p');
					let tipSpan = $(tips).children('.tip')[0];
					$(oDiv).css('border','1px solid #959595')
					$(tipSpan).show();

					if($(item).attr('id') == 'txtUsername') {
						$(tipSpan).text('请填写邮箱/昵称/手机号码');
					} else {
						$(tipSpan).text('请填写长度为6-20个字符的密码');
					}
				});
			})
		},
		placeholderFn: function($){
			let placeholders = $('.placeholder');

			$(placeholders).each(function(i,item) {
				$(item).click(function() {
					let oInput = $(item).siblings('input.oInput')[0];

					$(item).hide();
					$(oInput).focus();				
				});
			})
		}
	}
});