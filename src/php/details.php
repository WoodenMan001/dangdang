<?php
	require "connectSql.php"; 

	if(isset($_POST['goodsid'])){//
	    $goodsid=@$_POST['goodsid'];//商品id
	}else{
		exit('非法操作');
	}

	$arr=array();
	$query="select * from details where goodsid='$goodsid'";
	$result=mysql_query($query);

	for($i=0;$i<mysql_num_rows($result);$i++){
		array_push($arr,mysql_fetch_array($result,MYSQL_ASSOC));
	}

	//定义类
	class dangdang {
		
	};
	$data=new dangdang();
	$data->goods=$arr;
	
	echo json_encode($data);
?>
