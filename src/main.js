import './style.css';
import emailjs from 'emailjs-com';

document.addEventListener('DOMContentLoaded', function() {
  emailjs.init("MGi2zJ-zhLiHF0xmk");
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ces valeurs doivent correspondre à votre modèle EmailJS
    emailjs.sendForm('service_6e6jga9', 'template_4v4u3na', this)
      .then(function() {
        alert('Message envoyé avec succès !');
      }, function(error) {
        alert('Échec de l\'envoi du message : ' + JSON.stringify(error));
      });
  });
});
