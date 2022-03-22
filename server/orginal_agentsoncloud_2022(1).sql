-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 22, 2022 at 10:49 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `orginal_agentsoncloud_2022`
--

-- --------------------------------------------------------

--
-- Table structure for table `days`
--

CREATE TABLE `days` (
  `id` int(32) NOT NULL,
  `provider_id` int(32) DEFAULT NULL,
  `sunday_first` varchar(255) DEFAULT NULL,
  `sundayT2` varchar(255) DEFAULT NULL,
  `mondayT1` varchar(255) DEFAULT NULL,
  `mondayT2` varchar(255) DEFAULT NULL,
  `tuesdayT1` varchar(255) DEFAULT NULL,
  `tuesdayT2` varchar(255) DEFAULT NULL,
  `wednesdayT1` varchar(255) DEFAULT NULL,
  `wednesdayT2` varchar(255) DEFAULT NULL,
  `thursdayT1` varchar(255) DEFAULT NULL,
  `thursdayT2` varchar(255) DEFAULT NULL,
  `fridayT1` varchar(255) DEFAULT NULL,
  `fridayT2` varchar(255) DEFAULT NULL,
  `saturdayT1` varchar(255) DEFAULT NULL,
  `saturdayT2` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `days`
--

INSERT INTO `days` (`id`, `provider_id`, `sunday_first`, `sundayT2`, `mondayT1`, `mondayT2`, `tuesdayT1`, `tuesdayT2`, `wednesdayT1`, `wednesdayT2`, `thursdayT1`, `thursdayT2`, `fridayT1`, `fridayT2`, `saturdayT1`, `saturdayT2`, `createdAt`, `updatedAt`) VALUES
(1, 1, '09:00', '16:00', '12:00', '13:00', NULL, NULL, '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '2022-03-09 09:51:19', '2022-03-09 09:51:19'),
(2, 2, '11:00', '16:00', NULL, NULL, '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', NULL, NULL, '09:00', '16:00', '2022-03-09 09:57:21', '2022-03-09 09:57:21'),
(3, 3, '09:00', '16:00', '09:00', '16:00', '00:00', '16:00', '09:00', '19:00', NULL, NULL, '09:00', '16:00', NULL, NULL, '2022-03-10 06:12:16', '2022-03-10 06:12:16'),
(4, 5, '09:00', '16:00', NULL, NULL, '09:00', '16:00', NULL, NULL, '09:00', '16:00', '09:00', '16:00', '09:00', '19:00', '2022-03-10 14:02:46', '2022-03-10 14:02:46'),
(5, 11, '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '2022-03-13 06:44:22', '2022-03-13 06:44:22'),
(6, 12, '09:00', '16:00', NULL, NULL, '09:00', '16:00', '09:00', '16:00', NULL, NULL, '09:00', '16:00', '09:00', '16:00', '2022-03-14 07:23:28', '2022-03-14 07:23:28'),
(7, 13, '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', NULL, NULL, '2022-03-14 07:32:20', '2022-03-14 07:32:20'),
(8, 14, '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '2022-03-14 07:37:53', '2022-03-14 07:37:53'),
(9, 1, '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', NULL, NULL, '09:00', '16:00', '2022-03-14 08:59:33', '2022-03-14 08:59:33'),
(10, 2, '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '2022-03-14 09:01:05', '2022-03-14 09:01:05'),
(11, 3, '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', NULL, NULL, NULL, NULL, '09:00', '16:00', '09:00', '16:00', '2022-03-14 09:05:53', '2022-03-14 09:05:53'),
(12, 4, '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', NULL, NULL, NULL, NULL, '09:00', '16:00', '2022-03-14 09:06:35', '2022-03-14 09:06:35'),
(13, 4, '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '2022-03-14 09:06:54', '2022-03-14 09:06:54'),
(14, 4, '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '2022-03-14 09:07:53', '2022-03-14 09:07:53'),
(15, 5, '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '2022-03-14 09:09:18', '2022-03-14 09:09:18'),
(16, 6, '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', NULL, NULL, NULL, NULL, '2022-03-14 09:10:19', '2022-03-14 09:10:19'),
(17, 7, '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', NULL, NULL, NULL, NULL, '09:00', '16:00', '2022-03-14 09:37:04', '2022-03-14 09:37:04'),
(18, 8, '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '2022-03-14 09:41:12', '2022-03-14 09:41:12'),
(19, 9, '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '2022-03-14 10:50:56', '2022-03-14 10:50:56'),
(20, 2, '08:00', '19:00', '09:00', '16:00', '06:00', '21:00', '09:00', '16:00', '05:00', '23:00', '09:00', '16:00', '09:00', '16:00', '2022-03-15 09:33:45', '2022-03-15 09:33:45'),
(21, 6, '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', NULL, NULL, NULL, NULL, '09:00', '16:00', '2022-03-15 13:15:31', '2022-03-15 13:15:31'),
(22, 7, NULL, NULL, '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', NULL, NULL, '2022-03-15 13:57:17', '2022-03-15 13:57:17'),
(23, 8, '09:00', '16:00', '09:00', '16:00', NULL, NULL, NULL, NULL, '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '2022-03-15 13:57:44', '2022-03-15 13:57:44'),
(24, 9, '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', NULL, NULL, '09:00', '16:00', '2022-03-15 13:58:33', '2022-03-15 13:58:33'),
(25, 10, '09:00', '16:00', '09:00', '16:00', NULL, NULL, '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '2022-03-15 13:59:00', '2022-03-15 13:59:00'),
(26, 11, '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', NULL, NULL, '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '2022-03-15 13:59:22', '2022-03-15 13:59:22'),
(27, 12, '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '2022-03-15 13:59:52', '2022-03-15 13:59:52'),
(28, 13, '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', NULL, NULL, '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '2022-03-15 14:19:14', '2022-03-15 14:19:14'),
(29, 14, '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', NULL, NULL, '09:00', '16:00', '09:00', '16:00', '2022-03-17 07:44:59', '2022-03-17 07:44:59'),
(30, 15, '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', NULL, NULL, '09:00', '16:00', '2022-03-17 08:16:57', '2022-03-17 08:16:57'),
(31, 16, '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', NULL, NULL, NULL, NULL, '09:00', '16:00', '09:00', '16:00', '2022-03-20 15:30:06', '2022-03-20 15:30:06'),
(32, 17, '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', NULL, NULL, NULL, NULL, '2022-03-22 07:23:23', '2022-03-22 07:23:23'),
(33, 18, '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', '09:00', '16:00', NULL, NULL, NULL, NULL, '09:00', '16:00', '2022-03-22 07:25:09', '2022-03-22 07:25:09');

-- --------------------------------------------------------

--
-- Table structure for table `providers`
--

CREATE TABLE `providers` (
  `id` int(32) NOT NULL,
  `role_id` int(32) DEFAULT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `education` varchar(255) NOT NULL,
  `major` varchar(255) NOT NULL,
  `minor` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `providers`
--

INSERT INTO `providers` (`id`, `role_id`, `firstName`, `lastName`, `age`, `gender`, `phone`, `education`, `major`, `minor`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'beshir', 'alkhadra', 24, 'male', '0796308616', 'mechanical', 'cate3', 'power', '2022-03-15 08:19:29', '2022-03-15 08:19:29'),
(2, 1, 'Raven ', 'Holcomb', 65, 'female', '+1 (705) 475-6194', 'Consequatur Incidun', 'At quia quos commodi', 'Vitae tenetur quis a', '2022-03-15 09:33:40', '2022-03-15 09:33:40'),
(3, 1, 'Yuli ', 'Stevenson', 11, 'female', '+1 (821) 349-7319', 'Labore vitae numquam', 'Nulla ut aut aliquam', 'Sunt ea eius nihil a', '2022-03-15 12:56:18', '2022-03-15 12:56:18'),
(4, 1, 'Jerry ', 'Allen', 86, 'female', '+1 (631) 949-3078', 'Esse illo est nequ', 'Sed quibusdam modi n', 'Atque id enim natus ', '2022-03-15 13:06:00', '2022-03-15 13:06:00'),
(5, 1, 'obada', 'Washington', 35, '', '+1 (365) 547-4374', 'Eius sit error quo ', 'Omnis est quia volup', 'Quae aut eum commodi', '2022-03-15 13:13:35', '2022-03-15 13:13:35'),
(6, 3, 'George ', 'Santana', 57, 'female', '+1 (158) 699-6974', 'Aut error ullamco qu', 'Cumque ullamco ullam', 'Vel incididunt debit', '2022-03-15 13:15:10', '2022-03-15 13:15:10'),
(7, 2, 'Cleo ', 'Bonner', 45, 'male', '+1 (419) 715-9926', 'Temporibus non aute ', 'cate3', 'Aut eiusmod officiis', '2022-03-15 13:57:12', '2022-03-15 13:57:12'),
(8, 2, 'Plato ', 'Brewer', 51, 'male', '+1 (514) 417-8675', 'Quia sint assumenda ', 'cate1', 'Laborum Et animi i', '2022-03-15 13:57:40', '2022-03-15 13:57:40'),
(9, 2, 'Lillian ', 'Deleon', 47, 'female', '+1 (979) 969-9039', 'Sint laboris et ipsu', 'cate2', 'Veniam quisquam lab', '2022-03-15 13:58:30', '2022-03-15 13:58:30'),
(10, 2, 'Marvin ', 'Moore', 74, 'female', '+1 (987) 486-3092', 'Quia quisquam volupt', 'cate3', 'Omnis quos proident', '2022-03-15 13:58:57', '2022-03-15 13:58:57'),
(11, 2, 'Orli Tate', 'Tran', 89, '', '+1 (544) 113-5079', 'Excepturi quis possi', 'cate1', 'Dolor ea ut unde adi', '2022-03-15 13:59:19', '2022-03-15 13:59:19'),
(12, 2, 'Joshua ', 'Newman', 58, 'female', '+1 (591) 232-7321', 'Qui qui amet omnis ', 'cate1', 'Aliquid eu beatae qu', '2022-03-15 13:59:49', '2022-03-15 13:59:49'),
(13, 3, 'Ima Glenn', 'Chapman', 97, 'female', '+1 (652) 783-3194', 'Sed voluptates est ', 'cate1', 'Totam cumque laboris', '2022-03-15 14:19:10', '2022-03-15 14:19:10'),
(14, 3, 'Harding ', 'Wiggins', 9, 'male', '+1 (101) 352-9019', 'Placeat non rem obc', 'cate4', 'Debitis in ut omnis ', '2022-03-17 07:44:52', '2022-03-17 07:44:52'),
(15, 1, 'Lance ', 'Hutchinson', 82, 'female', '+1 (415) 647-8732', 'Qui temporibus place', 'cate2', 'Rem facere eum omnis', '2022-03-17 08:16:50', '2022-03-17 08:16:50'),
(16, 3, 'Guinevere ', 'Whitney', 59, 'male', '+1 (723) 157-3595', 'Repudiandae totam qu', 'cate3', 'Quis aliquip tempora', '2022-03-20 15:26:47', '2022-03-20 15:26:47'),
(17, 2, 'Xyla Heath', 'Fulton', 1, 'male', '+1 (414) 922-2307', 'Eveniet fugiat irur', 'Iste deserunt pariat', 'Voluptatem dolor est', '2022-03-22 07:21:45', '2022-03-22 07:21:45'),
(18, 2, 'Micah ', 'Goodwin', 29, 'male', '+1 (141) 285-9558', 'Aperiam sint aut do', 'cate1', 'Nobis dicta labore n', '2022-03-22 07:24:45', '2022-03-22 07:24:45');

-- --------------------------------------------------------

--
-- Table structure for table `provider_services`
--

CREATE TABLE `provider_services` (
  `id` int(11) NOT NULL,
  `providerId` int(11) DEFAULT NULL,
  `serviceId` int(11) DEFAULT NULL,
  `service_name` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `provider_services`
--

INSERT INTO `provider_services` (`id`, `providerId`, `serviceId`, `service_name`, `createdAt`, `updatedAt`) VALUES
(1, 2, 9, 'Botex', '2022-03-15 09:33:51', '2022-03-15 09:33:51'),
(2, 6, 8, 'Filler', '2022-03-15 13:16:04', '2022-03-15 13:16:04'),
(3, 6, 9, 'Botex', '2022-03-15 13:16:04', '2022-03-15 13:16:04'),
(4, 7, 5, 'service5', '2022-03-15 13:57:22', '2022-03-15 13:57:22'),
(5, 7, 6, 'service6', '2022-03-15 13:57:22', '2022-03-15 13:57:22'),
(6, 7, 8, 'Filler', '2022-03-15 13:57:22', '2022-03-15 13:57:22'),
(7, 8, 1, 'service1', '2022-03-15 13:57:49', '2022-03-15 13:57:49'),
(8, 8, 9, 'Botex', '2022-03-15 13:57:49', '2022-03-15 13:57:49'),
(9, 9, 9, 'Botex', '2022-03-15 13:58:36', '2022-03-15 13:58:36'),
(10, 10, 5, 'service5', '2022-03-15 13:59:06', '2022-03-15 13:59:06'),
(11, 10, 6, 'service6', '2022-03-15 13:59:06', '2022-03-15 13:59:06'),
(12, 10, 8, 'Filler', '2022-03-15 13:59:06', '2022-03-15 13:59:06'),
(13, 11, 8, 'Filler', '2022-03-15 13:59:26', '2022-03-15 13:59:26'),
(14, 11, 9, 'Botex', '2022-03-15 13:59:26', '2022-03-15 13:59:26'),
(15, 12, 8, 'Filler', '2022-03-15 13:59:56', '2022-03-15 13:59:56'),
(16, 12, 1, 'service1', '2022-03-15 13:59:56', '2022-03-15 13:59:56'),
(17, 14, 7, 'service7', '2022-03-17 07:45:07', '2022-03-17 07:45:07'),
(18, 14, 8, 'Filler', '2022-03-17 07:45:07', '2022-03-17 07:45:07'),
(19, 15, 2, 'service2', '2022-03-17 08:17:04', '2022-03-17 08:17:04'),
(20, 15, 8, 'Filler', '2022-03-17 08:17:04', '2022-03-17 08:17:04'),
(21, 16, 4, 'service4', '2022-03-20 15:32:24', '2022-03-20 15:32:24'),
(22, 16, 6, 'service6', '2022-03-20 15:32:24', '2022-03-20 15:32:24'),
(23, 16, 8, 'Filler', '2022-03-20 15:32:24', '2022-03-20 15:32:24'),
(24, 17, 9, 'Botex', '2022-03-22 07:23:48', '2022-03-22 07:23:48'),
(25, 18, 1, 'service1', '2022-03-22 07:25:15', '2022-03-22 07:25:15'),
(26, 18, 8, 'Filler', '2022-03-22 07:25:15', '2022-03-22 07:25:15');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(32) NOT NULL,
  `role_name` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `role_name`, `createdAt`, `updatedAt`) VALUES
(1, 'DOCTOR', '2022-03-15 08:17:48', '2022-03-15 08:17:48'),
(2, 'ASSISTANT', '2022-03-15 08:17:48', '2022-03-15 08:17:48'),
(3, 'SPECIALIST', '2022-03-15 08:17:48', '2022-03-15 08:17:48');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20220305220200-craete_providers_table.js'),
('20220305225211-craete_workinghours_table.js'),
('20220306081303-create-services-table.js'),
('20220306082823-create-serviceProviders-table.js'),
('20220315062726-create_roles_table.js'),
('20220315063616-add-associations.js');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(32) NOT NULL,
  `service_name` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `service_name`, `category`, `createdAt`, `updatedAt`) VALUES
(1, 'service1', 'cate1', '2022-03-15 08:20:54', '2022-03-15 08:20:54'),
(2, 'service2', 'cate2', '2022-03-15 08:20:54', '2022-03-15 08:20:54'),
(3, 'service3', 'cate3', '2022-03-15 08:20:54', '2022-03-15 08:20:54'),
(4, 'service4', 'cate3', '2022-03-15 08:20:54', '2022-03-15 08:20:54'),
(5, 'service5', 'cate3', '2022-03-15 08:20:54', '2022-03-15 08:20:54'),
(6, 'service6', 'cate3', '2022-03-15 08:20:54', '2022-03-15 08:20:54'),
(7, 'service7', 'cate4', '2022-03-15 08:20:54', '2022-03-15 08:20:54'),
(8, 'Filler', 'defaultCate', '2022-03-15 08:20:54', '2022-03-15 08:20:54'),
(9, 'Botex', 'defaultCate', '2022-03-15 08:20:54', '2022-03-15 08:20:54'),
(10, 'service8', 'cate4', '2022-03-15 08:20:54', '2022-03-15 08:20:54'),
(11, 'service9', 'cate5', '2022-03-15 08:20:54', '2022-03-15 08:20:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `days`
--
ALTER TABLE `days`
  ADD PRIMARY KEY (`id`),
  ADD KEY `days_provider_id_providers_fk` (`provider_id`);

--
-- Indexes for table `providers`
--
ALTER TABLE `providers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `phone` (`phone`),
  ADD KEY `providers_role_id_roles_fk` (`role_id`);

--
-- Indexes for table `provider_services`
--
ALTER TABLE `provider_services`
  ADD PRIMARY KEY (`id`),
  ADD KEY `providerId` (`providerId`),
  ADD KEY `serviceId` (`serviceId`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `days`
--
ALTER TABLE `days`
  MODIFY `id` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `providers`
--
ALTER TABLE `providers`
  MODIFY `id` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `provider_services`
--
ALTER TABLE `provider_services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `providers`
--
ALTER TABLE `providers`
  ADD CONSTRAINT `providers_role_id_roles_fk` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `provider_services`
--
ALTER TABLE `provider_services`
  ADD CONSTRAINT `provider_services_ibfk_1` FOREIGN KEY (`providerId`) REFERENCES `providers` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `provider_services_ibfk_2` FOREIGN KEY (`serviceId`) REFERENCES `services` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
