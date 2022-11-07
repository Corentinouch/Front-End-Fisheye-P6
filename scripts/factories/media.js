import nameExtract from "../helpers/nameExtract.js";

function mediaFactory(data, photographer) {
    const { id, photographerId, title, image, video, likes, date } = data;
    const { name, price } = photographer;

    function getMedia() {
        const modal_title = document.querySelector(".modal_title");
        modal_title.innerHTML = `Contactez-moi ${name}`

        const article = document.createElement('article');
        const div = document.createElement('div');
        const prenom = nameExtract(name);


        div.setAttribute("class", 'img-container');
        article.appendChild(div);

        if (data.image) {
            const picture = `assets/images/${prenom}/${image}`;
            const img = document.createElement('img');
            img.setAttribute("src", picture);
            div.appendChild(img).setAttribute("alt", `${name} pictures`);
        } else if (data.video) {
            const movie = `assets/images/${prenom}/${video}`;
            const vdo = document.createElement("video");
            vdo.setAttribute("src", movie)
            div.appendChild(vdo).setAttribute("alt", `${name} video`);
        }
        return (article);
    }
    function getTitle(){
        const text = document.createElement('p');
        const like = document.createElement('p');
        const divtext = document.createElement('div');
        const article = document.createElement('article');

        divtext.appendChild(text);
        divtext.appendChild(like);
        divtext.setAttribute("class", 'text-container')
        article.appendChild(divtext);
        like.setAttribute("class", "like_button")
        text.innerHTML = `${title}`;
        text.setAttribute("class", "photo_title")

        like.innerHTML = `${likes}` + '&nbsp' + '<i class="fa-regular fa-heart" ></i>'
        like.addEventListener("click", e => {
            const global = document.querySelector('.global_like')
            console.log(global.textContent)
            let globaltext = parseInt(global.textContent.split(" ")[0])
            console.log(globaltext)
            like.innerHTML = `${likes + 1}` + '&nbsp' + '<i class="fa-solid fa-heart"></i>'
            global.innerHTML = `${globaltext + 1} ❤️`
        })
        return (article)
    }
    

    return { id, photographerId, title, image, likes, date, price, getMedia, getTitle }
}

export default mediaFactory