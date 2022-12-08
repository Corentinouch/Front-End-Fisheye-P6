import nameExtract from '../helpers/nameExtract.js';

/**
 * @param {*} data
 * @param {*} photographer
 * @return {*} id, photographerId, title, image, likes, date, price, getMedia
 */
function mediaFactory(data, photographer) {
  const { id, photographerId, title, image, video, likes, date } = data;
  const { name, price } = photographer;

  /**
 * Création de l'article du média photo ou vidéo + titre + like
 * @return {HTMLElement} article
 */
  function getMedia() {
    const modalTitle = document.querySelector('.modal_title');
    modalTitle.innerHTML = `Contactez-moi ${name}`;

    const article = document.createElement('article');
    const div = document.createElement('div');
    const prenom = nameExtract(name);


    div.setAttribute('class', 'img-container');
    div.setAttribute('tabindex', 0);
    article.appendChild(div);

    if (data.image) {
      const picture = `assets/images/${prenom}/${image}`;
      const img = document.createElement('img');
      img.setAttribute('src', picture);
      div.appendChild(img).setAttribute('alt', `${name} ${image} pictures`);
    } else if (data.video) {
      const movie = `assets/images/${prenom}/${video}`;
      const vdo = document.createElement('video');
      vdo.setAttribute('src', movie);
      div.appendChild(vdo).setAttribute('title', `${name} ${video}`);
    }
    const text = document.createElement('p');
    const like = document.createElement('p');
    const divtext = document.createElement('div');


    divtext.appendChild(text);
    divtext.appendChild(like);
    divtext.setAttribute('class', 'text-container');
    article.appendChild(divtext);
    like.setAttribute('class', 'like_button');

    text.innerHTML = `${title}`;
    text.setAttribute('class', 'photo_title');

    like.innerHTML = `${likes}` +
      '&nbsp' +
      '<i class="fa-regular fa-heart" tabindex="0"></i>';
/**
 * Like et displike d'un media
 */
    function likePost() {
      const icon = like.querySelector('i');
      const global = document.querySelector('.global_like');
      const globaltext = parseInt(global.textContent.split(' ')[0]);
      if (icon.classList.contains('fa-regular')) {
        like.innerHTML = `${likes + 1}` +
          '&nbsp' +
          '<i class="fa-solid fa-heart" tabindex="0"></i>';
        global.innerHTML = `${globaltext + 1} ❤️`;
      } else {
        like.innerHTML = `${likes}` +
          '&nbsp' +
          '<i class="fa-regular fa-heart" tabindex="0"></i>';
        global.innerHTML = `${globaltext - 1} ❤️`;
      }
    }
    like.addEventListener('click', (e) => {
      likePost()
    });

    like.addEventListener('keydown', function (event) {
      if (event.code == 'Enter') {
        likePost()
      }
    });
    return (article);
  }

  return { id, photographerId, title, image, likes, date, price, getMedia };
}

export default mediaFactory;
