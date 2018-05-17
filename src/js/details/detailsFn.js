/*
* @Author: WoodenMan001
* @Date:   2018-05-17 14:43:38
* @Last Modified by:   WoodenMan001
* @Last Modified time: 2018-05-17 17:30:27
*/
define([], function (){
	return {
		init:function($) {
			//加减按钮方法
			this.algorithm($);
			//加入购物车
			this.add($);
			//轮播图
			this.lunbofn($);
			//放大镜 
			this.magni($);
		},
		magni:function($) {

		},
		lunbofn: function($) {
			let pre_slide = $('#pre_slide');
			let next_slide = $('#next_slide');
			let oul = $('#main-img-slider');

			//左边按钮点击
			this.leftbtnC($,pre_slide,oul);
			//右边按钮点击
			this.rightbtnC($,next_slide,oul);
		},
		rightbtnC:function($,next_slide,oul) {
			$(next_slide).on('click',function() {
				//获取5个li、ul的width和ul的left值
				let liw = ($(oul).find('li').first().width()+3)*5;
				let ulw = $(oul).width() - liw;
				let leftV = $(oul).css('left').substring(0,$(oul).css('left').length-2);
				let toLeft = parseInt(leftV)-parseInt(liw);
				//移动ul
				$(oul).animate({
					left: toLeft+'px'
				});
				//当ul移动到liw-ulw的时候，将其移动到
				if(toLeft == -ulw){
					$(oul).animate({
						left:-(liw)+'px'
					},0);
				}
			});
		},
		leftbtnC:function($,pre_slide,oul) {
			$(pre_slide).on('click',function() {
				//获取5个li、ul的width和ul的left值
				let liw = ($(oul).find('li').first().width()+3)*5;
				let ulw = $(oul).width() - liw;
				let leftV = $(oul).css('left').substring(0,$(oul).css('left').length-2);
				let toLeft = parseInt(leftV)+parseInt(liw);
				//移动ul
				$(oul).animate({
					left: toLeft+'px'
				});
				//当ul移动到0的时候，将其移动到
				if(toLeft == 0){
					$(oul).animate({
						left:-(ulw - liw)+'px'
					},0);
				}
			});
		},

		//加入购物车
		add: function($) {
			let btn = $('#part_buy_button');

			$(btn).click(function() {
				let user = $.cookie('username');
				let goodsid = $.cookie('goodsid');
				let num = $('#buy-num').val();

				if(!user) {
					alert('请先登入账号');
				}
				console.log(124234)
				$.post('http://localhost/project/dangdang/src/php/addshop.php'
						,{'goodsid':goodsid,'username':user,'num':num}
						,function(data){
							if(data){
								//获取数据，加载数据
								alert(data)

							} else {
								console.log(data,'222')
							}
						});
			})
		},
		//加减按钮
		algorithm: function($) {
			let num_add = $('#num_add');
			let num_del = $('#num_del');
			let buy_num = $('#buy-num');
			
			$(num_add).click(function() {
				let val = $(buy_num).val();
				
				$(buy_num).val(++val);
			});

			$(num_del).click(function() {
				let val = $(buy_num).val();
				if(val>1)
				$(buy_num).val(--val);
			});
		}
	}
});