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
  console.log(medias);
  return medias;
}
export function sortByPopularity(medias) {
  medias.sort((a, b) => b.likes - a.likes);
  console.log(medias);
  return medias;
}
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
  console.log(medias);
  return medias;
}
