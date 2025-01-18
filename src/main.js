import './style.css';
import emailjs from '@emailjs/browser'

const {VITE_EMAILJS_SECRET, VITE_EMAILJS_SERVICEID, VITE_EMAILJS_TEMPLATEID} = import.meta.env

document.addEventListener('DOMContentLoaded', function() {
  emailjs.init(VITE_EMAILJS_SECRET);
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ces valeurs doivent correspondre à votre modèle EmailJS
    emailjs.sendForm(VITE_EMAILJS_SERVICEID, VITE_EMAILJS_TEMPLATEID, this)
      .then(function() {
        alert('Message envoyé avec succès !');
      }, function(error) {
        alert('Échec de l\'envoi du message : ' + JSON.stringify(error));
      });
  });
});

// carousel des projets
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

function updateCarousel(index) {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel(currentIndex);
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel(currentIndex);
});
