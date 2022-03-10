CREATE DATABASE miscontactos;
USE miscontactos;

CREATE TABLE contactos(
	con_id INT(11) NOT NULL AUTO_INCREMENT,
	con_nombre VARCHAR(50) NOT NULL,
	con_telefono VARCHAR(20) NOT NULL,
	con_correo_electronico VARCHAR(50) NOT NULL,
	con_fecha_de_nacimiento date NOT NULL,
	con_status VARCHAR(1) NOT NULL,
	PRIMARY KEY (con_id),
  	UNIQUE KEY con_correo_electronico (con_correo_electronico)
)ENGINE=InnoDB
