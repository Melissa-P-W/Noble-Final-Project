DROP DATABASE IF EXISTS 'noble';
CREATE DATABASE 'noble'
USE 'noble';

CREATE TABLE noble_sports_and_goods
(
    id INT AUTO_INCREMENT,
    productName VARCHAR(40) NOT NULL,
    img VARCHAR NOT NULL,
    alt VARCHAR(20),
    price SMALLINT NOT NULL,
    priceString VARCHAR(10),
    qty SMALLINT NOT NULL,
    itemDesc VARCHAR(50) NOT NULL
    CONSTRAINT pk_id PRIMARY KEY(id)
)