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

// Exercice 3

// Récupérer les éléments
let modal = document.getElementById('ma-modal');
let bouton = document.getElementById('bouton-modal');
let croix = document.getElementsByClassName('fermer')[0];
let boutonFermer = document.getElementsByClassName('bouton-fermer')[0];

// clique sur le bouton, ouvrir la modal
bouton.onclick = function() {
    modal.style.display = 'block';
}

//  clique sur X, fermer la modal
croix.onclick = function() {
    modal.style.display = 'none';
}

//  clique sur le bouton, fermer la modal
boutonFermer.onclick = function() {
    modal.style.display = 'none';
}

// clique en dehors de la boîte, fermer la modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Exercice 4

// class calculateur {
//     constructor (valeurInitiale) {
//        this.total = valeurInitiale; 
//     }
//     ajouter(nombre) {
//         this.total += nombre;
//     }
//     afficher () {
//         console.log(`le total actuel est : ${this.total}`);
//     }
// }

// Classe pour calculer la somme
class Calculateur {
    constructor (valeurInitiale) {
       this.total = valeurInitiale; 
    }
    ajouter(nombre) {
        let total = 0;
        for (let nombre of this.total) {
            total += nombre;
        }
        return total;  
    }
    afficher () {
        let finalSum = this.ajouter ();
        console.log(`le total actuel est : ${finalSum}`);
    }
}

let maListe = [5, 10, 15, 20];
let autreListe = [100, 200, 50, 25];
let monCalculateur = new Calculateur(maListe);
let monCalculateur2 = new Calculateur(autreListe);


monCalculateur.afficher(maListe);
monCalculateur2.afficher(monCalculateur2);

// Exercice 5

// Classe pour les armes
class Weapon {
    constructor() {
        this.fist = 'Poing';
        this.saber = 'Sabre';
        this.rifle = 'Fusil';
    }
    
    afficher() {
        console.log(`Les armes sont : ${this.fist}, ${this.saber} et ${this.rifle}`);
    }
}

// Classe pour les sorts
class Sort {
    constructor() {
        this.teleportation = 'Téléportation';
        this.petrification = 'Pétrification';
        this.regeneration = 'Régénération';
    }
    
    afficher() {
        console.log(`Les sorts sont : ${this.teleportation}, ${this.petrification} et ${this.regeneration}`);
    }
}

// Utilisation
const mesArmes = new Weapon();
mesArmes.afficher();

const mesSorts = new Sort();
mesSorts.afficher();

// Exercice 6

// CLASSE PARENTE : Personnage

class Personnage {
    constructor(nom, sante, force, titre) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        this.titre = titre;
    }
    
    // afficher les informations
    afficher() {
        console.log(`Nom: ${this.nom}`);
        console.log(`Titre: ${this.titre}`);
        console.log(`Santé: ${this.sante} HP`);
        console.log(`Force: ${this.force}`);
    }
}

// CLASSE Guerrier
class Guerrier extends Personnage {
    constructor(nom, sante, force, armure, arme) {
        super(nom, sante, force, 'Guerrier');
        this.armure = armure;
        this.arme = arme;
    }
    
    // Méthode spécifique au Guerrier
    afficher() {
        super.afficher(); 
        console.log(`Armure: ${this.armure}`);
        console.log(`Arme: ${this.arme}`);
    }
}

// CLASSE Mage

class Mage extends Personnage {
    constructor(nom, sante, force, mana, sort) {
        super(nom, sante, force, 'Mage');
        this.mana = mana;
        this.sort = sort;
    }
    
    afficher() {
        super.afficher();
        console.log(`Mana: ${this.mana} MP`);
        console.log(`Sort principal: ${this.sort}`);
    }
}

// CLASSE Archer

class Archer extends Personnage {
    constructor(nom, sante, force, agilite, typeArc) {
        super(nom, sante, force, 'Archer');
        this.agilite = agilite;
        this.typeArc = typeArc;
    }
    
    afficher() {
        super.afficher();
        console.log(`Agilité: ${this.agilite}`);
        console.log(`Type d'arc: ${this.typeArc}`);
    }
}

// CLASSE Voleur

class Voleur extends Personnage {
    constructor(nom, sante, force, discretion, armeSecrete) {
        super(nom, sante, force, 'Voleur');
        this.discretion = discretion;
        this.armeSecrete = armeSecrete;
    }
    
    afficher() {
        super.afficher();
        console.log(`Discrétion: ${this.discretion}`);
        console.log(`Arme secrète: ${this.armeSecrete}`);
    }
}

// CRÉATION DES PERSONNAGES

console.log(' MES PERSONNAGES \n');

// Créer un Guerrier
const aragorn = new Guerrier('Guerrier', 150, 85, 'Armure lourde', 'Épée longue');
aragorn.afficher();

// Créer un Mage
const gandalf = new Mage('Mage', 80, 40, 200, 'Boule de feu');
gandalf.afficher();

// Créer un Archer
const legolas = new Archer('Archer', 100, 60, 95, 'Arc elfique');
legolas.afficher();

// Créer un Voleur
const ezio = new Voleur('Voleur', 90, 55, 98, 'Lame cachée');
ezio.afficher();

console.log('\n Tous les personnages ont été créés !');