const pierre = document.getElementById("pierre");
const feuille = document.getElementById("feuille");
const ciseaux = document.getElementById("ciseaux");
const resultat = document.getElementById("result");

let choix_j, choix_r = "";
const choix_tab =  ["pierre", "feuille", "ciseaux"];

function jouer(joueur) {
    choix_j = joueur;
    choix_r = choix_tab[Math.floor(Math.random()*3)]
    shifumi(choix_j, choix_r)
}

function shifumi(joueur, robot) {
    if (joueur===robot) {
        partie = "C'est une égalité"
    }

    else if ((joueur==="pierre" && robot==="ciseaux") || (joueur==="feuille" && robot==="pierre") || (joueur==="ciseaux" && robot==="feuille")) {
        partie = `Vous avez joué ${joueur} et l'ordinateur a joué ${robot}, c'est gagné`
    }

    else {partie = `Vous avez joué ${joueur} et l'ordinateur a joué ${robot}, c'est perdu`}

    resultat.textContent = partie;
}

pierre.addEventListener("click", ()=>jouer(pierre.textContent));
feuille.addEventListener("click", ()=>jouer(feuille.textContent));
ciseaux.addEventListener("click", ()=>jouer(ciseaux.textContent));

