CREATE TABLE `proyectocomics`.`new_table` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `editorial` VARCHAR(45) NULL,
  `fecha` VARCHAR(45) NULL,
  `descripcion` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

INSERT INTO comics (nombre,editorial,fecha,descripcion) VALUES ("The Watchmen", "IMAGE", "12/12/2001", "Edicion #1")
INSERT INTO comics (nombre,editorial,fecha,descripcion) VALUES ("Injustice", "DC", "01/01/2001", "2015")