CREATE DATABASE IF NOT EXISTS softwareDB;
 
 USE softwareDB;

 CREATE TABLA tabUsuario(
     usuUsuarioId VARCHAR (128) PRIMARY KEY,
     usuUsuarioNom VARCHAR (20),
     usuUsuarioContra VARCHAR (45),
     usuUsuarioRol INT
)
 

INSERT INTO tabUsuario VALUES

( '14DF5DF' , 'JUANA' , '24GFG36' , 'PENDEJO' ),
( '14FD65R' , 'JOSE' , '24GSJKDAJ' , 'JOYERO' ),
( '65HJASDF' , 'RINA' , 'JKDFFG36' , 'METALERO' )
