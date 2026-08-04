let carteActuelle = 0;

let choixClient = {
    aime: [],
    mitige: [],
    pas: []
};


function startGame() {

    document.getElementById("accueil").style.display = "none";
    document.getElementById("jeu").style.display = "block";

    afficherCarte();

}


function afficherCarte() {

    let carte = cartes[carteActuelle];

    document.getElementById("imageCarte").src = carte.image;

    document.getElementById("compteur").innerHTML =
        "Carte " + (carteActuelle + 1) + " / " + cartes.length;

}


function choisir(reponse) {


    choixClient[reponse].push(carteActuelle);


    carteActuelle++;


    if (carteActuelle < cartes.length) {

        afficherCarte();

    } else {

        alert("Exploration terminée ! Merci pour vos réponses.");

    }

}
