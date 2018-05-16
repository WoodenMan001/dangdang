<?php


require "connectSql.php"; 
	$query_nav = 'select * from nav';
	$query_lunbo = 'select * from lunbo';
	$query_miaosha = 'select * from miaosha';
	$query_goods = 'select * from goods';


	$result_nav = mysql_query($query_nav);
	$result_lunbo = mysql_query($query_lunbo);
	$result_miaosha = mysql_query($query_miaosha);
	$result_goods = mysql_query($query_goods);

	$navs=array();
	$lunbo=array();
	$miaosha=array();
	$goods=array();

	for($i=0;$i<mysql_num_rows($result_nav);$i++){
		array_push($navs,mysql_fetch_array($result_nav,MYSQL_ASSOC));
	}

	for($i=0;$i<mysql_num_rows($result_lunbo);$i++){
		array_push($lunbo,mysql_fetch_array($result_lunbo,MYSQL_ASSOC));
	}

	for($i=0;$i<mysql_num_rows($result_miaosha);$i++){
		array_push($miaosha,mysql_fetch_array($result_miaosha,MYSQL_ASSOC));
	}

	for($i=0;$i<mysql_num_rows($result_goods);$i++){
		array_push($goods,mysql_fetch_array($result_goods,MYSQL_ASSOC));
	}

	//定义类
	class dangdang {
		
	};
	$data=new dangdang();
	$data->nav=$navs;
	$data->lunbo=$lunbo;
	$data->miaosha=$miaosha;
	$data->goods=$goods;
	
	echo json_encode($data);
?>
