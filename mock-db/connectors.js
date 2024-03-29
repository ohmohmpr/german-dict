const words = [
    { 
        sentence: "Er sollte weniger Kaffee trinken,",
        sentence_2: "denn Kaffee macht nervös.",
        sentence_eng: "He should drink less coffee because coffee makes you nervous.(denn)",
        create_date: "04/05/2022",
    },
    { 
        sentence: "Er sollte weniger Kaffee trinken,",
        sentence_2: "weil Kaffee nervös macht.",
        sentence_eng: "He should drink less coffee because coffee makes you nervous.(weil)",
        create_date: "04/05/2022",
    },
]

const deshalb = [
    {
        sentence_eng: "Melly didn't have a transcript, so her mother had to fax it.",
        sentence: "Melly hat ein Zeugnis gefehlt, deshalb musste es ihre Mutter faxen.",
    }
]

const alsUndWenn = [
    {
        sentence: "Melly war noch in Fribourg, als sie den Umzug vorbereitet hat.",
        sentence_eng: "Melly was still in Fribourg, When she was preparing the move.",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    {
        sentence: "Als ich 14 Jahre alt war, bin ich nach Berlin gefahren.",
        sentence_eng: "When I was 14, I went to Berlin.",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    {
        sentence: "Vera freut sich, wenn Melly sie besucht.",
        sentence_eng: "Vera is happy, Whenever Melly visits her.",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    {
        sentence: "Immer wenn Melly zu Hause war, war Lena nicht da.",
        sentence_eng: "Whenever Melly was home, Lena was not there.",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    {
        sentence: "Als ich mich hier an der Uni anmelden wollte, hat mir ein Zeugnis gefehlt.",
        sentence_eng: "When I wanted to register here at the university, I was missing a certificate.",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    {
        sentence: "Immer wenn ich zu Hause war, waren Lena und Noah weg.",
        sentence_eng: "Whenever I was at home, Lena and Noah were gone.",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    {
        sentence: "Als ich das erste Mal im Zentrum war, habe ich mich trotzdem verirrt.",
        sentence_eng: "When I was in the center for the first time, I still got lost.",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    {
        sentence: "Als Vera das erste Mal in der Stadt war, hat sie den Rückweg nicht gefunden.",
        sentence_eng: "When Vera was in town for the first time, she couldn't find her way back.",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    {
        sentence: "Wenn ich Hilfe brauche, dann frage ich anderen Studenten.",
        sentence_eng: "When I need help, I ask other students.",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
    {
        sentence: "Wenn Vera Fragen hat, helfen ihr die Mitstudenten.",
        sentence_eng: "When Vera has questions, her fellow students help her.",
        create_date: "11/05/2022",
        update_date: "11/05/2022",
    },
]

const damitUmZu = [
    {
        sentence: "Ich schlafe viel, damit ich bald wieder gesund werde.",
        sentence_eng: "I sleep a lot so that I can recover soon.",
        create_date: "20/05/2022",
        update_date: "20/05/2022",
    },
    {
        sentence: "Ich schlafe viel, um bald wieder gesund zu werden.",
        sentence_eng: "I sleep a lot to recover soon.",
        create_date: "20/05/2022",
        update_date: "20/05/2022",
    },
    {
        sentence: "Heute Abend bleiben wir zu Hause, damit wir uns mal wieder in Ruhe unterhalten.",
        sentence_eng: "Tonight we stay at home, so we can talk again in peace.",
        create_date: "20/05/2022",
        update_date: "20/05/2022",
    },
    {
        sentence: "Heute Abend bleiben wir zu Hause, um uns mal wieder in Ruhe zu unterhalten.",
        sentence_eng: "Tonight we stay at home to talk again in peace.",
        create_date: "20/05/2022",
        update_date: "20/05/2022",
    },
]

const Temporale_Nebensätze_exp = [
    {
        sentence_1: "Zuerst kocht Herr Moran Kaffee.",
        sentence_2: "Dann frühstücken sie zusammen.",
        english_sentence: "Before they have breakfast together, Mr. Moran makes coffee.",
        german_sentence: "Bevor sie zusammen frühstücken, kocht Herr Moran Kaffee.",
    },
    {
        sentence_1: "Sie frühstücken zusammen ",
        sentence_2: "und sprechen über die Situation bei Matzon.",
        english_sentence: "While having breakfast together, they talk about the situation at Matzon.",
        german_sentence: "Während sie zusammen frühstücken, sprechen sie über die Situation bei Matzon.",
    },
    {
        sentence_1: "Sie frühstücken zusammen.",
        sentence_2: "Danach geht Herr Moran zur Arbeit.",
        english_sentence: "After they have breakfast together, Mr. Moran goes to work.",
        german_sentence: "Nachdem sie zusammen gefrühstückt haben, geht Herr Moran zur Arbeit.",
    },
]

const dass = [
    {
        english_sentence: "",
        german_sentence: "Ich habe gehört, dass es am Chiemsee sehr schöne Campingplätze gibt.",
    },
    {
        english_sentence: "",
        german_sentence: "Aber du hast doch gerade gesagt, dass du nicht immer an demselben Ort sein willst!",
    },
    {
        english_sentence: "I thought that, for example, we would first visit cities for ten days and then stay a few days longer in one place and rest, e.g. in a nice wellness hotel.",
        german_sentence: " Ich habe gedacht, dass wir zum Beispiel zuerst zehn Tage Städte besuchen und dann einige Tage an einem Ort länger bleiben und uns ausruhen, z.B. in einem schönen Wellnesshotel.",
    }
]


const nicht_nur_sondern_auch_exp = [
    {
        sentence_1: "Er kauft kein Fleisch.",
        sentence_2: "Er kauft keine Milchprodukte.",
        english_sentence: "He doesn't buy meat or dairy products.",
        german_sentence: "Er kauft weder Fleisch noch Milchprodukte.",
    },
]

const weder_noch_exp = [
    {
        sentence_1: "Er kauft kein Fleisch.",
        sentence_2: "Er kauft keine Milchprodukte.",
        english_sentence: "He doesn't buy meat or dairy products.",
        german_sentence: "Er kauft weder Fleisch noch Milchprodukte.",
    },
    {
        sentence_1: "Man sollte nicht rauchen.",
        sentence_2: "Man sollte nicht viel Alkohol trinken.",
        english_sentence: "You should neither smoke nor drink a lot of alcohol.",
        german_sentence: "Man sollte weder rauchen noch viel Alkohol trinken.",
    },
    {
        sentence_1: "Er fährt nicht mit dem Fahrrad.",
        sentence_2: "Er geht nicht zu Fuß.",
        english_sentence: "He neither rides a bicycle nor walks.",
        german_sentence: "Er fährt weder mit dem Fahrrad, noch geht er zu Fuß.",
    },
]

const weder_noch = [
    {
        english_sentence: "You should neither eat too much meat nor too much sausage.",
        german_sentence: "Man sollte weder zu viel Fleisch noch zu viel Wurst essen.",
    },
]

module.exports = {
    words: words,
    alsUndWenn: alsUndWenn,
    damitUmZu: damitUmZu,
    Temporale_Nebensätze_exp: Temporale_Nebensätze_exp,
    nicht_nur_sondern_auch_exp: nicht_nur_sondern_auch_exp,
    weder_noch_exp: weder_noch_exp,
    weder_noch: weder_noch,
}

