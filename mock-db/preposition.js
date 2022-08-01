const words = [
    {
        sentence: "Lara geht an der Brücke vorbei.",
        sentence_eng: "Lara walks past the bridge.",
    },
    {
        sentence: "Sie geht bis zum Fluss.",
        sentence_eng: "She goes to the river.",
    },
    {
        sentence: "Ihre Freundin wohnt gegenüber der Bäckerei.",
        sentence_eng: "Her friend lives opposite the bakery.",
    },
    {
        sentence: "Dann geht sie durch den Park.",
        sentence_eng: "Then she goes through the park.",
    },
    {
        sentence: "Nach der Brücke geht sie den Fluss entlang.",
        sentence_eng: "After the bridge, she walks along the river.",
    },
    {
        sentence: "Sie geht noch um die Kirche herum.",
        sentence_eng: "She still walks around the church.",
    },
    {
        sentence: "Gehen Sie hier über die Brücke und dann rechts den Fluss entlang.",
        sentence_eng: "Walk over the bridge here and then turn right along the river.",
        create_date: "04/05/2022",
    },
    {
        sentence: "Gehen Sie bis zur Straße und dann links.",
        sentence_eng: "Go to the street and then turn left.",
        create_date: "04/05/2022",
    },
    {
        sentence: "Gehen Sie an der Tankstelle vorbei.",
        sentence_eng: "Walk past the gas station.",
        create_date: "04/05/2022",
    },
    {
        sentence: "Gegenüber der Tankstelle ist ein Park.",
        sentence_eng: "Opposite the gas station is a park.",
        create_date: "04/05/2022",
    },
    {
        sentence: "Gehen Sie durch den Park bis zur nächsten Straße.",
        sentence_eng: "Walk through the park to the next street.",
        create_date: "04/05/2022",
    },
    {
        sentence: "Gehen Sie über die Straße und dann um die Baustelle herum.",
        sentence_eng: "Walk across the street and then around the construction site.",
        create_date: "04/05/2022",
    },
    {
        sentence: "Dort sehen Sie schon die U-Bahn.",
        sentence_eng: "There you can already see the subway.",
        create_date: "04/05/2022",
    },
]

const words2 = [
    {
        sentence: "Was konnte sie ohne ihre Arbeit tun?",
        sentence_eng: "What could she do without her work?",
    },
    {
        sentence: "Mit ihrer Idee will Christina Geld verdienen.",
        sentence_eng: "Christina wants to earn money with her idea.",
    },
]

const akku_dativ = [
    {
        sentence1: "Wohin läuft Peter?",
        sentence_eng1: "Where is he running to?",
        sentence2: "Wo läuft Peter?",
        sentence_eng2: "Where is he running?",
    },
    {
        sentence1: "Wohin hast du mein Wörterbuch gelegt?",
        sentence_eng1: "Where did you put my dictionary?",
        sentence2: "",
        sentence_eng2: "",
    },
    {
        sentence1: "",
        sentence_eng1: "",
        sentence2: "Ins Arbeitszimmer. Es liegt auf deinem Schreibtisch.",
        sentence_eng2: "It’s on your desk.",
    },
    {
        sentence1: "",
        sentence_eng1: "",
        sentence2: "In Ihrem Arbeitszimmer liegt ein Geschenk für Sie!",
        sentence_eng2: "There's a present for you in your working room!",
    },
    {
        sentence1: "",
        sentence_eng1: "",
        sentence2: "Das Ferienhaus liegt an der Ostsee",
        sentence_eng2: "The house is located on the Baltic Sea",
    },
]

const temporale_prap = [
    {
        sentence: "An manchen Tagen habe ich auch Spätschicht.",
        sentence_eng: "I also have late shifts on some days.",
    },
]

const immer_dativ = [
    {
        sentence: "Wir sind zu Hause.",
        sentence_eng: "We’re at home.",
        remark: "Zu Hause",
    },
    {
        sentence: "Zu Hause muss er noch 6 Stunden lernen.",
        sentence_eng: "He still has 6 hours to study at home.",
        remark: "Zu Hause",
    },
    {
        sentence: "Ich fahre nach Frankreich.",
        sentence_eng: "I'm going to France. (geographic)",
    },
    {
        sentence: "Gehst du zur Kirche?",
        sentence_eng: "Are you going to church? (non-geographic)",
    },
    {
        sentence: "Ich fahre zu meinen Eltern.(Exceptional)",
        sentence_eng: "I'm going to my parent's house.",
    },
    {
        sentence: "Sie fährt dieses Jahr zu ihrer Schwester aufs Land.(Exceptional)",
        sentence_eng: "This year, she is going to visit her sister in the country.",
        remark: "auf + das Land = Akku (Direction), Open space https://www.germanveryeasy.com/auf",
    },
]

const immer_dativ_nach = [
    {
        sentence: "Was machst du nach der Arbeit?",
        sentence_eng: "What do you do after work?",
        remark: "",
    },
]

const immer_dativ_aus = [
    {
        sentence: "Ich komme aus Deutschland.",
        sentence_eng: "I come from Germany.",
        remark: "",
    },
    {
        sentence: "Ich komme gerade aus der Stadt.",
        sentence_eng: "I just got out of town.",
        remark: "",
    },
]

const immer_dativ_bei = [
    {
        sentence: "Heute hat er um 10:30 Uhr eine Vorlesung bei Professor Strasser.",
        sentence_eng: "Today at 10:30 a.m. he has a lecture with Professor Strasser.",
        remark: "bei + person (location) => is with",
    },
]

const immer_dativ_bei_3 = [
    {
        english_sentence: "Differences of opinion can often arise in the process of raising children",
        german_sentence: "Bei der Erziehung der Kinder kann es oft zu Meinungsverschiedenheiten kommen.",
        remark: "",
    },
]

const immer_dativ_von = [
    {
        sentence: "Ich komme gerade von der Arbeit.",
        sentence_eng: "I just got back from work.",
        remark: "",
    },
]

const wechselpräpositionen = [
    {
        sentence_eng: "I go to the hairdresser and to the supermarket.",
        sentence: "Ich gehe zum Friseur und in den Supermarkt.",
        remark: "",
    },
]

const wechselpräpositionen_an = [
    {
        sentence_eng: "Every summer they were at the Baltic Sea in our holiday home.",
        sentence: "Sie waren jeden Sommer an der Ostsee in unserem Ferienhaus.",
        remark: "next to",
    },
    {
        sentence_eng: "Er studiert an der Universität.",
        sentence: "He studies at the university.",
        remark: "With some institutions such as: die Schule (the school) or die Universität (the university), the preposition “an” is used when we refer to the institution and the preposition “in” when we refer to the building",
    },
]

const wechselpräpositionen_auf = [
    {
        sentence_eng: "On Amrum we lie on the beach by the sea and there on Lake Chiemsee!",
        sentence: "Auf Amrum liegen wir am Strand am Meer und dort am Chiemsee!",
        remark: "with islands",
    },
]

const immer_genitiv_während = [
    {
        english_sentence: "She didn’t say a word during dinner.",
        german_sentence: "Während des Essens hat sie kein Wort gesagt.",
        remark: "",
    },
]

const immer_genitiv_außerhalb = [
    {
        english_sentence: "You can eat outside school.",
        german_sentence: "Außerhalb der Schule dürft ihr essen.",
        remark: "",
    },
    {
        english_sentence: "There is no café here in the park. But you will find many cafes outside the park.",
        german_sentence: "Hier im Park gibt es kein Café. Aber Sie finden viele Cafès außerhalb des Parks.",
        remark: "",
    },
]

const immer_genitiv_innerhalb = [
    {
        english_sentence: "You are not allowed to smoke inside these rooms, only outside.",
        german_sentence: "Innerhalb dieser Räume darf man nicht rauchen, nur draußen.",
        remark: "",
    },
]

const immer_genitiv_wegen = [
    {
        english_sentence: "At the weekend we stayed at home because of the weather.",
        german_sentence: "Am Wochenende sind wir wegen des Wetters zu Hause geblieben.",
        remark: "",
    },
]

module.exports = {
    words: words,
    words2: words2,
    akku_dativ: akku_dativ,
    temporale_prap: temporale_prap,
    immer_dativ: immer_dativ,
    immer_dativ_nach: immer_dativ_nach,
    immer_dativ_aus: immer_dativ_aus,
    immer_dativ_bei: immer_dativ_bei,
    immer_dativ_bei_3: immer_dativ_bei_3,
    immer_dativ_von: immer_dativ_von,
    wechselpräpositionen: wechselpräpositionen,
    wechselpräpositionen_an: wechselpräpositionen_an,
    wechselpräpositionen_auf: wechselpräpositionen_auf,
    immer_genitiv_während: immer_genitiv_während,
    immer_genitiv_außerhalb: immer_genitiv_außerhalb,
    immer_genitiv_innerhalb: immer_genitiv_innerhalb,
    immer_genitiv_wegen: immer_genitiv_wegen,
}

