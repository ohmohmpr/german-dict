const possessivartikel = [
    {
        title: "Nominativ",
        ich: "ich",
        du: "du",
        er: "er",
        es: "es",
        sie: "sie",
        wir: "wir",
        ihr: "ihr",
        sie2: "sie2",
        Sie: "Sie",
    },
    {
        title: "Akkusativ",
        ich: "mich",
        du: "dich",
        er: "ihn",
        es: "es",
        sie: "sie",
        wir: "uns",
        ihr: "euch",
        sie2: "sie2",
        Sie: "Sie",
    },
    {
        title: "Dativ",
        ich: "mir",
        du: "dir",
        er: "ihm",
        es: "ihm1",
        sie: "ihr",
        wir: "uns",
        ihr: "euch",
        sie2: "ihnen",
        Sie: "Ihnen",
    },
]

const jeder = [
    {
        title: "Nominativ", 
        maskulin: "jeder", 
        neutrum: "jedes", 
        feminin: "jede",  
        plural: "-",
    },
    {
        title: "Akkusativ",
        maskulin: "jeden", 
        neutrum: "jedes", 
        feminin: "jede",  
        plural: "-",
    },
    {
        title: "Dativ",
        maskulin: "jedem", 
        neutrum: "jedem", 
        feminin: "jeder",  
        plural: "-",
    },
]

module.exports = {
    possessivartikel: possessivartikel,
    jeder: jeder,
}

