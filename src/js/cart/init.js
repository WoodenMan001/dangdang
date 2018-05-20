/*
* @Author: WoodenMan001
* @Date:   2018-05-18 17:43:05
* @Last Modified by:   WoodenMan001
* @Last Modified time: 2018-05-20 22:43:46
*/
define(['../common/address'], function (ad){
	return {
		datalist:[],
		init:function($) {
			let me = this;
			let box = $('#box');
			let empty = $('#empty');
			let username = $.cookie('username');
			if(username == undefined) {
				$(box).hide();
				$(empty).show();
			} else {
				$(empty).hide();
				$(box).show();
				let address = ad.addres;
				$.post(address+'php/cart.php'
						,{'sid':123,'user':username}
						,function(data){
							if(data){
								//获取数据，加载数据
								console.log(data)
								let list = $.parseJSON(data);
								me.getgoods($,list);
								me.setgoodsList($,list);

							} else {
								console.log(data,'222')
							}
						});
			}

			this.btnclick($);
		},
		setgoodsList: function($,list) {
			let str = '';
			let showList = $('#showList');

			$(list.goodslist).each(function(i,item){
				str += `<li >
	    						<a  class="gpic" >
	    							<img src="${item.url}" width="150" height="150">
	    						</a>
	    						<p>
	    							<a >${item.name}</a>
	    						</p>
	    						<p>
	    							<span class="price">¥${item.price}</span>
	    						</p>
	    						<a class="btn_add fn-btn-add" sid ='${item.sid}'>加入购物车</a>
	    						<p class="pl">
	    							<a >已有<span>285973</span>位用户评价</a>
	    						</p>
	    					</li>`;
			});
			$(str).appendTo($(showList));



		},
		btnclick:function($) {
			let btn = $('.btn');
			let address = ad.addres;
			$(btn).click(function() {
				$(window).attr('location',address+'login.html');
			})
		},
		getgoods: function($,goods) {
			let me = this;
			let sidarr = $.cookie('goodsids');
			let numarr = $.cookie('goodsNum'); 
			let username = $.cookie('username');
			let str = 'select * from goods where ';
			if(sidarr!=undefined && numarr!=undefined) {
				console.log(sidarr,numarr,123123)
				sidarr = sidarr.split(';');
				numarr = numarr.split(';');
			}else {
				sidarr = [];
				numarr = [];
			}
			$(goods.goodsid).each(function(i,item){
				let sidInde = sidarr.length;
				$(sidarr).each(function(j,sid){
					if(sid == item.goodsid){
						sidInde = j;
					}
				})
				if(sidInde == sidarr.length){
					console.log(sidInde,numarr,sidarr,item.num,31312)
					sidarr.push(item.goodsid);
					numarr.push(item.num);
				} 
				
				if(i == 0) {
					str += `sid= '${item.goodsid}'`;
				} else {
					str += `or sid= '${item.goodsid}'`;
				}
			});
			$.cookie('goodsids',sidarr.join(';'));
			$.cookie('goodsNum',numarr.join(';'));

			let address = ad.addres;
			$.post(address+'php/cart.php'
						,{'str':str,'user':username}
						,function(data){
							if(data){
								//获取数据，加载数据
								let list = $.parseJSON(data);
								me.loadData($,list);

							} else {
								console.log(data,'222')
							}
						});
		},
		loadData: function($,list) {
			let sidarr = $.cookie('goodsids').split(';');
			let numarr = $.cookie('goodsNum').split(';'); 
			let box = $('.shopping_list table');
			let ospan = $('#total');
			let data = list.goods;
			let str = '';
			let totalprice = 1;
			$(data).each(function(i,item) {
				let num = 1;
				if(sidarr.length != 0) {
					$(sidarr).each(function(j,sid) {
						if(sid == item.sid) {
							num = numarr[j];
						}
					});
				}
				let total = item.price*num;
				totalprice += total;
				str += `<tr class="bb_none tree_first "> 
							<td class="row1"> 
								<a class="fn-product-check checknow ">选中</a> 
							</td> 
							<td class="row_img"> 
								<a> 
									<img src="${item.url}" height="80"> 
								</a> 
								<div style="display: none;" class="img_big">
									<a>
										<img src="${item.url}">
									</a>
									<span class="arrow">
										
									</span>
								</div> 
							</td> 
							<td class="row_name">
							 <div class="name"> 
							 	<a style="word-break:break-all;  word-wrap:break-word;">
								 	${item.name}
								</a>
							</div>      
							</td> 
							<td class="row3">
								<span class="price_n">¥${item.price}</span>
								<div class="low_price fn-up" style="display:none;">
									优惠价格<em></em>
									<div class="low_pop" style="display:none">
										<ul>
											<li>· 限时抢促销优惠22.70元</li>
										</ul>
									</div>
								</div>
								<span class="red">限时抢</span>
							</td> 
							<td class="fn-count-tip row3 ">
								<span class="amount fn-updatecount ">
									<a dd_name="减少数量" id='subbtn' sid =${item.sid}>-</a>
									<input value="${num}" type="text" id='numinput' sid =${item.sid}>
									<a dd_name="增加数量" id='addbtn' sid =${item.sid}>+</a>
								</span>
							</td> 
							<td class="row4">
								<span class="red">¥${total}</span>
							</td> 
							<td class="row5 ">
								<span>
									<a>移入收藏</a>
								</span>
								<span>
									<a href="javascript:void(0)" id='scbtn' sid=${item.sid}>删除</a>
								</span>
							</td> 
						</tr>`;
			});
			$(str).appendTo($(box));
			$(ospan).text('￥'+totalprice);
		},
		ajaxfn:function($,obj,fn) {
			let me = this;
			let address = ad.addres;
			$.post(address+'php/cart.php'
						,obj
						,function(data){
							if(data){
								//获取数据，加载数据
								me.datalist = $.parseJSON(data);

							} else {
								console.log(data,'222')
							}
						});
		}
	}
});