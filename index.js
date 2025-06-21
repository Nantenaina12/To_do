// ===============================
// 🧠 Initialisation des variables
// ===============================

// Charger les tâches existantes depuis le localStorage ou créer un tableau vide
let taches = JSON.parse(localStorage.getItem("taches")) || [];

// Récupération des éléments HTML
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const liste = document.getElementById("todo-list");


// ===============================
// 📋 Fonction d'affichage des tâches
// ===============================

function afficherTaches() {
  // Vider la liste affichée pour la reconstruire
  liste.innerHTML = "";

  // Parcourir toutes les tâches du tableau
  taches.forEach((texte, index) => {
    // Créer un <li> pour chaque tâche
    const li = document.createElement("li");
    li.textContent = `📌 ${texte}`;

    // Créer un bouton pour supprimer la tâche
    const boutonSupprimer = document.createElement("button");
    boutonSupprimer.textContent = "❌";
    boutonSupprimer.classList.add("supprimer");

    // Ajouter un événement pour supprimer la tâche au clic
    boutonSupprimer.addEventListener("click", () => {
      taches.splice(index, 1); // Supprimer la tâche du tableau
      localStorage.setItem("taches", JSON.stringify(taches)); // Mettre à jour localStorage
      afficherTaches(); // Réafficher la liste
    });

    // Ajouter le bouton dans la <li>, puis afficher la tâche
    li.appendChild(boutonSupprimer);
    liste.appendChild(li);
  });
}


// ===============================
// ➕ Gestion de l'ajout de tâche
// ===============================

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Empêcher le rechargement du formulaire

  const nouvelleTache = input.value.trim(); // Supprimer les espaces

  if (nouvelleTache !== "") {
    taches.push(nouvelleTache); // Ajouter la tâche au tableau
    localStorage.setItem("taches", JSON.stringify(taches)); // Sauvegarder
    input.value = ""; // Réinitialiser le champ
    afficherTaches(); // Mettre à jour l'affichage
  } else {
    alert("⛔ Veuillez entrer une tâche !");
  }
});


// ===============================
// 🚀 Affichage initial au chargement
// ===============================

afficherTaches();
