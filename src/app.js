//RECUPERATIONS DES ELEMENTS DU DOM
const ListApprenant = document.getElementById("apprenants")
const SchoolForm = document.querySelector("form")
const inputPrenom = document.querySelector("input#prname")
const inputTitle = document.querySelector("input#name")
const niveauSelection = document.querySelector("select#niveau")
const inputDescritif = document.querySelector("textarea#descritif")
const btnAjouter = document.getElementById("btn")
const btnEnregistrerModif = document.getElementById("btn-edit-form")
const sauvegarderButon = document.getElementById("btn-save")

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
      <p class="card-text">${School.descritif}</p>
      <h5 class="card-niveau">${School.niveau}</h5>
      <button href="#" class="btn btn-success card-link" id=${idButtonModifier}>Modifier</button>
      <button href="#" class="btn btn-danger card-link" id=${idButtonSupprimer}>Supprimer</button>
    </div>
    </div>`)

    //Evenemnts sur les boutons
    const btnModifier = document.getElementById(idButtonModifier)
    const btnSupprimer = document.getElementById(idButtonSupprimer)
    
    //Ecouter l'evenement click sur les boutons

    btnModifier.addEventListener("click", (event) => {
        btnAjouter.classList.add('d-none')
        btnEnregistrerModif.classList.remove('d-none')


        inputPrenom.value = School.prname
        inputTitle.value = School.name
        niveauSelection.value = School.niveau
        inputDescritif.value = School.descritif

        btnSupprimer.addEventListener("click",(e)=>{
        //    let index= School.indexof(School)
        //     console.log(index);
           
        })
    
        //on recuperer l'id de school
      
        // console.log(inputPrenom);

    })

    sauvegarderButon.addEventListener("click",(event)=>{
        
    })
    
}

SchoolForm.addEventListener("submit", (event) => {
    event.preventDefault()
    //recuerons les infos saisies
    const prenameSaisi = inputPrenom.value
    const nameSaisi = inputTitle.value
    const etapeSaisi = niveauSelection.value
    const bioSaisi = inputDescritif.value

    if (prenameSaisi == "" || nameSaisi ==""||etapeSaisi=="") {
        alert("champs obligatoire")
        return
    }
   
    School = {
        //generer
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