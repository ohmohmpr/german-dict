CREATE SEQUENCE sentence_german_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

CREATE TABLE sentence_german (
    id bigint DEFAULT nextval('sentence_german_id_seq'::regclass) NOT NULL PRIMARY KEY,
    sentence_german character varying(255) NOT NULL UNIQUE,
    sentence_english character varying(255) NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);

INSERT INTO sentence_german (sentence_german, sentence_english) VALUES 
('Was ist hier los?', 'What is going on here?');

('Ich sehe dich in der Bäckerei.', 'I see you in the bakery'),
('Ich sehe mir das Gemälde im Museum an.', 'I look at the painting in the museum');

SHOW default_text_search_config;
set default_text_search_config='german';

select * from sentence_german where to_tsvector('german', sentence_german) @@ plainto_tsquery('sehe');
