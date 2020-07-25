DROP TABLE IF EXISTS sys_dict;

/*==============================================================*/
/* Table: sys_dict   数据字典                                           */
/*==============================================================*/
CREATE TABLE sys_dict
(
   id                   BIGINT(32) NOT NULL AUTO_INCREMENT COMMENT '主键',
   CODE                 VARCHAR(64) NOT NULL COMMENT '类别',
   NAME                 VARCHAR(64) NOT NULL COMMENT '字典名',
   VALUE                VARCHAR(64) NOT NULL COMMENT '字典值',
   PRIMARY KEY (id)
);


INSERT INTO sys_dict VALUES(1,'性别','男','男');
INSERT INTO sys_dict VALUES(2,'性别','女','女');
INSERT INTO sys_dict VALUES(3,'季度','第一季度','1');
INSERT INTO sys_dict VALUES(4,'季度','第二季度','2');
INSERT INTO sys_dict VALUES(5,'季度','第三季度','3');
INSERT INTO sys_dict VALUES(6,'季度','第四季度','4');


DROP TABLE IF EXISTS xmlhttp;

/*==============================================================*/
/* Table: xmlhttp                                               */
/*==============================================================*/
CREATE TABLE xmlhttp
(
   id                   VARCHAR(32) NOT NULL,
   who                  VARCHAR(32),
   class                VARCHAR(32),
   what                 VARCHAR(100),
   PRIMARY KEY (id)
);

ALTER TABLE sys_user MODIFY user_info VARCHAR(200) COMMENT '用户信息';
ALTER TABLE sys_user DROP COLUMN head_img;
ALTER TABLE sys_user ADD COLUMN modify_time DATETIME COMMENT '修改时间';
ALTER TABLE sys_user ADD COLUMN LEVEL INT COMMENT '用户等级';
ALTER TABLE sys_user MODIFY COLUMN modify_time DATETIME COMMENT '修改时间';
ALTER TABLE sys_user ADD COLUMN remark VARCHAR(500) COMMENT '备注';






DROP TABLE IF EXISTS pmo_A;

/*==============================================================*/
/* Table: pmo_A                                                 */
/*==============================================================*/
CREATE TABLE pmo_A
(
   id                   BIGINT(32) NOT NULL AUTO_INCREMENT COMMENT '主键',
   number               VARCHAR(64) COMMENT '编号',
   day_time             VARCHAR(64) COMMENT '日期',
   bj_time              VARCHAR(64) COMMENT '北京时间',
   ut_time              VARCHAR(64) COMMENT '国际标准时间',
   day_number           VARCHAR(64) COMMENT '天数',
   P                    VARCHAR(64) COMMENT 'P',
   B0                   VARCHAR(64) COMMENT 'B0',
   L0                   VARCHAR(64) COMMENT 'L0',
   L1                   VARCHAR(64) COMMENT 'L1',
   L                    VARCHAR(64) COMMENT 'L',
   gN                   VARCHAR(64) COMMENT 'gN',
   gS                   VARCHAR(64) COMMENT 'gS',
   gNS_g                VARCHAR(64) COMMENT 'gNS(g)',
   fN                   VARCHAR(64) COMMENT 'fN',
   fS                   VARCHAR(64) COMMENT 'fS',
   fNS_f                VARCHAR(64) COMMENT 'fNS(f)',
   g10f_N               VARCHAR(64) COMMENT '(10g+f)N(RN)',
   g10f_S               VARCHAR(64) COMMENT '(10g+f)S(RS)',
   g10f_NS              VARCHAR(64) COMMENT '(10g+f)NS(RNS)',
   SpN                  VARCHAR(64) COMMENT 'SpN',
   SpS                  VARCHAR(64) COMMENT 'SpS',
   SpNS                 VARCHAR(64) COMMENT 'SpNS',
   k                    VARCHAR(64) COMMENT 'k',
   R                    VARCHAR(64) COMMENT 'R',
   Visible              VARCHAR(64) COMMENT 'Visible',
   k2                   VARCHAR(64) COMMENT 'k2',
   PRIMARY KEY (id)
);


DROP TABLE IF EXISTS pmo_B;

/*==============================================================*/
/* Table: pmo_B                                                 */
/*==============================================================*/
CREATE TABLE pmo_B
(
   id                   BIGINT(32) NOT NULL AUTO_INCREMENT COMMENT '主键',
   day_time             VARCHAR(64) NOT NULL COMMENT '日期',
   sunpot_number        VARCHAR(64) NOT NULL COMMENT '黑子号',
   TYPE                 VARCHAR(64) NOT NULL COMMENT '类型',
   sunpot_count         VARCHAR(64) COMMENT '黑子数',
   PRIMARY KEY (id)
);



DROP TABLE IF EXISTS book;

/*==============================================================*/
/* Table: book                                                 */
/*==============================================================*/
CREATE TABLE book
(
	id BIGINT(32) NOT NULL AUTO_INCREMENT,
	ISBN VARCHAR(32) NOT NULL,
	book_name VARCHAR(64) NOT NULL COMMENT '书名',
	author VARCHAR(64) DEFAULT NULL COMMENT '作者',
	publish VARCHAR(64) DEFAULT NULL COMMENT '出版社',
	category VARCHAR(32) DEFAULT NULL COMMENT '类别',
	edition VARCHAR(32) DEFAULT NULL COMMENT '版本号',
	book_info VARCHAR(200) DEFAULT NULL COMMENT '书的简介',
	book_cover VARCHAR(100) DEFAULT NULL COMMENT '封面路径',
	create_time DATETIME NOT NULL  COMMENT '创建时间',
	modify_time DATETIME NOT NULL COMMENT '修改时间',
	remark VARCHAR(200) DEFAULT NULL COMMENT '备注',
	PRIMARY KEY(id),
	UNIQUE(ISBN)
);
ALTER TABLE book ADD COLUMN user_count INT NOT NULL COMMENT '用户量';

DROP TABLE IF EXISTS book_user;
CREATE TABLE book_user
(
	id BIGINT(32) NOT NULL AUTO_INCREMENT,
	book_id BIGINT(32) NOT NULL,
	user_id BIGINT(32) NOT NULL,
	remark VARCHAR(200),
	PRIMARY KEY(id),
	UNIQUE(book_id, user_id)
);
ALTER TABLE book_user ADD CONSTRAINT `user_book_ibfk_1` FOREIGN KEY(book_id) REFERENCES book(id);
ALTER TABLE book_user ADD CONSTRAINT `user_book_ibfk_2` FOREIGN KEY(user_id) REFERENCES sys_user(id);
ALTER TABLE book_user ADD COLUMN create_time DATE;
ALTER TABLE book_user ADD COLUMN modify_time DATE;
ALTER TABLE book_user MODIFY COLUMN create_time DATE COMMENT '创建时间';
ALTER TABLE book_user MODIFY COLUMN modify_time DATE COMMENT '修改时间';


INSERT book(book_name, ISBN, create_time, MODIFY_TIME) VALUES('数据库技术', '1-1', NOW(), NOW());

INSERT book_user(book_id,user_id) VALUES(1, 1);
INSERT book_user(book_id,user_id) VALUES(1, 2);












