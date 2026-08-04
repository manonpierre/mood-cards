let carteActuelle = 0;


let choixClient = {

    aime: [],
    mitige: [],
    pas: []

};



function startGame() {


    document.getElementById("accueil").style.display = "none";

    document.getElementById("jeu").style.display = "flex";


    afficherCarte();

}




function afficherCarte() {


    let carte = cartes[carteActuelle];


    document.getElementById("imageCarte").src = carte.image;


    document.getElementById("compteur").innerHTML =
        "Carte " + (carteActuelle + 1) + " / " + cartes.length;


    resetBoutons();


}




function choisir(reponse) {


    choixClient[reponse].push(carteActuelle);


    resetBoutons();


    document.getElementById(reponse)
        .classList.add("selection");


}




function resetBoutons() {


    document.getElementById("aime")
        .classList.remove("selection");


    document.getElementById("mitige")
        .classList.remove("selection");


    document.getElementById("pas")
        .classList.remove("selection");


}




function carteSuivante() {


    if (carteActuelle < cartes.length - 1) {


        carteActuelle++;


        afficherCarte();

    }

}




function cartePrecedente() {


    if (carteActuelle > 0) {


        carteActuelle--;


        afficherCarte();

    }

}
