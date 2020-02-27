-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               5.7.24 - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for it114p-inc
DROP DATABASE IF EXISTS `it114p-inc`;
CREATE DATABASE IF NOT EXISTS `it114p-inc` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `it114p-inc`;

-- Dumping structure for table it114p-inc.registers
DROP TABLE IF EXISTS `registers`;
CREATE TABLE IF NOT EXISTS `registers` (
  `id` int(11) NOT NULL,
  `college` varchar(50) DEFAULT '',
  `fullname` varchar(50) DEFAULT '',
  `program` varchar(50) DEFAULT '',
  `sport` varchar(50) DEFAULT '',
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
