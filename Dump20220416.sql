-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: zenclass
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `batch`
--

DROP TABLE IF EXISTS `batch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `batch` (
  `BatchId` int NOT NULL AUTO_INCREMENT,
  `BatchName` varchar(255) NOT NULL,
  `Course` varchar(255) NOT NULL,
  `CourseLang` set('English','Tamil','Hindi') DEFAULT NULL,
  `taskID` int DEFAULT NULL,
  PRIMARY KEY (`BatchId`),
  KEY `taskID` (`taskID`),
  CONSTRAINT `batch_ibfk_1` FOREIGN KEY (`taskID`) REFERENCES `task` (`TaskId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `batch`
--

LOCK TABLES `batch` WRITE;
/*!40000 ALTER TABLE `batch` DISABLE KEYS */;
INSERT INTO `batch` VALUES (1,'WD1-MERN','MERN','English',1),(2,'WD2-Python','Python','English',4),(3,'WD3-MERN','MERN','Hindi',2),(4,'WD3-Java','Java','Tamil',9),(5,'WD4-Java','Java','English',7),(6,'WD6-Python','Python','Tamil',6);
/*!40000 ALTER TABLE `batch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mentor`
--

DROP TABLE IF EXISTS `mentor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mentor` (
  `MentID` int NOT NULL AUTO_INCREMENT,
  `MentorName` varchar(255) NOT NULL,
  `MentorExp` int NOT NULL,
  `MentLanguage` set('English','Tamil','Hindi') DEFAULT NULL,
  `specialisation` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`MentID`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentor`
--

LOCK TABLES `mentor` WRITE;
/*!40000 ALTER TABLE `mentor` DISABLE KEYS */;
INSERT INTO `mentor` VALUES (1,'Siva Ranjini',12,'English','MERN,Python'),(4,'Dubey',8,'Hindi','MERN'),(5,'Ramu',6,'English','AWS'),(6,'Shastri',14,'Tamil','Java,Python'),(7,'Raghav',12,'Tamil','Java'),(8,'Samy',5,'English','Java');
/*!40000 ALTER TABLE `mentor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `StudentId` int NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `BatchID` int DEFAULT NULL,
  `MentorID` int DEFAULT NULL,
  `YearOfJoin` year NOT NULL,
  `LangChosen` set('English','Tamil','Hindi') DEFAULT NULL,
  PRIMARY KEY (`StudentId`),
  KEY `BatchID` (`BatchID`),
  KEY `MentorID` (`MentorID`),
  CONSTRAINT `student_ibfk_1` FOREIGN KEY (`BatchID`) REFERENCES `batch` (`BatchId`),
  CONSTRAINT `student_ibfk_2` FOREIGN KEY (`MentorID`) REFERENCES `mentor` (`MentID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (1,'Sam','P',1,1,2022,'English'),(2,'Rama','R',1,1,2022,'English'),(3,'Murthy','N',2,1,2021,'English'),(4,'Pavan','Ben',5,8,2022,'English'),(5,'Gayatri','P',4,7,2022,'Tamil'),(6,'Surya','Ram',6,6,2022,'Tamil'),(7,'Vamsi','Mohana',4,7,2022,'Tamil'),(8,'Mohana','Rao',6,6,2022,'Tamil'),(9,'Sowbhagyam','B',3,4,2021,'Hindi'),(10,'Krishna','Vasantha',3,4,2022,'Hindi');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task`
--

DROP TABLE IF EXISTS `task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `task` (
  `TaskId` int NOT NULL AUTO_INCREMENT,
  `Taskdetails` varchar(255) NOT NULL,
  `tasklang` set('English','Tamil','Hindi') DEFAULT NULL,
  PRIMARY KEY (`TaskId`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task`
--

LOCK TABLES `task` WRITE;
/*!40000 ALTER TABLE `task` DISABLE KEYS */;
INSERT INTO `task` VALUES (1,'MERN1','English'),(2,'MERN2','Hindi'),(3,'MERN3','Tamil'),(4,'PYTHON1','English'),(5,'PYTHON2','Hindi'),(6,'PYTHON3','Tamil'),(7,'JAVA1','English'),(8,'JAVA2','Hindi'),(9,'JAVA3','Tamil');
/*!40000 ALTER TABLE `task` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-16 17:57:30
