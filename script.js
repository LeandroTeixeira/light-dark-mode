//const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleSwitch = document.getElementById('switch');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

function imageMode(color){
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

//Dark Mode Styles
function darkMode(){
    nav.style.backgroundColor = 'rg (0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb (255 255 255 / 50%)';
    toggleIcon.children[0].textContent = "Dark Mode";
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    imageMode("dark");
}

function lightMode(){
    nav.style.backgroundColor = 'rg (255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb (0 0 0 / 50%)';
    toggleIcon.children[0].textContent = "Light Mode";
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    imageMode("light");
}

//Switch Theme Dynamically
function switchTheme (event){
    if(event.target.checked){
        darkMode();
        document.documentElement.setAttribute('data-theme','dark');
    } else{
        lightMode();
        document.documentElement.setAttribute('data-theme','ligbt');
    }
}

//Event Listener
toggleSwitch.addEventListener('change',switchTheme);