// Funzione per la creazione dei div
function createColumn() {
    const col = document.createElement("div");
    col.classList.add("col-12", "col-md-6", "col-lg-4")

    return col
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

    // Creo le colonne
    let col = createColumn();

    col.innerHTML = `
                <div class="card my-3">
                    <div class="card-img-top mb-3">
                        <img src = "../img/${team[i].foto}" class="w-100">
                    </div>
    
                    <div class="card-body p-3 text-center border border-secondary">
                            <strong>${team[i].nome}</strong> <br> 
                            ${team[i].ruolo}
                    </div>
                </div>`


    console.log(team[i].nome, team[i].ruolo, team[i].foto)

    // Appendo le colonne al contenitore creato nell'HTML
    team_container.append(col);
}