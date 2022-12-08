/**
 *Extraction du prénom du Nom complet du photographe
 * @param {*} name
 * @return {prenom} Nom complet - le Nom
 */
function nameExtract(name) {
  let prenom = name.split(' ')[0];
  prenom = prenom.replace('-', ' ');
  return prenom;
}

export default nameExtract;
