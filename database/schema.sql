DROP DATABASE IF EXISTS zoeviolin;

CREATE DATABASE zoeviolin;

USE zoeviolin;

CREATE TABLE images (
  url varchar(20) NOT NULL,
  thumbnail varchar(500) NOT NULL,
  updated bigint(200) NOT NULL,
  PRIMARY KEY (URL)
);
