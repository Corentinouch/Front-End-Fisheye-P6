function mediaFactory(data, photographer) {
    const { id, photographerId, title, image, video, likes, date, price } = data;
    const { name } = photographer;

    function getMedia() {
        const article = document.createElement('article');
        const div = document.createElement('div');
        const text = document.createElement('p');
        const like = document.createElement('p');

        let prenom = name.split(" ")[0];
        prenom = prenom.replace("-", " ")
        console.log(prenom)

        text.innerHTML = `${title}`;
        like.innerHTML = `${likes}`;

        if (data.image) {
            const picture = `assets/images/${prenom}/${image}`;
            const img = document.createElement('img');

            img.setAttribute("src", picture);

            div.appendChild(img).setAttribute("alt", `${name} pictures`);
            article.appendChild(text);
            article.appendChild(like);
            article.appendChild(div);

        } else if (data.video) {
            const movie = `assets/images/${prenom}/${video}`;
            const vdo = document.createElement("video");

            vdo.setAttribute("src", movie)
            vdo.controls = true;

            div.appendChild(vdo).setAttribute("alt", `${name} video`);
            article.appendChild(text);
            article.appendChild(like);
            article.appendChild(div);
        }
        return (article);
    }

    return { id, photographerId, title, image, likes, date, price, getMedia }
}