<?php
	require "connectSql.php"; 

	if(isset($_POST['username']) && isset($_POST['password'])){//
	    $username=@$_POST['username'];//获取用户名
	    $password=@$_POST['password'];//获取密码
	}else{
		exit('非法操作');
	}


	$query="select * from user where username='$username' and password='$password'";
	$result=mysql_query($query);
	if(mysql_fetch_array($result)){
	    echo true;//登陆成功
	}else{
	    echo false;//登陆失败
	}
?>