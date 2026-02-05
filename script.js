// variable pour stocker l'alarme
let monAlarme = null;

// Fonction qui affiche l'heure
function afficherHeure() {
    // Récupérer l'heure actuelle
    let maintenant = new Date();
    let heures = maintenant.getHours();
    let minutes = maintenant.getMinutes();
    let secondes = maintenant.getSeconds();
    
    // Ajouter un 0 devant si chiffre
    if (heures < 10) {
        heures = '0' + heures;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (secondes < 10) {
        secondes = '0' + secondes;
    }
    
    // Afficher l'heure dans la page
    document.getElementById('heure').textContent = heures + ':' + minutes + ':' + secondes;
    
    if (monAlarme != null) {
        let heureComplete = heures + ':' + minutes;
        if (heureComplete == monAlarme && secondes == '00') {
            alert('ALARME ! Il est ' + monAlarme);
            monAlarme = null;
            document.getElementById('message').textContent = '';
        }
    }
}

// Programmer l'alarme
function programmer() {
    let inputAlarme = document.getElementById('alarme').value;
    
    if (inputAlarme == '') {
        alert('Choisissez une heure !');
    } else {
        monAlarme = inputAlarme;
        document.getElementById('message').textContent = 'Alarme à ' + inputAlarme;
    }
}

afficherHeure();
setInterval(afficherHeure, 1000);

document.getElementById('bouton').onclick = programmer;

// Exercice 1 nombre paire

// function paire (number) {
//     return number %2 === 0
// }
// console.log (paire(10)) 
// console.log (paire(29)) 
// console.log (paire(52)) 

// Exercice 2 palindrome

// function palindrome (chaine) {
//    return chaine === chaine.split('').reverse().join('');  
// }

// let mot = prompt ("ecrivez un mot");
// if (palindrome(mot)) {
//     alert ('Le mot est un palindrome');
// }
// else { 
//     alert ("faux, veuillez entrer un nouveau mot");
// }

// console.log (palindrome("kayak"))
// console.log (palindrome("bonbon"))
// console.log (palindrome("bonjour"))

// Exercice II feu tricolore

// Variable pour savoir quel feu est allumé

// Fonction pour allumer un feu et éteindre les autres

function allumerFeu(couleur) {
    // Éteindre tous les feux
    document.getElementById('rouge').className = 'light';
    document.getElementById('orange').className = 'light';
    document.getElementById('vert').className = 'light';
    
    // Allumer le feu demandé
    if (couleur == 'rouge') {
        document.getElementById('rouge').className = 'light lightRed';
    }
    if (couleur == 'vert') {
        document.getElementById('vert').className = 'light lightGreen';
    }
    if (couleur == 'orange') {
        document.getElementById('orange').className = 'light lightOrange';
    }
}

let compteur = 0;

// changement de couleur
function changerFeu() {
    if (compteur == 0) {
        allumerFeu('rouge');
        compteur = 1;
    }
    else if (compteur == 1) {
        allumerFeu('vert');
        compteur = 2;
    }
    else {
        allumerFeu('orange');
        compteur = 0;
    }
}

// Démarrer avec le rouge
allumerFeu('rouge');

// Toutes les 5 secondes
setInterval(changerFeu, 5000);