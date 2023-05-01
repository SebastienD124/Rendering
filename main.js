const homeLink = document.getElementById('homeLink');
const aboutLink = document.getElementById('aboutLink');
const jokeLink = document.getElementById('jokeLink');
 
const home = document.getElementById('home');
const about = document.getElementById('about');
const joke = document.getElementById('joke');
 
function hideAll() {
    home.classList.add('d-none');
    about.classList.add('d-none');
    joke.classList.add('d-none');
}
 
function showElement(element) {
    hideAll();
    element.classList.remove('d-none');
}
 
homeLink.addEventListener('click', () => showElement(home));
aboutLink.addEventListener('click', () => showElement(about));
jokeLink.addEventListener('click', () => showElement(joke));