
// Variabler
let coursesEl = document.getElementById('courses');

// Händelsehanterare
window.addEventListener('load', getCourses);            // Kör igång funktionen vid laddning av sida


// Funktion för att hämta och skriva ut objekt
function getCourses() {
    coursesEl.innerHTML = '';                           // Nollställ elementet
    fetch('http://www.raggmunkar.se/portfolio/rest/courses.php')     // Hämta data från adress
        .then(response => response.json())
        .then(data => {
            data.forEach(object => {                    // Loopa igenom objekten och skriv ut
                coursesEl.innerHTML +=
                    `
                    <section class="courses-left">
                    <ul><li>
                    ${object.course_date} - 
                    ${object.course_name}
                    </li></ul>
                    </section>
                `
            })
        })
}