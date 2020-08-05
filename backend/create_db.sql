CREATE TABLE `uploadedfiles` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `userId` int(11) NOT NULL,
 `url` varchar(250) NOT NULL,
 `description` text NOT NULL,
 `createdDate` datetime NOT NULL DEFAULT current_timestamp(),
 `likes` int(11) NOT NULL,
 PRIMARY KEY (`id`),
 KEY `userID` (`userId`),
 CONSTRAINT `userID` FOREIGN KEY (`userId`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `uploadedfilescomments` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `fileId` int(11) NOT NULL,
 `userId` int(11) NOT NULL,
 `createdDate` datetime NOT NULL DEFAULT current_timestamp(),
 `comment` varchar(250) NOT NULL,
 PRIMARY KEY (`id`),
 KEY `fileId` (`fileId`),
 KEY `User_ID` (`userId`),
 CONSTRAINT `User_ID` FOREIGN KEY (`userId`) REFERENCES `usuarios` (`id`),
 CONSTRAINT `fileId` FOREIGN KEY (`fileId`) REFERENCES `uploadedfiles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `usuarios` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `name` varchar(250) NOT NULL,
 `lastName` varchar(250) NOT NULL,
 `email` varchar(250) NOT NULL,
 `password` varchar(250) NOT NULL,
 `isAdmin` tinyint(1) NOT NULL DEFAULT 1,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;