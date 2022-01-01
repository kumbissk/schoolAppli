const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDIyNjUyMSwiZXhwIjoxOTU1ODAyNTIxfQ.z6PhT2grlS4pswE6JgUTDVH1vAvtT5YsbbyhioczIyA"

const API_URL = "https://tfmpxojignvaodqfjomk.supabase.co/rest/v1/schoolAppre"

const idApprenant = sessionStorage.getItem("idDetails")

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
                idApprenant()
            })
        })

    // fetch({API_URL},"?id=eq.",{
    //   headers: {
    //     apiKey: API_KEY,
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((School) => {
    //     //
    //     idApprenant(School[0])
    //     console.log(School)
    //     console.log(School[0].nom)
    //   });


})