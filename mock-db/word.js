const words = [
    { 
        artikel: "die",
        wort: "Aushilfe",
        plural: "Aushilfen",
        meaning: "Temporary help",
        english_sentence: "We're looking for a temp.",
        german_sentence: "Wir suchen eine Aushilfe.",
        remark: "",
        chapter: "",
        create_date: "10/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "die", 
        wort: "Wand",
        plural: "Wände",
        meaning: "Wall",       
        english_sentence: "The picture is on the wall.",                 
        german_sentence: "Das Bild hängt an der Wand.",
        remark: "Dativ, Wo",
        chapter: "a2-2",
        create_date: "10/05/2022",
        update_date: "10/05/2022",            
    },
    { 
        artikel: "die",
        wort: "Wand",
        plural: "Wände",
        meaning: "Wall",
        english_sentence: "I hang the picture on the wall.",
        german_sentence: "Ich hänge das Bild an die Wand.",
        remark: "Akku, Wohin",
        chapter: "a2-2",
        create_date: "10/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "das",
        wort: "Lied",
        plural: "Lieder",
        meaning: "Song",
        english_sentence: "What do you think of the song?",
        german_sentence: "Wie findest du das Lied?",
        remark: "",
        chapter: "a2-4",
        create_date: "10/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "das",
        wort: "Lied",
        plural: "Lieder",
        meaning: "Song",
        english_sentence: "We play five seconds from a current top ten CD and you name the song.",
        german_sentence: "Wir spielen fünf Sekunden von einer aktuellen Top-Ten-CD und Sie nennen uns das Lied.",
        remark: "",
        chapter: "a2-4",
        create_date: "10/05/2022",
        update_date: "10/05/2022",
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
        meaning: "driver's license",
        english_sentence: "I have lost my driver's license.",
        german_sentence: "Ich bin meinen Führerschein los.",
        remark: "",
        chapter: "",
        create_date: "10/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "die",
        wort: "Führerscheinprüfung",
        plural: "-en",
        meaning: "driving test",
        english_sentence: "Have you passed your driving test?",
        german_sentence: "Hast du deine Führerscheinprüfung bestanden?",
        remark: "",
        chapter: "",
        create_date: "10/05/2022",
        update_date: "10/05/2022",
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
        meaning: "Repair",
        english_sentence: "the repair will be expensive.",
        german_sentence: "Die Reparatur wird bestimmt teuer.",
        remark: "",
        chapter: "a2-6",
        create_date: "10/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "der",
        wort: "Unfall",
        plural: "ä e",
        meaning: "Accident",
        english_sentence: "And what if I have an accident on vacation?",
        german_sentence: "Und was ist, wenn ich im Urlaub einen Unfall habe?",
        remark: "",
        chapter: "a2-6",
        create_date: "10/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "die",
        wort: "Baustelle",
        plural: "Baustellen",
        meaning: "Construction Site",
        english_sentence: "And what if I have an accident on vacation?",
        german_sentence: "Gehen Sie über die Straße und dann um die Baustelle herum.",
        remark: "",
        chapter: "",
        create_date: "29/05/2022",
        update_date: "29/05/2022",
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
        artikel: "die",
        wort: "Reise",
        plural: "-n",
        meaning: "Travelling",
        english_sentence: "Travelling by train is too expensive for her, but she doesn’t have a car.",
        german_sentence: "Die Reise mit dem Zug ist ihr zu teuer, aber sie hat kein Auto",
        remark: "",
        chapter: "a2-6",
        create_date: "10/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "das",
        wort: "Rad",
        plural: "ä er",
        meaning: "bike",
        english_sentence: "She likes to ride a bike",
        german_sentence: "Sie fährt gern Rad.",
        remark: "",
        chapter: "a2-6",
        create_date: "10/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "das",
        wort: "Motorrad",
        plural: "Motorräder",
        meaning: "motorcycle",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "a2-6",
        create_date: "27/05/2022",
        update_date: "27/05/2022",
    },
    { 
        artikel: "der",
        wort: "Kreis",
        plural: "-e",
        meaning: "circle",
        english_sentence: "You sit in a circle.",
        german_sentence: "Sie sitzen im Kreis.",
        remark: "",
        chapter: "a2-6",
        create_date: "10/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "der",
        wort: "Weg",
        plural: "-e",
        meaning: "circle",
        english_sentence: "The fast way through the city.",
        german_sentence: "Der schnelle Weg durch die Stadt.",
        remark: "",
        chapter: "a2-6",
        create_date: "10/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "die",
        wort: "Lösung",
        plural: "-en",
        meaning: "solution",
        english_sentence: "We have the solution",
        german_sentence: "Wir haben die Lösung",
        remark: "",
        chapter: "a2-6",
        create_date: "10/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "der",
        wort: "Wohnungsschlüssel",
        plural: "-",
        meaning: "Apartment key",
        english_sentence: "I forgot my apartment key!",
        german_sentence: "Ich habe meinen Wohnungsschlüssel vergessen!",
        remark: "",
        chapter: "a2-6",
        create_date: "04/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "das",
        wort: "Verkehrsmittel",
        plural: "-",
        meaning: "Means of transport",
        english_sentence: "Which means of transport is the fastest?",
        german_sentence: "Welches Verkehrsmittel ist am schnellsten?",
        remark: "",
        chapter: "a2-6",
        create_date: "04/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "das",
        wort: "Verkehrsmittel",
        plural: "-",
        meaning: "Means of transport",
        english_sentence: "Which means of transport do you use?",
        german_sentence: "Welches Verkehrsmittel benutzen Sie?",
        remark: "",
        chapter: "a2-6",
        create_date: "27/05/2022",
        update_date: "27/05/2022",
    },
    { 
        artikel: "das",
        wort: "Verkehrsmittel",
        plural: "-",
        meaning: "Means of transport",
        english_sentence: "So please come either by public transport or park at the north entrance.",
        german_sentence: "Bitte kommen Sie also entweder mit den öffentlichen Verkehrsmitteln oder parken Sie am Eingang Nord.",
        remark: "",
        chapter: "a2-6",
        create_date: "27/05/2022",
        update_date: "27/05/2022",
    },
    { 
        artikel: "die",
        wort: "Bushaltestelle",
        plural: "-n",
        meaning: "bus stop",
        english_sentence: "I’ve been waiting at the bus stop for half an hour.",
        german_sentence: "Ich warte schon eine halbe Stunde an der Bushaltestelle.",
        remark: "",
        chapter: "a2-6",
        create_date: "04/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "der",
        wort: "Kinderspielplatz",
        plural: "-ä e",
        meaning: "children's playground",
        english_sentence: "Lilly and Felix must be at the children's playground.",
        german_sentence: "Lilly und Felix sind bestimmt auf dem Kinderspielplatz.",
        remark: "",
        chapter: "a2-6",
        create_date: "04/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "der",
        wort: "Vertrag",
        plural: "-ä e",
        meaning: "contract, agreement",
        english_sentence: "none",
        german_sentence: "none",
        remark: "",
        chapter: "a2-6",
        create_date: "04/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "das",
        wort: "Ersatzteil",
        plural: "e",
        meaning: "spare part",
        english_sentence: "none",
        german_sentence: "none",
        remark: "",
        chapter: "a2-6",
        create_date: "04/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "der",
        wort: "Hochseilgarten",
        plural: "ä",
        meaning: "high ropes course",
        english_sentence: "The professionals from the high ropes course explain the rules to the people very well.",
        german_sentence: "Die Profis vom Hochseilgarten erklären den Leuten die Regeln sehr gut.",
        remark: "",
        chapter: "a2-6",
        create_date: "04/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "der",
        wort: "Besucher",
        plural: "Besucher",
        meaning: "Visitor",
        english_sentence: "They give the visitors helmets.",
        german_sentence: "Sie geben den Besuchern Helme.",
        remark: "",
        chapter: "a2-8",
        create_date: "08/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "der",
        wort: "Helm",
        plural: "Helme",
        meaning: "Helmet",
        english_sentence: "They give the visitors helmets.",
        german_sentence: "Sie geben den Besuchern Helme.",
        remark: "",
        chapter: "a2-8",
        create_date: "08/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "der",
        wort: "Brief",
        plural: "Briefe",
        meaning: "letter",
        english_sentence: "Mrs.Korkmaz sends a letter to a man.",
        german_sentence: "Frau Korkmaz schickt einem Mann einen Brief.",
        remark: "",
        chapter: "a2-8",
        create_date: "08/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "das",
        wort: "Spielzeug",
        plural: "-",
        meaning: "toys",
        english_sentence: "Does Tom give his child a toy?",
        german_sentence: "Schenkt Tom seinem Kind ein Spielzeug?",
        remark: "",
        chapter: "a2-8",
        create_date: "08/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "der",
        wort: "Schal",
        plural: "Schals/Schale",
        meaning: "Scarf",
        english_sentence: "Does Tom give his mother a scarf?",
        german_sentence: "Schenkt Tom seiner Mutter einen Schal?",
        remark: "",
        chapter: "a2-8",
        create_date: "08/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "der",
        wort: "Schminkspiegel",
        plural: "Schminkspiegel",
        meaning: "Makeup mirror",
        english_sentence: "Does Tom give his sister a make-up mirror?",
        german_sentence: "Schenkt Tom seiner Schwester einen Schminkspiegel?",
        remark: "",
        chapter: "a2-8",
        create_date: "08/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "die",
        wort: "Marketasche",
        plural: "Marketaschen",
        meaning: "branded bag",
        english_sentence: "Does Tom give his wife a branded bag?",
        german_sentence: "Schenkt Tom seiner Frau eine Marketasche?",
        remark: "",
        chapter: "a2-8",
        create_date: "08/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "die",
        wort: "Brücke",
        plural: "Brücken",
        meaning: "Bridge",
        english_sentence: "Lara walks past the bridge.",
        german_sentence: "Lara geht an der Brücke vorbei.",
        remark: "",
        chapter: "a2-6",
        create_date: "10/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "der",
        wort: "Fluss",
        plural: "Flüsse",
        meaning: "River",
        english_sentence: "She goes to the river",
        german_sentence: "Sie geht bis zum Fluss",
        remark: "",
        chapter: "a2-6",
        create_date: "10/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "der",
        wort: "See",
        plural: "Seen",
        meaning: "Lake",
        english_sentence: "Lake",
        german_sentence: "",
        remark: "",
        chapter: "",
        create_date: "10/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "die",
        wort: "See",
        plural: "Seen",
        meaning: "Sea",
        english_sentence: "Sea",
        german_sentence: "",
        remark: "",
        chapter: "",
        create_date: "10/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "das",
        wort: "Gebäude",
        plural: "Gebäude",
        meaning: "Building",
        english_sentence: "In our building there are over 100 apartments.",
        german_sentence: "In unserem Gebäude gibt es über 100 Wohnungen.",
        remark: "",
        chapter: "a2-9",
        create_date: "10/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "Der",
        wort: "Nachbar",
        plural: "Nachbarn",
        meaning: "Neighbour",
        english_sentence: "Funny, when you don't know your neighbors.",
        german_sentence: "Komisch, wenn man seine Nachbarn nicht kennt.",
        remark: "",
        chapter: "a2-9",
        create_date: "10/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "Das",
        wort: "Getränk",
        plural: "Getränke",
        meaning: "drinks, beverage",
        english_sentence: "Can you buy drinks for the picnic?",
        german_sentence: "Kannst du Getränke für das Picknick kaufen?",
        remark: "",
        chapter: "a2-9",
        create_date: "10/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "Das",
        wort: "Geschäft",
        plural: "Geschäfte",
        meaning: "Store",
        english_sentence: "Are the shops open?",
        german_sentence: "Sind die Geschäfte geöffnet?",
        remark: "",
        chapter: "",
        create_date: "10/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "Das",
        wort: "Hausboot",
        plural: "Hausboote",
        meaning: "Houseboat",
        english_sentence: "Our houseboat is just as big as our old apartment.",
        german_sentence: "Unser Hausboot ist aber genauso groß wie unsere alte Wohnung.",
        remark: "",
        chapter: "",
        create_date: "10/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "Der",
        wort: "Bauernhof",
        plural: "Bauernhöfe",
        meaning: "Farm, Barnyard",
        english_sentence: "Life on the farm means a lot of work, but it’s great.",
        german_sentence: "Das Leben auf dem Bauernhof bedeutet viel Arbeit , aber es ist toll.",
        remark: "",
        chapter: "a2-9",
        create_date: "10/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "Das",
        wort: "Tier",
        plural: "Tiere",
        meaning: "Animal",
        english_sentence: "We live in the countryside and have many animals.",
        german_sentence: "Wir leben auf dem Land und habe viele Tiere.",
        remark: "",
        chapter: "a2-9",
        create_date: "10/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "Der",
        wort: "Einwohner",
        plural: "Einwohner",
        meaning: "Inhabitant, resident, habitant, population",
        english_sentence: "In my city, there are 4 million inhabitants.",
        german_sentence: "In meiner Stadt gibt es 4 Millionen Einwohner.",
        remark: "",
        chapter: "a2-9",
        create_date: "10/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "Die",
        wort: "Insel",
        plural: "Inseln",
        meaning: "Island",
        english_sentence: "On our small island there is no supermarket.",
        german_sentence: "Auf unserer kleinen Insel gibt es keinen Supermarkt.",
        remark: "",
        chapter: "a2-9",
        create_date: "10/05/2022",
        update_date: "10/05/2022",
    },
    { 
        artikel: "Das",
        wort: "Dach",
        plural: "Dächer",
        meaning: "Roof",
        english_sentence: "-",
        german_sentence: "-",
        remark: "",
        chapter: "a2-9",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    { 
        artikel: "Der",
        wort: "Flur",
        plural: "Flure",
        meaning: "Hallway, Corridor",
        english_sentence: "-",
        german_sentence: "-",
        remark: "",
        chapter: "a2-9",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    {
        artikel: "Der",
        wort: "Gang",
        plural: "Gänge",
        meaning: "",
        english_sentence: "",
        german_sentence: "",
        remark: "any type of corridor, it can also be used for an underground passage or for a passageway enclosed by fences.",
        chapter: "a2-9",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    { 
        artikel: "Der",
        wort: "Garten",
        plural: "Gärten",
        meaning: "Garden",
        english_sentence: "-",
        german_sentence: "-",
        remark: "",
        chapter: "a2-9",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    { 
        artikel: "Die",
        wort: "Terrasse",
        plural: "Terrassen",
        meaning: "Terrace",
        english_sentence: "-",
        german_sentence: "-",
        remark: "",
        chapter: "a2-9",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    { 
        artikel: "Die",
        wort: "Treppe",
        plural: "Treppen",
        meaning: "stairs",
        english_sentence: "in a high-rise building with an elevator, you don't have to use the stairs.",
        german_sentence: "In einem Hochhaus mit Aufzug muss man nicht die Treppen benutzen.",
        remark: "",
        chapter: "a2-9",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    { 
        artikel: "Die",
        wort: "Garage",
        plural: "Garagen",
        meaning: "Garage",
        english_sentence: "-",
        german_sentence: "-",
        remark: "",
        chapter: "a2-9",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    { 
        artikel: "Der",
        wort: "Keller",
        plural: "Keller",
        meaning: "Basement",
        english_sentence: "-",
        german_sentence: "-",
        remark: "",
        chapter: "a2-9",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    { 
        artikel: "Der",
        wort: "Müll",
        plural: "-",
        meaning: "Garbage",
        english_sentence: "What do you have to do with the garbage?",
        german_sentence: "Was muss man mit dem Müll machen?",
        remark: "",
        chapter: "a2-9",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    { 
        artikel: "Der",
        wort: "Abfall",
        plural: "Abfälle",
        meaning: "Garbage",
        english_sentence: "-",
        german_sentence: "-",
        remark: "",
        chapter: "a2-9",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    { 
        artikel: "Die",
        wort: "Mülltonn",
        plural: "Mülltonne",
        meaning: "Trash can",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "a2-9",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    {
        artikel: "Das",
        wort: "Feuer",
        plural: "Feuer",
        meaning: "Fire",
        english_sentence: "-",
        german_sentence: "-",
        remark: "",
        chapter: "a2-9",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    {
        artikel: "Die",
        wort: "Feuerwehr",
        plural: "Feuerwehren",
        meaning: "Firefighter",
        english_sentence: "-",
        german_sentence: "-",
        remark: "",
        chapter: "a2-9",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    {
        artikel: "Der",
        wort: "Kinderwagen",
        plural: "Kinderwagen",
        meaning: "Baby carriage",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "a2-9",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    {
        artikel: "Der",
        wort: "Hausmeister",
        plural: "Hausmeister",
        meaning: "Maintenance man",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "a2-9",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    {
        artikel: "das ",
        wort: "Zeugnis",
        plural: "Zeugnisse",
        meaning: "Transcript",
        english_sentence: "Melly didn't have a transcript, so her mother had to fax it.",
        german_sentence: "Melly hat ein Zeugnis gefehlt, deshalb musste es ihre Mutter faxen.",
        remark: "",
        chapter: "a2-9",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    {
        artikel: "Der",
        wort: "Rückweg",
        plural: "Rückwege",
        meaning: "way back, return path",
        english_sentence: "When Vera was in town for the first time, she couldn't find her way back.",
        german_sentence: "Als Vera das erste Mal in der Stadt war, hat sie den Rückweg nicht gefunden.",
        remark: "",
        chapter: "a2-9",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    {
        artikel: "Das",
        wort: "Dorf",
        plural: "Dörfer",
        meaning: "village",
        english_sentence: "Not many people live in our village.",
        german_sentence: "In unserem Dorf wohnen nicht viele Leute.",
        remark: "",
        chapter: "a2-9",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    {
        artikel: "Das",
        wort: "Dorf",
        plural: "Dörfer",
        meaning: "village",
        english_sentence: "in the village",
        german_sentence: "auf dem Dorf.",
        remark: "",
        chapter: "a2-9",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    {
        artikel: "Das",
        wort: "Land",
        plural: "Länder/Lande",
        meaning: "countryside",
        english_sentence: "I like living in the countryside.",
        german_sentence: "Ich lebe gern auf dem Land.",
        remark: "",
        chapter: "a2-9",
        create_date: "12/05/2022",
        update_date: "12/05/2022",
    },
    {
        artikel: "Der",
        wort: "Platz",
        plural: "-",
        meaning: "space, square",
        english_sentence: "We have high ceilings and plenty of space.",
        german_sentence: "Wir haben hohe Räume und viel Platz.",
        remark: "",
        chapter: "a2-9",
        create_date: "12/05/2022",
        update_date: "12/05/2022",
    },
    {
        artikel: "Der",
        wort: "Parkplatz",
        plural: "-",
        meaning: "parking space",
        english_sentence: "Where can I find a parking space surely?",
        german_sentence: "Wo findet man sicher einen Parkplatz?",
        remark: "",
        chapter: "a2-9",
        create_date: "29/05/2022",
        update_date: "29/05/2022",
    },
    {
        artikel: "Der",
        wort: "Stadtrand",
        plural: "Stadtränder",
        meaning: "suburban, ชานเมือง",
        english_sentence: "We like life on the outskirts.",
        german_sentence: "Uns gefällt das Leben am Stadtrand.",
        remark: "",
        chapter: "a2-9",
        create_date: "12/05/2022",
        update_date: "12/05/2022",
    },
    {
        artikel: "Der",
        wort: "Aufzug",
        plural: "Aufzüge",
        meaning: "elevator",
        english_sentence: "in a high-rise building with an elevator, you don't have to use the stairs.",
        german_sentence: "In einem Hochhaus mit Aufzug muss man nicht die Treppen benutzen.",
        remark: "",
        chapter: "a2-9",
        create_date: "12/05/2022",
        update_date: "12/05/2022",
    },
    {
        artikel: "Der",
        wort: "Strom",
        plural: "-",
        meaning: "electricity",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "a2-9",
        create_date: "12/05/2022",
        update_date: "12/05/2022",
    },
    {
        artikel: "Der",
        wort: "Eingang",
        plural: "Eingänge",
        meaning: "entrance",
        english_sentence: "There are only a few spaces left at the West Entrance.",
        german_sentence: "Am Eingang West sind nur noch wenige Plätze frei.",
        remark: "",
        chapter: "a2-9",
        create_date: "12/05/2022",
        update_date: "12/05/2022",
    },
    {
        artikel: "Die",
        wort: "Maus",
        plural: "Mäuse",
        meaning: "Mouse",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "a2-9",
        create_date: "12/05/2022",
        update_date: "12/05/2022",
    },
    {
        artikel: "Die",
        wort: "Katze",
        plural: "Katzen",
        meaning: "Cat",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "a2-9",
        create_date: "12/05/2022",
        update_date: "12/05/2022",
    },
    {
        artikel: "Die",
        wort: "Kuh",
        plural: "Kühe",
        meaning: "cow",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "a2-9",
        create_date: "12/05/2022",
        update_date: "12/05/2022",
    },
    {
        artikel: "Das",
        wort: "Küken",
        plural: "Küken",
        meaning: "chick",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "a2-9",
        create_date: "12/05/2022",
        update_date: "12/05/2022",
    },
    {
        artikel: "Die",
        wort: "Schildkröte",
        plural: "Schildkröten",
        meaning: "Turtle",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "a2-9",
        create_date: "12/05/2022",
        update_date: "12/05/2022",
    },
    {
        artikel: "Der",
        wort: "Vogel",
        plural: "Vögel",
        meaning: "Bird",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "a2-9",
        create_date: "12/05/2022",
        update_date: "12/05/2022",
    },
    {
        artikel: "Die",
        wort: "Ente",
        plural: "Enten",
        meaning: "Duck",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "a2-9",
        create_date: "12/05/2022",
        update_date: "12/05/2022",
    },
    {
        artikel: "Der",
        wort: "Fisch",
        plural: "Fische",
        meaning: "Fish",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "a2-9",
        create_date: "12/05/2022",
        update_date: "12/05/2022",
    },
    {
        artikel: "Der",
        wort: "Hund",
        plural: "Hunde",
        meaning: "Dog",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "a2-9",
        create_date: "12/05/2022",
        update_date: "12/05/2022",
    },
    {
        artikel: "Der",
        wort: "Schwan",
        plural: "Schwäne",
        meaning: "swan",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "a2-9",
        create_date: "12/05/2022",
        update_date: "12/05/2022",
    },
    {
        artikel: "Das",
        wort: "Schwein",
        plural: "Schweine",
        meaning: "pig",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "a2-9",
        create_date: "12/05/2022",
        update_date: "12/05/2022",
    },
    {
        artikel: "Das",
        wort: "Eichhörnchen",
        plural: "Eichhörnchen",
        meaning: "Squirrel",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "a2-9",
        create_date: "12/05/2022",
        update_date: "12/05/2022",
    },
    {
        artikel: "Das",
        wort: "Meerschweinchen",
        plural: "Meerschweinchen",
        meaning: "Guinea pig",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "a2-9",
        create_date: "12/05/2022",
        update_date: "12/05/2022",
    },
    {
        artikel: "der",
        wort: "Imbiss",
        plural: "Imbisse",
        meaning: "Fast-food restaurant",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "a2-1",
        create_date: "23/05/2022",
        update_date: "23/05/2022",
    },
    {
        artikel: "die",
        wort: "Selbstbedienung",
        plural: "Selbstbedienungen",
        meaning: "self-service",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "a2-1",
        create_date: "23/05/2022",
        update_date: "23/05/2022",
    },
    {
        artikel: "die",
        wort: "Currywurst",
        plural: "Currywürste",
        meaning: "",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "a2-1",
        create_date: "23/05/2022",
        update_date: "23/05/2022",
    },
    {
        artikel: "der",
        wort: "Schinken",
        plural: "Schinken",
        meaning: "ham",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "a2-1",
        create_date: "23/05/2022",
        update_date: "23/05/2022",
    },
    {
        artikel: "der",
        wort: "Apfelsaft",
        plural: "Apfelsäfte",
        meaning: "apple juice",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "a2-1",
        create_date: "23/05/2022",
        update_date: "23/05/2022",
    },
    {
        artikel: "das",
        wort: "Brötchen",
        plural: "Brötchen",
        meaning: "Bread roll (small)",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "a2-1",
        create_date: "23/05/2022",
        update_date: "23/05/2022",
    },
    {
        artikel: "das",
        wort: "Brot",
        plural: "Brote",
        meaning: "bread (big)",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "a2-1",
        create_date: "23/05/2022",
        update_date: "23/05/2022",
    },
    {
        artikel: "die",
        wort: "Stunde",
        plural: "Stunden",
        meaning: "hour",
        english_sentence: "I’ve been waiting at the bus stop for half an hour.",
        german_sentence: "Ich warte schon eine halbe Stunde an der Bushaltestelle.",
        remark: "",
        chapter: "a2-1",
        create_date: "23/05/2022",
        update_date: "23/05/2022",
    },
    {
        artikel: "der",
        wort: "Übersetzer",
        plural: "Übersetzer",
        meaning: "translator",
        english_sentence: "Stefan Fischer used to be a translator for German and English.",
        german_sentence: "Stefan Fischer war früher Übersetzer für Deutsch und Englisch.",
        remark: "",
        chapter: "",
        create_date: "26/05/2022",
        update_date: "26/05/2022",
    },
    {
        artikel: "der",
        wort: "Stau",
        plural: "Staus",
        meaning: "Traffic jams",
        english_sentence: "stuck in Traffic",
        german_sentence: "Im Stau stehen",
        remark: "",
        chapter: "",
        create_date: "27/05/2022",
        update_date: "27/05/2022",
    },
    {
        artikel: "der",
        wort: "Urlaub",
        plural: "Urlaube",
        meaning: "Holiday",
        english_sentence: "go on vacation",
        german_sentence: "in den Urlaub fahren ",
        remark: "",
        chapter: "",
        create_date: "27/05/2022",
        update_date: "27/05/2022",
    },
    {
        artikel: "der",
        wort: "Urlaub",
        plural: "Urlaube",
        meaning: "Holiday",
        english_sentence: "do on vacation",
        german_sentence: "im Urlaub machen",
        remark: "",
        chapter: "",
        create_date: "27/05/2022",
        update_date: "27/05/2022",
    },
    {
        artikel: "das",
        wort: "Gewitter",
        plural: "Gewitter",
        meaning: "thunderstorm, พายุฝนฟ้าคะนอง",
        english_sentence: "-",
        german_sentence: "-",
        remark: "",
        chapter: "",
        create_date: "29/05/2022",
        update_date: "29/05/2022",
    },
    {
        artikel: "der",
        wort: "Reiseführer",
        plural: "Reiseführer",
        meaning: "tour guide, guidebook,",
        english_sentence: "",
        german_sentence: "",
        remark: "a1-1",
        chapter: "a1-1",
        create_date: "29/05/2022",
        update_date: "29/05/2022",
    },
    {
        artikel: "",
        wort: "",
        plural: "",
        meaning: "",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "",
        create_date: "26/05/2022",
        update_date: "26/05/2022",
    },
    {
        artikel: "",
        wort: "",
        plural: "",
        meaning: "",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "",
        create_date: "26/05/2022",
        update_date: "26/05/2022",
    },
    {
        artikel: "",
        wort: "",
        plural: "",
        meaning: "",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "",
        create_date: "26/05/2022",
        update_date: "26/05/2022",
    },
    {
        artikel: "",
        wort: "",
        plural: "",
        meaning: "",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "",
        create_date: "26/05/2022",
        update_date: "26/05/2022",
    },
    {
        artikel: "",
        wort: "",
        plural: "",
        meaning: "",
        english_sentence: "",
        german_sentence: "",
        remark: "",
        chapter: "",
        create_date: "26/05/2022",
        update_date: "26/05/2022",
    },
    {
        artikel: "",
        wort: "",
        plural: "",
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
    words: words,
}