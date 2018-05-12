/*
* @Author: ljgoh
* @Date:   2018-05-11 09:24:49
* @Last Modified by:   ljgoh
* @Last Modified time: 2018-05-11 09:43:59
*/
define([],function(){
	return {
		mouseover:function(){
			let dropdownLis = [...document.querySelectorAll('li.icon')];

			dropdownLis.forEach(function(item) {
				item.onmouseover = function(ev) {
					item.children[1].style.display = 'block';
					item.children[0].children[0].className = 'fa fa-sort-asc';
					item.children[0].children[0].style.top = '3px';
					item.onmouseout = function(ev) {
						item.children[1].style.display = 'none';
						item.children[0].children[0].className = 'fa fa-sort-desc';
						item.children[0].children[0].style.top = '-3px';
					}
				}

			});
		}
	}
});