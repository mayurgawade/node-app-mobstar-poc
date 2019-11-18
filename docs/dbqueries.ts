`
Database Queries :---

show databases;
create database Mob_Cafe;
use Mob_Cafe;
CREATE TABLE User_Info (
User_Id int NOT NULL PRIMARY KEY,
UserName varchar(20),Email_Id varchar(20),
Password varchar(12));
CREATE TABLE Product_Info(Product_Id int NOT NULL PRIMARY KEY,  Product_Name varchar(20),  Product_Quantity int, Product_Price float);
CREATE TABLE Transaction_Info(
User_Id int NOT NULL,Product_Id int NOT NULL,Product_Quantity int,Product_Price float);
CREATE TABLE Account_Info(User_Id int NOT NULL,User_Amount float );
ALTER TABLE Transaction_Info ADD FOREIGN KEY (User_Id) REFERENCES User_Info(User_Id);
ALTER TABLE Transaction_Info ADD FOREIGN KEY (Product_Id) REFERENCES Product_Info(Product_Id);
ALTER TABLE Account_Info ADD FOREIGN KEY (User_Id) REFERENCES User_Info(User_Id);
alter table User_Info modify Email_Id varchar(50);
INSERT INTO User_Info VALUES (1,"mayurgawade", "mgawade@mobiquityinc.com","12345678");
INSERT INTO Product_Info VALUES (1,”Biscuits”,20,10.00);
INSERT INTO Transaction_Info VALUES (1,1,5,10.00);
INSERT INTO Account_Info VALUES (1,50.00);

`



