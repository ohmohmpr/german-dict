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

UPDATE sätze SET bedeutung = 'The piglet was small and it was cute.' WHERE id = 131;

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

-- SELECT * FROM sätze WHERE to_tsvector('german_nostop', satz) @@ plainto_tsquery('german_nostop', 'und');