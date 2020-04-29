# mysql

* mysql 是 结构化数据库 中的一种
* mysql 是 一个提供数据存储的服务
  - database 是 划分的存储区域
    * table 是 类似于 js 中的对象数组

# install

* 官网 <https://dev.mysql.com/downloads/mysql/> 安装

* 在 MacOS 中 [Homebrew](https://brew.sh/) 安装

# start / stop

``` bash
brew services start mysql
```

``` bash
brew services stop mysql
```

# connect

``` bash
mysql -u root -p
Enter password: 123456
```

修改密码

``` bash
# mysql> mysqladmin -u root password 'new_password'
```

# create database

``` bash
# mysql> create database database_name;
```

# delete database

``` bash
# mysql> drop database database_name;
```

# choose

``` bash
# mysql> show databases;
# mysql> use database_name;
```

# create table

``` bash
mysql> CREATE TABLE IF NOT EXISTS `table_name`(
  `column_id` INT UNSIGNED AUTO_INCREMENT,
  `column_title` VARCHAR(100) NOT NULL,
  PRIMARY KEY ( `column_id` )
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

# delete table

``` bash
mysql> drop TABLE table_name;
```

# insert column_data

``` bash
mysql> INSERT INTO `table_name` VALUES ('1', 'column_1');
```

# update column_data

``` bash
mysql> UPDATE table_name SET column_title='标题1' WHERE column_id=1;
```

# delete

``` bash
mysql> DELETE FROM table_name WHERE column_id=1;
```

# search

``` bash
# mysql> select database();
# mysql> show tables;
# mysql> desc table_name;
# mysql> select * from table_name;
# mysql> select count(*) from table_name;
```

# mysql 客户端

[navicat](https://www.navicat.com.cn/)

# ORM

（Object/Relational Mapping）对象-关系映射

# sequlize

[sequlize](https://sequelize.org/) 是 ORM 中的一种

``` bash
npm i -S sequlize
```
