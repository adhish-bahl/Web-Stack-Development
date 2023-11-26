use lab13_app;
CREATE TABLE note(
    id integer PRIMARY KEY AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    contents TEXT NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW());
INSERT INTO note(title,contents) VALUES('Note1','Doing Lab 13'),
('Note 2','Almost Finishing Lab 13');