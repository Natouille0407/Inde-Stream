const episodes = [

    {
        id: "1",
        episode: "S1 - Ep 1"
    },

]

const episodelist = document.querySelector(".episode-list");

function parcourirEpisodes(episodes) {
    for (let i = 0; i < episodes.length; i++) {
        const currentEpisodes = episodes[i];

        const article = document.createElement("article");
        const link = document.createElement("a");
        const titre = document.createElement("h2");

        link.href = "tadc episode/s1ep1.html"

        episodelist.appendChild(link);
        link.appendChild(article);
        article.appendChild(titre);

        titre.textContent = currentEpisodes.episode;

    }
}

parcourirEpisodes(episodes);