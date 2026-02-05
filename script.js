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

