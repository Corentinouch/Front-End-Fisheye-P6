function displayLightbox() {

    const lightbox = document.querySelector(".lightbox");
    let prenom = name.split(" ")[0];
        prenom = prenom.replace("-", " ")
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
        const picture = `assets/images/Marcel/Architecture_Corner_Room.jpg`;
        img.setAttribute("src", picture);

        closeBtn.classList.add("close_modal");
        closeBtn.textContent = "close"
        
        previous.appendChild(previousBtn);
        main.appendChild(img);
        main.classList.add("img_container");
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
        modal.style.display = "flex";
    }
}