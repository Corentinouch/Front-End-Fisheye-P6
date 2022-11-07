function photographerFactory(data, medias) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`

    //Photo utilisée sur l'index et la page photographe
    const img = document.createElement('img')
    img.setAttribute("src", picture)

    //Nom sur index et photographe
    const h2 = document.createElement('h2')
    h2.textContent = `${name}`

    //Autre data utilisé sur index et photographe
    const otherData = document.createElement('p')

    function getUserCardDOM() {
        const article = document.createElement('article')
        const link = document.createElement('a')
        const div = document.createElement('div')

        otherData.innerHTML = `<span class="city">${city}, ${country}</span><br><span class="tagline">${tagline}</span><br><span class="price">${price}€/jour</span>`
        div.appendChild(img).setAttribute("alt", `${name} pictures`)
        link.appendChild(div)
        link.appendChild(h2).setAttribute('aria-label', `${name}`)
        article.appendChild(link).setAttribute("href", `photographer.html?id=${id}`)
        article.appendChild(otherData).setAttribute('aria-describedby', `${city}, ${country} ${tagline} ${price}€ par jour`)

        return (article);
    }

    function getHeader() {
        const article = document.createElement('article')
        const div = document.createElement('div')
        const town = document.createElement('p')

        town.innerHTML = `${city},${country}`
        otherData.innerHTML = `${tagline}`
        town.classList.add("town")
        div.appendChild(img)
        article.appendChild(h2)
        article.appendChild(town).setAttribute('aria-describedby', `${tagline}`)
        article.appendChild(otherData).setAttribute('aria-describedby', `${city}, ${country}`)
        article.appendChild(div)
        article.classList.add("header-text")

        return (article)
    }
    function getPhotoHeader() {
        const article = document.createElement('article')
        article.appendChild(img)
        article.classList.add("header-photo")

        return (article)
    }

    function getGlobal() {
        let likes = 0
        medias.forEach((media) => {
            likes += media.likes
        })
        const div = document.createElement('div')
        const pricetext = document.createElement('p')
        const liketext = document.createElement('p')
        liketext.setAttribute("class", "global_like")
        div.classList.add("info_container")
        liketext.innerHTML = `${likes} ❤️`
        pricetext.innerHTML = `${price}€ / jour`
        div.appendChild(liketext)
        div.appendChild(pricetext)

        console.log(liketext)
        return (div);
    }

    function sortingMedia() {
        const div = document.createElement('div')
        const text_sort = document.createElement('p')
        const div_sort = document.createElement('select')
        const date_sort = document.createElement('option')
        const pop_sort = document.createElement('option')
        const abc_sort = document.createElement('option')
        const default_sort = document.createElement('option')

        div.classList.add('sort_container')
        text_sort.textContent = "Trier par"
        default_sort.setAttribute("value", "Default")
        default_sort.textContent = "Default"
        date_sort.setAttribute("value", "Date")
        date_sort.textContent = "Date"
        pop_sort.setAttribute("value", "Popularité")
        pop_sort.textContent = "Popularité"
        abc_sort.setAttribute("value", "Titre")
        abc_sort.textContent = "Titre"
        div_sort.appendChild(default_sort)
        div_sort.appendChild(date_sort)
        div_sort.appendChild(pop_sort)
        div_sort.appendChild(abc_sort)
        div_sort.setAttribute("name", "sorting")
        div_sort.setAttribute("id", "sorting")

        div.appendChild(text_sort)
        div.appendChild(div_sort)
        console.log(medias, "test")

       /* div_sort.addEventListener("change", e => {
            console.log(div_sort.value)
            if (div_sort.value === "Date") {
                sortByDate();
            } else if (div_sort.value === "Popularité") {
                sortByPopularity()
            } else if (div_sort.value === "Titre") {
                sortByName()
            }
            return
        })*/

        return (div)
    }



    return { name, picture, city, country, tagline, price, id, getUserCardDOM, getHeader, getPhotoHeader, getGlobal, sortingMedia }
}

export default photographerFactory