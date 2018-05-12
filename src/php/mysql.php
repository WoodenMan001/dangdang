<!-- /**
 * @Author: ljgoh
 * @Date:   2018-05-10 09:21:21
 * @Last Modified by:   ljgoh
 * @Last Modified time: 2018-05-10 10:05:35
 */ -->
<?php
	header('content-type:text/html;charset=utf-8');
	//init
	$hostName = 'localhost';
	$hostAccountNum = 'root';
	$hostPassword = 'root123456';
	$db_name = 'dangdang';


	//query
	$queryDb = "show database like '{$db_name}';";

	$show_db = 'show databases';


	//creat
	$db_create = "CREATE DATABASE {$db_name}";

?>