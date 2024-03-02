const fastlist = document.querySelector(".fast-list");

async function fetchSeriesData() {
    try {
        const response = await fetch('assets/js/data/series.json');
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
            const link = document.createElement("a");

            img.classList.add("article-img");
            link.classList.add("link");
            author.classList.add("author");

            fastlist.appendChild(link);
            link.appendChild(article)
            article.appendChild(titre);
            article.appendChild(img);
            article.appendChild(author);

            link.href = currentSerie.link
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
const seriesData = [];

function addSeries(title, img, author) {
    const newSeries = {
        id: (seriesData.length + 1).toString(),
        title: title,
        img: img,
        author: author
    };
    seriesData.push(newSeries);
}


form.addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const img = document.getElementById('img').value;
    const author = document.getElementById('Author').value;


    addSeries(title, img, author);

    console.log(seriesData);

    form.reset();
});