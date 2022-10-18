const str = window.location.href;
const url = new URL(str);
const id = parseInt(url.searchParams.get("id"));
const dataUrl = './data/photographers.json';

async function getPhotographer() {

    return await fetch(dataUrl)
        .then((response) => response.json())
        .then(({ photographers }) => {
            const photographer = photographers.find(element => element.id === id)
            console.log(photographer)
            return photographer
        })
}
async function getMedia() {

    return await fetch(dataUrl)
        .then((response) => response.json())
        .then(({ media }) => {
            const newMedia = media.filter((element) => element.photographerId === id)
            console.log(newMedia)
            /*media.forEach(element => {
               if (element.photographerId === id) {
                console.log(element)
                    return element
                }
            });*/
            console.log(media)
            return newMedia
        })
}


async function displayData(photographer) {
    const photographerSection = document.querySelector(".photograph-header");

    const photographerModel = photographerFactory(photographer);
    const getHeader = photographerModel.getHeader();
    photographerSection.appendChild(getHeader);
};

async function displayMedia(medias, photographer) {
    const main = document.querySelector(".photograph-work");
    console.log(main)

    medias.forEach((media) => {
        const mediaModel = mediaFactory(media, photographer);
        const getMedia = mediaModel.getMedia();
       console.log(getMedia)
        getMedia.addEventListener("click", e =>{
            displayLightbox(e);
        })
        main.appendChild(getMedia);
    })
};

async function init() {
    // Récupère les datas du photographe
    const photographer = await getPhotographer();
    const media = await getMedia();
    displayData(photographer);
    displayMedia(media, photographer);
};

init();

