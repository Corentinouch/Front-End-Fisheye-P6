import mediaFactory from "../factories/media.js";
import photographerFactory from "../factories/photographer.js";
import triggerLightbox from "../utils/lightbox.js";
import { sortByDate, sortByName, sortByPopularity } from "../helpers/sort.js";

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
            console.log(media)
            return newMedia
        })
}


async function displayData(photographer, media) {
    const photographerSection = document.querySelector(".photograph-header");
    const photographerFooter = document.querySelector(".photograph-footer");
    const photographerSort = document.querySelector(".photograph-sort");
    const photographerModel = photographerFactory(photographer, media);

    const getHeader = photographerModel.getHeader();
    photographerSection.appendChild(getHeader);

    const getPhotoHeader = photographerModel.getPhotoHeader();
    photographerSection.appendChild(getPhotoHeader);

    const getGlobal = photographerModel.getGlobal();
    photographerFooter.appendChild(getGlobal);

    const sortingMedia = photographerModel.sortingMedia();
    photographerSort.appendChild(sortingMedia)

};

async function displayMedia(medias, photographer) {
    const main = document.querySelector(".photograph-work");
    // cleanup gallery before adding elements
    main.innerHTML = "";

    medias.forEach((media) => {
        const mediaModel = mediaFactory(media, photographer);
        const getMedia = mediaModel.getMedia();
        const getTitle = mediaModel.getTitle();
        console.log(getMedia, "getmedia")
        getMedia.addEventListener("click", () => {
            triggerLightbox(media, photographer, medias);
        })
        main.appendChild(getMedia);
        main.appendChild(getTitle);
    })
};

async function init() {
    const photographer = await getPhotographer();
    const media = await getMedia();
    displayData(photographer, media);
    displayMedia(media, photographer);
    const select = document.getElementById("sorting")

    select.addEventListener("change", () => {
        let medias = media
            if (select.value === "Date") {
                medias = sortByDate(media);
            } else if (select.value === "Popularité") {
                medias = sortByPopularity(media)
            } else if (select.value === "Titre") {
                medias =sortByName(media)
            }
            displayMedia(medias, photographer);
            return
    })
};

init();

