-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: resume_center
-- ------------------------------------------------------
-- Server version	5.7.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `resume_list`
--

DROP TABLE IF EXISTS `resume_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `resume_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '订单ID',
  `user_id` varchar(20) NOT NULL DEFAULT '' COMMENT '用户id',
  `username` varchar(20) NOT NULL DEFAULT '' COMMENT '姓名',
  `sex` varchar(10) NOT NULL DEFAULT '' COMMENT '性别',
  `born` varchar(20) NOT NULL DEFAULT '' COMMENT '出生年月',
  `id_card` varchar(18) DEFAULT '' COMMENT '身份证号',
  `nation` varchar(20) DEFAULT '' COMMENT '民族',
  `school` varchar(40) DEFAULT '' COMMENT '毕业学校',
  `major` varchar(40) DEFAULT '' COMMENT '专业',
  `education` varchar(20) DEFAULT '' COMMENT '学历',
  `degree` varchar(20) DEFAULT '' COMMENT '学位',
  `political` varchar(20) DEFAULT '' COMMENT '政治面貌',
  `work_year` int(11) DEFAULT '0' COMMENT '工作年限',
  `title` varchar(40) DEFAULT '' COMMENT '职称',
  `position` varchar(20) DEFAULT '' COMMENT '职位',
  `department` varchar(40) DEFAULT '' COMMENT '所在部门',
  `program_list` text COMMENT '项目经历',
  `education_list` text COMMENT '教育经历',
  `work_list` text COMMENT '工作经历',
  `create_time` varchar(255) DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='简历列表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resume_list`
--

LOCK TABLES `resume_list` WRITE;
/*!40000 ALTER TABLE `resume_list` DISABLE KEYS */;
/*!40000 ALTER TABLE `resume_list` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-04-08 18:11:17
