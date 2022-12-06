function displayModal() {
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'none';
}

const close = document.getElementById('modal_cross');
console.log(close);
close.addEventListener('keydown', function(event) {
  if (event.code == 'Enter') {
    closeModal();
  }
});

function sendModal(event) {
  const prenom = document.getElementById('prenom');
  const nom = document.getElementById('nom');
  const mail = document.getElementById('mail');
  const text = document.getElementById('texte');
    prenom.value ? console.log(prenom.value) : console.log('erreur prénom');
    nom.value ? console.log(nom.value) : console.log('erreur nom');
    mail.value ? console.log(mail.value) : console.log('erreur mail');
    text.value ? console.log(text.value) : console.log('erreur texte');

    event.preventDefault();
}
