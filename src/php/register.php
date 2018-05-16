<?php
	require "connectSql.php"; 

	if(isset($_POST['username']) && isset($_POST['password'])){//
	    $username=$_POST['username'];//获取用户名
	    $password=$_POST['password'];//获取密码
	}else{
		exit('非法操作11');
	}
	//匹配用户名是否同时相等
	$query="select * from user where username='$username'";
	$result=mysql_query($query);
	if(mysql_fetch_array($result)){
	   echo false;//登陆失败
	}else{
		$username=$_POST['username'];//获取用户名
	    $password=$_POST['password'];//获取密码
	    $query_register="INSERT INTO `user` (`username`, `password`, `sid`) VALUES ('$username', '$password', NULL)";
	    mysql_query($query_register);
	    echo true;//登陆成功
	}

?>
