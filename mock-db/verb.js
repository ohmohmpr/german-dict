const words = [
    {
        wort: "heißen",
        meaning: "be called",
        english_sentence: "What's your name?",
        german_sentence: "Wie heißen Sie?",
        remark: "",
        chapter: "a1-1",
        create_date: "02/06/2022",
        update_date: "02/06/2022",
    },
    {
        wort: "finden",
        meaning: "think",
        english_sentence: "What do you think of the sweater? - Which one?(this one.)",
        german_sentence: "Wie findest du den Pullover? - Welchen?(diesen hier.)",
        remark: "",
        chapter: "a1-1",
        create_date: "05/06/2022",
        update_date: "05/06/2022",
    },
    {
        wort: "finden",
        meaning: "think",
        english_sentence: "Which jacket do you like?",
        german_sentence: "Welche Jacke findest du gut?",
        remark: "",
        chapter: "a1-1",
        create_date: "05/06/2022",
        update_date: "05/06/2022",
    },
    {
        wort: "nehmen",
        meaning: "take",
        english_sentence: "I’ll take the boots - which one?(this one.)",
        german_sentence: "Ich nehme die Stiefel. - Welche?(diese hier.)",
        remark: "",
        chapter: "a1-1",
        create_date: "05/06/2022",
        update_date: "05/06/2022",
    },
    {
        wort: "anprobieren",
        meaning: "try on",
        english_sentence: "Which shirt would you like to try on?",
        german_sentence: "Welches Hemd möchtest du anprobieren?",
        remark: "",
        chapter: "a1-10",
        create_date: "05/06/2022",
        update_date: "05/06/2022",
    },
    {
        wort: "meinen",
        meaning: "mean",
        english_sentence: "Which stockings do you mean?",
        german_sentence: "Welche Strümpfe meinst du?",
        remark: "",
        chapter: "a1-10",
        create_date: "05/06/2022",
        update_date: "05/06/2022",
    },
    {
        wort: "tragen",
        meaning: "wear",
        english_sentence: "What do the people wear?",
        german_sentence: "Was tragen die Personen?",
        remark: "",
        chapter: "a1-10",
        create_date: "05/06/2022",
        update_date: "05/06/2022",
    },
    { 
        wort: "reparieren",
        meaning: "",  
        english_sentence: "They fixed my car very quickly.",
        german_sentence: "Die haben da mein Auto auch ganz schnell repariert.",
        remark: "",
        chapter: "a2-6",
        create_date: "26/05/2022",
        update_date: "26/05/2022",
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
        wort: "stehen",
        meaning: "",
        english_sentence: "The Bikes of 'Call a Bike' are ready for you 24 hours a day.",
        german_sentence: "Die Rädar von Call a Bike stehen 24 Stunden für Sie bereit.",
        remark: "",
        chapter: "a2-6",
        create_date: "02/06/2022",
        update_date: "02/06/2022",
    },
    {
        wort: "stehen",
        meaning: "suit",
        english_sentence: "Which t-shirt suits me?",
        german_sentence: "Welches T-Shirt steht mir?",
        remark: "",
        chapter: "a1-10",
        create_date: "05/06/2022",
        update_date: "05/06/2022",
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
        wort: "gefallen",
        meaning: "to please",
        english_sentence: "How do you like the skirt - Which one? (this one.)",
        german_sentence: "Wie gefällt dir der Rock? - Welcher?(dieser hier.)",
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
        wort: "gehören",
        meaning: "belong",
        english_sentence: "Namika is one of the most successful singers in Germany.",
        german_sentence: "Namika gehört zu den erfolgreichsten Sängerinnen Deutschlands.",
        remark: "only Dativ",
        chapter: "b1-4",
        create_date: "13/05/2022",
        update_date: "13/05/2022",
    },
    {
        wort: "liegen",
        meaning: "be, locate, lie",
        english_sentence: "Maybe, it’s on the table under the books.",
        german_sentence: "Vielleicht liegt sie auf dem Tisch unter den Büchern.",
        remark: "only Dativ",
        chapter: "",
        create_date: "01/07/2022",
        update_date: "01/07/2022",
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
        wort: "erzählen",
        meaning: "",
        english_sentence: "I wanted to tell you about my great weekend in Salzburg.",
        german_sentence: "Ich wollte dir von meinem tollen Wochenende in Salzburg erzählen.",
        remark: "",
        chapter: "b1-7",
        create_date: "07/08/2022",
        update_date: "07/08/2022",
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
        wort: "wachsen",
        meaning: "grow",
        english_sentence: "Girls grow until they are about 17 years old.",
        german_sentence: "Mädchen wachsen bis sie etwa 17 Jahre alt sind.",
        remark: "",
        chapter: "b1-4",
        create_date: "14/07/2022",
        update_date: "14/07/2022",
    },
    {
        wort: "wachsen",
        meaning: "grow",
        english_sentence: "Potatoes grow in the field behind the house.",
        german_sentence: "Auf dem Feld hinter dem Haus wachsen Kartoffeln.",
        remark: "",
        chapter: "b1-9",
        create_date: "11/08/2022",
        update_date: "11/08/2022",
    },
    {
        wort: "umziehen",
        meaning: "move",
        english_sentence: "I would like to relocate/move to Germany in 2024.",
        german_sentence: "Ich möchte 2024 nach Deutschland umsiedeln / umziehen.",
        remark: "",
        chapter: "b1-4",
        create_date: "14/07/2022",
        update_date: "14/07/2022",
    },
    {
        wort: "umsiedeln",
        meaning: "relocate",
        english_sentence: "I would like to relocate/move to Germany in 2024.",
        german_sentence: "Ich möchte 2024 nach Deutschland umsiedeln / umziehen.",
        remark: "",
        chapter: "b1-4",
        create_date: "14/07/2022",
        update_date: "14/07/2022",
    },
    {
        wort: "veröffentlichen",
        meaning: "publish",
        english_sentence: "In 2016, singer Dua Lipa released her first album.",
        german_sentence: "2016 veröffentlichte die Sängerin Dua Lipa ihr erstes Album.",
        remark: "",
        chapter: "b1-4",
        create_date: "14/07/2022",
        update_date: "14/07/2022",
    },
    {
        wort: "erreichen",
        meaning: "achieve",
        english_sentence: "Blackpink's album peaked at #1 in 2021.",
        german_sentence: "Das Album von Blackpink erreichte 2021 Platz 1.",
        remark: "",
        chapter: "b1-4",
        create_date: "14/07/2022",
        update_date: "14/07/2022",
    },
    {
        wort: "besuchen",
        meaning: "attend",
        english_sentence: "Did you go to high school?",
        german_sentence: "Hast du das Gymnasium besucht?",
        remark: "",
        chapter: "b1-4",
        create_date: "14/07/2022",
        update_date: "14/07/2022",
    },
    {
        wort: "gründen",
        meaning: "found, build",
        english_sentence: "When I was a teenager, I wanted to start a rock band.",
        german_sentence: "Als Teenager wollte ich eine Rockband gründen.",
        remark: "",
        chapter: "b1-4",
        create_date: "14/07/2022",
        update_date: "14/07/2022",
    },
    {
        wort: "auftreten",
        meaning: "appear",
        english_sentence: "On May 14, 2005, Helene Fischer appeared on television for the first time.",
        german_sentence: "Am 14. Mai 2005 ist Helene Fischer das erste Mal im Fernsehen aufgetreten.",
        remark: "",
        chapter: "b1-4",
        create_date: "14/07/2022",
        update_date: "14/07/2022",
    },
    {
        wort: "staunen",
        meaning: "be amazed (at)",
        english_sentence: "I'm surprised you're always so fit. = I am amazed that you are always so fit.",
        german_sentence: "Ich bin überrascht, dass du immer so fit bist. = Ich staune, dass du immer so fit bist.",
        remark: "",
        chapter: "b1-4",
        create_date: "14/07/2022",
        update_date: "14/07/2022",
    },
    {
        wort: "sich wundern",
        meaning: "wonder, surprise, be surprised",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "b1-4",
        create_date: "25/07/2022",
        update_date: "25/07/2022",
    },
    {
        wort: "folgen",
        meaning: "follow (ist)",
        english_sentence: "The band BTS is followed by around 40 million people on Instagram.",
        german_sentence: "Der Band BTS folgen ungefähr 40 Millionen Menschen auf Instagram.",
        remark: "",
        chapter: "b1-4",
        create_date: "14/07/2022",
        update_date: "14/07/2022",
    },
    {
        wort: "ehemalig",
        meaning: "former",
        english_sentence: "I congratulate you on your birthday and wish you all the best in the new year of life.",
        german_sentence: "Mein ehemaliger Chef war sehr unhöflich. Meine neue Chefin ist viel freundlicher.",
        remark: "",
        chapter: "b1-4",
        create_date: "14/07/2022",
        update_date: "14/07/2022",
    },
    {
        wort: "zerstören",
        meaning: "destroy",
        english_sentence: "Berlin was almost completely destroyed after the Second World War.",
        german_sentence: "Berlin war nach dem zweiten Weltkrieg fast komplett zerstört.",
        remark: "",
        chapter: "b1-4",
        create_date: "14/07/2022",
        update_date: "14/07/2022",
    },
    {
        wort: "klettern",
        meaning: "cliff climbing",
        english_sentence: "In his free time, my brother likes to go climbing in the mountains.",
        german_sentence: "Mein Bruder geht in seiner Freizeit gerne in den Bergen klettern.",
        remark: "",
        chapter: "b1-4",
        create_date: "14/07/2022",
        update_date: "14/07/2022",
    },
    {
        wort: "erinnern",
        meaning: "remember",
        english_sentence: "I don't know the word anymore. I can't remember.",
        german_sentence: "Ich weiß das Wort nicht mehr. Ich kann mich nicht mehr daran erinnern.",
        remark: "",
        chapter: "b1-4",
        create_date: "14/07/2022",
        update_date: "14/07/2022",
    },
    {
        wort: "frieren",
        meaning: "freeze",
        english_sentence: "I am very cold at the moment. I'm freezing.",
        german_sentence: "Im Moment ist mir sehr kalt. Ich friere.",
        remark: "",
        chapter: "b1-4",
        create_date: "14/07/2022",
        update_date: "14/07/2022",
    },
    {
        wort: "ernten",
        meaning: "harvest",
        english_sentence: "When the strawberries are ripe, you can harvest them.",
        german_sentence: "Sind die Erdbeeren reif, kann man sie ernten.",
        remark: "",
        chapter: "b1-4",
        create_date: "14/07/2022",
        update_date: "14/07/2022",
    },
    {
        wort: "tanken",
        meaning: "",
        english_sentence: "It's important to refuel.",
        german_sentence: "Es ist wichtig, zu tanken.",
        remark: "",
        chapter: "b1-7",
        create_date: "05/08/2022",
        update_date: "05/08/2022",
    },
    {
        wort: "abschleppen",
        meaning: "tow, hook up, drag off",
        english_sentence: "the car is towed",
        german_sentence: "das Auto wird abgeschleppt",
        remark: "",
        chapter: "b1-7",
        create_date: "05/08/2022",
        update_date: "05/08/2022",
    },
    {
        wort: "umleiten",
        meaning: "divert, reroute, redirect, deflect, bypass, detour",
        english_sentence: "Traffic is diverted.",
        german_sentence: "Der Verkehr wird umgeleitet.",
        remark: "",
        chapter: "b1-7",
        create_date: "05/08/2022",
        update_date: "05/08/2022",
    },
    {
        wort: "untersuchen",
        meaning: "examine, investigate",
        english_sentence: "The injured are being examined.",
        german_sentence: "Die Verletzten werden untersucht.",
        remark: "",
        chapter: "b1-7",
        create_date: "05/08/2022",
        update_date: "05/08/2022",
    },
    {
        wort: "sperren",
        meaning: "block, close",
        english_sentence: "The street will be closed",
        german_sentence: "Die Straße wird gesperrt",
        remark: "",
        chapter: "b1-7",
        create_date: "05/08/2022",
        update_date: "05/08/2022",
    },
    {
        wort: "reinigen",
        meaning: "clean, clean up, dry-clean",
        english_sentence: "The street is cleaned.",
        german_sentence: "Die Straße wird gereinigt.",
        remark: "",
        chapter: "b1-7",
        create_date: "05/08/2022",
        update_date: "05/08/2022",
    },
    {
        wort: "decken",
        meaning: "cover up",
        english_sentence: "This insurance also covers damage to your own vehicle.",
        german_sentence: "Diese Versicherungen decken auch Schäden am eigenen Fahrzeug.",
        remark: "",
        chapter: "b1-4",
        create_date: "14/07/2022",
        update_date: "14/07/2022",
    },
    {
        wort: "kommen",
        meaning: "coming",
        english_sentence: "I am coming to you.",
        german_sentence: "Ich komme zu dir.",
        remark: "",
        chapter: "a2-9",
        create_date: "19/09/2022",
        update_date: "19/09/2022",
    },
    {
        wort: "mitkommen",
        meaning: "coming with someone with",
        english_sentence: "I am coming with you.",
        german_sentence: "Ich komme mit dir mit.",
        remark: "",
        chapter: "a2-9",
        create_date: "19/09/2022",
        update_date: "19/09/2022",
    },
    {
        wort: "mitkommen",
        meaning: "coming with someone with",
        english_sentence: "Would you like to come along to the basketball game?",
        german_sentence: "Möchtest du zum Basketballspiel mitkommen?",
        remark: "",
        chapter: "a2-9",
        create_date: "19/09/2022",
        update_date: "19/09/2022",
    },
    {
        wort: "mitkommen",
        meaning: "coming with someone with",
        english_sentence: "I am not coming along the admission ticket is too expensive.",
        german_sentence: "Ich komme nicht mit, die Eintrittskarte ist zu teuer.",
        remark: "",
        chapter: "a2-9",
        create_date: "19/09/2022",
        update_date: "19/09/2022",
    },
    {
        wort: "mitkommen",
        meaning: "coming with someone with",
        english_sentence: "The movie starts at nine o'clock, are you coming along?",
        german_sentence: "Der Film fängt um neun Uhr an. Kommst du mit?",
        remark: "",
        chapter: "a2-9",
        create_date: "20/09/2022",
        update_date: "20/09/2022",
    },
    {
        wort: "verkaufen",
        meaning: "sell",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "a2-9",
        create_date: "19/09/2022",
        update_date: "19/09/2022",
    },
    {
        wort: "ausverkaufen",
        meaning: "sell out",
        english_sentence: "I believe the soccer game is sold out now.",
        german_sentence: "Ich glaube, das Fußballspiel ist jetzt ausverkauft.",
        remark: "",
        chapter: "a2-9",
        create_date: "19/09/2022",
        update_date: "19/09/2022",
    },
    {
        wort: "ausverkaufen",
        meaning: "sell out",
        english_sentence: "Schade, das Konzert ist schon ausverkauft!",
        german_sentence: "Too bad, the concert is already sold out!",
        remark: "",
        chapter: "a2-9",
        create_date: "19/09/2022",
        update_date: "19/09/2022",
    },
    {
        wort: "klettern",
        meaning: "cliff climbing, climb",
        english_sentence: "You can also hike and climb in eastern Germany, in Sächsischen Schweiz.",
        german_sentence: "Wandern und klettern kann man auch im Osten von Deutschland, in der Sächsischen Schweiz.",
        remark: "",
        chapter: "a2-9",
        create_date: "20/09/2022",
        update_date: "20/09/2022",
    },
    {
        wort: "anfangen",
        meaning: "begin, start",
        english_sentence: "The game can't start. It is raining.",
        german_sentence: "Das Spiel kann nicht anfangen, es regnet.",
        remark: "",
        chapter: "a2-9",
        create_date: "20/09/2022",
        update_date: "20/09/2022",
    },
    {
        wort: "anfangen",
        meaning: "begin, start",
        english_sentence: "When does the concert start?",
        german_sentence: "Wann fängt das Konzert an?",
        remark: "",
        chapter: "a2-9",
        create_date: "20/09/2022",
        update_date: "20/09/2022",
    },
    {
        wort: "sich treffen",
        meaning: "you have an arranged appointment, a date, a meeting with someone",
        english_sentence: "When do we have to meet each other?",
        german_sentence: "Wann müssen wir uns treffen?",
        remark: "NOT - you meet someone by chance, accidentally",
        chapter: "a2-9",
        create_date: "20/09/2022",
        update_date: "20/09/2022",
    },
    {
        wort: "sich treffen",
        meaning: "",
        english_sentence: "We have to meet each other at eight o'clock.",
        german_sentence: "Wir müssen uns um acht Uhr treffen.",
        remark: "",
        chapter: "a2-9",
        create_date: "20/09/2022",
        update_date: "20/09/2022",
    },
    {
        wort: "",
        meaning: "",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "a2-9",
        create_date: "20/09/2022",
        update_date: "20/09/2022",
    },
]


module.exports = {
    words: words

}