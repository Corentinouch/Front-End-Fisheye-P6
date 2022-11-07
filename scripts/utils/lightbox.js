import nameExtract from "../helpers/nameExtract.js";

function triggerLightbox(media, photographer, medias) {
    const hasLightbox = document.querySelector(".lightbox");

    if(hasLightbox) {
        closeLightbox()
    }

    displayLightbox();

    let currentMediaIndex = medias.findIndex(element => element.id === media.id)

    setImgOrVideo(medias, currentMediaIndex, photographer.name);

    const nextBtn = document.querySelector(".next_button")
    const previousBtn = document.querySelector(".previous_button")
    nextBtn.addEventListener("click", () => {
        const nextIndex = currentMediaIndex + 1;
        let nextPicture = medias[nextIndex];
        if (!nextPicture) {
            console.log(nextPicture, "expect undefined")
            nextPicture = medias[0]
            console.log(nextPicture, 'expect picture 0')
            return nextPicture;
        }

        currentMediaIndex = nextIndex;

        setImgOrVideo(medias, currentMediaIndex, photographer.name);
    })

    previousBtn.addEventListener("click", () => {
        const previousIndex = currentMediaIndex - 1;
        let previousPicture = medias[previousIndex];
        if (!previousPicture) {
            console.log(previousPicture, "expect undefined")
            previousPicture = medias[0]
            console.log(previousPicture, 'expect picture 0')
            return previousPicture;
        }

        currentMediaIndex = previousIndex;

        setImgOrVideo(medias, currentMediaIndex, photographer.name);
    })
}

function closeLightbox() {
    const lightbox = document.querySelector(".lightbox");
    lightbox.remove();
}

function displayLightbox() {
        const modal = document.createElement("div");
        modal.classList.add("lightbox");

        const previous = document.createElement("div");
        previous.setAttribute("class","previous")
        const next = document.createElement("div");
        next.setAttribute("class","next")
        const main = document.createElement("div");
        const text_title = document.createElement("p");
        text_title.classList.add("title")

        const closeBtn = document.createElement("button");
        const previousBtn = document.createElement("button");
        const nextBtn = document.createElement("button");

        nextBtn.innerHTML = `<i class="fa-solid fa-chevron-left"></i>`
        nextBtn.classList.add("next_button");
        previousBtn.classList.add("previous_button")
        previousBtn.innerHTML = `<i class="fa-solid fa-chevron-left"></i>`

        

        closeBtn.classList.add("close_modal");
        closeBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        closeBtn.addEventListener("click", closeLightbox)

        main.classList.add("img_container");
        previous.appendChild(previousBtn);
        next.appendChild(nextBtn);
        modal.appendChild(closeBtn);
        modal.appendChild(previous);
        modal.appendChild(main);
        modal.appendChild(next);
        modal.appendChild(text_title)
        document.body.appendChild(modal);
}

function setImgOrVideo(medias, currIndex, name) {

    const main = document.querySelector('.img_container')
    main.innerHTML = '';

    const prenom = nameExtract(name);
    
    const currMedia = medias[currIndex];

    if (currMedia.image) {
        const picture = `assets/images/${prenom}/${currMedia.image}`
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        main.appendChild(img).setAttribute("alt", `${name} pictures`);
    } else if (currMedia.video) {
        const movie = `assets/images/${prenom}/${currMedia.video}`
        const vdo = document.createElement("video");
        vdo.setAttribute("src", movie)
        vdo.controls = true;
        main.appendChild(vdo).setAttribute("alt", `${name} video`);
    }
    const text_title = document.querySelector('.title')
    text_title.innerHTML = `${currMedia.title}`
}

export default triggerLightbox