const series = [

    {
        id: "1",
        title: "The Amazing Digital Circus",
        img : "assets/img/tadc/tadc-fast-img.jpg",
        author: "Gooseworx - Glitch Production",
    },

    {
        id: "2",
        title: "Murder Drones",
        img: "assets/img/md/murder-drone-fast-series.jpg",
        author: "Liam Vickers - Glitch Production",
    },

    {
        id: "3",
        title: "Hazbin Hotel",
        img: "assets/img/hh/hazbin-hotel-fast-series-img.jpg",
        author: "Vivienne Medrano - Production A24 - Bento Box Entertainment - Amazon MGM Studios",
    },

    {
        id: "4",
        title: "Helluva Boss",
        img: "assets/img/hb/heluva-boss-fast-series-img.jpg",
        author: "Vivienne Medrano",
    },

    {
        id: "5",
        title: "Meta Runner",
        img: "assets/img/mr/mr-fast-series-img.jpg",
        author: "Glitch Production",
    },

    {
        id: "6",
        title: "Sunset Paradise",
        img: "assets/img/sp/sp-fast-series-img.jpg",
        author: "Glitch Production",
    },

    {
        id: "7",
        title: "Lackadaisy",
        img: "assets/img/ld/ld-fast-series-img.jpg",
        author: "Tracy J. Butler",
    },

    {
        id: "8",
        title: "Spooky Month",
        img: "assets/img/sm/sm-fast-serie-img.jpg",
        author: "Sr Pelo",
    },

]

const fastlist = document.querySelector(".fast-list");

function parcourirSeries(series) {
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
}

parcourirSeries(series);