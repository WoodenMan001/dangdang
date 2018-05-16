/*
* @Author: WoodenMan001
* @Date:   2018-05-14 15:05:04
* @Last Modified by:   WoodenMan001
* @Last Modified time: 2018-05-15 20:59:14
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


	//tab切换
	function tab(tabBox) {
		console.log(111,tabBox,tabBox.find('.tab_qh_t'))
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