/**
 *
 * @param {*} data
 * @param {*} medias
 * @return {*} all data
 */
function photographerFactory(data, medias) {
  const {name, portrait, city, country, tagline, price, id} = data;

  const picture = `assets/photographers/${portrait}`;

  // Photo utilisée sur l'index et la page photographe
  const img = document.createElement('img');
  img.setAttribute('src', picture);

  // Nom sur index et photographe
  const h1 = document.createElement('h1');
  h1.textContent = `${name}`;

  // Autre data utilisé sur index et photographe
  const otherData = document.createElement('p');

  /**
 * Création de l'article de la carte photographe sur index
 * @return {HTMLElement} article
 */
  function getUserCardDOM() {
    const article = document.createElement('article');
    const link = document.createElement('a');
    const div = document.createElement('div');

    otherData.innerHTML = `<span class="city">${city}, ${country}</span>
    <br><span class="tagline">${tagline}</span>
    <br><span class="price">${price}€/jour</span>`;
    div.appendChild(img).setAttribute('alt', `${name} pictures`);
    link.appendChild(div);
    link.appendChild(h1).setAttribute('aria-label', `${name}`);
    article.appendChild(link)
        .setAttribute('href', `photographer.html?id=${id}`);
    article.appendChild(otherData);

    return (article);
  }
  /**
 * Création du header sur la page du photographe
 * @return {HTMLElement} article
 */
  function getHeader() {
    const article = document.createElement('article');
    const div = document.createElement('div');
    const town = document.createElement('p');

    town.innerHTML = `${city},${country}`;
    otherData.innerHTML = `${tagline}`;
    town.classList.add('town');
    div.appendChild(img).setAttribute('alt', `${name} pictures`);
    article.appendChild(h1);
    article.appendChild(town).setAttribute('aria-label', `${city}, ${country}`);
    article.appendChild(otherData).setAttribute('aria-label', `${tagline}`);
    article.appendChild(div);
    article.classList.add('header-text');

    return (article);
  }
  /**
 * Création de la photo sur la page photographe
 * @return {HTMLElement} article
 */
  function getPhotoHeader() {
    const article = document.createElement('article');
    article.appendChild(img);
    article.classList.add('header-photo');

    return (article);
  }

  /**
 * Créatio du footer de la page photographe infos globale
 * @return {HTMLElement} div
 */
  function getGlobal() {
    let likes = 0;
    medias.forEach((media) => {
      likes += media.likes;
    });
    const div = document.createElement('div');
    const pricetext = document.createElement('p');
    const liketext = document.createElement('p');

    liketext.setAttribute('class', 'global_like');
    div.classList.add('info_container');

    liketext.innerHTML = `${likes} ❤️`;
    pricetext.innerHTML = `${price}€ / jour`;
    div.appendChild(liketext);
    div.appendChild(pricetext);
    return (div);
  }

  /**
 * Création du tri des medias sur la page photographe
 * @return {HTMLElement} div
 */
  function sortingMedia() {
    const div = document.createElement('div');
    const divContainer = document.createElement('div');
    const textSort = document.createElement('p');
    const divSort = document.createElement('select');
    const dateSort = document.createElement('option');
    const popSort = document.createElement('option');
    const abcSort = document.createElement('option');

    div.classList.add('sort_container');
    divContainer.classList.add('sorting');
    textSort.textContent = 'Trier par';
    dateSort.setAttribute('value', 'Date');
    dateSort.setAttribute('tabindex', 0);
    dateSort.textContent = 'Date';
    popSort.setAttribute('value', 'Popularité');
    popSort.setAttribute('tabindex', 0);
    popSort.textContent = 'Popularité';
    abcSort.setAttribute('value', 'Titre');
    abcSort.setAttribute('tabindex', 0);
    abcSort.textContent = 'Titre';
    divSort.appendChild(dateSort);
    divSort.appendChild(popSort);
    divSort.appendChild(abcSort);
    divSort.setAttribute('name', 'sorting');
    divSort.setAttribute('id', 'sorting');

    divContainer.appendChild(textSort);
    divContainer.appendChild(divSort);
    div.appendChild(divContainer);
    return (div);
  }

  return {
    name, picture, city, country, tagline, price, id,
    getUserCardDOM, getHeader, getPhotoHeader, getGlobal, sortingMedia,
  };
}

export default photographerFactory;
