function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    //Photo utilisée sur l'index et la page photographe
    const img = document.createElement('img');
    img.setAttribute("src", picture);

    //Nom sur index et photographe
    const h2 = document.createElement('h2');
    h2.textContent = `${name}`;

    //Autre data utilisé sur index et photographe
    const otherData = document.createElement('p');


    function getUserCardDOM() {
        const article = document.createElement('article');
        const link = document.createElement('a');
        const div = document.createElement('div');

        otherData.innerHTML = `<span class="city">${city}, ${country}</span><br><span class="tagline">${tagline}</span><br><span class="price">${price}€/jour</span>`;
        div.appendChild(img).setAttribute("alt", `${name} pictures`);
        link.appendChild(div)
        link.appendChild(h2).setAttribute('aria-label', `${name}`);
        article.appendChild(link).setAttribute("href", `photographer.html?id=${id}`);
        article.appendChild(otherData).setAttribute('aria-describedby', `${city}, ${country} ${tagline} ${price}€ par jour`);

        return (article);
    }

    function getHeader() {
        const article = document.createElement('article');
        const div = document.createElement('div');
        const town = document.createElement('p')

        town.innerHTML = `${city},${country}`;
        otherData.innerHTML = `${tagline}`;
        town.classList.add("town");
        div.appendChild(img);
        article.appendChild(h2);
        article.appendChild(town).setAttribute('aria-describedby', `${tagline}`);
        article.appendChild(otherData).setAttribute('aria-describedby', `${city}, ${country}`);   
        article.appendChild(div)
        article.classList.add("header-text")

        return (article)
    }
    function getPhotoHeader(){
        const article = document.createElement('article');
        article.appendChild(img)
        article.classList.add("header-photo")

        return (article)
    }
    return { name, picture, city, country, tagline, price, id, getUserCardDOM, getHeader, getPhotoHeader }
}