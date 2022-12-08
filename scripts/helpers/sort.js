/**
 *Tri par Date
 * @param {*} medias
 * @return {medias} Liste des medias
 */
export function sortByDate(medias) {
  medias = medias.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    if (dateA < dateB) {
      return -1;
    } if (dateA > dateB) {
      return 1;
    }
    return 0;
  });
  return medias;
}

/**
 *Tri par Popularité
 * @param {*} medias
 * @return {medias} Liste des medias
 */
export function sortByPopularity(medias) {
  medias.sort((a, b) => b.likes - a.likes);
  return medias;
}

/**
 * Tri par ordre alphabetique
 * @param {*} medias
 * @return {medias} Liste des medias
 */
export function sortByName(medias) {
  medias.sort((a, b) => {
    const nameA = a.title.toLowerCase();
    const nameB = b.title.toLowerCase();
    if (nameA < nameB) {
      return -1;
    } if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return medias;
}
