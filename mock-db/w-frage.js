const words = [
    { 
        question: "Mit wem gehst du gern ins Kino?",
        question_eng: "Who do you like to go to the movies with?",
        answer: "Mit meiner Schwester.",
        answer_eng: "with my sister.",
    },
    { 
        question: "Mit wem gehst du gern einkaufen?",
        question_eng: "Who do you like to go shopping with?",
        answer: "Mit meiner Mutter.",
        answer_eng: "With my mother.",
    },
    { 
        question: "Mit wem gehst du gern ins Restaurant?",
        question_eng: "Who do you like to go to the restaurant with?",
        answer: "Mit meiner Familie.",
        answer_eng: "With my family.",
    },
    { 
        question: "Mit wem gehst du gern Schwimmen?",
        question_eng: "Who do you like to go swimming with?",
        answer: "Mit meinem Freund.",
        answer_eng: "With my (boy)friend.",
    },
    { 
        question: "Mit wem gehst du gern ins Café?",
        question_eng: "Who do you like to go to the café with?",
        answer: "Mit meiner Freundin.",
        answer_eng: "With my (girl)friend.",
    },
    { 
        question: "Mit wem gehst du gern ins Kaufhaus?",
        question_eng: "Who do you like to go to the department store with?",
        answer: "Mit meinen Freunde.",
        answer_eng: "with my (boy)friends.",
    },
    { 
        question: "Mit wem gehst du gern tanzen?",
        question_eng: "Who do you like to dance with?",
        answer: "Mit meinen Freunden.",
        answer_eng: "With my (girl)friends.",
    },
    { 
        question: "Mit wem gehst du zum Marienplaz in München?",
        question_eng: "With whom are you going to Marienplatz in Munich?",
        answer: "Mit meinem Mann.",
        answer_eng: "With my husband.",
    },
    { 
        question: "Mit wem gehst du zur Universität?",
        question_eng: "Who are you going to university with?",
        answer: "Mit meiner Freundin.",
        answer_eng: "With my (girl)friend.",
    },
    { 
        question: "Mit wem gehst du zur Arbeit?",
        question_eng: "Who do you go to work with?",
        answer: "Mit meinen Kollegen.",
        answer_eng: "With my colleagues.",
    },
    { 
        question: "Um wie viel Uhr frühstückst du normalerweise?",
        question_eng: "What time do you usually have breakfast?",
        answer: "",
        answer_eng: "",
    },
    { 
        question: "Bei wem isst du zu Mittag?",
        question_eng: "Who are you having lunch with?",
        answer: "",
        answer_eng: "",
    },
    { 
        question: "Bei wem isst du zu Abend?",
        question_eng: "Who are you having dinner with?",
        answer: "",
        answer_eng: "",
    },
    {
        question: "Was wünschst du dir zum Geburtstag?",
        question_eng: "What do you wish for your birthday?",
        answer: "Ich wünsche mir Geld zum Geburtstag",
        answer_eng: "I want money for my birthday",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    {
        question: "",
        question_eng: "",
        answer: "",
        answer_eng: "",
        create_date: "",
        update_date: "",
    },
]

const wFmitPrep = [
    { 
        question: "Worüber ärgert sich Markus?",
        question_eng: "What is Mark annoyed about?",
        answer: "Markus ärgert sich über die Prüfung.",
        answer_eng: "Markus is annoyed about the exam.",
    },
]

const woh = [
    {
        question: "Woher kommen Sie?",
        question_eng: "Where do you come from?",
        answer: "Ich komme aus Deutschland.",
        answer_eng: "I come from Germany.",
    },
    {
        question: "Woher kommst du?",
        question_eng: "Where do you come from?",
        answer: "Ich komme gerade aus der Stadt. Ich war mit Loris im Café und in einem Geschäft. Ich habe ein Geschenk für meinen Bruder gekauft.",
        answer_eng: "I just got out of town. I was with Loris in a café and in a shop. I bought a present for my brother.",
    },
]
module.exports = {
    words: words,
    wFmitPrep: wFmitPrep,
    woh: woh,
}