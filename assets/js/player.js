async function fetchSeriesData() {
    try {
        const response = await fetch('assets/js/data/series json/tadc/tadc.json');
        const episodeData = await response.json();
        return episodeData;
    } catch (error) {
        console.error('Erreur lors de la récupération des données des épisodes:', error);
        return null;
    }
}

document.addEventListener("DOMContentLoaded", async function () {
    const episodeList = document.querySelector(".episode-list");

    // Récupère les données des épisodes
    const seriesData = await fetchSeriesData();

    // Vérifie si les données ont été récupérées avec succès
    if (seriesData) {
        // Parcourt les données et crée un lien <a> pour chaque épisode
        seriesData.forEach(function (episode) {
            // Crée un élément <a>
            const link = document.createElement("a");
            link.setAttribute("value", episode.videoUrl); // Définit la valeur de l'attribut "value" sur l'URL de la vidéo

            // Crée un élément <div> à l'intérieur du lien
            const episodeDiv = document.createElement("div");
            episodeDiv.classList.add("episode");

            // Crée un élément <h2> pour afficher le numéro de l'épisode
            const episodeTitle = document.createElement("h2");
            episodeTitle.textContent = `EP - ${episode.episodeNumber}`;

            // Ajoute le titre de l'épisode à l'élément <div>
            episodeDiv.appendChild(episodeTitle);

            // Ajoute l'élément <div> à l'élément <a>
            link.appendChild(episodeDiv);

            // Ajoute un gestionnaire d'événements clic à chaque lien
            link.addEventListener("click", function (event) {
                event.preventDefault();
                const videoSrc = this.getAttribute("value");
                const iframe = document.querySelector(".video-player iframe");
                iframe.src = videoSrc;
            });

            // Ajoute le lien à la liste des épisodes
            episodeList.appendChild(link);
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {

    let episodeLinks = document.querySelectorAll(".episode-list a");
    fetchSeriesData()


    episodeLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            let videoSrc = this.getAttribute("value");

            let iframe = document.querySelector(".video-player iframe");
            iframe.src = videoSrc;
        });
    });
});
