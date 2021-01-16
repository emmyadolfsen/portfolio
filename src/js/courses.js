
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
                    <ul>
                    <a href="${object.syllabus}"><li>
                    ${object.course_name} - 
                    ${object.course_date}
                    </ul>
                    </section>
                `
            })
        })
}

function addAnimateClassHTML() {

    $('.html').addClass("animate__flip");

  }

function addAnimateClassCSS() {
    $('.css').addClass("animate__flip");

  }
function addAnimateClassJavascript() {
    $('.javascript').addClass("animate__flip");

  }
function addAnimateClassPHP() {
    $('.php').addClass("animate__flip");

  }
function addAnimateClassC() {
    $('.c').addClass("animate__flip");

  }
function addAnimateClassWordpress() {
    $('.wordpress').addClass("animate__flip");

  }

