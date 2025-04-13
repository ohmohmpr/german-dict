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

INSERT INTO sätze (satz, bedeutung, has_bestimmter_artikel) VALUES 
('Der kleine Raum mit den Pflanzen ist jetzt perfekt.', 'The small room with the plants is now perfect', true);

SHOW default_text_search_config;
set default_text_search_config='german';

select * from sentence_german where to_tsvector('german', sentence_german) @@ plainto_tsquery('sehe');
SELECT version();
ALTER TABLE sätze ADD COLUMN remark character varying(255);
select * from sätze ORDER BY update_time DESC;