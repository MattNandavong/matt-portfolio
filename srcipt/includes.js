
// include.js
const pageTitle = document.querySelector('title');

document.addEventListener("DOMContentLoaded", () => {
  // Load the navbar
  fetch("../public/components/navbar.inc")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;
    })
    .catch(error => console.error("Error loading navbar:", error));
});

if (pageTitle == 'Matt Portfolio'){
    document.querySelector('.nav-item')[0].setAttribute('href', './public/about.html');
}