"use strict"

// Variabler
let projectsEl = document.getElementById('projects');

// Händelsehanterare
window.addEventListener('load', getProjects);           // Kör igång funktionen vid laddning av sida

// Funktion för att hämta och skriva ut objekt
function getProjects() {
    projectsEl.innerHTML = '';                          // Nollställ elementet
    fetch('http://www.raggmunkar.se/portfolio/rest/myprojects.php')  // Hämta data från adress
        .then(response => response.json())
        .then(data => {
            data.forEach(object => {                   // Loopa igenom objekten och skriv ut
                projectsEl.innerHTML +=
                    `
                    <a href="${object.project_url}">
                <li class="project-list">
                <img src="/images/${object.project_img}" class="project_img" alt="">
                <h2 class="project-text">${object.project_name}</h2>
                    <p>${object.project_d}</p>
                </li></a>
                `
            })
        })
}