
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
    document.querySelector('.nav-item')[1].setAttribute('href', './public/contact.html');
    document.querySelector('.nav-item')[2].setAttribute('href', './public/projects.html');
}

// document.querySelector("#navbar-placeholder").classList.add("border", 'rounded-4', 'border-primary-subtle', 'bg-gradient', 'container');

$('#navbar-placeholder').addClass("border rounded-4 border-primary-subtle container bg-gradient");

$('main').addClass('pt-md-5 d-flex flex-wrap gap-3');