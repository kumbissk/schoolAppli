// import {list} from "./script.js"

// const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDIyNjUyMSwiZXhwIjoxOTU1ODAyNTIxfQ.z6PhT2grlS4pswE6JgUTDVH1vAvtT5YsbbyhioczIyA"

// const API_URL = "https://tfmpxojignvaodqfjomk.supabase.co/rest/v1/apprenants"

//RECUPERATIONS DES ELEMENTS DU DOM
const ListApprenant = document.getElementById("apprenants")
const SchoolForm = document.querySelector("form")
const inputPrenom = document.querySelector("input#prname")
const inputTitle = document.querySelector("input#name")
const niveauSelection = document.querySelector("select#niveau")
const inputDescritif = document.querySelector("textarea#descritif")
const btnAjouter = document.getElementById("btn")
const btnEnregistrerModif = document.getElementById("btn-edit-form")
const btnSauvegarde = document.getElementById("btn-save")



// CREER LA FONCTION NOUS PERMETTANT D'AVOIR NOS CARTES
const carteApprenant = (School) => {
    //creation school
    const idButtonModifier = "btn-modifier" + School.id
    const idButtonSupprimer = "btn-supprimer" + School.id
    const idCard = "number-card" + School.id
    //insertion de la carte
    ListApprenant.insertAdjacentHTML("beforebegin",
    `
    <div class="card m-2" style="width: 18rem;" id=${idCard}> 
    <div class="card-body">
      <h4 class="card-prenom">${School.prname}</h4>
      <h5 class="card-title">${School.name}</h5>
      <h5 class="card-niveau">${School.niveau}</h5>
      <p class="card-text">${School.descritif}</p>
      <button href="#" class="btn btn-success card-link" id=${idButtonModifier}>Modifier</button>
      <button href="#" class="btn btn-danger card-link" id=${idButtonSupprimer}>Supprimer</button>
    </div>
      
    </div>`)

    //Evenemnts sur les boutons
    const btnModifier = document.getElementById(idButtonModifier)
    const btnSupprimer = document.getElementById(idButtonSupprimer)
    const bouttonSauvegardeCard 
    // const btnSauvegard = document.getElementById()


    //Ecouter l'evenement click sur les boutons

    btnModifier.addEventListener("click", (event) => {
        event.preventDefault()
        btnAjouter.classList.add('d-none')
        btnEnregistrerModif.classList.remove('d-none')


        inputPrenom.value = School.prname
        inputTitle.value = School.name
        niveauSelection.value = School.niveau
        inputDescritif.value = School.descritif

        btnEnregistrerModif.addEventListener("click", (e) => {
            e.preventDefault()
            School.prname = inputPrenom.value;
            School.name = inputTitle.value
            School.niveau = niveauSelection.value
            School.descritif = inputDescritif.value

            let cardPrenom = document.querySelector(".card-prenom");
            let cardTitle = document.querySelector(".card-title");
            let cardNiveau = document.querySelector(".card-niveau");
            let cardText = document.querySelector(".card-text");


            cardPrenom.textContent = School.prname;
            cardTitle.textContent = School.name;
            cardNiveau.textContent = School.niveau;
            cardText.textContent = School.descritif;
   
        })

       


        // btnSupprimer.addEventListener("click",(e)=>{
        // //    let index= School.indexof(School)
        // //     console.log(index);

        // })

        //on recuperer l'id de school

        // console.log(inputPrenom);

    })

   
    btnSauvegarde.addEventListener("click",(e)=>{
        // e.preventDefault()
        alert("coucou")

    })


}

SchoolForm.addEventListener("submit", (event) => {
    event.preventDefault()
    //recuerons les infos saisies
    const prenameSaisi = inputPrenom.value
    const nameSaisi = inputTitle.value
    const etapeSaisi = niveauSelection.value
    const bioSaisi = inputDescritif.value

    if (prenameSaisi == "" || nameSaisi == "" || etapeSaisi == "") {
        alert("champs obligatoire")
        return
    }

    School = {
        //generer id
        id: Date.now(),
        prname: prenameSaisi,
        name: nameSaisi,
        niveau: etapeSaisi,
        descritif: bioSaisi
    }

    if (bioSaisi.trim().length < 10) {
        alert("Merci de remplir les bonne informations!")
        return
    } else {
        carteApprenant(School)


        //vider les champs
        inputPrenom.value = ""
        inputTitle.value = ""
        niveauSelection.value = ""
        inputDescritif.value = ""
    }
})

//Verifications des champs saisies
inputDescritif.addEventListener("input", (evant) => {
    const motMax = 103
    const contenu = inputDescritif.value
    const motSaisi = contenu.length
    const reste = motMax - motSaisi

    //affichage
    const paragraph = document.getElementById("text")
    const compteur = document.getElementById("text-progress")
    const textRestant = document.getElementById("text-restant")
    compteur.textContent = motSaisi
    textRestant.textContent = "il vous reste " + reste
})


//Ajout du nouveau carte au niveau de la page









