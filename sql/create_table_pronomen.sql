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

-------------------------------------------- reflexiv_pronomen --------------------------------------------
CREATE SEQUENCE reflexiv_pronomen_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
CREATE TABLE reflexiv_pronomen (
    id bigint DEFAULT nextval('reflexiv_pronomen_id_seq'::regclass) NOT NULL PRIMARY KEY,
    reflexiv_pronomen character varying(255) NOT NULL UNIQUE,
    personal character varying(255),
    function_n character varying(255),
    pronomen character varying(255),
    correct_point integer default 0,
    wrong_point integer default 0,
    total_point integer default 0,
    create_time timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    update_time timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);

INSERT INTO reflexiv_pronomen 
    (reflexiv_pronomen, personal, function_n, pronomen) 
VALUES 
    ('singular_akkusativ_ich', 'singular', 'akkusativ', 'mich'),
    ('singular_dativ_ich', 'singular', 'dativ', 'mir'),
    ('singular_akkusativ_du', 'singular', 'akkusativ', 'dich'),
    ('singular_dativ_du', 'singular', 'dativ', 'dir'),
    ('singular_akkusativ_er', 'singular', 'akkusativ', 'sich'),
    ('singular_dativ_er', 'singular', 'dativ', 'sich'),
    ('singular_akkusativ_es', 'singular', 'akkusativ', 'sich'),
    ('singular_dativ_es', 'singular', 'dativ', 'sich'),
    ('singular_akkusativ_sie', 'singular', 'akkusativ', 'sich'),
    ('singular_dativ_sie', 'singular', 'dativ', 'sich'),
    ('singular_akkusativ_man', 'singular', 'akkusativ', 'sich'),
    ('singular_dativ_man', 'singular', 'dativ', 'sich'),
    ('plural_akkusativ_wir', 'plural', 'akkusativ', 'uns'),
    ('plural_dativ_wir', 'plural', 'dativ', 'uns'),
    ('plural_akkusativ_ihr', 'plural', 'akkusativ', 'euch'),
    ('plural_dativ_ihr', 'plural', 'dativ', 'euch'),
    ('plural_akkusativ_sie', 'plural', 'akkusativ', 'sich'),
    ('plural_dativ_sie', 'plural', 'dativ', 'sich'),
    ('plural_akkusativ_Sie', 'plural', 'akkusativ', 'sich'),
    ('plural_dativ_Sie', 'plural', 'dativ', 'sich');

SELECT * FROM reflexiv_pronomen ORDER BY correct_point ASC;
-------------------------------------------- reflexiv_pronomen --------------------------------------------

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

-------------------------------------------- jemand_und_niemand --------------------------------------------
CREATE SEQUENCE jemand_und_niemand_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
CREATE TABLE jemand_und_niemand (
    id bigint DEFAULT nextval('jemand_und_niemand_id_seq'::regclass) NOT NULL PRIMARY KEY,
    personal_function_n character varying(255) NOT NULL UNIQUE,
    personal character varying(255),
    function_n character varying(255),
    jemand_und_niemand character varying(255),
    correct_point integer default 0,
    wrong_point integer default 0,
    total_point integer default 0,
    create_time timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    update_time timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);

INSERT INTO jemand_und_niemand 
    (personal_function_n, personal, function_n, jemand_und_niemand) 
VALUES 
    ('jemand_nominativ', 'jemand', 'nominativ', 'jemand'),
    ('jemand_akkusativ', 'jemand', 'akkusativ', 'jemand(en)'),
    ('jemand_dativ', 'jemand', 'dativ', 'jemandem'),
    ('jemand_genitiv', 'jemand', 'genitiv', 'jemandes'),
    ('niemand_nominativ', 'niemand', 'nominativ', 'niemand'),
    ('niemand_akkusativ', 'niemand', 'akkusativ', 'niemand(en)'),
    ('niemand_dativ', 'niemand', 'dativ', 'niemandem'),
    ('niemand_genitiv', 'niemand', 'genitiv', 'niemandes');

SELECT * FROM jemand_und_niemand ORDER BY correct_point ASC;
-------------------------------------------- jeder_und_alle --------------------------------------------