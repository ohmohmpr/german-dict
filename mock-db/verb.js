const words = [
    { 
        artikel: "verb", 
        wort: "reparieren",
        plural: "",          
        english_sentence: "They fixed my car very quickly.",                 
        german_sentence: "Die haben da mein Auto auch ganz schnell repariert.",
        chapter: "a2-6",           
    },
    { 
        artikel: "verb", 
        wort: "landen",
        plural: "",          
        english_sentence: "Right away, we’ll land in 15 minutes.",                 
        german_sentence: "Gleich, wir landen in einer Viertelstunde.",
        chapter: "a2-6",       
    },
    { 
        artikel: "verb", 
        wort: "rückwärts fahren",
        plural: "",          
        english_sentence: "But you have to drive backwards and I can’t do that so well.",                 
        german_sentence: "Da muss man aber rückwärts fahren und das kann ich nicht so gut.",
        chapter: "a2-6",           
    },
    { 
        artikel: "verb", 
        wort: "bremsen",
        plural: "",          
        english_sentence: "Well, Suddenly a car came from the right and I could not brake so fast.",                 
        german_sentence: "Na ja, plötzlich ist ein Auto von rechts gekommen und ich konnte nicht so schell bremsen.",
        chapter: "a2-6",           
    },
    { 
        artikel: "verb", 
        wort: "verbringen",
        plural: "",          
        english_sentence: "Mira wants to spend a weekend in Berlin.",                 
        german_sentence: "Mira will ein Wochenende in Berlin verbringen.",
        chapter: "a2-6",           
    },
    { 
        artikel: "verb", 
        wort: "sparen",
        plural: "",          
        english_sentence: "Save money!",                 
        german_sentence: "Sparen Sie Geld!",
        chapter: "a2-6",           
    },
    { 
        artikel: "verb", 
        wort: "überraschen",
        plural: "",          
        english_sentence: "A friend’s birthday and you want to surprise her.",                 
        german_sentence: "Eine Freundin hat Geburtstag und Sie möchten sie überraschen.",
        chapter: "a2-6",           
    },
    { 
        artikel: "adverb", 
        wort: "draußen",
        plural: "",          
        english_sentence: "She likes to be outside with friends",                 
        german_sentence: "Sie ist gern mit Freunden draußen.",
        chapter: "a2-6",           
    },
    { 
        artikel: "verb", 
        wort: "mieten",
        plural: "",          
        english_sentence: "Rent our bike!",                 
        german_sentence: "Mieten Sie unser bike!",
        chapter: "a2-6",           
    },
    { 
        artikel: "verb", 
        wort: "lenken",
        plural: "",          
        english_sentence: "A team leader steers and brakes the bike.",                 
        german_sentence: "Ein Teamleiter lenkt und bremst das Rad.",
        chapter: "a2-6",           
    },
    { 
        artikel: "verb", 
        wort: "bremsen",
        plural: "",          
        english_sentence: "A team leader steers and brakes the bike.",                 
        german_sentence: "Ein Teamleiter lenkt und bremst das Rad.",
        chapter: "a2-6",           
    },
    { 
        artikel: "adjective", 
        wort: "mobil",
        plural: "",          
        english_sentence: "You want to be flexible and mobile in the city.",                 
        german_sentence: "Sie möchten in der Stadt flexibel und mobil sein.",
        chapter: "a2-6",           
    },
    { 
        artikel: "adjective", 
        wort: "mobil",
        plural: "",          
        english_sentence: "She also wants to be mobile in Munich.",                 
        german_sentence: "Auch in München will sie mobil sein.",
        chapter: "a2-6",           
    },
    { 
        artikel: "verb", 
        wort: "stehen",
        plural: "",          
        english_sentence: "The Bikes of 'Call a Bike' are ready for you 24 hours a day.",                 
        german_sentence: "Die Rädar von Call a Bike stehen 24 Stunden für Sie bereit.",
        chapter: "a2-6",           
    },
    { 
        artikel: "verb", 
        wort: "melden",
        plural: "",
        meaning: "report",
        english_sentence: "When you no longer need the bike, lock it and use your cell phone to get in touch.",                 
        german_sentence: "Wenn Sie das Rad nicht mehr brauchen, schließen Sie es ab und melden sich kurz übers Handy.",
        chapter: "a2-6",           
    },
    { 
        artikel: "verb",
        wort: "abschließen",
        plural: "",
        meaning: "lock",    
        english_sentence: "When you no longer need the bike, lock it and use your cell phone to get in touch.",                 
        german_sentence: "Wenn Sie das Rad nicht mehr brauchen, schließen Sie es ab und melden sich kurz übers Handy.",
        chapter: "a2-6",           
    },
    { 
        artikel: "verb",
        wort: "losfahren",
        plural: "",
        meaning: "set off",    
        english_sentence: "Now, we're supposed to be on the road before 9.",                 
        german_sentence: "Wir sollen vor 9 Uhr losfahren.",
        chapter: "a2-6",           
    },
    { 
        artikel: "verb",
        wort: "losfahren",
        plural: "",
        meaning: "set off",    
        english_sentence: "Register and simply drive off with your customer card.",                 
        german_sentence: "Melden Sie sich an und fahren Sie mit Ihrer Kundenkarte einfach los.",
        chapter: "a2-6",           
    },
    { 
        artikel: "verb",
        wort: "anmelden",
        plural: "",
        meaning: "register",    
        english_sentence: "Register and simply drive off with your customer card.",                 
        german_sentence: "Melden Sie sich an und fahren Sie mit Ihrer Kundenkarte einfach los.",
        chapter: "a2-6",           
    },
    { 
        artikel: "verb",
        wort: "unterschreiben",
        plural: "",
        meaning: "sign",    
        english_sentence: "none",                 
        german_sentence: "none",
        chapter: "a2-6",           
        create_date: "04/05/2022"
    },
    { 
        artikel: "verb",
        wort: "pendeln",
        plural: "",
        meaning: "commute",    
        english_sentence: "none",                 
        german_sentence: "none",
        remark: "Subj als Person",
        chapter: "a2-6",           
        create_date: "04/05/2022"
    },
    { 
        artikel: "verb",
        wort: "verpassen",
        plural: "",
        meaning: "miss",    
        english_sentence: "We'll miss the train",                 
        german_sentence: "Wir verpassen den Zug",
        chapter: "a2-6",           
        create_date: "04/05/2022"
    },
    { 
        artikel: "verb",
        wort: "erreichen",
        plural: "",
        meaning: "reach",    
        english_sentence: "We reach the train",                 
        german_sentence: "Wir erreichen den Zug",
        remark: "",
        chapter: "a2-6",           
        create_date: "04/05/2022"
    },
    { 
        artikel: "verb",
        wort: "funktionieren",
        plural: "",
        meaning: "funtion, work",    
        english_sentence: "The navi works",                 
        german_sentence: "Der Navi funktioniert",
        remark: "",
        chapter: "a2-6",           
        create_date: "04/05/2022",
    },
    { 
        artikel: "verb",
        wort: "empfehlen",
        plural: "",
        meaning: "recommend, advise",    
        english_sentence: "I recommend the high ropes course.",                 
        german_sentence: "Ich empfehle euch den Hochseilgarten.",
        remark: "",
        chapter: "a2-8",           
        create_date: "08/05/2022",
    },
    { 
        artikel: "verb",
        wort: "schicken",
        plural: "",
        meaning: "send",
        english_sentence: "Mrs.Korkmaz sends a letter to a man.",
        german_sentence: "Frau Korkmaz schickt einem Mann einen Brief.",
        remark: "",
        chapter: "a2-8",           
        create_date: "08/05/2022",
    },
    { 
        artikel: "verb",
        wort: "“schenken“",
        plural: "",
        meaning: "give",
        english_sentence: "Clemens gives her husband a bicycle.",
        german_sentence: "Clemens schenkt ihrem Mann ein Fahrrad.",
        remark: "The word “schenken“ implies that you give something to someone without ever wanting it back. Use “schenken” when talking about presents and gifts. Use “geben” when you want someone to give or pass you something.",
        chapter: "a2-8",           
        create_date: "08/05/2022",
    },
    { 
        wort: "zeigen",
        plural: "",
        meaning: "present, show",
        english_sentence: "I show the tourists the city.",
        german_sentence: "Ich zeige den Touristen die Stadt.",
        remark: "",
        chapter: "a2-8",           
        create_date: "08/05/2022",
    },
    {
        wort: "schließen",
        meaning: "close",
        english_sentence: "Is the swimming pool closed in winter?",
        german_sentence: "Ist das Schwimmbad im Winter geschlossen?",
        remark: "",
        chapter: "",
        create_date: "10/05/2022",
        update_date: "10/05/2022",
    },
    {
        wort: "trennen",
        meaning: "separate",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "a2-9",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    {
        wort: "sortieren",
        meaning: "sort",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "a2-9",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    {
        wort: "blockieren",
        meaning: "block",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "a2-9",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    {
        wort: "putzen",
        meaning: "clean",
        english_sentence: "-",
        german_sentence: "-",
        remark: "sauber machen",
        chapter: "a2-9",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    {
        wort: "tauchen",
        meaning: "dive",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "a2-7",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    {
        wort: "tauschen",
        meaning: "exchange, swap",
        english_sentence: "I think it's great that we swap rooms for a semester!",
        german_sentence: "Ich finde es toll, dass wir für ein Semester Zimmer tauschen!",
        remark: "",
        chapter: "a2-9",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    {
        wort: "kaum",
        meaning: "adverb",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    {
        wort: "gefallen",
        meaning: "to please",
        english_sentence: "You please me, I like you",
        german_sentence: "Du gefällst mir",
        remark: "https://german.stackexchange.com/questions/36957/how-should-i-understand-constructions-using-this-verb-gefallen",
        chapter: "",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    {
        wort: "gefallen",
        meaning: "to please",
        english_sentence: "How do like this sweater?",
        german_sentence: "Wie gefällt Ihnen dieser Pullover?",
        remark: "Only Dativ",
        chapter: "",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    {
        wort: "bauen",
        meaning: "build",
        english_sentence: "to build a house",
        german_sentence: "ein Haus bauen",
        remark: "",
        chapter: "a2-9",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    {
        wort: "leben",
        meaning: "live",
        english_sentence: "I like living in the countryside.",
        german_sentence: "Ich lebe gern auf dem Land.",
        remark: "",
        chapter: "",
        create_date: "12/05/2022",
        update_date: "12/05/2022",
    },
    {
        wort: "gehören",
        meaning: "belong",
        english_sentence: "The apartment is mine",
        german_sentence: "Die Wohnung gehört mir",
        remark: "only Dativ",
        chapter: "",
        create_date: "12/05/2022",
        update_date: "12/05/2022",
    },
    {
        wort: "bewohnen",
        meaning: "occupy, inhabit",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "a2-9",
        create_date: "12/05/2022",
        update_date: "12/05/2022",
    },
    {
        wort: "sehen",
        meaning: "to see",
        english_sentence: "I see you in the bakery",
        german_sentence: "Ich sehe dich in der Bäckerei.",
        remark: "https://www.quora.com/What-is-the-difference-between-sehen%E2%80%9D-and-%E2%80%9Cansehen",
        chapter: "a2-10",
        create_date: "17/05/2022",
        update_date: "17/05/2022",
    },
    {
        wort: "ansehen",
        meaning: "to look at",
        english_sentence: "I look at the painting in the museum",
        german_sentence: "Ich sehe mir das Gemälde im Museum an.",
        remark: "https://www.quora.com/What-is-the-difference-between-sehen%E2%80%9D-and-%E2%80%9Cansehen",
        chapter: "a2-10",
        create_date: "17/05/2022",
        update_date: "17/05/2022",
    },
    {
        wort: "reden",
        meaning: "talk",
        english_sentence: "When you speak German, what do you say when you talk to somebody else?",
        german_sentence: "Wenn du deutsch sprichst, was sagst du, wenn du mit jemandem redest?",
        remark: "https://angelikasgerman.co.uk/what-is-the-difference-between-reden-sprechen-sagen/",
        chapter: "",
        create_date: "19/05/2022",
        update_date: "19/05/2022",
    },
    {
        wort: "sprechen",
        meaning: "speak",
        english_sentence: "When you speak German, what do you say when you talk to somebody else?",
        german_sentence: "Wenn du deutsch sprichst, was sagst du, wenn du mit jemandem redest?",
        remark: "",
        chapter: "",
        create_date: "19/05/2022",
        update_date: "19/05/2022",
    },
    {
        wort: "sagen",
        meaning: "say",
        english_sentence: "When you speak German, what do you say when you talk to somebody else?",
        german_sentence: "Wenn du deutsch sprichst, was sagst du, wenn du mit jemandem redest?",
        remark: "",
        chapter: "",
        create_date: "19/05/2022",
        update_date: "19/05/2022",
    },
    {
        wort: "aufwachsen",
        meaning: "grow up",
        english_sentence: "I grew up bilingual",
        german_sentence: "Ich bin zweisprachig aufgewachsen",
        remark: "trenba",
        chapter: "",
        create_date: "26/05/2022",
        update_date: "26/05/2022",
    },
    {
        wort: "",
        meaning: "",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "",
        create_date: "26/05/2022",
        update_date: "26/05/2022",
    },
    {
        wort: "",
        meaning: "",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "",
        create_date: "26/05/2022",
        update_date: "26/05/2022",
    },
    {
        wort: "",
        meaning: "",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "",
        create_date: "26/05/2022",
        update_date: "26/05/2022",
    },
    {
        wort: "",
        meaning: "",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "",
        create_date: "26/05/2022",
        update_date: "26/05/2022",
    },
    {
        wort: "",
        meaning: "",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "",
        create_date: "26/05/2022",
        update_date: "26/05/2022",
    },
    {
        wort: "",
        meaning: "",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "",
        create_date: "26/05/2022",
        update_date: "26/05/2022",
    },
    {
        wort: "",
        meaning: "",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "",
        create_date: "26/05/2022",
        update_date: "26/05/2022",
    },
    {
        wort: "",
        meaning: "",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "",
        create_date: "26/05/2022",
        update_date: "26/05/2022",
    },
]


module.exports = {
    words: words

}