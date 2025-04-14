CREATE SEQUENCE sätze_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

CREATE TABLE sätze (
    id bigint DEFAULT nextval('sätze_id_seq'::regclass) NOT NULL PRIMARY KEY,
    satz character varying(255) NOT NULL UNIQUE,
    bedeutung character varying(255) NOT NULL,
    has_wort boolean,
    has_bestimmter_artikel boolean,
    has_unbestimmter_artikel boolean,
    has_nominativ boolean,
    has_dativ boolean,
    has_akkusativ boolean,
    has_genetiv boolean,
    has_adjektive_nominativ boolean,
    has_adjektive_dativ boolean,
    has_adjektive_akkusativ boolean,
    has_adjektive_genetiv boolean,
    create_time timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    update_time timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE SEQUENCE verben_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
CREATE TABLE verben (
    id bigint DEFAULT nextval('verben_id_seq'::regclass) NOT NULL PRIMARY KEY,
    verb character varying(255) NOT NULL UNIQUE,
    bedeutung character varying(255) NOT NULL,
    create_time timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    update_time timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);

INSERT INTO verben (verb, bedeutung) VALUES ('geben', 'give'), 
('aufgeben', 'give up'), 
('ausgeben', 'spend'), 
('übergeben', 'throw up');

CREATE SEQUENCE präposition_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
CREATE TABLE präpositionen (
    id bigint DEFAULT nextval('präposition_id_seq'::regclass) NOT NULL PRIMARY KEY,
    präposition character varying(255) NOT NULL UNIQUE,
    bedeutung character varying(255) NOT NULL,
    immer_mit_dativ boolean,
    create_time timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    update_time timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);

INSERT INTO präpositionen (präposition, bedeutung, immer_mit_dativ) VALUES ('an', 'an', 'no'), 
('auf', 'auf', 'no'), ('vor', 'vor', 'no'), ('zwischen', 'zwischen', 'no');

INSERT INTO sätze (satz, bedeutung, has_bestimmter_artikel) VALUES 
('Der kleine Raum mit den Pflanzen ist jetzt perfekt.', 'The small room with the plants is now perfect', true);

SHOW default_text_search_config;
set default_text_search_config='german';

SELECT * FROM sätze WHERE to_tsvector('german', satz) @@ plainto_tsquery('geben');

UPDATE sätze SET correct_point = correct_point + 1 WHERE id = 9;
UPDATE sätze SET wrong_point = wrong_point - 1 WHERE id = 9;

UPDATE sätze SET satz = 'Ruf mich an, wenn es Probleme gibt.' WHERE id = 10;

SELECT version();
ALTER TABLE sätze ADD COLUMN correct_point integer wrong_point integer total_point integer;
SELECT * FROM sätze ORDER BY update_time DESC;
SELECT * FROM sätze ORDER BY RANDOM() LIMIT 1;