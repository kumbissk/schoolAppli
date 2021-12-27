/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("// import {list} from \"./script.js\"\n\n//RECUPERATIONS DES ELEMENTS DU DOM\nconst ListApprenant = document.getElementById(\"apprenants\")\nconst SchoolForm = document.querySelector(\"form\")\nconst inputPrenom = document.querySelector(\"input#prname\")\nconst inputTitle = document.querySelector(\"input#name\")\nconst niveauSelection = document.querySelector(\"select#niveau\")\nconst inputDescritif = document.querySelector(\"textarea#descritif\")\nconst btnAjouter = document.getElementById(\"btn\")\nconst btnEnregistrerModif = document.getElementById(\"btn-edit-form\")\nconst sauvegarderButon = document.getElementById(\"btn-save\")\n\n// console.log(list);\n\n\n// CREER LA FONCTION NOUS PERMETTANT D'AVOIR NOS CARTES\nconst carteApprenant = (School) => {\n    //creation school\n    const idButtonModifier = \"btn-modifier\" + School.id\n    const idButtonSupprimer = \"btn-supprimer\" + School.id\n    const idCard = \"number-card\" + School.id\n    //insertion de la carte\n    ListApprenant.insertAdjacentHTML(\"beforebegin\",\n        `\n    <div class=\"card m-2\" style=\"width: 18rem;\" id=${idCard}> \n    <div class=\"card-body\">\n      <h4 class=\"card-prenom\">${School.prname}</h4>\n      <h5 class=\"card-title\">${School.name}</h5>\n      <h5 class=\"card-niveau\">${School.niveau}</h5>\n      <p class=\"card-text\">${School.descritif}</p>\n      <button href=\"#\" class=\"btn btn-success card-link\" id=${idButtonModifier}>Modifier</button>\n      <button href=\"#\" class=\"btn btn-danger card-link\" id=${idButtonSupprimer}>Supprimer</button>\n    </div>\n    </div>`)\n\n    //Evenemnts sur les boutons\n    const btnModifier = document.getElementById(idButtonModifier)\n    const btnSupprimer = document.getElementById(idButtonSupprimer)\n\n    //Ecouter l'evenement click sur les boutons\n\n    btnModifier.addEventListener(\"click\", (event) => {\n        event.preventDefault()\n        btnAjouter.classList.add('d-none')\n        btnEnregistrerModif.classList.remove('d-none')\n\n\n        inputPrenom.value = School.prname\n        inputTitle.value = School.name\n        niveauSelection.value = School.niveau\n        inputDescritif.value = School.descritif\n\n        btnEnregistrerModif.addEventListener(\"click\", (e) => {\n            e.preventDefault()\n            // alert(\"Coucou\")\n            School.prname = inputPrenom.value;\n            School.name = inputTitle.value\n            School.niveau = niveauSelection.value\n            School.descritif = inputDescritif.value\n\n            let cardPrenom = document.querySelector(\".card-prenom\");\n            let cardTitle = document.querySelector(\".card-title\");\n            let cardNiveau = document.querySelector(\".card-niveau\");\n            let cardText = document.querySelector(\".card-text\");\n\n\n            cardPrenom.textContent = School.prname;\n            cardTitle.textContent = School.name;\n            cardNiveau.textContent = School.niveau;\n            cardText.textContent = School.descritif;\n\n            \n        })\n\n\n        // btnSupprimer.addEventListener(\"click\",(e)=>{\n        // //    let index= School.indexof(School)\n        // //     console.log(index);\n\n        // })\n\n        //on recuperer l'id de school\n\n        // console.log(inputPrenom);\n\n    })\n\n    // sauvegarderButon.addEventListener(\"click\",(event)=>{\n\n    // })\n\n}\n\nSchoolForm.addEventListener(\"submit\", (event) => {\n    event.preventDefault()\n    //recuerons les infos saisies\n    const prenameSaisi = inputPrenom.value\n    const nameSaisi = inputTitle.value\n    const etapeSaisi = niveauSelection.value\n    const bioSaisi = inputDescritif.value\n\n    if (prenameSaisi == \"\" || nameSaisi == \"\" || etapeSaisi == \"\") {\n        alert(\"champs obligatoire\")\n        return\n    }\n\n    School = {\n        //generer id\n        id: Date.now(),\n        prname: prenameSaisi,\n        name: nameSaisi,\n        niveau: etapeSaisi,\n        descritif: bioSaisi\n    }\n\n    if (bioSaisi.trim().length < 10) {\n        alert(\"Merci de remplir les bonne informations!\")\n        return\n    } else {\n        carteApprenant(School)\n\n\n        //vider les champs\n        inputPrenom.value = \"\"\n        inputTitle.value = \"\"\n        niveauSelection.value = \"\"\n        inputDescritif.value = \"\"\n    }\n})\n\n//Verifications des champs saisies\ninputDescritif.addEventListener(\"input\", (evant) => {\n    const motMax = 103\n    const contenu = inputDescritif.value\n    const motSaisi = contenu.length\n    const reste = motMax - motSaisi\n\n    //affichage\n    const paragraph = document.getElementById(\"text\")\n    const compteur = document.getElementById(\"text-progress\")\n    const textRestant = document.getElementById(\"text-restant\")\n    compteur.textContent = motSaisi\n    textRestant.textContent = \"il vous reste \" + reste\n})\n\n\n//Ajout du nouveau carte au niveau de la page\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://schoolappli/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;