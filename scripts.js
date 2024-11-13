// Funktion zum Öffnen und Schließen des Kontaktformulars
function toggleContactForm() {
  const form = document.getElementById('contactForm');
  form.style.display = form.style.display === 'flex' ? 'none' : 'flex';
}

// Funktionen zum Öffnen und Schließen des Buchungs-Popups
function openBookingPopup() {
  document.getElementById('bookingPopup').style.display = 'flex';
}

function closeBookingPopup() {
  document.getElementById('bookingPopup').style.display = 'none';
}

// Schließen der Pop-ups durch Klicken außerhalb des Inhalts
window.onclick = function(event) {
  const contactForm = document.getElementById('contactForm');
  const bookingPopup = document.getElementById('bookingPopup');
  
  if (event.target == contactForm) {
    contactForm.style.display = "none";
  }
  if (event.target == bookingPopup) {
    bookingPopup.style.display = "none";
  }
}
