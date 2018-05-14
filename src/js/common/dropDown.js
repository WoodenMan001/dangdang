/*
* @Author: ljgoh
* @Date:   2018-05-11 09:24:49
* @Last Modified by:   WoodenMan001
* @Last Modified time: 2018-05-14 14:18:11
*/
define([],function(){
	return {
		mouseover:function(classArr){
			let dropdownLis = [...document.querySelectorAll('.dropDown_obj')];
			
			dropdownLis.forEach(function(item) {
				item.onmouseover = function(ev) {
					let dropDown = item.children[0].children[0];
					item.children[1].style.display = 'block';
					dropDown.className = classArr[0];
					item.onmouseout = function(ev) {
						item.children[1].style.display = 'none';
						dropDown.className = classArr[1];
					}
				}

			});
		}
	}
});