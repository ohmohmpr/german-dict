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

INSERT INTO sätze (satz, bedeutung) VALUES ('Der' kleine Raum mit den Pflanzen ist jetzt perfekt.', 'T'he small room with the plants is now perfect');

SHOW default_text_search_config;
set default_text_search_config='german';

SELECT * FROM sätze WHERE to_tsvector('german', satz) @@ plainto_tsquery('geben');

UPDATE sätze SET correct_point = correct_point + 1 WHERE id = 9;
UPDATE sätze SET wrong_point = wrong_point - 1 WHERE id = 9;

UPDATE sätze SET satz = 'Die weißen Räume sind hell und schön.' WHERE id = 3;

SELECT version();
ALTER TABLE sätze ADD COLUMN correct_point integer wrong_point integer total_point integer;
SELECT * FROM sätze ORDER BY update_time DESC;
SELECT * FROM sätze ORDER BY RANDOM() LIMIT 1;

psql -U postgres

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


CREATE SEQUENCE wörter_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
CREATE TABLE wörter (
    id bigint DEFAULT nextval('wörter_id_seq'::regclass) NOT NULL PRIMARY KEY,
    wort character varying(255) NOT NULL UNIQUE,
    bedeutung character varying(255),
    create_time timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    update_time timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);

INSERT INTO wort (verb, bedeutung) VALUES ('geben', 'give'), 
('aufgeben', 'give up'), 
('ausgeben', 'spend'), 
('übergeben', 'throw up');

SELECT * FROM sätze where ASCII(left(satz, 1)) between ASCII('A') and ASCII('Z') ORDER BY update_time DESC;
SELECT * FROM sätze where ASCII(left(satz, 1)) = ASCII('Ä') ORDER BY update_time DESC;
SELECT * FROM sätze where ASCII(left(satz, 1)) = ASCII('Ö') ORDER BY update_time DESC;
SELECT * FROM sätze where ASCII(left(satz, 1)) = ASCII('Ü') ORDER BY update_time DESC;
SELECT * FROM sätze where ASCII(left(satz, 1)) = ASCII('ẞ') ORDER BY update_time DESC;

SELECT satz FROM sätze;
SELECT substring(satz from '^[A-Z]*') ;
SELECT regexp_match();
SELECT satz, (SELECT regexp_matches(satz, '^[A-Z].*')) FROM sätze;
SELECT satz, (SELECT regexp_matches(satz, E'^[A-Z].*\\s+')) FROM sätze;
-- SELECT 
--     (
       
--             SELECT regexp_split_to_array( SELECT regexp_matches(satz, '[A-Z].*'), E'\\s+'), 
--     ) as words 
-- FROM sätze;
-- SELECT * FROM regexp_split_to_array(satz, E'\\s+');

-- SELECT words[:3]
-- FROM (
--         SELECT 
--             (SELECT regexp_split_to_array(satz, E'\\s+')) as words
--         FROM sätze
--     ) arr;

-- regexp_substr
SELECT 
    regexp_replace(
        regexp_matches( 
            UNNEST( regexp_split_to_array(satz, E'\\s+') ), '^[A-Z, Ä, Ö, Ü, ẞ].*'
        ),
        '.',
        ''
    )
FROM sätze;

SELECT 
    DISTINCT regexp_replace(
        UNNEST (regexp_matches( 
            UNNEST( regexp_split_to_array(satz, E'\\s+') ), '^[A-Z, Ä, Ö, Ü, ẞ].*'
            )
        ),
        '\.|\:|\,|!|\?',
        ''
    )
FROM sätze;

INSERT INTO wörter (wort)
    (
        SELECT 
            DISTINCT regexp_replace(
                UNNEST (regexp_matches( 
                    UNNEST( regexp_split_to_array(satz, E'\\s+') ), '^[A-Z, Ä, Ö, Ü, ẞ].*'
                    )
                ),
                '\.|\:|\,|!|\?',
                ''
            )
        FROM sätze
        
    )
ON CONFLICT (wort) DO NOTHING;

ALTER TABLE wörter ADD COLUMN nicht_wort boolean;
-- ALTER TABLE wörter ALTER COLUMN nicht_wort SET DEFAULT yes;
ALTER TABLE wörter 
    ADD COLUMN correct_point integer default 0,
    ADD COLUMN wrong_point integer default 0,
    ADD COLUMN total_point integer default 0;

ALTER TABLE wörter DROP COLUMN point;

ALTER TABLE wörter ALTER COLUMN nicht_wort SET DEFAULT false;
ALTER TABLE wörter ALTER COLUMN point SET 0;

update public.wörter set nicht_wort  = false;


-- https://www.postgresql.org/docs/9.1/functions-string.html
-- https://stackoverflow.com/questions/15625629/regex-expressions-in-java-s-vs-s
-- https://www.postgresql.org/docs/current/functions-matching.html


-- https://stackoverflow.com/questions/1497895/can-i-configure-postgresql-programmatically-to-not-eliminate-stop-words-in-full
-- https://stackoverflow.com/questions/47873990/postgresql-create-a-search-configuration-with-custom-stop-word-list
-- https://stackoverflow.com/questions/1497895/can-i-configure-postgresql-programmatically-to-not-eliminate-stop-words-in-full?rq=3
-- https://stackoverflow.com/questions/34198634/postgresql-missing-text-search-configuration
-- https://www.postgresql.org/docs/current/textsearch-debugging.html

-- CREATE TEXT SEARCH CONFIGURATION german_nostop ( COPY = german );

-- ALTER TEXT SEARCH CONFIGURATION public.german_nostop
--    ALTER MAPPING
--       FOR asciiword, asciihword, hword_asciipart, hword, hword_part, word
--       WITH german_nostop;

-- CREATE TEXT SEARCH DICTIONARY public.german_nostop (
--    TEMPLATE = pg_catalog.simple
-- );

SELECT * FROM sätze WHERE to_tsvector('german_nostop', satz) @@ to_tsquery('german_nostop', 'gebe |ju über');
SELECT * FROM sätze WHERE to_tsvector('german_nostop', satz) @@ to_tsquery('german_nostop', 'markentaschen');

UPDATE sätze SET satz = 'Schenkt Tom seiner Frau eine Markentasche?' WHERE id = 265;

EXPLAIN SELECT * FROM sätze;

CREATE SEQUENCE verben_mit_präposition_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
CREATE TABLE verben_mit_präposition (
    id bigint DEFAULT nextval('verben_mit_präposition_id_seq'::regclass) NOT NULL PRIMARY KEY,
    verben_mit_präposition character varying(255) NOT NULL UNIQUE,
    verb character varying(255),
    präposition character varying(255),
    bedeutung character varying(255),
    create_time timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    update_time timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);

ALTER TABLE verben_mit_präposition 
    ADD COLUMN akkdat character varying(255);

SELECT * FROM verben_mit_präposition;
DELETE FROM verben_mit_präposition WHERE id  = 2;

CREATE SEQUENCE adjektiv_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
CREATE TABLE adjektiv (
    id bigint DEFAULT nextval('adjektiv_id_seq'::regclass) NOT NULL PRIMARY KEY,
    adjektiv character varying(255) NOT NULL UNIQUE,
    komparativ character varying(255),
    superlativ character varying(255),
    bedeutung character varying(255),
    correct_point,
    create_time timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    update_time timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);

ALTER TABLE adjektiv 
    ADD COLUMN regelmäßig boolean;

UPDATE adjektiv SET superlativ = 'am ältesten' WHERE id = 1;

-------------------------------------------- personal_pronomen --------------------------------------------
CREATE SEQUENCE personal_pronomen_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
CREATE TABLE personal_pronomen (
    id bigint DEFAULT nextval('personal_pronomen_id_seq'::regclass) NOT NULL PRIMARY KEY,
    personal_pronomen character varying(255) NOT NULL UNIQUE,
    personal character varying(255),
    function_n character varying(255),
    pronomen character varying(255),
    correct_point integer default 0,
    wrong_point integer default 0,
    total_point integer default 0,
    create_time timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    update_time timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);

INSERT INTO personal_pronomen 
    (personal_pronomen, personal, function_n, pronomen) 
VALUES 
    ('singular_nominativ_ich', 'singular', 'nominativ', 'ich'),
    ('singular_akkusativ_ich', 'singular', 'akkusativ', 'mich'),
    ('singular_dativ_ich', 'singular', 'dativ', 'mir'),
    ('singular_nominativ_du', 'singular', 'nominativ', 'du'),
    ('singular_akkusativ_du', 'singular', 'akkusativ', 'dich'),
    ('singular_dativ_du', 'singular', 'dativ', 'dir'),
    ('singular_nominativ_er', 'singular', 'nominativ', 'er'),
    ('singular_akkusativ_er', 'singular', 'akkusativ', 'ihn'),
    ('singular_dativ_er', 'singular', 'dativ', 'ihm'),
    ('singular_nominativ_es', 'singular', 'nominativ', 'es'),
    ('singular_akkusativ_es', 'singular', 'akkusativ', 'es'),
    ('singular_dativ_es', 'singular', 'dativ', 'ihm'),
    ('singular_nominativ_sie', 'singular', 'nominativ', 'sie'),
    ('singular_akkusativ_sie', 'singular', 'akkusativ', 'sie'),
    ('singular_dativ_sie', 'singular', 'dativ', 'ihr'),
    ('plural_nominativ_wir', 'plural', 'nominativ', 'wir'),
    ('plural_akkusativ_wir', 'plural', 'akkusativ', 'uns'),
    ('plural_dativ_wir', 'plural', 'dativ', 'uns'),
    ('plural_nominativ_ihr', 'plural', 'nominativ', 'ihr'),
    ('plural_akkusativ_ihr', 'plural', 'akkusativ', 'euch'),
    ('plural_dativ_ihr', 'plural', 'dativ', 'euch'),
    ('plural_nominativ_sie', 'plural', 'nominativ', 'sie'),
    ('plural_akkusativ_sie', 'plural', 'akkusativ', 'sie'),
    ('plural_dativ_sie', 'plural', 'dativ', 'ihnen'),
    ('plural_nominativ_Sie', 'plural', 'nominativ', 'Sie'),
    ('plural_akkusativ_Sie', 'plural', 'akkusativ', 'Sie'),
    ('plural_dativ_Sie', 'plural', 'dativ', 'Ihnen');

SELECT * FROM personal_pronomen ORDER BY correct_point ASC;
SELECT * FROM personal_pronomen WHERE function_n != 'nominativ' ORDER BY RANDOM() LIMIT 1;
-------------------------------------------- personal_pronomen --------------------------------------------

-------------------------------------------- jeder_und_alle --------------------------------------------
CREATE SEQUENCE jeder_und_alle_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
CREATE TABLE jeder_und_alle (
    id bigint DEFAULT nextval('jeder_und_alle_id_seq'::regclass) NOT NULL PRIMARY KEY,
    personal_function_n character varying(255) NOT NULL UNIQUE,
    personal character varying(255),
    function_n character varying(255),
    jeder_und_alle character varying(255),
    correct_point integer default 0,
    wrong_point integer default 0,
    total_point integer default 0,
    create_time timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    update_time timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);

INSERT INTO jeder_und_alle 
    (personal_function_n, personal, function_n, jeder_und_alle) 
VALUES 
    ('maskulin_nominativ', 'maskulin', 'nominativ', 'jeder'),
    ('maskulin_akkusativ', 'maskulin', 'akkusativ', 'jeden'),
    ('maskulin_dativ', 'maskulin', 'dativ', 'jedem'),
    ('maskulin_genitiv', 'maskulin', 'genitiv', 'jedes'),
    ('neutrum_nominativ', 'neutrum', 'nominativ', 'jedes'),
    ('neutrum_akkusativ', 'neutrum', 'akkusativ', 'jedes'),
    ('neutrum_dativ', 'neutrum', 'dativ', 'jedem'),
    ('neutrum_genitiv', 'neutrum', 'genitiv', 'jedes'),
    ('feminin_nominativ', 'feminin', 'nominativ', 'jede'),
    ('feminin_akkusativ', 'feminin', 'akkusativ', 'jede'),
    ('feminin_dativ', 'feminin', 'dativ', 'jeder'),
    ('feminin_genitiv', 'feminin', 'genitiv', 'jeder'),
    ('plural_nominativ', 'plural', 'nominativ', 'alle'),
    ('plural_akkusativ', 'plural', 'akkusativ', 'alle'),
    ('plural_dativ', 'plural', 'dativ', 'allen'),
    ('plural_genitiv', 'plural', 'genitiv', 'aller');

SELECT * FROM jeder_und_alle ORDER BY correct_point ASC;
SELECT * FROM jeder_und_alle WHERE function_n != 'nominativ' ORDER BY RANDOM() LIMIT 1;
-------------------------------------------- jeder_und_alle --------------------------------------------