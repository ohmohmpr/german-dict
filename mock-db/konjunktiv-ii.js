const wünsche = [
    {
        truth: "Herr Meier spricht nur eine Sprache.",
        wish: "gern viele Sprachen sprechen",
        english_sentence: "He would like to speak many languages",
        german_sentence: "Er würde gerne viele Sprachen sprechen.",
    },
    {
        truth: "Herr Meier hat nicht sehr viel Geld.",
        wish: "gern mehr Geld haben",
        english_sentence: "He would like a lot of money.",
        german_sentence: "Er hätte gern viel Geld.",
    },
    {
        truth: "Herr Meier findet seine Arbeit langweilig.",
        wish: "gern eine neue Stelle finden",
        english_sentence: "He would like to find a new job.",
        german_sentence: "Er würde gern eine neue Stelle finden.",
    },
    {
        truth: "Herr Meier ist nicht sehr sportlich.",
        wish: "gern sportlicher sein",
        english_sentence: "He would like to be sportier.",
        german_sentence: "Er wäre gern sportlicher.",
    },
    {
        truth: "Herr Meier ist mit seinem Leben unzufrieden.",
        wish: "gern sein Leben verändern",
        english_sentence: "He would like to change his life.",
        german_sentence: "Er würde gern sein Leben verändern.",
    },
    {
        truth: "",
        wish: "",
        english_sentence: "So I would rather do a tour of Germany and visit different cities.",
        german_sentence: "Also ich würde dann lieber eine Tour durch Deutschland machen und verschiedene Städte besichtigen.",
    },
]

const vorschläge = [
    {
        english_sentence: "I think we should plan our summer vacation soon.",
        german_sentence: "Ich finde, wir sollten bald unseren Sommerurlaub planen.",
    },
    {
        english_sentence: "I would like to do something different.",
        german_sentence: "Ich möchte gerne mal was anderes machen.",
    },
    {
        english_sentence: "And how would it be if we went to a campsite in Bavaria.",
        german_sentence: "Und wie wäre es, wenn wir mal nach Bayern auf einen Campingplatz fahren?",
    },
]

const höfliche_bitte = [
]

const irreale_kondina = [
    {
        english_sentence: "If Sina had a new bike, she would go on a bike ride today.",
        german_sentence: "Wenn Sina ein neues Fahrrad hätte, würde sie heute eine Radtour machen.",
    },
    {
        english_sentence: "If it were warm, Sascha would go swimming in the lake.",
        german_sentence: "Wenn es warm wäre, würde Sascha im See baden gehen.",
    },
    {
        english_sentence: "If Peter wasn't injured, he would be playing basketball today.",
        german_sentence: "Wenn Peter nicht verletzt wäre, würde er heute Basketball spielen.",
    },
    {
        english_sentence: "If I had a day off tomorrow, I’d sleep till 10:00.",
        german_sentence: "Wenn ich morgen frei hätte, würde ich bis 10 Uhr schlafen.",
    },
    {
        english_sentence: "If Tina could pick a job, she’d like to be a pilot.",
        german_sentence: "Wenn Tina sich einen Beruf aussuchen könnte, wäre sie gern Pilotin.",
    },
    {
        english_sentence: "If we had more time, we would learn to play the piano.",
        german_sentence: "Wenn wir mehr Zeit hätten, würden wir Klavier spielen lernen.",
    },
    {
        english_sentence: "If Oskar won the lottery, he would buy a house by the sea.",
        german_sentence: "Wenn Oskar im Lotto gewinnen würde, würde er ein Haus am Meer kaufen.",
    },
    {
        english_sentence: "If I had Paul’s phone number, I’d call him.",
        german_sentence: "Wenn ich Pauls Telefonnummer hätte, würde ich ihn anrufen.",
    },
    {
        english_sentence: "If Tonka and Rico had children, they would both work part-time.",
        german_sentence: "Wenn Tonka und Rico Kinder hätte, würden sie beide Teilzeit arbeiten.",
    },
    {
        english_sentence: "If he were 16, he would be allowed to go out until midnight on Saturday night.",
        german_sentence: "Wenn er 16 Jahre alt wäre, dürfte er am Samstagabend bis 24 Uhr ausgehen.",
    },
    {
        english_sentence: "If work were less tiring, we wouldn't be so tired in the evenings.",
        german_sentence: "Wenn die Arbeit weniger anstrengend wäre, wären wir abends nicht so müde.",
    },
    {
        english_sentence: "If we were to buy a big house, we would have to take out a loan",
        german_sentence: "Wenn wir ein großes Haus kaufen würden, müssten wir einen Kredit aufnehmen",
    },
    {
        english_sentence: "If we could go to soccer, we wouldn't have to clean the apartment.",
        german_sentence: "Wenn wir zum Fußball gehen könnten, müssten wir die Wohnung nicht putzen.",
    },
    {
        english_sentence: "If his degree were recognized, he could work as a doctor.",
        german_sentence: "Wenn sein Abschluss anerkannt wäre, könnte er als Arzt arbeiten.",
    },
    {
        english_sentence: "Wouldn't it be better if we went on a real active holiday, with sports and hiking and stuff like that?",
        german_sentence: "Wäre es nicht besser, wenn wir mal einen richtigen Aktivurlaub machen würden, mit Sport und Wandern und so?",
    },
    {
        english_sentence: "",
        german_sentence: "",
    },
    {
        english_sentence: "",
        german_sentence: "",
    },
    {
        english_sentence: "",
        german_sentence: "",
    },
]

const ratschlag = [
    {
        english_sentence: "(If I were you),I would talk to my boss about the situation.",
        german_sentence: "Ich würde mit meinem Chef über die Situation sprechen.",
    },
    {
        english_sentence: "If I were you, I’d ride my bike to work.",
        german_sentence: "An deiner Stelle würde ich mit dem Fahrrad zur Arbeit fahren.",
    },
    {
        english_sentence: "You should turn off the phone in the evening if you want to relax.",
        german_sentence: "Du solltest am Abend das Telefon ausschalten, wenn du dich entspannen willst.",
    },
    {
        english_sentence: "You could tell your co-worker that you can talk during your lunch break.",
        german_sentence: "Du könntest deiner Kollegin sagen, dass ihr in der Mittagspause reden könnt.",
    },
    {
        english_sentence: "You should exercise in the evening.",
        german_sentence: "Du solltest am Abend Sport machen.",
    },
]

const ob =[
    {
        ser: "Ich weiß nicht, ob der Unterschied so groß ist:"
    }
]
// https://dictionary.cambridge.org/grammar/british-grammar/conditionals-if
// https://english.stackexchange.com/questions/151058/what-if-would

module.exports = {
    wünsche: wünsche,
    vorschläge: vorschläge,
    höfliche_bitte: höfliche_bitte,
    ratschlag: ratschlag,
    irreale_kondina: irreale_kondina,
}

