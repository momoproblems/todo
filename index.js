const toggleButton = document.getElementById('navbarToggle');
const navBarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', function () {
	return navBarLinks.classList.toggle('active');
});
