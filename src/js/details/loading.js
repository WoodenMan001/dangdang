/*
* @Author: WoodenMan001
* @Date:   2018-05-17 09:58:16
* @Last Modified by:   WoodenMan001
* @Last Modified time: 2018-05-17 15:26:17
*/
define([], function (){
	return {
		init : function($) {
			let me = this;
			let href = $(window).attr('location').href;
			let sid = href.split('=')[1];
			console.log(sid)
			if(sid != 2 && sid != 6){
				sid = 6;
			}
			
			$.post('http://localhost/project/dangdang/src/php/details.php'
					,{'goodsid':sid}
					,function(data){
						if(data){
							//获取数据，加载数据
							$.cookie('goodsid',sid)
							me.loadingData($,$.parseJSON(data))

						} else {
							console.log(data,'222')
						}
					});
		},
		loadingData:function($,data) {
			let goods = data.goods[0];
			
			let titleObj = $('[name="goodsName"]');
			let nameObj = $('.head_title_name');
			let priceObj = $('#dd-price');
			
			//注释
			$(nameObj).text(goods.exegesis)
			//题目
			$(titleObj).each(function(i,item) {
				$(item).text(goods.title);
			});
			//价格
			$(priceObj).text(goods.price)
			this.lunbofn($,goods);
		},
		lunbofn:function($,goods) {
			let largePic = $('#largePic');
			let detailPicDiv = $('#detailPicDiv');
			let mainImgSlider = $('#main-img-slider');
			let imgArr = goods.url.split(';');
			let str = '';
			let preImgStr = '';
			let oLiStr = '';
			let onullLi = '';
			let sum = imgArr.length%5;
			//图片 轮播图
			$(largePic).attr('src',imgArr[0]);
			$(detailPicDiv).attr('src',imgArr[0]);
			for (var i = 0; i <5 - sum; i++) {
				onullLi += `<li style="overflow: hidden; float: left; width: 56px; height: 56px;"></li>`;
			}
			$(imgArr).each(function(i,item) {
				oLiStr += `<li style="overflow: hidden; float: left; width: 56px; height: 56px;">
				        		<a href="javascript:;">
				        			<img src="${item}">
				        		</a>
				        	</li>`;
				if(i==4){
					preImgStr = onullLi + oLiStr;
				}
				if(i>imgArr.length - 1 - sum) {
					str += `<li style="overflow: hidden; float: left; width: 56px; height: 56px;">
				        		<a href="javascript:;">
				        			<img src="${item}">
				        		</a>
				        	</li>`;
				}
			});
			$(str+onullLi+oLiStr+preImgStr).appendTo($(mainImgSlider));
		}
	}
});


