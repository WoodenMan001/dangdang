/*
* @Author: WoodenMan001
* @Date:   2018-05-14 15:05:04
* @Last Modified by:   WoodenMan001
* @Last Modified time: 2018-05-17 14:54:37
*/
;(function() {
	let $addArr = $(".head_nav_address >.drop-down")[0];
			//收缩按钮
	let $oSelect = $('.select');
	let $search_all_category  = $('#search_all_category');
	let $dropdownLis = $('.dropDown_obj');//下拉框
	let $label_key = $('#label_key')[0];
	let $search_input = $('#key_S')[0];
	let $nav_2_ul = $('.new_pub_nav');
	selectfn($oSelect,$search_all_category);

	//鼠标经过显示隐藏下拉框
	dropDown($dropdownLis,["fa fa-angle-up","fa fa-angle-down"]);
	setNav($nav_2_ul);
	tab($('.tab_qh'));
	stairsFn();
	goodsClick();
	//楼梯
	function stairsFn(){
		let objHeiArr = ['647','1190','1770','2290', '2602',];
		let oBox = $('.box .con')[0];
		let screenList = $('.box .fix_screen_list li ');
		let isfinish = true;

		$(screenList).each(function(i,item) {
			//li标签 鼠标移入 移出  点击事件
			$(item).mouseover(function() {
				$(item).addClass('on');
			});
			$(item).mouseout(function() {
				$(item).removeClass('on');
			});
			$(item).click(function() {
				// if(isfinish){
				// 	isfinish = false;
				// 	let num = ($(document).scrollTop()-objHeiArr[i])/10*.8;
				// 	$(document)[0].everyTime('1s',function(){
				// 		let topnum = $(document).scrollTop()+num;
				// 		if(topnum >= objHeiArr[i]-20 || topnum <= objHeiArr[i]+20 ){
				// 			topnum = objHeiArr[i];
				// 		}
				// 		$(document).scrollTop(topnum)
				// 	});
				// }
				$(document).scrollTop(objHeiArr[i])
			});
		});


		//滚动条拉动事件
		$(document).scroll(function(){
			let screenList = $('.box .fix_screen_list li ');
			$(objHeiArr).each(function(i,item) {

				if($(document).scrollTop() >= item 
					&& (i+1 ==objHeiArr.length || $(document).scrollTop() < objHeiArr[i+1])) {
					$(screenList).eq(i).addClass('current');
					$(screenList).eq(i).siblings('li').removeClass('current');
				}
			})
		});
	}
	//点击商品，跳转详情页
	function goodsClick() {
		let box = $('#indexreco');
		$(box).on('click','li',function(){
			let index = $(this).index();
			console.log($(this))
			let sid = $(this).attr('sid');//获取商品sid
			$(window).attr('location','http://localhost/project/dangdang/src/details?sid='+sid);
		});
	}

	//tab切换
	function tab(tabBox) {
		let tabLi  = tabBox.find('.tab_qh_t >li');
		let tabCont = tabBox.find('.tab_qh_c >div');

		tabLi.each(function(i){
			$(this).click(function(index) {
				$(this).siblings('li').removeClass('on');
				$(this).addClass('on'); 

				$(tabCont[i]).css('display','block');
				$(tabCont[i]).siblings('div').css('display','none');
			});
		})

	}

	//三级导航
	function setNav(n$av_2_ul) {
		let timer;
		$nav_2_ul.on('mouseover','li',function() {
			let index = $(this).index();
			let $oDiv = $('.new_pub_nav_shadow').find('div.new_pub_nav_pop').eq(index);
			
			$oDiv.show();
		});

		$nav_2_ul.on('mouseout','li',function() {
			let index = $(this).index();
			let $oDiv = $('.new_pub_nav_shadow').find('div.new_pub_nav_pop').eq(index);
			
			$oDiv.hide();			
		});
	}

	//搜索框按钮  下拉选择框  显示/隐藏事件
	function selectfn($onObj,$obj) {
		$onObj.mouseover(function() {
			$obj.show();//css('display','block');
			$onObj.mouseout(function() {
				$obj.hide();//css('display','none');
			});
		});
	}
	//鼠标经过下拉事件
	function dropDown($dropdownLis,classArr){
		$dropdownLis.each(function() {
			$(this).mouseover(function() {
				let $oI = $(this).find('a>i').eq(0);
				let $dropDown = $(this).find('.drop-down').eq(0);
				
				$dropDown.show();
				$oI.removeClass(classArr[1]);
				$oI.addClass(classArr[0]);
				$(this).mouseout(function() {
					$dropDown.hide();
					$oI.removeClass(classArr[0]);
					$oI.addClass(classArr[1]);
				});
			});
		});
	}

})();