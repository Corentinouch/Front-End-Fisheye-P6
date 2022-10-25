import nameExtract from "../helpers/nameExtract.js";

function displayLightbox(media, photographer, medias) {
    const { id, photographerId, title, image, video, likes, date } = media;
    const { name, price } = photographer;

    const lightbox = document.querySelector(".lightbox");
    const prenom = nameExtract(name);
    const picture = `assets/images/${prenom}/${image}`
    const movie = `assets/images/${prenom}/${video}`
    if (!lightbox) {

        const modal = document.createElement("div");
        modal.classList.add("lightbox");

        const previous = document.createElement("div");
        const next = document.createElement("div");
        const main = document.createElement("div");
        const closeBtn = document.createElement("button");
        const previousBtn = document.createElement("button");
        const nextBtn = document.createElement("button");
        nextBtn.classList.add("next_button");
        previousBtn.classList.add("previous_button")

        if (media.image) {
            const picture = `assets/images/${prenom}/${image}`;
            const img = document.createElement('img');
            img.setAttribute("src", picture);
            main.appendChild(img).setAttribute("alt", `${name} pictures`);

        } else if (media.video) {
            const movie = `assets/images/${prenom}/${video}`;
            const vdo = document.createElement("video");
            vdo.setAttribute("src", movie)
            vdo.controls = true;
            main.appendChild(vdo).setAttribute("alt", `${name} video`);
        }

        closeBtn.classList.add("close_modal");
        closeBtn.textContent = "close"

        previous.appendChild(previousBtn);
        main.classList.add("img_container");
        next.appendChild(closeBtn);
        next.appendChild(nextBtn);
        modal.appendChild(previous);
        modal.appendChild(main);
        modal.appendChild(next);

        document.body.appendChild(modal);

        closeBtn.addEventListener("click", e => {
            modal.style.display = "none";
        })

    } else {
        const modal = lightbox;
        modal.style.display = "flex";
        const img = document.querySelector(".img_container img")
        img.setAttribute("src", picture);
        //const vdo = document.querySelector("img_container video")
        //vdo.setAttribute("src", movie);
    }

    let currentMediaIndex = medias.findIndex(element => element.id === media.id)
    console.log(currentMediaIndex);

    const nextBtn = document.querySelector(".next_button")
    const previousBtn = document.querySelector(".previous_button")
    nextBtn.addEventListener("click", () => {
        let nextIndex = currentMediaIndex + 1;
        let nextPicture = medias[nextIndex];
        if (!nextPicture) {

            return;
        }

        currentMediaIndex = nextIndex;

        const prenom = nameExtract(name);
        const picture = `assets/images/${prenom}/${nextPicture.image}`

        const img = document.querySelector(".img_container img")
        img.setAttribute("src", picture);
    })

    previousBtn.addEventListener("click", () => {
        const previousIndex = currentMediaIndex - 1;
        let previousPicture = medias[previousIndex];
        if (!previousPicture) {

            return;
        }

        currentMediaIndex = previousIndex;

        const prenom = nameExtract(name);
        const picture = `assets/images/${prenom}/${previousPicture.image}`

        const img = document.querySelector(".img_container img")
        img.setAttribute("src", picture);
    })


}

export default displayLightbox