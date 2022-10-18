function mediaFactory(data, photographer) {
    const { id, photographerId, title, image, video, likes, date } = data;
    const { name, price } = photographer;

    function getMedia() {
        const modal_title = document.querySelector(".modal_title");
        modal_title.innerHTML = `Contactez-moi ${name}`

        const article = document.createElement('article');
        const div = document.createElement('div');
        const divtext = document.createElement('div');
        const text = document.createElement('p');
        const like = document.createElement('p');

        let prenom = name.split(" ")[0];
        prenom = prenom.replace("-", " ")
        console.log(prenom)

        text.innerHTML = `${title}`;
        text.setAttribute("class", "photo_title")
        like.innerHTML = `${likes} ❤️`;

        div.setAttribute("class", 'img-container');
        divtext.appendChild(text);
        divtext.appendChild(like);
        divtext.setAttribute("class", 'text-container')
        article.appendChild(divtext);
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
            //vdo.controls = true;

            div.appendChild(vdo).setAttribute("alt", `${name} video`);
        }

        return (article);
    }

    return { id, photographerId, title, image, likes, date, price, getMedia }
}