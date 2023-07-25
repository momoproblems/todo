import '../node_modules/minireset.css/minireset.min.css';
import '../static/style.scss';

const toggleButton = document.getElementById('navbarToggle');
const navBarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', function () {
	return navBarLinks.classList.toggle('active');
});

// ! danger zone
// ? question
// * important
// todo to do
