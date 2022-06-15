-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 15, 2022 at 06:45 AM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `assessmentposts`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `user` varchar(255) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `message` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `user`, `timestamp`, `message`) VALUES
(1, 'Alexa Pettitt', '2022-06-14 17:52:23', 'hi mm'),
(2, 'Alexa Pettitt', '2022-06-14 17:52:43', 'Hello'),
(3, 'Alexa Pettitt', '2022-06-14 17:53:10', 'fe'),
(4, 'Alexa Pettitt', '2022-06-14 17:53:21', 'Hi there!'),
(5, 'Alexa Pettitt', '2022-06-14 17:58:58', 'hi'),
(6, 'Alexa Pettitt', '2022-06-14 18:00:33', 'this is a messagew'),
(7, 'Alexa Pettitt', '2022-06-14 18:00:51', 'hey there'),
(8, 'Alexa Pettitt', '2022-06-14 18:01:43', 'ht'),
(9, 'Alexa Pettitt', '2022-06-14 18:21:14', 'New'),
(10, '[object Object]', '2022-06-14 18:22:53', 'gi'),
(11, '', '2022-06-14 18:23:45', 'blah'),
(12, 'Alexa', '2022-06-14 18:24:58', 'hey'),
(13, 'Alexa', '2022-06-14 18:26:16', 'hi again'),
(14, 'Alexa Pettitt', '2022-06-14 18:26:29', 'working?'),
(15, 'Alexa Pettitt', '2022-06-14 18:27:50', 'yhjgfjh'),
(16, 'Alexa Pettitt', '2022-06-14 18:28:31', 'Please work'),
(17, 'Alexa Pettitt', '2022-06-14 18:31:16', 'helloooo'),
(18, 'Alexa Pettitt', '2022-06-14 18:32:15', 'annoying\n'),
(19, 'Alexa Pettitt', '2022-06-14 18:34:49', 'hello'),
(20, 'Alexa Pettitt', '2022-06-14 18:35:24', 'work'),
(21, 'Alexa Pettitt', '2022-06-14 18:35:40', 'et'),
(22, 'Alexa Pettitt', '2022-06-14 18:35:50', '43e'),
(23, 'Alexa Pettitt', '2022-06-14 18:36:24', 'r4'),
(24, 'Alexa Pettitt', '2022-06-15 04:54:53', 'hi'),
(25, 'Alexa Pettitt', '2022-06-15 04:57:19', 'anotyher'),
(26, 'Alexa Pettitt', '2022-06-15 04:57:19', 'anotyher'),
(27, 'Alexa Pettitt', '2022-06-15 04:58:52', 'hello'),
(28, 'Alexa Pettitt', '2022-06-15 05:01:21', 'Hello'),
(29, 'Alexa Pettitt', '2022-06-15 05:33:53', 'Hello there!'),
(30, 'Alexa Pettitt', '2022-06-15 05:35:54', 'helloooo'),
(31, 'Alexa Pettitt', '2022-06-15 05:36:32', 'he'),
(32, 'Alexa Pettitt', '2022-06-15 05:37:08', 'work please'),
(33, 'Alexa Pettitt', '2022-06-15 05:37:36', 'iojj');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
