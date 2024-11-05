CREATE DATABASE ROOT_DATABASE;
CREATE USER 'yashu'@'localhost' IDENTIFIED BY 'admin';
grant all privileges on root_database.* to 'yashu'@'localhost';