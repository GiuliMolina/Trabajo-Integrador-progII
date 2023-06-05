DROP SCHEMA `proyecto_integrador`;
CREATE SCHEMA `proyecto_integrador`;

USE `proyecto_integrador`;

CREATE TABLE `usuarios`(
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
nombre TEXT NOT NULL
email VARCHAR(30) NOT NULL UNIQUE,
password VARCHAR(30) NOT NULL,
foto_de_perfil VARCHAR(200),
fecha DATE NOT NULL, 
dni INT NOT NULL UNIQUE,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
deleted_at TIMESTAMP NULL
);


CREATE TABLE `productos`(
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
usuario_id INT UNSIGNED NOT NULL,
nombre_producto VARCHAR(50) NOT NULL,
descripcion TEXT NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
deleted_at TIMESTAMP NULL,
imagen  VARCHAR(200) NOT NULL,
CONSTRAINT fk_productos_usuarios FOREIGN KEY(usuario_id) REFERENCES usuarios(id)
);
 
CREATE TABLE `comentarios`(
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
id_post INT UNSIGNED NOT NULL,
usuario_id INT UNSIGNED NOT NULL,
comentario TEXT NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
deleted_at TIMESTAMP NULL,
CONSTRAINT fk_comentarios_usuarios FOREIGN KEY(usuario_id) REFERENCES usuarios(id),
CONSTRAINT fk_comentarios_productos FOREIGN KEY(id_post) REFERENCES productos(id)
);

INSERT INTO `usuarios`( email, password , foto_de_perfil, fecha, dni)
VALUES ('tomasm@gmail.com','tomas1234','foto', '2000-05-17', 95469117),
('justinb@gmail.com','justin1234','foto', '2003-09-8', 38809234),
('danielag@gmail.com','daniela1234','foto','2004-05-28', 45789123),
('marianal@gmail.com','mariana1234','foto', '2003-08-06', 21345879),
('sebass@gmail.com','sebas1234','foto','2004-05-06' , 63187653);


INSERT INTO `productos` (usuario_id, nombre_producto, descripcion)
VALUES (1, 'Zapatillas celestes', 'Todos los talles disponibles'),
(2, 'Zapatillas negras', 'Todos los talles disponibles'),
(3, 'Zapatillas violetas', 'Todos los talles disponibles'),
(4, 'Zapatillas azules', 'Todos los talles disponibles'),
(5, 'Zapatillas verdes', 'Todos los talles disponibles'),
(1, 'Zapatillas blancas', 'Todos los talles disponibles'),
(2, 'Zapatillas grises', 'Todos los talles disponibles'),
(3, 'Zapatillas marrones', 'Todos los talles disponibles'),
(4, 'Zapatillas lilas', 'Todos los talles disponibles'),
(5, 'Zapatillas naranjas', 'Todos los talles disponibles');

INSERT INTO `comentarios` (usuario_id, id_post, comentario) VALUES (1,1,'Me encantaron'),
(2,1,'Las mejores zapatillas'),
(3,1,'Tremendas'),
(4,1,'Las ame'),
(1,2,'Me encantaron'),
(2,2,'Las mejores zapatillas'),
(3,2,'Tremendas'),
(4,2,'Las ame'),
(1,3,'Me encantaron'),
(2,3,'Las mejores zapatillas'),
(3,3,'Tremendas'),
(4,3,'Las ame'),
(1,4,'Me encantaron'),
(2,4,'Las mejores zapatillas'),
(3,4,'Tremendas'),
(4,4,'Las ame'),
(1,5,'Me encantaron'),
(2,5,'Las mejores zapatillas'),
(3,5,'Tremendas'),
(4,5,'Las ame'),
(1,6,'Me encantaron'),
(2,6,'Las mejores zapatillas'),
(3,6,'Tremendas'),
(4,6,'Las ame'),
(1,7,'Me encantaron'),
(2,7,'Las mejores zapatillas'),
(3,7,'Tremendas'),
(4,7,'Las ame'),
(1,8,'Me encantaron'),
(2,8,'Las mejores zapatillas'),
(3,8,'Tremendas'),
(4,8,'Las ame'),
(1,9,'Me encantaron'),
(2,9,'Las mejores zapatillas'),
(3,9,'Tremendas'),
(4,9,'Las ame'),
(1,10,'Me encantaron'),
(2,10,'Las mejores zapatillas'),
(3,10,'Tremendas'),
(4,10,'Las ame');
