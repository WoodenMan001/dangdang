-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: 2018-05-20 15:16:33
-- 服务器版本： 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dangdang`
--

-- --------------------------------------------------------

--
-- 表的结构 `details`
--

DROP TABLE IF EXISTS `details`;
CREATE TABLE IF NOT EXISTS `details` (
  `goodsid` int(11) NOT NULL,
  `sid` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(500) NOT NULL,
  `title` varchar(200) DEFAULT NULL,
  `exegesis` varchar(500) DEFAULT NULL,
  `price` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `details`
--

INSERT INTO `details` (`goodsid`, `sid`, `url`, `title`, `exegesis`, `price`) VALUES
(2, 2, 'http://img3m8.ddimg.cn/92/3/23464478-3_w_1.jpg;http://img3m8.ddimg.cn/92/3/23464478-2_w_4.jpg;http://img3m8.ddimg.cn/92/3/23464478-3_w_1.jpg;http://img3m8.ddimg.cn/92/3/23464478-4_w_1.jpg;http://img3m8.ddimg.cn/92/3/23464478-5_w_3.jpg;http://img3m8.ddimg.cn/92/3/23464478-6_w_3.jpg;http://img3m8.ddimg.cn/92/3/23464478-7_w_3.jpg', '东野圭吾：解忧杂货店', '《白夜行》后东野圭吾备受欢迎作品：不是推理小说，却更扣人心弦。中国影响力图书年度读者推荐大奖，800万中国读者挚爱选择。', '30.80'),
(6, 4, 'http://img3m3.ddimg.cn/49/18/21005473-1_w_14.jpg;http://img3m3.ddimg.cn/49/18/21005473-2_w_6.jpg;http://img3m3.ddimg.cn/49/18/21005473-3_w_6.jpg;http://img3m3.ddimg.cn/49/18/21005473-4_w_6.jpg;http://img3m3.ddimg.cn/49/18/21005473-5_w_6.jpg;http://img3m3.ddimg.cn/49/18/21005473-6_w_3.jpg;http://img3m3.ddimg.cn/49/18/21005473-7_w_3.jpg;http://img3m3.ddimg.cn/49/18/21005473-8_w_3.jpg', '神奇校车·动画版（全10册）', '美国Scholastic学子出版社金牌畅销系列，备受小科学迷热爱推崇的科普童书！根据神奇校车科普动画片改编，主题更具体，故事更紧凑！图画书版进阶读本！（蒲公英童书馆出品）', '40.00');

-- --------------------------------------------------------

--
-- 表的结构 `goods`
--

DROP TABLE IF EXISTS `goods`;
CREATE TABLE IF NOT EXISTS `goods` (
  `sid` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `price` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `goods`
--

INSERT INTO `goods` (`sid`, `url`, `name`, `price`) VALUES
(9, 'http://img3m8.ddimg.cn/92/3/23464478-1_h_7.jpg', '东野圭吾：解忧杂货店', '39.50'),
(2, 'http://img3m8.ddimg.cn/92/3/23464478-1_h_7.jpg', '东野圭吾：解忧杂货店', '39.50'),
(4, 'http://img3m8.ddimg.cn/92/3/23464478-1_h_7.jpg', '东野圭吾：解忧杂货店', '39.50'),
(6, 'http://img3m0.ddimg.cn/61/3/23444350-1_h_2.jpg', '神奇校车·桥梁书版（全20册）', '100.80'),
(7, 'http://img3m2.ddimg.cn/41/25/25090502-1_h_5.jpg', '平凡的世界：全三册（八年级下册自主阅读推荐）', '74.50'),
(8, 'http://img3m4.ddimg.cn/41/23/22862804-1_h_7.jpg', '新世纪高等学校教材 心理学基础课系列教材:普通心理学(第4版)', '43.60'),
(10, 'http://img3m8.ddimg.cn/92/3/23464478-1_h_7.jpg', '东野圭吾：解忧杂货店', '39.50'),
(11, 'http://img3m8.ddimg.cn/92/3/23464478-1_h_7.jpg', '东野圭吾：解忧杂货店', '39.50'),
(12, 'http://img3m8.ddimg.cn/92/3/23464478-1_h_7.jpg', '东野圭吾：解忧杂货店', '39.50'),
(13, 'http://img3m0.ddimg.cn/61/3/23444350-1_h_2.jpg', '神奇校车·桥梁书版（全20册）', '100.80'),
(14, 'http://img3m2.ddimg.cn/41/25/25090502-1_h_5.jpg', '平凡的世界：全三册（八年级下册自主阅读推荐）', '74.50'),
(15, 'http://img3m4.ddimg.cn/41/23/22862804-1_h_7.jpg', '新世纪高等学校教材 心理学基础课系列教材:普通心理学(第4版)', '43.60'),
(16, 'http://img3m8.ddimg.cn/92/3/23464478-1_h_7.jpg', '东野圭吾：解忧杂货店', '39.50'),
(17, 'http://img3m8.ddimg.cn/92/3/23464478-1_h_7.jpg', '东野圭吾：解忧杂货店', '39.50'),
(18, 'http://img3m8.ddimg.cn/92/3/23464478-1_h_7.jpg', '东野圭吾：解忧杂货店', '39.50'),
(19, 'http://img3m0.ddimg.cn/61/3/23444350-1_h_2.jpg', '神奇校车·桥梁书版（全20册）', '100.80'),
(20, 'http://img3m2.ddimg.cn/41/25/25090502-1_h_5.jpg', '平凡的世界：全三册（八年级下册自主阅读推荐）', '74.50'),
(21, 'http://img3m4.ddimg.cn/41/23/22862804-1_h_7.jpg', '新世纪高等学校教材 心理学基础课系列教材:普通心理学(第4版)', '43.60'),
(22, 'http://img3m8.ddimg.cn/92/3/23464478-1_h_7.jpg', '东野圭吾：解忧杂货店', '39.50'),
(23, 'http://img3m8.ddimg.cn/92/3/23464478-1_h_7.jpg', '东野圭吾：解忧杂货店', '39.50'),
(24, 'http://img3m8.ddimg.cn/92/3/23464478-1_h_7.jpg', '东野圭吾：解忧杂货店', '39.50'),
(25, 'http://img3m0.ddimg.cn/61/3/23444350-1_h_2.jpg', '神奇校车·桥梁书版（全20册）', '100.80'),
(26, 'http://img3m2.ddimg.cn/41/25/25090502-1_h_5.jpg', '平凡的世界：全三册（八年级下册自主阅读推荐）', '74.50'),
(27, 'http://img3m4.ddimg.cn/41/23/22862804-1_h_7.jpg', '新世纪高等学校教材 心理学基础课系列教材:普通心理学(第4版)', '43.60');

-- --------------------------------------------------------

--
-- 表的结构 `lunbo`
--

DROP TABLE IF EXISTS `lunbo`;
CREATE TABLE IF NOT EXISTS `lunbo` (
  `sid` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  `title` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `lunbo`
--

INSERT INTO `lunbo` (`sid`, `url`, `title`) VALUES
(1, 'http://img60.ddimg.cn/2018/5/14/2018051415545794089.jpg', NULL),
(2, 'http://img63.ddimg.cn/2018/5/14/2018051416394896169.jpg', NULL),
(3, 'http://img60.ddimg.cn/2018/5/14/2018051415545794089.jpg', NULL),
(4, 'http://img63.ddimg.cn/2018/5/14/2018051417001441228.jpg', NULL),
(5, 'http://img63.ddimg.cn/2018/5/14/2018051414440561280.jpg', NULL),
(6, 'http://img63.ddimg.cn/2018/5/14/201805141635142146.jpg', NULL),
(7, 'http://img61.ddimg.cn/2018/5/14/20180514144628844.jpg', NULL);

-- --------------------------------------------------------

--
-- 表的结构 `miaosha`
--

DROP TABLE IF EXISTS `miaosha`;
CREATE TABLE IF NOT EXISTS `miaosha` (
  `sid` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  `num` varchar(20) DEFAULT NULL,
  `name` varchar(200) DEFAULT NULL,
  `price` varchar(10) DEFAULT NULL,
  `price_del` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `miaosha`
--

INSERT INTO `miaosha` (`sid`, `url`, `num`, `name`, `price`, `price_del`) VALUES
(2, 'http://img3m9.ddimg.cn/4/11/1232315869-1_l_4.jpg', '20%', '【超值秒杀 仅此一天】白领公社 防晒袖套 女士新款夏季冰袖冰丝防紫外线户外运动开车骑行冰袖女式手套', '9.9', '18'),
(14, 'http://img3m9.ddimg.cn/4/11/1232315869-1_l_4.jpg', '20%', '【超值秒杀 仅此一天】白领公社 防晒袖套 女士新款夏季冰袖冰丝防紫外线户外运动开车骑行冰袖女式手套', '9.9', '18'),
(4, 'http://img3m9.ddimg.cn/4/11/1232315869-1_l_4.jpg', '20%', '【超值秒杀 仅此一天】白领公社 防晒袖套 女士新款夏季冰袖冰丝防紫外线户外运动开车骑行冰袖女式手套', '9.9', '18'),
(6, 'http://img3m9.ddimg.cn/4/11/1232315869-1_l_4.jpg', '20%', '【超值秒杀 仅此一天】白领公社 防晒袖套 女士新款夏季冰袖冰丝防紫外线户外运动开车骑行冰袖女式手套', '9.9', '18'),
(8, 'http://img3m9.ddimg.cn/4/11/1232315869-1_l_4.jpg', '20%', '【超值秒杀 仅此一天】白领公社 防晒袖套 女士新款夏季冰袖冰丝防紫外线户外运动开车骑行冰袖女式手套', '9.9', '18'),
(10, 'http://img3m9.ddimg.cn/4/11/1232315869-1_l_4.jpg', '20%', '【超值秒杀 仅此一天】白领公社 防晒袖套 女士新款夏季冰袖冰丝防紫外线户外运动开车骑行冰袖女式手套', '9.9', '18'),
(12, 'http://img3m9.ddimg.cn/4/11/1232315869-1_l_4.jpg', '20%', '【超值秒杀 仅此一天】白领公社 防晒袖套 女士新款夏季冰袖冰丝防紫外线户外运动开车骑行冰袖女式手套', '9.9', '18'),
(16, 'http://img3m9.ddimg.cn/4/11/1232315869-1_l_4.jpg', '20%', '【超值秒杀 仅此一天】白领公社 防晒袖套 女士新款夏季冰袖冰丝防紫外线户外运动开车骑行冰袖女式手套', '9.9', '18'),
(18, 'http://img3m9.ddimg.cn/4/11/1232315869-1_l_4.jpg', '20%', '【超值秒杀 仅此一天】白领公社 防晒袖套 女士新款夏季冰袖冰丝防紫外线户外运动开车骑行冰袖女式手套', '9.9', '18'),
(20, 'http://img3m9.ddimg.cn/4/11/1232315869-1_l_4.jpg', '20%', '【超值秒杀 仅此一天】白领公社 防晒袖套 女士新款夏季冰袖冰丝防紫外线户外运动开车骑行冰袖女式手套', '9.9', '18');

-- --------------------------------------------------------

--
-- 表的结构 `nav`
--

DROP TABLE IF EXISTS `nav`;
CREATE TABLE IF NOT EXISTS `nav` (
  `sid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) COLLATE utf8mb4_bin NOT NULL,
  `url` varchar(200) COLLATE utf8mb4_bin DEFAULT NULL,
  `title` varchar(50) COLLATE utf8mb4_bin DEFAULT NULL,
  `val` varchar(200) COLLATE utf8mb4_bin DEFAULT NULL,
  `cls` varchar(50) COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- 转存表中的数据 `nav`
--

INSERT INTO `nav` (`sid`, `name`, `url`, `title`, `val`, `cls`) VALUES
(13, 'nav_2', NULL, NULL, '图书&童鞋', NULL),
(14, 'nav_2', NULL, NULL, '电子书&网络文学', NULL),
(15, 'nav_2', NULL, NULL, '创意文具&当当拍卖', NULL),
(16, 'nav_2', NULL, NULL, '服饰&内衣', NULL),
(17, 'nav_2', NULL, NULL, '运动户外', NULL),
(18, 'nav_2', NULL, NULL, '孕&婴&童', NULL),
(19, 'nav_2', NULL, NULL, '家居&家纺&汽车', NULL),
(9, 'nav_3', NULL, 'pop', '图书馆;童书馆', 'pop'),
(10, 'nav_3', NULL, '排行榜', '图书畅销榜;新书热卖榜;童书榜;图书飙升榜;五星图书榜', '2'),
(11, 'nav_3', NULL, '科技', '科普读物;计算机/网络;医学;工艺技术;建筑;自然科学;农业/林业', NULL),
(12, 'nav_3', NULL, '文艺', '小说;文学;传记;青春文学;动漫幽默;文艺;摄影;偶像明星;涂色/填色', NULL);

-- --------------------------------------------------------

--
-- 表的结构 `shoppingcart`
--

DROP TABLE IF EXISTS `shoppingcart`;
CREATE TABLE IF NOT EXISTS `shoppingcart` (
  `sid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `goodsid` int(11) NOT NULL,
  `num` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `shoppingcart`
--

INSERT INTO `shoppingcart` (`sid`, `username`, `goodsid`, `num`) VALUES
(16, '13757161406', 2, '4'),
(19, '13757161406', 4, '2');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `sid` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`username`, `password`, `sid`) VALUES
('13757161406', '123456', 6);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
