const fastlist = document.querySelector(".fast-list");

async function fetchSeriesData() {
    try {
        const response = await fetch('assets/js/data/series.json'); // Assurez-vous que le chemin est correct
        const series = await response.json();
        return series;
    } catch (error) {
        console.error('Erreur lors de la récupération des données de la série:', error);
        return null;
    }
}

async function parcourirSeries() {
    const series = await fetchSeriesData();
    if (series) {
        for (let i = 0; i < series.length; i++) {
            const currentSerie = series[i];

            const article = document.createElement("article");
            const titre = document.createElement("h2");
            const img = document.createElement("img");
            const author = document.createElement("p");

            img.classList.add("article-img");

            fastlist.appendChild(article);
            article.appendChild(titre);
            article.appendChild(img);
            article.appendChild(author);

            titre.textContent = currentSerie.title;
            img.src = currentSerie.img;
            author.textContent = "By: " + currentSerie.author;
        }
    } else {
        console.log('Impossible de récupérer les données de la série.');
    }
}

parcourirSeries();

const form = document.querySelector('.add-series-form');
const seriesData = []; // Remplacez par vos données JSON existantes

// Fonction pour ajouter une nouvelle série
function addSeries(title, img, author) {
    const newSeries = {
        id: (seriesData.length + 1).toString(), // Générez un nouvel ID en fonction de la longueur actuelle du tableau
        title: title,
        img: img,
        author: author
    };
    seriesData.push(newSeries);
}

// Écouteur d'événement pour la soumission du formulaire
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire

    // Récupérer les valeurs des champs du formulaire
    const title = document.getElementById('title').value;
    const img = document.getElementById('img').value; // Vous pouvez obtenir la valeur de l'élément de type file de cette manière
    const author = document.getElementById('Author').value;

    // Ajouter une nouvelle série avec les données saisies dans le formulaire
    addSeries(title, img, author);

    // Afficher les données mises à jour
    console.log(seriesData);

    // Réinitialiser le formulaire
    form.reset();
});