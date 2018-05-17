/*
* @Author: WoodenMan001
* @Date:   2018-05-15 14:53:59
* @Last Modified by:   WoodenMan001
* @Last Modified time: 2018-05-17 10:18:33
*/

;(function() {
	$.ajax({
	    url:'http://localhost/project/dangdang/src/php/homePage.php',
	    dataType:'json'
	  }).done(function(data){
		    console.log(data)
		    loading(data);
	  }).fail(function (jqXHR, textStatus, errorThrown) {
		    /*打印jqXHR对象的信息*/
		    console.log(jqXHR.responseText); //必要的时候编码一下:encodeURIComponent(jqXHR.responseText);
		    console.log(jqXHR.status);
		    console.log(jqXHR.readyState);
		    console.log(jqXHR.statusText);
		    /*打印其他两个参数的信息*/
		    console.log(textStatus);
		    console.log(errorThrown);
		});

	  //加载
	  function loading(list) {
	  		let list_nav = list.nav.sort((a,b) => {
				return a.sid-b.sid;
			});

	  		let list_lunbo = list.lunbo.sort((a,b) => {
				return a.sid-b.sid;
			});
			let list_miaosha = list.miaosha.sort((a,b) => {
				return a.sid-b.sid;
			});
			let list_goods = list.goods.sort((a,b) => {
				return a.sid-b.sid;
			});

	  		loading_nav(list_nav)
	  		loading_lunbo(list_lunbo);
	  		loading_miaosha(list_miaosha);
	  		loading_goods(list_goods);
	  }

	//商品列表
	function loading_goods(list) {
		$(list).each(function(){
			let oBox = $('#indexreco');
			let str = `<li sid = ${this.sid}>
	        			<a  class="pic">
	        				<img src="${this.url}" style="display: block;">
	        			</a>
	        			<p class="name">
	        				<a >${this.name}</a>
	        			</p>
	        			<p class="price">
	        				<span class="price_r">¥<span>${this.price}</span></span>
	        			</p>
	    			</li>`;
	    	$(str).appendTo(oBox);
		})
	}


	//秒杀
	function loading_miaosha(list) {
  		let oBox = $('.home_miaosha .list');

  		$(list).each(function(){
  			let str = `<div class="info" >
	            			<a class="pic">
	            				<img src=${this.url} alt="${this.name}">
	            			</a>
	            			<div class="line">
	            				<span style="width:${this.num}" class="miao_progress_bar"></span>
	            				<span class="num_bg"></span>
	            			</div>
	            			<div class="num">已秒杀${this.num}</div>
	            			<div class="name">
	            				<a >${this.name}</a>
	            			</div>
            				<div class="price">
            					秒杀价：¥<span>${this.price}</span>
            					<span class="del">${this.price_del}</span>
            				</div>`;

            $(str).appendTo(oBox);
  		});

  		console.log(list)
  }

  // 轮播图加载
  function loading_lunbo(list_lunbo) {
  		let lunbo_ul = $('.lunbo_ul');
  		let lunbo_tab = $('.lunbo_tab');
  		$(list_lunbo).each(function(i){
  			let oli = '';
  			let oIndexLi = '';
  			let url = list_lunbo[i].url;
  			oli = `
					<li>
                    	<a class=" pic" >
                    		<img src="${url}" >
                    	</a> 
                    </li>`;

             if(i==0){
            	oIndexLi = `<li class="on">${i}</li>`
             } else {
            	oIndexLi = `<li class="">${i}</li>`
             }

            lunbo_ul.each(function(i){
            	var box = $(oli); 
            	var tab = $(oIndexLi);
				box.appendTo($(this))
				tab.appendTo($(lunbo_tab)[i])
            })
  		})
  }



  //导航拼接
  function loading_nav(list_nav){
  	
  	$(list_nav).each(function(i){
  		//二级导航
		let val = $(this)[0].val; 
  		if($(this)[0].name == 'nav_2'){		
			pjNav_2(val,i);
  		}else if($(this)[0].name == 'nav_3') {
  			pjNav_3(val,$(this)[0].cls);
  		}
  		
  	})
  }

  //三级导航
  function pjNav_3(val,cls) {
  	let oBox = $('.new_pub_nav_pop .left_box')[0];
	let $oAStr = '';
	let oH = '';
	let str='';
	let arr = new Array();
	arr = String(val).split(';');

  	if(cls && cls=='pop'){
		$(arr).each(function() {
			$oAStr += `<a   dd_name="图书馆" class="">${this}</a>`;
		});

		//拼接li标签
		str = `<div class="new_pub_pop_guan" >
					${$oAStr}
				</div>`
        var box = $(str); 
		box.appendTo(oBox)
  	} else{
		$(arr).each(function(i) {
			if(i==0){
				oH = `<h4>${this}</h4>`
			} else {
				$oAStr += `<a href="" style="color:#FF0000;">${this}&nbsp;&gt;&gt;</a>`;
			}
		});

		// //拼接li标签
		str = `<ul class="left">
						<li class="brand_list" >
							${oH}
							<div class="ph" >
								${$oAStr}
							</div>
						</li>
					</ul>`
  	}
    var box = $(str); 
	box.appendTo(oBox)
  }

  //二级导航拼接加载
  function pjNav_2(val,i) {
  	let $oNav = $('#menulist_content')[0];//二级导航ul
  	let $oAStr = '';
	let arr = new Array();
	arr = String(val).split('&');

	$(arr).each(function() {
		$oAStr += `<a name="newcate1" href="" >${this}</a>`;
		if(arr.length = i+1) {
			$oAStr += '、'
		}
	});

	//拼接li标签
	let str = `<li class="n_b" index =${i}>
        <span class="nav" id="categoryh_1">
        	${$oAStr}
        </span>
        <span class="sign"></span>
    </li>`
    var box = $(str); 
	box.appendTo($oNav)
  }

	  
})();