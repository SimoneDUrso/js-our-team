// Funzione per la creazione dei div
function createColumn() {
    const col = document.createElement("div");
    col.classList.add("col-12", "col-md-6", "col-lg-4")
}


// Creazione di un array di oggetti
const team = [

    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },

    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },

    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },

    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },

    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },

    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    },
]

// Costante che fa riferimento al container creato in HTML
const team_container = document.getElementById("team-container");

for (let i = 0; i < team.length; i++) {

    console.log(team[i].nome, team[i].ruolo, team[i].foto)

    team_container.innerHTML += `${team[i].nome} ${team[i].ruolo} ${team[i].foto} <br>`
}