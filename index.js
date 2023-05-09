// Affectation des variables
const buttonSave = document.getElementById('save')
const buttonReset = document.getElementById('reset')
const welcome = document.getElementById('welcome-message')
const username = document.getElementById('username')

// On vérifie s'il existe une valeur pour la clé 'name' dans le localStorage
if (// …votre code ici...) {
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
 // …votre code ici...
  // On modifie le message de bienvenue
  welcome.textContent = 'Bienvenue ' + localStorage.getItem('name')
  // On réinitialise la valeur du champ de saisie(input)
  username.value = ""
})

// La méthode 'addEventListener' permet de lier le click d'un bouton à une action, 
// c'est une notion qui sera abordée plus tard dans le cours sur la programmation événementielle
buttonReset.addEventListener('click', () => {
  // On supprime la clé/valeur 'name' du localStorage
  // …votre code ici...
  // On remet le message de bienvenue générique
  welcome.textContent = 'Bienvenue nouveau visiteur, quel est votre nom ?'
})