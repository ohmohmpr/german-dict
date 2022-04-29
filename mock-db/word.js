const words = [
    { 
        artikel: "das", 
        wort: "Aushilfe",                 
        english_sentence: "We're looking for a temp.",                 
        german_sentence: "Wir suchen eine Aushilfe."                 
    },
    { 
        artikel: "die", 
        wort: "Wand",                 
        english_sentence: "The picture is on the wall.",                 
        german_sentence: "Das Bild hängt an der Wand."                 
    },
    { 
        artikel: "das", 
        wort: "Leid",
        plural: "-er",          
        english_sentence: "What do you think of the song?",                 
        german_sentence: "Wie findest du das Lied?"                 
    },
    { 
        artikel: "die", 
        wort: "Erfahrung",
        plural: "-en",          
        english_sentence: "Experiences in a foreign country",                 
        german_sentence: "Erfahrungen im fremden Land"                 
    },
    { 
        artikel: "der", 
        wort: "Teilnehmer",
        plural: "-",          
        english_sentence: "The participants in my course are almost always on time.",                 
        german_sentence: "Die Teilnehmer in meinem Kurs sind fast immer pünktlich."                 
    },
    { 
        artikel: "der", 
        wort: "Führerschein",
        plural: "-e",          
        english_sentence: "I have lost my driver's license.",                 
        german_sentence: "Ich bin meinen Führerschein los."                 
    },
    { 
        artikel: "der", 
        wort: "Schulabschluss",
        plural: "-ü e",          
        english_sentence: "I have been with him since I got out of high school(graduation)",                 
        german_sentence: "Ich bin seit dem Schulabschluss bei ihm"                 
    },
    { 
        artikel: "der", 
        wort: "Motor",
        plural: "-en",          
        english_sentence: "I think the engine’s broken.",                 
        german_sentence: "Ich glaube, der Motor ist kaputt.",
        chapter: "a2-6",           
    },
    { 
        artikel: "die", 
        wort: "Reparatur",
        plural: "-en",          
        english_sentence: "the repair will be expensive.",                 
        german_sentence: "Die Reparatur wird bestimmt teuer.",
        chapter: "a2-6",           
    },
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
        artikel: "der", 
        wort: "Unfall",
        plural: "ä e",          
        english_sentence: "And what if I have an accident on vacation?",                 
        german_sentence: "Und was ist, wenn ich im Urlaub einen Unfall habe?",
        chapter: "a2-6",           
    },
    { 
        artikel: "die", 
        wort: "Versicherung",
        plural: "-en",          
        english_sentence: "Well, usually the insurance pays for it.",                 
        german_sentence: "Na ja, normalerweise bezahlt das die Versicherung.",
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
        artikel: "die", 
        wort: "Reise",
        plural: "-n",          
        english_sentence: "Travelling by train is too expensive for her, but she doesn’t have a car.",                 
        german_sentence: "Die Reise mit dem Zug ist ihr zu teuer, aber sie hat kein Auto",
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
        artikel: "das", 
        wort: "Rad",
        plural: "ä er",          
        english_sentence: "She likes to ride a bike",                 
        german_sentence: "Sie fährt gern Rad.",
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
        artikel: "der", 
        wort: "Kreis",
        plural: "-e",          
        english_sentence: "You sit in a circle.",                 
        german_sentence: "Sie sitzen im Kreis.",
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
        artikel: "der", 
        wort: "Weg",
        plural: "-e",          
        english_sentence: "The fast way through the city.",                 
        german_sentence: "Der schnelle Weg durch die Stadt.",
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
        artikel: "die",
        wort: "Lösung",
        plural: "-en",
        meaning: "register",    
        english_sentence: "We have the solution",                 
        german_sentence: "Wir haben die Lösung",
        chapter: "a2-6",           
    },
    
]


module.exports = {
    words: words,
}