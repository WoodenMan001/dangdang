<?php
	require "connectSql.php"; 

	if(isset($_POST['goodsid']) 
	|| isset($_POST['username']) 
	|| isset($_POST['num'])){//
	    $goodsid=@$_POST['goodsid'];//商品id
	    $username=@$_POST['username'];//用户名
	    $num=@$_POST['num'];//数量
	}else{
		exit('非法操作');
	}

	/*判断商品信息，用户信息*/
	$query_user="select * from user where username='$username'";
	$query_goods="select * from goods where sid='$goodsid'";
	$result_user=mysql_query($query_user);
	$result_goods=mysql_query($query_goods);

	if(!mysql_fetch_array($result_user)){
	    $return_v =  '未找到该用户';//登陆失败
	}
	if(!mysql_fetch_array($result_goods)){
	    $return_v =  '未找到该商品';//登陆失败
	}

	/*购物车信息是否存在，是否数量叠加*/
	$query_spcart="select num from shoppingcart where username='$username' and goodsid = '$goodsid'";
	$result_spcart=mysql_query($query_spcart);

	if($result_user){
		$query = "UPDATE `shoppingcart` SET `num`=num+$num WHERE `username`='$username' AND `goodsid`=$goodsid";
	} else {
		$query = "INSERT INTO `shoppingcart` (`sid`, `username`, `goodsid`, `num`) VALUES (NULL, '$username', '$goodsid', '$num');";
	}

	/*加入购物车*/
	$result=mysql_query($query);
	if($result){
		$return_v = '加入成功！';
	} else {
		$return_v = '加入失败';
	}
	echo $return_v;
?>
