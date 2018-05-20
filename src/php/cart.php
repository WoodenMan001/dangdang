<?php
	require "connectSql.php"; 

	if(isset($_POST['user'])){
	    $username =$_POST['user'];
	} else {
		exit('非法操作');
	}

	$arr=array();
	$goods_arr=array();
	$goods=array();
	$query_goods = 'select * from goods';
	$query="select * from shoppingcart where  username='$username'";
	$result=mysql_query($query);
	$result_goods = mysql_query($query_goods);

	for($i=0;$i<mysql_num_rows($result);$i++){
		array_push($arr,mysql_fetch_array($result,MYSQL_ASSOC));
	}

	for($i=0;$i<mysql_num_rows($result_goods);$i++){
		array_push($goods,mysql_fetch_array($result_goods,MYSQL_ASSOC));
	}

	if(isset($_POST['str'])){
	    $str = $_POST['str'];
		$result_goods=mysql_query($str);
		for($i=0;$i<mysql_num_rows($result_goods);$i++){
			array_push($goods_arr,mysql_fetch_array($result_goods,MYSQL_ASSOC));
		}
	}
	
	//定义类
	class dangdang {
		
	};
	$data=new dangdang();
	$data->goodsid=$arr;
	$data->goods=$goods_arr;
	$data->goodslist=$goods;
	echo json_encode($data);
	
?>