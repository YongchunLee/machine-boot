/*
* MySQL级联删除和更新
*/

CREATE TABLE `user` (
  `id` INT (4) NOT NULL,
  `sex` ENUM ('f', 'm') DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = INNODB DEFAULT CHARSET = latin1 ;

CREATE TABLE `userinfo` (
 `sn` INT(4) NOT NULL AUTO_INCREMENT,
 `userid` INT(4) NOT NULL,
 `info` VARCHAR(20) DEFAULT NULL,
 PRIMARY KEY (`sn`),
 KEY `userid` (`userid`),
 CONSTRAINT `userinfo_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=INNODB DEFAULT CHARSET=latin1;

INSERT INTO `user` (`id`,`sex`)
 VALUES ('1', 'f'), ('2', 'm'), ('3', 'f');
INSERT INTO `userinfo` (`sn`,`userid`,`info`)
 VALUES ('1', '1', '2005054dsf'),
       ('2', '1', 'fdsfewfdsfds'),
       ('3', '1', 'gdsgergergrtre'),
       ('4', '2', 'et34t5435435werwe'),
       ('5', '2', '435rtgtrhfghfg'),
       ('6', '2', 'ret345tr4345'),
      ('7', '3', 'fgbdfvbcbfdgr'),
       ('8', '3', '45r2343234were'),
       ('9', '3', 'wfyhtyjtyjyjy');
       
       
delete from `user` where `id`='2';
DELETE FROM `user` WHERE `id`='3';
delete from userinfo where sn=1;

update user set id=4 where id=1;

delete from userinfo;

