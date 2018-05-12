/*
* @Author: ljgoh
* @Date:   2018-05-10 10:14:59
* @Last Modified by:   ljgoh
* @Last Modified time: 2018-05-10 10:35:36
*/
/*拼接属性*/
function objtostring(obj){
	var arr=[];
	for(var i in obj){
		arr.push(i +'='+ obj[i]);
	}
	return arr.join('&');
}
/**
 * ajax封装
 * @param  {[Object]} obj: {url:"",type:post|get,data:{},async:true|false} 
 * @return {[type]}     [description]:them:function,成功的回调函数，catch，失败的回调函数
 */
function ajax(obj){//obj:对象参数
	var promise=new Promise(function(resolve,reject){
		obj.type=obj.type||'get';//设置默认的请求方式
		obj.data=obj.data||'';//设置默认数据为空
		
		var ajax=new XMLHttpRequest();
		
		//接口地址的值为空     obj.url不存在。
		if(obj.url==''){
			throw new Error('接口地址不能为空');
		}
		
		//判断传入的到底是字符串还是对象。
		if(typeof obj.data==='object' && !Array.isArray(obj.data)){
			obj.data=objtostring(obj.data);
		}else if(typeof obj.data==='string'){
			obj.data=obj.data;
		}else{
			throw new Error('数据格式有误');
		}
		
		//检测是否异步
		if(obj.async==false){
			obj.async=false;
		}else{
			obj.async=true;
		}
		
		//检测请求的方式为get，同时传输数据
		if(obj.type=='get' && obj.data){
			obj.url+='?'+obj.data;//接口地址拼接数据
		}
		
		ajax.open(obj.type,obj.url,obj.async);
		
		//检测请求的方式post，同时传输数据。
		if(obj.type=='post'){
			ajax.setRequestHeader('content-type','application/x-www-form-urlencoded');
			ajax.send(obj.data);
		}else{
			ajax.send();
		}
		
		if(obj.async==false){//同步处理
			if(ajax.status==200){//接口地址正确
				obj.success&&obj.success(ajax.responseText);
			}else{
				obj.error&&obj.error('接口地址错误：'+ajax.status);
			}
		}else{
			ajax.onreadystatechange=function(){//就绪状态码发生改变触发此事件
				if(ajax.readyState==4){//响应完成，进行交互操作
					if(ajax.status==200){//接口地址正确
						resolve(ajax.responseText);
					}else{
						reject('接口地址错误：'+ajax.status);
					}
				}
			}
		}
	});
	return promise;
}

