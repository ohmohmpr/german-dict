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
        sentence1: "Ins Arbeitszimmer. Es liegt auf deinem Schreibtisch.",
        sentence_eng1: "It’s on your desk.",
        sentence2: "",
        sentence_eng2: "",
    },
    {
        sentence1: "",
        sentence_eng1: "",
        sentence2: "In Ihrem Arbeitszimmer liegt ein Geschenk für Sie!",
        sentence_eng2: "There's a present for you in your working room!",
    },
]

const temporale_prap = [
    {
        sentence: "An manchen Tagen habe ich auch Spätschicht.",
        sentence_eng: "I also have late shifts on some days.",
    },
]

module.exports = {
    words: words,
    words2: words2,
    akku_dativ: akku_dativ,
    temporale_prap: temporale_prap,
}

