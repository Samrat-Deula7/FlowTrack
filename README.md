# FlowTrack

<!-- SQL commands for the database schema -->

<!-- 
use Project_Flow_Track

select * from User_Tasks


create table User_Table(
User_Id int primary key IDENTITY(1,1),
Name varchar(20),
Password varchar(80),
Email varchar(30) unique,
Phone_No varchar(80),
)




CREATE TABLE User_Tasks (
    Task_Id INT PRIMARY KEY IDENTITY(1,1),
    User_Id INT NOT NULL,
    Task VARCHAR(150) NOT NULL,
    Completed BIT NOT NULL DEFAULT 0,
    FOREIGN KEY (User_Id) REFERENCES User_Table(User_Id)
);

CREATE TABLE Team_Table(
    Team_Id INT PRIMARY KEY IDENTITY(1,1),
    User_Id INT NOT NULL,
    Team_Name VARCHAR(70) NOT NULL,
    Team_Tasks VARCHAR(150) NOT NULL,
    Completed BIT NOT NULL DEFAULT 0,
    Team_code NVARCHAR(MAX),

    FOREIGN KEY (User_Id) REFERENCES User_Table(User_Id)
);


select * from User_Tasks
select * from User_Table
select * from Team_Table

delete from User_Tasks
drop table User_Tasks -->
