// Affectation des variables
const buttonSave = document.getElementById('save')
const buttonReset = document.getElementById('reset')
const welcome = document.getElementById('welcome-message')
const username = document.getElementById('username')

// On vérifie s'il existe une valeur pour la clé 'name' dans le localStorage
if (localStorage.getItem('name')) {
  // Message de bienvenue personnalisé si oui
  welcome.textContent = 'Bienvenue ' + localStorage.getItem('name')
} else {
  // Message de bienvenue générique si non
  welcome.textContent = 'Bienvenue nouveau visiteur, quel est votre nom ?'
}

// La méthode 'addEventListener' permet de lier le click d'un bouton à une action, 
// c'est une notion qui sera abordée plus tard dans le cours sur la programmation événementielle
buttonSave.addEventListener('click', () => {
  // On enregistre le nom de l'utilisateur avec la clé 'name' dans le localStorage
  localStorage.setItem('name', username.value)
  // On modifie le message de bienvenue
  welcome.textContent = 'Bienvenue ' + localStorage.getItem('name')
  // On réinitialise la valeur du champ de saisie(input)
  username.value = ""
})

// La méthode 'addEventListener' permet de lier le click d'un bouton à une action, 
// c'est une notion qui sera abordée plus tard dans le cours sur la programmation événementielle
buttonReset.addEventListener('click', () => {
  // On supprime la clé/valeur 'name' du localStorage
  localStorage.removeItem('name')
  // On remet le message de bienvenue générique
  welcome.textContent = 'Bienvenue nouveau visiteur, quel est votre nom ?'
})
//--------------------------------------------------------------------------------------------
//-------------deuxième manière d'utilisation de localeStotrage-------------------------------
//localStorage.setitem("clé", "valeur")
//localStorage.getitem("clé")
//localStorage.clear();
//JSON.stringify(objet) => transforme l'objet en string
//JSON.parse(string)
const local = JSON.parse(localStraoge.getItem("user"));

// on recupere le nom enregistré en bas avec le bout de code ci dessous(localStorage.getItem("nom")):
if(local!= null)
{
    formulaire.style.display = "none";
    h1.textContent = `Bonjour ${local.nom} , tu as ${local.age} ans`;//concatenation with "bactic".
}

//on enregistre le nom avec le code ci dessous (setItem("nom", nom.value)):
bouton.onclick =() => {
    const user ={
        nom :nom.value,
        age: age.value
    }
    localStorage.setItem("user", JSON.stringify(user));
    document.location.reload();
}

clear.onclick =() => {
    localStorage.clear();
    document.location.reload();
}
//-------------------------------------------------------------------------------------------
//----------------------------------programation inpérative----------------------------------

function isPair(number) {
  if (number%2 ===0) {
    console.log(number +' est pair')
  }else{
    console.log(numer + ' est impair');
  }
}

let count = 1 ;
while (count <= 10){

  isPair(count);
  count = count + 1 ;
}