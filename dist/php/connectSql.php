<!-- /**
 * @Author: ljgoh
 * @Date:   2018-05-10 09:26:03
 * @Last Modified by:   ljgoh
 * @Last Modified time: 2018-05-10 10:12:51
 */ -->
<?php
	require "mysql.php";
	//连接主机
	$conn = @mysql_connect($hostName,$hostAccountNum,$hostPassword);
	if(!$conn) {
		die('数据库连接失败'.mysql_error());
	}

	//选择数据库
	$db_selected = mysql_select_db($db_name,$conn);
	//判断数据是否存在
	if(!$db_selected) {
		//不存在，则创建数据库
		mysql_query($db_create,$conn);
		mysql_select_db($db_name,$conn);
	}
	
	mysql_query('SET NAMES UTF8');//GBK


	//关闭数据库
	// mysql_close($conn);
?>