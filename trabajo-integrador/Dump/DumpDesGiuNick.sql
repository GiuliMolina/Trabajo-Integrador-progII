CREATE DATABASE  IF NOT EXISTS `proyecto_integrador` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `proyecto_integrador`;
-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (x86_64)
--
-- Host: 127.0.0.1    Database: proyecto_integrador
-- ------------------------------------------------------
-- Server version	5.7.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_post` int(10) unsigned NOT NULL,
  `usuario_id` int(10) unsigned NOT NULL,
  `comentario` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_comentarios_usuarios` (`usuario_id`),
  KEY `fk_comentarios_productos` (`id_post`),
  CONSTRAINT `fk_comentarios_productos` FOREIGN KEY (`id_post`) REFERENCES `productos` (`id`),
  CONSTRAINT `fk_comentarios_usuarios` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (1,1,1,'Me encantaron','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(2,1,2,'Las mejores zapatillas','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(3,1,3,'Tremendas','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(4,1,4,'Las ame','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(5,2,1,'Me encantaron','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(6,2,2,'Las mejores zapatillas','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(7,2,3,'Tremendas','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(8,2,4,'Las ame','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(9,3,1,'Me encantaron','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(10,3,2,'Las mejores zapatillas','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(11,3,3,'Tremendas','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(12,3,4,'Las ame','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(13,4,1,'Me encantaron','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(14,4,2,'Las mejores zapatillas','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(15,4,3,'Tremendas','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(16,4,4,'Las ame','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(17,5,1,'Me encantaron','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(18,5,2,'Las mejores zapatillas','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(19,5,3,'Tremendas','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(20,5,4,'Las ame','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(21,6,1,'Me encantaron','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(22,6,2,'Las mejores zapatillas','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(23,6,3,'Tremendas','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(24,6,4,'Las ame','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(25,7,1,'Me encantaron','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(26,7,2,'Las mejores zapatillas','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(27,7,3,'Tremendas','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(28,7,4,'Las ame','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(29,8,1,'Me encantaron','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(30,8,2,'Las mejores zapatillas','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(31,8,3,'Tremendas','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(32,8,4,'Las ame','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(33,9,1,'Me encantaron','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(34,9,2,'Las mejores zapatillas','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(35,9,3,'Tremendas','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(36,9,4,'Las ame','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(37,10,1,'Me encantaron','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(38,10,2,'Las mejores zapatillas','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(39,10,3,'Tremendas','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(40,10,4,'Las ame','2023-04-12 20:43:54','2023-04-12 20:43:54',NULL),(41,1,6,'Buenisimas','2023-06-14 22:15:03','2023-06-14 22:15:03',NULL),(42,1,6,'Tremendas','2023-06-15 02:20:37','2023-06-15 02:20:37',NULL),(43,24,6,'Buenisimas','2023-06-15 03:39:56','2023-06-15 03:39:56',NULL),(44,24,16,'Muy buena calidad!','2023-06-15 03:40:59','2023-06-15 03:40:59',NULL),(45,27,29,'Me encantan','2023-06-16 15:24:55','2023-06-16 15:24:55',NULL),(46,1,29,'me encantan','2023-06-16 15:26:06','2023-06-16 15:26:06',NULL),(47,27,29,'re lindas','2023-06-16 15:28:47','2023-06-16 15:28:47',NULL),(48,26,29,'Buenisimas','2023-06-16 15:29:44','2023-06-16 15:29:44',NULL);
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `usuario_id` int(10) unsigned NOT NULL,
  `nombre_producto` varchar(50) NOT NULL,
  `descripcion` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `imagen` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_productos_usuarios` (`usuario_id`),
  CONSTRAINT `fk_productos_usuarios` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,1,'Topper Amarillas','Zapatillas, sneaker, deportivas amarilla, blanca, gris y negra de marca TOPPER. Talles disponibles: 36, 37,39,40,41','2023-04-12 20:43:54','2023-06-13 17:39:35',NULL,'./images/amarillo.webp'),(2,2,'Botitas Blancas','Botitas blancas, urbanas, color: blanco. Talles disponibles: 33,37,38.','2023-04-12 20:43:54','2023-05-29 20:27:43',NULL,'./images/blancas.webp'),(3,3,'Zapatillas celestes','Zapatillas celestes, deportivas. Color: celeste. Talles disponibles: 38, 41, 42 ','2023-04-12 20:43:54','2023-05-29 20:27:43',NULL,'./images/celeste.webp'),(4,4,'Nike botitas coloridas','Botitas coloridas, urbanas. Talles disponible: 36, 38, 39, 40','2023-04-12 20:43:54','2023-05-29 20:27:43',NULL,'./images/color.webp'),(5,5,'Converse All Star negras','Ideales para recorrer la ciudad todos los días.Un calzado súper cómodo y duradero diseñado con el clásico estilo de la marca. Confeccionadas en textil con suela de goma.. Color: negro. Talles diponibles: 39, 40, 41, 42','2023-04-12 20:43:54','2023-05-29 20:27:43',NULL,'./images/converse_negra.webp'),(6,1,'Zapatillas 47 Street','Zapatilla de PU con recorte de color en el talón. Base de dos colores. Cordones con 3 dijes de caritas niquel. Talles disponibles: 35, 36, 37, 38','2023-04-12 20:43:54','2023-05-29 20:27:43',NULL,'./images/lila.webp'),(7,2,'Nike Air Force negras','Zapatillas Air force pegadas y cocidas eco-cuero suela de goma de caucho. Color: negras. Talles disponibles: 39, 40, 41, 42','2023-04-12 20:43:54','2023-05-29 20:27:43',NULL,'./images/nike_black.webp'),(8,3,'Nike Air Force grises','Las ame las ame las ame!!','2023-04-12 20:43:54','2023-05-29 20:27:43',NULL,'./images/nike_gris.webp'),(9,4,'Nike Air Force negras y blancas','Zapatillas urbanas originales. Talles disponibles: 37, 38, 40','2023-04-12 20:43:54','2023-05-29 20:27:43',NULL,'./images/nike_negras.webp'),(10,5,'Vans negras','Zapatillas urbanas súper cómodas. Talles disponible: 26, 37, 38, 39. ','2023-04-12 20:43:54','2023-05-29 20:27:43',NULL,'./images/vans_botita.jpeg'),(24,6,'Nike Negras','Zapatillas negras nike. Todos los talles disponibles','2023-06-14 20:35:23','2023-06-14 20:35:23',NULL,'./images/nike_negras.webp'),(25,16,'Vans ','Zapatillas vans con todos los talles disponibles desde 36 hasta 42','2023-06-16 02:12:00','2023-06-16 02:12:00',NULL,'./images/vans_botita.jpeg'),(26,16,'Zapatillas negras','Zapatillassssssss','2023-06-16 02:20:53','2023-06-16 02:20:53',NULL,'./images/zapatillas-hombre-new-balance-574-ml574pr2_nb_02_i-min_2.jpg'),(27,28,'Converse negras','Las zapatillas mas epicas','2023-06-16 14:14:12','2023-06-16 14:14:12',NULL,'./images/converse_negra.webp');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(30) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `password` varchar(200) NOT NULL,
  `foto_de_perfil` text,
  `fecha` date NOT NULL,
  `dni` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `dni` (`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'tomasm@gmail.com','Tomas','tomas1234','foto','2000-05-17',95469117,'2023-04-12 20:43:54','2023-06-07 20:13:54',NULL),(2,'justinb@gmail.com','Justin','justin1234','foto','2003-09-08',38809234,'2023-04-12 20:43:54','2023-06-07 20:14:28',NULL),(3,'danielag@gmail.com','Daniel','daniela1234','foto','2004-05-28',45789123,'2023-04-12 20:43:54','2023-06-07 20:14:41',NULL),(4,'marianal@gmail.com','Mariana','mariana1234','foto','2003-08-06',21345879,'2023-04-12 20:43:54','2023-06-07 20:14:52',NULL),(5,'sebass@gmail.com','Sebastian','sebas1234','foto','2004-05-06',63187653,'2023-04-12 20:43:54','2023-06-07 20:15:01',NULL),(6,'pepe@pepe.com','Pedrito','123456','https://www.google.com/search?q=messi&tbm=isch&sa=X&ved=2ahUKEwjUv7vR0MX_AhUyqpUCHTLNCkIQ0pQJegQIChAB&biw=1440&bih=821&dpr=2#imgrc=fIoHvEQ2mHumeM','2023-06-15',24578,'2023-06-12 18:32:10','2023-06-15 15:56:05',NULL),(7,'marc@gmail.com','Marcos','$2a$10$QUqWfYBntE17ADWkqrygauT9sgj4AL4grQlgoXU91PBTR0ScoDYOO',NULL,'2023-06-01',12345,'2023-06-12 19:06:39','2023-06-12 19:06:39',NULL),(9,'des@hotmail.com','des','$2a$10$DXHJOK.yL1DQfQDQt8P3xeMk5FDLK.i51iDDRy/K1DyFePbst4gjO',NULL,'2023-06-08',45282457,'2023-06-12 19:25:35','2023-06-12 19:25:35',NULL),(10,'mariana@gmail.com','Mariana','$2a$10$jxGQpABgyYIfFx4kkfTpUOI1.CPTYSl7iE6Pnv2SBjj5G7xaqeSva',NULL,'2023-06-01',2346788,'2023-06-13 02:30:52','2023-06-13 02:30:52',NULL),(11,'nick@gmail.com','nick','$2a$10$EniJVBugw5hjAKr3syudKuk95LO9.17EEZTMb7ZR3ROWEkwp8cJ7W',NULL,'2023-06-13',32636,'2023-06-13 14:37:34','2023-06-13 14:37:34',NULL),(12,'pepe2@pepe2.com','pepe2','$2a$10$d9/t/fvc6FREjwbBxDxcCOiuzgdKQJsBM427YTKAve0VDSOWaFcbC',NULL,'2023-06-08',26738,'2023-06-13 14:39:29','2023-06-13 14:39:29',NULL),(13,'nicole2@gmail.com','nicole2','$2a$10$ZeiOLAB0a4QD1zHg8NXaQuNJrjsQbTreD9A/sKLXLMeV5GNDxYpTu',NULL,'2023-06-08',1280,'2023-06-13 14:39:58','2023-06-13 14:39:58',NULL),(14,'giu3@gmail.com','giu3','$2a$10$X/8uY/fX80u0beBK3FYcjuWc1j33k1Gis3N0NyHz/Yb1.DeRTvfNG',NULL,'2023-06-09',3728,'2023-06-13 14:40:28','2023-06-13 14:40:28',NULL),(15,'giuliana@giu.com','giuliana','$2a$10$6JlyBr.b5HQXF6UhbnOnf.HLh39763c0oVddQOrypiCGSWtqTps0.',NULL,'2023-06-02',38293,'2023-06-13 14:40:59','2023-06-13 14:40:59',NULL),(16,'mariana@mariana.com','Mariana','$2a$10$BEIk7iVc4klpYjpAVgYNtOkx5FVVAHyXPLcwLwk1ISDcXysK/79wq','https://i.pinimg.com/736x/84/c0/35/84c035bd8ae5d39cac5c9227c38f9e62.jpg','9999-09-09',4554545,'2023-06-13 15:02:41','2023-06-16 15:18:21',NULL),(17,'tomas@tomas.com','Tomas','$2a$10$Cz8JFH6Drxadsj98JchHh./P3kDBcbDeHiZE0QPvEjR83gK7Oznxu','https://www.famousbirthdays.com/faces/ben--tez-tom--s-image.jpg','2000-03-02',4565543,'2023-06-13 17:19:21','2023-06-16 15:21:29',NULL),(18,'guadi@gmail.com','Guada','$2a$10$34.QA4JH0gWBD8MHRXFPHu7iTTnLUC4mxOjZEvfHIBo/sIKrbAfd.','','2023-06-09',57658,'2023-06-15 16:02:47','2023-06-15 16:06:17',NULL),(19,'klau@gmail.com','claudia','$2a$10$nc9wSwv4lwZqwPU0IxvroOiE34TzHYsV5DuwY9eOX01PicpYL2q9a','','2023-06-09',37180,'2023-06-15 16:22:17','2023-06-15 16:22:51',NULL),(20,'juani@gmail.com','juani','$2a$10$ClPoh9rV52hMVhxTmOizcOCegONUJpde.aJL0t9.vrm37G3Gc.VKS','','2023-06-08',1234,'2023-06-15 16:25:31','2023-06-15 16:25:53',NULL),(21,'eli@gmail.com','elisa','$2a$10$eU7HUwv2aH0cqdKYMI74L.W/Ioty8aEuzNt/nis8Bx9KjEayQRqlC','','2023-06-09',2819,'2023-06-15 16:28:22','2023-06-15 16:28:42',NULL),(22,'mario@mario.com','mari','$2a$10$ZD.eW/tOmPGHtaycPZ1yBOh4/4X3U79LaF9OfocfUfKwCSlGuZdZW','','2023-06-09',21820,'2023-06-15 16:31:29','2023-06-15 16:31:48',NULL),(23,'agus@a.com','','$2a$10$w4oeVF6L3ZCu78EpqfgC8OldtyxRbev32T68xaJwHz/dZwpkAmAgi','','2023-06-08',27389723,'2023-06-15 16:34:26','2023-06-16 15:44:59',NULL),(24,'ivan@gmail.com','ivi','$2a$10$JczBo4piIGgSnt.ZghXr8Owi0S6zWKp1jyPeDcA6KuCg0YRTfubgG','','2023-06-24',47802,'2023-06-15 18:35:25','2023-06-15 18:47:45',NULL),(25,'marian@gmail.com','mariano','$2a$10$Hm2ql8unOthiwL9NknW2gefxPbu6TvKl.16EiPP.QxPn/TW6a0EDC','','2023-06-10',23809,'2023-06-15 18:49:54','2023-06-15 18:50:21',NULL),(26,'bauti@gmail.com','bau','$2a$10$TSWQ5aaylGl2cIpfjgczGeKkfz.FrpaYf.LaQ3QkOTs7qJzRvPlxm','','2023-06-09',478023,'2023-06-15 18:51:49','2023-06-15 18:55:53',NULL),(27,'sola@gmail.com','sol','$2a$10$iApeA4Ps.s6p08cUZog45eUAVqgDuUeARdqN9nvTdp/JroZmtCjNW','','2023-06-09',47084,'2023-06-15 18:56:15','2023-06-15 18:57:16',NULL),(28,'maria@gmail.com','Maria','$2a$10$oD5icRBen2wDwZpxftKunOJNrfSBVfpRRcK26K648DgmApTSSd7DK','https://www.unionvegana.org/wp-content/uploads/2021/08/1mariabecerra-1024x1024.jpg','2023-06-15',21283,'2023-06-16 02:59:43','2023-06-16 03:20:00',NULL),(29,'pesopluma@gmail.com','','$2a$10$VoiRgNgJe19SwyZzusGmDOvUsn9pJEbKVHLOvRyLSi3YRBQjc6gmS','https://www.lavoz.com.ar/resizer/vPM3MQuPRKmd1kzV4tnm_yqK5Q0=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/GS3JE3POJRAN3KLUDDOPP3SHAA.jpg','2023-06-16',47892374,'2023-06-16 15:23:17','2023-06-16 15:42:19',NULL),(30,'solani@gmail.com','soli','$2a$10$2ufSyINaj2Kqwmvdq9SEzuvFI6IcQ7mJmhxvxgYsvggXPygXP2Kmi','','2023-06-16',3189347,'2023-06-16 15:46:32','2023-06-16 17:05:11',NULL),(31,'pesoplumaa@gmail.com','Peso Plumaa','$2a$10$dPTk.B5vWjgFZGqdT9fQBeaAgvwwqBbKBPgpxAoXG2rAiRmvKafcq','https://www.lavoz.com.ar/resizer/vPM3MQuPRKmd1kzV4tnm_yqK5Q0=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/GS3JE3POJRAN3KLUDDOPP3SHAA.jpg','2023-06-07',38074923,'2023-06-16 17:07:04','2023-06-16 17:07:04',NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-16 16:29:04
