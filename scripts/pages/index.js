import photographerFactory from "../factories/photographer.js";
async function getPhotographers() {

    const url = './data/photographers.json';
    
    return await fetch(url)
        .then((response) => response.json())
        .then(({ photographers }) => {
            return photographers
        })
}


async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    const photographers = await getPhotographers();
    displayData(photographers);
};

init();
