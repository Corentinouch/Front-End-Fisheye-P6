/**
 *Affichage de la modale contact
 */
function displayModal() {
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'block';

  // add all the elements inside modal which you want to make focusable
  const focusableElements =
    'button, img, input, textarea, [tabindex]:not([tabindex="-1"])';
  const firstFocusableElement = modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
  const focusableContent = modal.querySelectorAll(focusableElements);
  const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal


  document.addEventListener('keydown', function (e) {
    let isTabPressed = e.key === 'Tab';

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) { // if shift key pressed for shift + tab combination
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus(); // add focus for the last focusable element
        e.preventDefault();
      }
    } else { // if tab key is pressed
      if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
        firstFocusableElement.focus(); // add focus for the first focusable element
        e.preventDefault();
      }
    }
  });

  firstFocusableElement.focus();

}
const contactButton = document.getElementById('contactButton');
contactButton.addEventListener('click', (event) => {
  displayModal();

});

/**
 *Fermeture de la modale contact
 */
function closeModal() {
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'none';
  //modal.setAttribute('aria-hidden', 'true')
}

const close = document.getElementById('modal_cross');
close.addEventListener('keydown', function (event) {
  if (event.code == 'Enter') {
    closeModal();
  }
});

/**
 *Envois de la modale contact
 * @param {*} event
 */
function sendModal(event) {
  const prenom = document.getElementById('prenom');
  const errorprenom = document.getElementById('errorprenom')

  const nom = document.getElementById('nom');
  const errornom = document.getElementById('errornom')

  const mail = document.getElementById('mail');
  const errormail = document.getElementById('errormail')

  const text = document.getElementById('texte');
  const errormsg = document.getElementById('errormsg')

  prenom.value ? errorprenom.innerHTML = "" : errorprenom.innerHTML = "Le champs prénom est vide"
  nom.value ? errornom.innerHTML = "" : errornom.innerHTML = "Le champs nom est vide"
  mail.value ? errormail.innerHTML = "" : errormail.innerHTML = "Le champs email est vide"
  text.value ? errormsg.innerHTML = "" : errormsg.innerHTML = "Le champs texte est vide"

  event.preventDefault();
}
const sendM = document.getElementById('sendModal');
sendM.addEventListener('click', (event) => {
  sendModal(event);
});
