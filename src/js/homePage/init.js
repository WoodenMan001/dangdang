/*
* @Author: WoodenMan001
* @Date:   2018-05-14 15:05:04
* @Last Modified by:   WoodenMan001
* @Last Modified time: 2018-05-15 11:47:03
*/
define(['../common/common'],function(cm) {
	return {
		init: function($) {
			//地址下拉框
			let addArr = $(".head_nav_address >.drop-down");
			//收缩按钮
			let oSelect = $('.select');

			let search_all_category  = $('#search_all_category');
			console.log(addArr,oSelect,search_all_category)
			this.selectfn(oSelect,search_all_category)
		},
		selectfn:function(onObj,obj) {
			onObj.onmouseover = function() {
				cm.displayFn(obj,'block');
				onObj.onmouseout = function() {
					cm.displayFn(obj,'none');
				}
			}
		}
	}
});