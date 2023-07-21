CREATE DATABASE iglesiaHeavensMysqlDB;

USE iglesiaHeavensMysqlDB;

CREATE TABLE Departamento (
    idDepartamento INT PRIMARY KEY AUTO_INCREMENT,
    nombreDepartamento VARCHAR(50) NOT NULL
);

CREATE TABLE Municipio (
    idMunicipio INT PRIMARY KEY AUTO_INCREMENT,
    NombreMunicipio VARCHAR(50) NOT NULL,
    idDepartamento INT,
    FOREIGN KEY (idDepartamento) REFERENCES Departamento(idDepartamento)
);

CREATE TABLE Comuna (
    idComuna INT PRIMARY KEY AUTO_INCREMENT,
    nombreComuna VARCHAR(50) NOT NULL,
    idMunicipio INT,
    FOREIGN KEY (idMunicipio) REFERENCES Municipio(idMunicipio)
);

CREATE TABLE Barrio (
    idBarrio INT PRIMARY KEY AUTO_INCREMENT,
    nombreBarrio VARCHAR(50) NOT NULL,
    idComuna INT,
    FOREIGN KEY (idComuna) REFERENCES Comuna(idComuna)
);

CREATE TABLE Creyente (
    ididentificacion INT PRIMARY KEY AUTO_INCREMENT,
    nombres VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    NroCelular VARCHAR(20) NOT NULL,
    direccion VARCHAR(30) NOT NULL,
    idBarrio INT,
    FOREIGN KEY (idBarrio) REFERENCES Barrio(idBarrio)
);

-- Ahora agregamos los departamentos, municipios, comunas y barrios primero (si aún no los tienes)
INSERT INTO Departamento (idDepartamento, nombreDepartamento)
VALUES (1, 'Santander'),
       (2, 'Antioquia'),
       (3, 'Amazonas'),
       (4, 'Caqueta'),
       (5, 'Nariño');

INSERT INTO Municipio (idMunicipio, NombreMunicipio, idDepartamento)
VALUES (1, 'Bogota', 1),
       (2, 'Medellin', 1),
       (3, 'Pasto', 2),
       (4, 'Cucuta', 2),
       (5, 'Monteria', 3);

INSERT INTO Comuna (idComuna, nombreComuna, idMunicipio)
VALUES (1, 'Popular', 1),
       (2, 'SantaCruz', 1),
       (3, 'Manrique', 2),
       (4, 'Robledo', 2),
       (5, 'VillaHermosa', 3);

INSERT INTO Barrio (idBarrio, nombreBarrio, idComuna)
VALUES (1, 'Bellavista', 1),
       (2, 'Mirador de Carrizal', 1),
       (3, 'La esmeralda', 2),
       (4, 'El Gaitan', 2),
       (5, 'Girardot', 3);

-- Ahora agregamos los creyentes correspondientes a los barrios
INSERT INTO Creyente (ididentificacion, nombres, email, NroCelular, direccion, idBarrio)
VALUES (1, 'Creyente 1', 'creyente1@example.com', '123456789', 'Calle 1, Ciudad', 1),
       (2, 'Creyente 2', 'creyente2@example.com', '987654321', 'Avenida 2, Pueblo', 2),
       (3, 'Creyente 3', 'creyente3@example.com', '555555555', 'Carretera 3, Villa', 3),
       (4, 'Creyente 4', 'creyente4@example.com', '111111111', 'Plaza 4, Poblado', 4),
       (5, 'Creyente 5', 'creyente5@example.com', '999999999', 'Paseo 5, Aldea', 5);
