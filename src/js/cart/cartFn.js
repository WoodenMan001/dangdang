/*
* @Author: WoodenMan001
* @Date:   2018-05-20 15:23:07
* @Last Modified by:   WoodenMan001
* @Last Modified time: 2018-05-20 22:32:40
*/
define([], function (){
	return {
		init: function($) {
			this.sf($);
		},
		sf:function($) {
			let table =  $('#tables');
			$(table).on('click','tr .fn-count-tip .amount a',function(item) {
				let i = $(this).index();
				let numObj = $(this).siblings('input');
				let num = numObj.val();
				let ids = $.cookie('goodsids').split(';');
				let goodsNum = $.cookie('goodsNum').split(';');
				let sid = $(this).attr('sid');

				if($(this).attr('id') == 'addbtn') {
					num = parseInt(num)+1;
					if(num >= 100) {
						num = 99;
					}
				} 

				if ($(this).attr('id') == 'subbtn') {
					console.log(3131)
					num--;
					if(num <=0) {
						num = 0;
					}
				} 
				numObj.val(num);
				$(ids).each(function(a,id) {
					if(id == sid) {
						goodsNum[a] =  num;
						let newstr = '';

						$(goodsNum).each(function(index,num){
							if(index==0){
								newstr+= num;
							} else {
								newstr+=';' + num;
							}
						})
						$.cookie('goodsNum',newstr)
					}
				})
			});

			$(table).on('click','tr #scbtn',function(item) {
				let ids = $.cookie('goodsids').split(';');
				let num = $.cookie('goodsNum').split(';');

				console.log(ids,num)
				let that = this;
				$(ids).each(function(i,item){
					if(item==$(that).attr('sid')){
						ids.splice(i,1);
						num.splice(i,1);
						console.log(ids,num,12133)
					}
				})
				let i = $(this).index();
				let trs = $(this).parents('tr');
				console.log($(trs))
				$(trs).remove();
			});
		},
		addgoods: function($) {
			let showList = $('#showList');

			$(showList).on('mouseover','a.btn_add',function() {
				
			})
		}
	}
});