const words = [
    { 
        title: "Nominativ",
        maskulin: "ein bekannter Klassiker",
        maskulin_eng: "a well-known classic",
        neutrum: "ein modernes Studio",
        neutrum_eng: "a modern studio",
        feminin: "eine vielseitige Stadt",
        feminin_eng: "a versatile city",
        plural: "professionelle Trainer",
        plural_eng: "professional trainers"
    },
    { 
        title: "Akkusativ",
        maskulin: "einen schönen Abend",
        maskulin_eng: "a lovely evening",
        neutrum: "ein elegantes Restaurant",
        neutrum_eng: "an elegant restaurant",
        feminin: "eine entspannte Atmosphäre",
        feminin_eng: "a relaxed atmosphere",
        plural: "interessante Informationen",
        plural_eng: "interesting information"
    },
    { 
        title: "Dativ",
        maskulin: "einem wunderbaren Sänger",
        maskulin_eng: "a wonderful singer",
        neutrum: "einem aktuellen Thema",
        neutrum_eng: "a current topic",
        feminin: "einer tollen Show",
        feminin_eng: "a great show",
        plural: "günstigen Preisen",
        plural_eng: "cheap prices"
    }
]

const words2 = [
    { 
        title: "Nominativ", 
        maskulin: "der schöne Hafen", 
        maskulin_eng: "the beautiful port", 
        neutrum: "das große Feuerwerk", 
        neutrum_eng: "the big fireworks", 
        feminin: "die bekannte Kieler Woche", 
        feminin_eng: "the well-known Kiel Week", 
        plural: "die verschiedenen Musikstile",
        plural_eng: "the different styles of music"
    },
    { 
        title: "Akkusativ",
        maskulin: "den alten Hafen",
        maskulin_eng: "the old port",
        neutrum: "das tolle Konzert",
        neutrum_eng: "the great concert",
        feminin: "die bekannte Kieler Woche",
        feminin_eng: "the well-known Kiel Week",
        plural: "die norddeutschen Musikfans",
        plural_eng: "the North German music fans",
    },
    { 
        title: "Dativ",
        maskulin: "auf dem bunten Markt",
        maskulin_eng: "in the colorful market",
        neutrum: "auf dem tollen Konzert",
        neutrum_eng: "at the great concert",
        feminin: "aus der ganzen Welt",
        feminin_eng: "from all over the world",
        plural: "auf den kleinen Schiffen",
        plural_eng: "on the small ships"
    }
]

const unbestimmten = [
    { 
        english_sentence: "a young filmmaker",
        german_sentence: "ein junger Filmemacher",
    },
]

const interrogativartikel = [
    { 
        title: "Nominativ", 
        maskulin: "Welcher Rock?", 
        maskulin_eng: "Which skirt?", 
        neutrum: "Welches Kleid?", 
        neutrum_eng: "Which dress?", 
        feminin: "Welche Hose?", 
        feminin_eng: "Which pants?", 
        plural: "Welche Schuhe?",
        plural_eng: "Which shoes?"
    },
    { 
        title: "Akkusativ",
        maskulin: "Welchen Rock?",
        maskulin_eng: "Which skirt?",
        neutrum: "Welches Kleid?",
        neutrum_eng: "Which dress?",
        feminin: "Welche Hose?",
        feminin_eng: "Which pants?",
        plural: "Welche Schuhe?",
        plural_eng: "Which shoes?",
    },
]

const interrogativartikel_zB = [
    {
        english_sentence: "Which suit is better?",
        german_sentence: "Welcher Anzug ist besser?",
    },
    {
        english_sentence: "Which t-shirt suits me?",
        german_sentence: "Welches T-Shirt steht mir?",
    },
    {
        english_sentence: "Look, the jacket is great! - Which one?(This one.)",
        german_sentence: "Sieh mal, die Jacke ist doch toll! - Welche?(Diese hier.)",
    },
    {
        english_sentence: "Which jacket do you like?",
        german_sentence: "Welche Jacke findest du gut?",
    },
    {
        english_sentence: "Which shirt would you like to try on?",
        german_sentence: "Welches Hemd möchtest du anprobieren?",
    },
    {
        english_sentence: "Which stockings do you mean?",
        german_sentence: "Welche Strümpfe meinst du?",
    },
    {
        english_sentence: "What coat are you wearing?",
        german_sentence: "Welchen Mantel ziehst du an?",
    },
    {
        english_sentence: "Which pants do you not like?",
        german_sentence: "Welche Hose findest du nicht gut?",
    },
    {
        english_sentence: "I’ll take the boots - which one?(this one.)",
        german_sentence: "Ich nehme die Stiefel. - Welche?(diese hier.)",
    },
    {
        english_sentence: "Which boots do you like better?",
        german_sentence: "Welche Stiefel findest du besser?",
    },
    {
        english_sentence: "How do you like the skirt - Which one? (this one.)",
        german_sentence: "Wie gefällt dir der Rock? - Welcher?(dieser hier.)",
    },
    {
        english_sentence: "The shoes are terrible - Which ones? (These ones.)",
        german_sentence: "Die Schuhe sind schrecklich - Welche?(diese hier.)",
    },
    {
        english_sentence: "What do you think of the sweater? - Which one?(this one.)",
        german_sentence: "Wie findest du den Pullover? - Welchen?(diesen hier.)",
    },
]

const demonstrativartikel = [
    { 
        title: "Nominativ", 
        maskulin: "dieser Rock", 
        maskulin_eng: "this skirt", 
        neutrum: "dieses Kleid", 
        neutrum_eng: "this dress", 
        feminin: "diese Hose", 
        feminin_eng: "these pants", 
        plural: "diese Schuhe",
        plural_eng: "these shoes"
    },
    { 
        title: "Akkusativ",
        maskulin: "diesen Rock",
        maskulin_eng: "this skirt",
        neutrum: "dieses Kleid",
        neutrum_eng: "this dress",
        feminin: "diese Hose",
        feminin_eng: "these pants",
        plural: "diese Schuhe",
        plural_eng: "these shoes",
    },
]

const possessivartikel = [
    {
        title: "Nominativ", 
        maskulin: "ein/kein Kurs", 
        maskulin_eng: "a/no course", 
        neutrum: "ein/kein Profil", 
        neutrum_eng: "a/no profile", 
        feminin: "eine/keine seine Sprache", 
        feminin_eng: "a/none his language", 
        plural: "-/keine ihre Kollegen",
        plural_eng: "-/none of her colleagues"
    },
    {
        title: "Akkusativ",
        maskulin: "einen/keinen meinen Kurs",
        maskulin_eng: "a/none my course",
        neutrum: "ein/kein dein Profil",
        neutrum_eng: "on/none your profile",
        feminin: "eine/keine seine Sprache",
        feminin_eng: "a/none his language",
        plural: "-/keine ihre Kollegen",
        plural_eng: "-/none of her colleagues",
    },
    {
        title: "Dativ",
        maskulin: "einem/keinem meinem Freund",
        maskulin_eng: "one my friend",
        neutrum: "einem/keinem deinem Hobby",
        neutrum_eng: "one/none of your hobby",
        feminin: "einer/keiner seiner Küche",
        feminin_eng: "one/none of his kitchen",
        plural: "-/keinen ihren Büchern",
        plural_eng: "-/none of her books",
    },
]

const derselbe = [
    {
        title: "Nominativ", 
        maskulin: "derselbe Ort", 
        maskulin_eng: "same place", 
        neutrum: "dasselbe Hotel", 
        neutrum_eng: "same hotel", 
        feminin: "dieselbe Insel", 
        feminin_eng: "same island", 
        plural: "dieselben Leute",
        plural_eng: "same people"
    },
    {
        title: "Akkusativ",
        maskulin: "denselben Ort",
        maskulin_eng: "same place",
        neutrum: "dasselbe Hotel",
        neutrum_eng: "same hotel",
        feminin: "dieselbe Insel",
        feminin_eng: "same island",
        plural: "dieselben Leute",
        plural_eng: "same people",
    },
    {
        title: "Dativ",
        maskulin: "demselben Ort",
        maskulin_eng: "same place",
        neutrum: "demselben Hotel",
        neutrum_eng: "same hotel",
        feminin: "derselben Insel",
        feminin_eng: "same island",
        plural: "denselben Leuten",
        plural_eng: "same people",
    },
]

const superlativ = [
    {
        title: "Nominativ", 
        maskulin: "-e", 
        neutrum: "-e", 
        feminin: "-e",  
        plural: "-en",
    },
    {
        title: "Akkusativ",
        maskulin: "-en", 
        neutrum: "-e", 
        feminin: "-e",  
        plural: "-en",
    },
    {
        title: "Dativ",
        maskulin: "-en", 
        neutrum: "-en", 
        feminin: "-en",  
        plural: "-en",
    },
]

module.exports = {
    words: words,
    words2: words2,
    unbestimmten: unbestimmten,
    interrogativartikel: interrogativartikel,
    interrogativartikel_zB: interrogativartikel_zB,
    demonstrativartikel: demonstrativartikel,
    possessivartikel: possessivartikel,
    derselbe: derselbe,
    superlativ: superlativ,
}

