CREATE DATABASE IF NOT EXISTS suscripcionesdb;

USE suscripcionesdb;

CREATE TABLE IF NOT EXISTS suscripciones(
  id INT NOT NULL AUTO_INCREMENT,
  lugarDeSuscripcion VARCHAR(100) NOT NULL,
  nombreUsuario VARCHAR(50) NOT NULL,
  contrasena VARCHAR(50) NOT NULL
  PRIMARY KEY (id)
);

INSERT INTO suscripciones (lugarDeSuscripcion, nombreUsuario, contrasena) VALUES
  ('bolivia', 'user1', '123')
  ('chile', 'user2', '456');
