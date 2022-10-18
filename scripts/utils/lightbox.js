function displayLightbox(data, photographer) {
    const { id, photographerId, title, image, video, likes, date } = data;
    //const { name, price } = photographer;

    const lightbox = document.querySelector(".lightbox");
    if (!lightbox) {

        const modal = document.createElement("div");
        modal.classList.add("lightbox");

        const previous = document.createElement("div");
        const next = document.createElement("div");
        const main = document.createElement("div");
        const closeBtn = document.createElement("button");
        const previousBtn = document.createElement("button");
        const nextBtn = document.createElement("button");
        const img = document.createElement("img");
        const picture = `assets/images/Tracy/Fashion_Yellow_Beach.jpg`;
        img.setAttribute("src", picture);

        closeBtn.classList.add("close_modal");
        closeBtn.textContent = "close"
        
        previous.appendChild(previousBtn);
        main.appendChild(img);
        next.appendChild(closeBtn);
        next.appendChild(nextBtn);
        modal.appendChild(previous);
        modal.appendChild(main);
        modal.appendChild(next);

        document.body.appendChild(modal);
        
        closeBtn.addEventListener("click",e =>{
            modal.style.display = "none";
        })

    }else{
        const modal = lightbox;
        modal.style.display = "grid";
    }
}