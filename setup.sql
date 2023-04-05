CREATE TABLE IF NOT EXISTS `users` (
  `UserId` int(11) NOT NULL AUTO_INCREMENT,
  `UserPsw` varchar(64) NOT NULL,
  `UserFirstName` varchar(64) NOT NULL,
  `UserLastName` varchar(64) NOT NULL,
  `UserEmail` text NOT NULL,
  PRIMARY KEY (`UserId`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;