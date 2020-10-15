"use strict"

// Variabler
let workEl = document.getElementById('work');

// Händelsehanterare
window.addEventListener('load', getWork);           // Kör igång funktionen vid laddning av sida
submitwork.addEventListener('click', addWork);      // Kör igång funktionen vid klick

// Funktion för att hämta och skriva ut objekt
function getWork() {
    workEl.innerHTML = '';                          // Nollställ elementet
    fetch('http://www.raggmunkar.se/portfolio/rest/work.php')    // Hämta data från adress
        .then(response => response.json())
        .then(data => {
            data.forEach(object => {                  // Loopa igenom objekten och skriv ut
                workEl.innerHTML +=
                    `
                    <li>
                    <b>${object.work_title}</b> at <b>${object.work_name}</b>,  ${object.work_place} - ${object.work_date}
                    </li>

                `
            })
        })
}