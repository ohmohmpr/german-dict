const words = [
    {
        german_sentence: "Lara geht an der Brücke vorbei.",
        english_sentence: "Lara walks past the bridge.",
    },
    {
        german_sentence: "Sie geht bis zum Fluss.",
        english_sentence: "She goes to the river.",
    },
    {
        german_sentence: "Ihre Freundin wohnt gegenüber der Bäckerei.",
        english_sentence: "Her friend lives opposite the bakery.",
    },
    {
        german_sentence: "Dann geht sie durch den Park.",
        english_sentence: "Then she goes through the park.",
    },
    {
        german_sentence: "Nach der Brücke geht sie den Fluss entlang.",
        english_sentence: "After the bridge, she walks along the river.",
    },
    {
        german_sentence: "Sie geht noch um die Kirche herum.",
        english_sentence: "She still walks around the church.",
    },
    {
        german_sentence: "Gehen Sie hier über die Brücke und dann rechts den Fluss entlang.",
        english_sentence: "Walk over the bridge here and then turn right along the river.",
        create_date: "04/05/2022",
    },
    {
        german_sentence: "Gehen Sie bis zur Straße und dann links.",
        english_sentence: "Go to the street and then turn left.",
        create_date: "04/05/2022",
    },
    {
        german_sentence: "Gehen Sie an der Tankstelle vorbei.",
        english_sentence: "Walk past the gas station.",
        create_date: "04/05/2022",
    },
    {
        german_sentence: "Gegenüber der Tankstelle ist ein Park.",
        english_sentence: "Opposite the gas station is a park.",
        create_date: "04/05/2022",
    },
    {
        german_sentence: "Gehen Sie durch den Park bis zur nächsten Straße.",
        english_sentence: "Walk through the park to the next street.",
        create_date: "04/05/2022",
    },
    {
        german_sentence: "Gehen Sie über die Straße und dann um die Baustelle herum.",
        english_sentence: "Walk across the street and then around the construction site.",
        create_date: "04/05/2022",
    },
    {
        german_sentence: "Dort sehen Sie schon die U-Bahn.",
        english_sentence: "There you can already see the subway.",
        create_date: "04/05/2022",
    },
]

const words2 = [
    {
        german_sentence: "Was konnte sie ohne ihre Arbeit tun?",
        english_sentence: "What could she do without her work?",
    },
    {
        german_sentence: "Mit ihrer Idee will Christina Geld verdienen.",
        english_sentence: "Christina wants to earn money with her idea.",
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
    {
        sentence1: "Familie Marx gerne ans Meer.",
        sentence_eng1: "The Marx family likes to go to the sea.",
        sentence2: "Die Eltern liegen am Strand und die Kinder baden im Meer.",
        sentence_eng2: "The parents lie on the beach and the children swim in the sea.",
    },
]

const temporale_prap = [
    {
        english_sentence: "I also have late shifts on some days.",
        german_sentence: "An manchen Tagen habe ich auch Spätschicht.",
    },
]

const temporale_prap_von_bis = [
    {
        english_sentence: "From Saturday 6:00 a.m. to Monday 6:00 a.m., There are no trains between the Denzlingen and Emmendingen stations due to construction work.",
        german_sentence: "Von Samstag 6.00 Uhr bis Montag 6.00 Uhr verkehren wegen Bauarbeiten zwischen den Stationen Denzlingen und Emmendingen keine Züge.",
    },
]

const immer_dativ = [
    {
        german_sentence: "Wir sind zu Hause.",
        english_sentence: "We’re at home.",
        remark: "Zu Hause",
    },
    {
        german_sentence: "Zu Hause muss er noch 6 Stunden lernen.",
        english_sentence: "He still has 6 hours to study at home.",
        remark: "Zu Hause",
    },
    {
        german_sentence: "Ich fahre nach Frankreich.",
        english_sentence: "I'm going to France. (geographic)",
    },
    {
        german_sentence: "Gehst du zur Kirche?",
        english_sentence: "Are you going to church? (non-geographic)",
    },
    {
        german_sentence: "Ich fahre zu meinen Eltern.(Exceptional)",
        english_sentence: "I'm going to my parent's house.",
    },
    {
        german_sentence: "Sie fährt dieses Jahr zu ihrer Schwester aufs Land.(Exceptional)",
        english_sentence: "This year, she is going to visit her sister in the country.",
        remark: "auf + das Land = Akku (Direction), Open space https://www.germanveryeasy.com/auf",
    },
]

const immer_dativ_nach = [
    {
        german_sentence: "Was machst du nach der Arbeit?",
        english_sentence: "What do you do after work?",
        remark: "",
    },
]

const immer_dativ_aus = [
    {
        german_sentence: "Ich komme aus Deutschland.",
        english_sentence: "I come from Germany.",
        remark: "",
    },
    {
        german_sentence: "Ich komme gerade aus der Stadt.",
        english_sentence: "I just got out of town.",
        remark: "",
    },
]

const immer_dativ_bei = [
    {
        german_sentence: "Heute hat er um 10:30 Uhr eine Vorlesung bei Professor Strasser.",
        english_sentence: "Today at 10:30 a.m. he has a lecture with Professor Strasser.",
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
        english_sentence: "I just got back from work.",
        german_sentence: "Ich komme gerade von der Arbeit.",
        remark: "",
    },
    {
        english_sentence: "I wanted to tell you about my great weekend in Salzburg.",
        german_sentence: "Ich wollte dir von meinem tollen Wochenende in Salzburg erzählen.",
        remark: "Von(of) --> lived experiences, Über(about) --> abstract facts",
    },
]

const wechselpräpositionen = [
    {
        german_sentence: "Ich gehe zum Friseur und in den Supermarkt.",
        english_sentence: "I go to the hairdresser and to the supermarket.",
        remark: "",
    },
]

const wechselpräpositionen_an = [
    {
        english_sentence: "Every summer they were at the Baltic Sea in our holiday home.",
        german_sentence: "Sie waren jeden Sommer an der Ostsee in unserem Ferienhaus.",
        remark: "next to",
    },
    {
        english_sentence: "I like to go to the sea.",
        german_sentence: "Ich fahre gerne ans Meer.",
        remark: "next to",
    },
    {
        english_sentence: "Er studiert an der Universität.",
        german_sentence: "He studies at the university.",
        remark: "With some institutions such as: die Schule (the school) or die Universität (the university), the preposition “an” is used when we refer to the institution and the preposition “in” when we refer to the building",
    },
]

const wechselpräpositionen_auf = [
    {
        english_sentence: "On Amrum we lie on the beach by the sea and there on Lake Chiemsee!",
        german_sentence: "Auf Amrum liegen wir am Strand am Meer und dort am Chiemsee!",
        remark: "with islands",
    },
    {
        english_sentence: "There is a lot of traffic on the freeways.",
        german_sentence: "Es ist viel Verkehr auf den Autobahnen.",
        remark: "with open spaces",
    },
]

const wechselpräpositionen_zwischen = [
    {
        english_sentence: "There is an armchair between the desk and the shelf.",
        german_sentence: "Zwischen dem Schreibtisch und dem Regal steht ein Sessel.",
        remark: "Dativ",
    },
    {
        english_sentence: "I put the chair between the desk and the shelf.",
        german_sentence: "Ich stelle den Sessel zwischen den Schreibtisch und das Regal.",
        remark: "Akkusativ",
    },
    {
        english_sentence: "From Saturday 6:00 a.m. to Monday 6:00 a.m., There are no trains between the Denzlingen and Emmendingen stations due to construction work.",
        german_sentence: "Von Samstag 6.00 Uhr bis Montag 6.00 Uhr verkehren wegen Bauarbeiten zwischen den Stationen Denzlingen und Emmendingen keine Züge.",
        remark: "Dativ",
    },
    {
        english_sentence: "Between these stations, there will be a replacement bus service during this period.",
        german_sentence: "Zwischen diesen Stationen gibt es in diesem Zeitraum einen Schienenersatzverkehr mit Bussen.",
        remark: "Dativ",
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
    {
        english_sentence: "The B12 Munich - Passau is closed in both directions near Mühldorf due to construction work.",
        german_sentence: "Die B12 München - Passau ist bei Mühldorf wegen Bauarbeiten in beiden Richtungen gesperrt.",
        remark: "",
    },
]

const prap_kon = [
    {
        praposition: "Seit ihrer Heirat leben sie nicht mehr bei ihren Eltern.",
        konjunktion: "Seitdem sie verheiratet sind, leben sie nicht mehr bei ihren Eltern.",
        remark: "",
    },
    {
        praposition: "Vor seiner Urlaubsreise packt er seinen Koffer.",
        konjunktion: "Bevor er in den Urlaub fährt, packt er seinen Koffer",
        remark: "",
    },
    {
        praposition: "Während unseres Gesprächs kaufe ich einen Bubble-Tee.",
        konjunktion: "Während wir miteinander gesprochen haben, habe ich einen Bubble-Tee gekauft.",
        remark: "",
    },
    {
        praposition: "Nach dem Essen sollte man nicht laufen.",
        konjunktion: "Nachdem man gegessen hatte, sollte man nicht laufen.",
        remark: "",
    },
]

module.exports = {
    words: words,
    words2: words2,
    akku_dativ: akku_dativ,
    temporale_prap: temporale_prap,
    temporale_prap_von_bis: temporale_prap_von_bis,
    immer_dativ: immer_dativ,
    immer_dativ_nach: immer_dativ_nach,
    immer_dativ_aus: immer_dativ_aus,
    immer_dativ_bei: immer_dativ_bei,
    immer_dativ_bei_3: immer_dativ_bei_3,
    immer_dativ_von: immer_dativ_von,
    wechselpräpositionen: wechselpräpositionen,
    wechselpräpositionen_an: wechselpräpositionen_an,
    wechselpräpositionen_auf: wechselpräpositionen_auf,
    wechselpräpositionen_zwischen: wechselpräpositionen_zwischen,
    immer_genitiv_während: immer_genitiv_während,
    immer_genitiv_außerhalb: immer_genitiv_außerhalb,
    immer_genitiv_innerhalb: immer_genitiv_innerhalb,
    immer_genitiv_wegen: immer_genitiv_wegen,
    prap_kon: prap_kon,
}

