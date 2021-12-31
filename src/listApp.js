const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDIyNjUyMSwiZXhwIjoxOTU1ODAyNTIxfQ.z6PhT2grlS4pswE6JgUTDVH1vAvtT5YsbbyhioczIyA"

const API_URL = "https://tfmpxojignvaodqfjomk.supabase.co/rest/v1/schoolAppre"

const affichage = document.getElementById("lister")




const carteApprenant = (School) => {
    //creation school
    const idCard = "number_card" + School.id
    //insertion de la carte
    affichage.insertAdjacentHTML("beforebegin", `
    <div class="card m-2" style="width: 18rem;" id=${idCard}> 
    <div class="card-body">
      <h4 class="card-prenom">${School.prenom}</h4>
      <h5 class="card-title">${School.nom}</h5>
      <h5 class="card-niveau">${School.niveau}</h5>
      <p class="card-text">${School.descritif}</p>
      <button href="#" class = "btn btn-primary card-link" id="${idCard}">Details</button>
    </div>
    </div>`)

    const Details = document.getElementById(idCard)

    //
    Details.addEventListener("click", (event) => {
        event.preventDefault()
        sessionStorage.setItem("idDetails",School.id)
        window.location.href = "details.html"
    })

}



//affichage de la carte au niveau de la page listeApprenants

window.addEventListener("DOMContentLoaded", (event) => {
    //recuperation des donnees via l'API
    fetch(API_URL, {
        headers: {
            apikey: API_KEY,
        },
    })
        .then((response) => response.json())
        .then((School) => {
            School.forEach((School) => {
                carteApprenant(School)
            })
        })
})