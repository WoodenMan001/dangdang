/*
* @Author: WoodenMan001
* @Date:   2018-05-17 14:43:38
* @Last Modified by:   WoodenMan001
* @Last Modified time: 2018-05-17 21:11:20
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
		//放大镜效果
		magni:function($) {
			//大图 小图  大框  小框  的宽高都相同
			let me = this;
			let box = $('#largePicDiv');
			let moveMask  = $('#moveMask');//小框
			let detailPicDiv = $('#detailPicDiv');//大框
			const smallBoxw = $(moveMask).width();//小框width
			const bigBoxw =  $(detailPicDiv).width();

			$(box).on('mouseover',function() {
				let largePic = $('#largePic');//小图
				let detailPic = $('#detailPic');//大图
				let smallw = $(largePic).width();
				let bigw =  $(detailPic).width();

				//求比例
				let x = bigw/smallw;

				//设置小框宽高,并显示小框
				let w = bigBoxw/x;
				$(moveMask).css({
					"width": w+'px',
					"height": w+'px',
					'display':'block'
				});
				//显示大图
				$(detailPicDiv).css('display','block');

				$(window).on('mousemove',function(ev) {
					ev=ev||window.event;
			      	let ele=ev.target||ev.srcElement;
			      	
			      	//设置小框坐标
			      	let mouseX= ev.pageX - $(largePic).offset().left - w/2;
			      	let mouseY= ev.pageY - $(largePic).offset().top - w/2;
			      	let mMBoxl = $(moveMask).position().left;
			      	let mMBoxt = $(moveMask).position().top;

			      	//判断小框相对于小图的left top值
			      	if(mouseX <= 0) {
			      		mouseX = 0;
			      	}
			      	if(mouseX >= smallw - w) {
			      		mouseX = smallw - w;
			      	}
			      	if(mouseY <= 0) {
			      		mouseY = 0;
			      	}
			      	if(mouseY >= smallw - w) {
			      		mouseY = smallw - w;
			      	}
			      	//设置放大镜宽高,left和top
					$(moveMask).css({
						'left':mouseX+'px',
						'top':mouseY+'px',
					},200)
					//设置大图位置
					$(detailPic).css({
						'left':-mouseX*x+'px',
						'top':-mouseY*x+'px',
					},200)
				});

				$(box).on('mouseout',function() {
					$(moveMask).css('display','none');
					//显示大图
					$(detailPicDiv).css('display','none');
				});
			});
		},
		//轮播图
		lunbofn: function($) {
			let pre_slide = $('#pre_slide');
			let next_slide = $('#next_slide');
			let oul = $('#main-img-slider');

			//左边按钮点击
			this.leftbtnC($,pre_slide,oul);
			//右边按钮点击
			this.rightbtnC($,next_slide,oul);
			//轮播图点击图片，切换大图显示图片
			this.imgClick($,oul);
		},
		//轮播图点击图片，切换大图显示图片
		imgClick: function($,oul) {
			let largePic = $('#largePic');//小图
			let detailPic = $('#detailPic');//大图
			$('#main-img-slide').on('click','li img',function() {
				let src = $(this).attr('src');
				$(largePic).attr('src',src);
				$(detailPic).attr('src',src);
			});
		},
		//轮播图 右边按钮
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
		//轮播图 左边按钮
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