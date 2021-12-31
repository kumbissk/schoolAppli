// import { createClient } from "@supabase/supabase-js"

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDIyNjUyMSwiZXhwIjoxOTU1ODAyNTIxfQ.z6PhT2grlS4pswE6JgUTDVH1vAvtT5YsbbyhioczIyA"

const API_URL = "https://tfmpxojignvaodqfjomk.supabase.co/rest/v1/schoolAppre"

const tab=[]
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
    const idButtonModifier = "btn_modifier" + School.id
    const idButtonSupprimer = "btn_supprimer" + School.id
    const idCard = "number_card" + School.id

    //insertion de la carte
    ListApprenant.insertAdjacentHTML("beforebegin", `
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

            //vider les champs
            inputPrenom.value = ""
            inputTitle.value = ""
            niveauSelection.value = ""
            inputDescritif.value = ""

        })
    })

    btnSupprimer.addEventListener("click", (e) => {
        const carte = document.getElementById(idCard)
        carte.remove()
    })

}

btnSauvegarde.addEventListener("click", (event) => {
    const cartes = document.querySelectorAll(".card-body")
    cartes.forEach(carte => {
        let prenom = carte.querySelector(".card-prenom").textContent
        let nom = carte.querySelector(".card-title").textContent
        let niveau = carte.querySelector(".card-niveau").textContent
        let bio = carte.querySelector(".card-text").textContent
        
        //on prend l'id de school
        fetch(API_URL + "?id=eq." + School.id,{
            method:"PATCH",
            headers: {
                apikey: API_KEY,
                "Content-Type": "application/json",
                "Prefer": "return=representation" ,
            },
            body: JSON.stringify(carte),
        })
          .then((response) => response.json())

          //mettre les informations sous forme d'objet

        nouveauCarteApprenant = {
            prenom: prenom,
            nom: nom,
            niveau: niveau,
            descritif: bio
          }
          //envoyer les donnees vers la base
          fetch(API_URL, {
              method:"POST",
              headers: {
                  apikey: API_KEY,
                  "Content-Type": "application/json",
                  "Prefer": "return=representation",
              },
              body: JSON.stringify(nouveauCarteApprenant)
          })
            .then((response)=> response.json())
            .then((data)=>{
                SchoolCreeNiveauAPI = data[0]
                //
                window.location.href="listApp.html"

            })

        // Initialize the JS client

        // const supabase = createClient([API_URL], [API_KEY])

        // insert dans la base
        // const { data, error } = await supabase
        //     .from('apprenants')
        //     .insert([
        //         { prenom: prenom, nom: nom , niveau:niveau , descritif:bio},
        //     ])
    });
})

//formulaire
SchoolForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    //recuperons les infos saisies
    const prenameSaisi = inputPrenom.value
    const nameSaisi = inputTitle.value
    const etapeSaisi = niveauSelection.value
    const bioSaisi = inputDescritif.value

    if (prenameSaisi == "" || nameSaisi == "" || etapeSaisi == "") {
        alert("champs obligatoire")
        return
    }

    // objet
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
    }
    else {
        carteApprenant(School)

        //vider les champs
        inputPrenom.value = ""
        inputTitle.value = ""
        niveauSelection.value = ""
        inputDescritif.value = ""
    }


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
})

//     //envoyer les donnees vers supabase
//     // fetch(API_URL, {
//     //     method: "POST",
//     //     headers: {
//     //         apikey: API_KEY,
//     //         "Content-Type" : "application/json" ,
//     //         Prefer: "return=representation" ,
//     //     },
//     //     body: JSON.stringify(School)
//     // })
//     //     .then((response)=>response.json())
//     //     .then((data)=>{
//     //         SchoolAuNiveauAPI = data[0]
//     //         //ajout de la nouvelle carte au niveau de la page
//     //         carteApprenant(SchoolAuNiveauAPI)
//     //     })
 
       

// //Verifications des champs saisies
// inputDescritif.addEventListener("input", (evant) => {
//     const motMax = 103
//     const contenu = inputDescritif.value
//     const motSaisi = contenu.length
//     const reste = motMax - motSaisi

//     //affichage
//     const paragraph = document.getElementById("text")
//     const compteur = document.getElementById("text-progress")
//     const textRestant = document.getElementById("text-restant")
//     compteur.textContent = motSaisi
//     textRestant.textContent = "il vous reste " + reste
// })



//Affichage du carte 
// window.addEventListener("DOMContentLoaded",(event)=> { 
//     //recuperation des donnees via l'API
//     fetch(API_URL,{
//         headers: {
//             apikey: API_KEY ,
//         },
//     })
//     .then((response)=> response.json())
//     .then((School)=>{
//         School.forEach((School)=> {
//             carteApprenant(School)   
//         })
//     })
// })

