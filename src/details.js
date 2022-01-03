const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDIyNjUyMSwiZXhwIjoxOTU1ODAyNTIxfQ.z6PhT2grlS4pswE6JgUTDVH1vAvtT5YsbbyhioczIyA"

const API_URL = "https://tfmpxojignvaodqfjomk.supabase.co/rest/v1/schoolAppre"

const idApprenant = sessionStorage.getItem("idDetails")

const troisiemePage = document.getElementById("detail-page")

const carteApprenant = (School) => {
    //creation school
    const idButtonModifier = "btn_modifier" + School.id
    const idButtonSupprimer = "btn_supprimer" + School.id
    const idCard = "number_card" + School.id

    //insertion de la carte
    troisiemePage.insertAdjacentHTML("afterbegin", `
    <div class="card m-2" style="width: 18rem;" id=${idCard}> 
    <div class="card-body">
      <h4 class="card-prenom">${School.prenom}</h4>
      <h5 class="card-title">${School.nom}</h5>
      <h5 class="card-niveau">${School.niveau}</h5>
      <p class="card-text">${School.descritif}</p>
    </div>
    </div>`)

}

window.addEventListener("DOMContentLoaded", (event) => {
    //recuperation des donnees via l'API
    // fetch(API_URL, {
    //     headers: {
    //         apikey: API_KEY,
    //     },
    // })
    //     .then((response) => response.json())
    //     .then((School) => {
    //         School.forEach((School) => {
    //             idApprenant()
    //         })
    //     })

    fetch(API_URL+"?id=eq." + idApprenant,{
      headers: {
        apiKey: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((School) => {
        //
        // idApprenant(School[0])
        carteApprenant(School[0])
        console.log(School)
        console.log(School[0].nom)
      });
})

