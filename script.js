// Select Elements
const toggleSwitch = document.getElementById('checkbox');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark or Light Images
function imageMode(color) {
	image1.src = `img/undraw_proud_coder_${color}.svg`;
	image2.src = `img/undraw_feeling_proud_${color}.svg`;
	image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function toggleDarkLightMode(isDark) {
	isDark
		? document.documentElement.setAttribute('data-theme', 'dark')
		: document.documentElement.setAttribute('data-theme', 'light');
	nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(0 0 0 / 50%)';
	textBox.style.backgroundColor = isDark
		? 'rgb(255 255 255 / 50%)'
		: 'rgb(255 255 255 / 50%)';
	toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'lightMode';
	isDark
		? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
		: toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
	isDark ? imageMode('dark') : imageMode('light');
	isDark
		? localStorage.setItem('theme', 'dark')
		: localStorage.setItem('theme', 'light');
}

// Switch Theme Dynamically
function switchTheme(event) {
	if (event.target.checked) {
		toggleDarkLightMode(true);
	} else {
		toggleDarkLightMode(false);
	}
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
	if (currentTheme === 'dark') {
		toggleSwitch.checked = true;
		toggleDarkLightMode(true);
	}
}