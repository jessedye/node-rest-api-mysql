CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(60) NOT NULL,
  PRIMARY KEY (`id`),
);

INSERT INTO `users` (`id`, `firstname`, `last_name`) VALUES
	(1, 'Hulk', 'Hogan');
INSERT INTO `users` (`id`, `firstname`, `last_name`) VALUES
	(1, 'Randy', 'Savage');
INSERT INTO `users` (`id`, `firstname`, `last_name`) VALUES
	(1, 'Ric', 'Flair');
INSERT INTO `users` (`id`, `firstname`, `last_name`) VALUES
	(1, 'Stone Cold Steve', 'Austin');