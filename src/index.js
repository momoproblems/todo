import '../node_modules/minireset.css/minireset.min.css';
import '../static/style.scss';

const toggleButton = document.getElementById('navbarToggle');
const navBarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', function () {
	return navBarLinks.classList.toggle('active');
});

const taskForm = document.getElementById('taskForm');
const taskTitle = document.getElementById('task');
const taskDate = document.getElementById('dueDate');
const taskDesc = document.getElementById('description');
const taskPriority = document.getElementsByName('priority');

taskForm.addEventListener('submit', function (e) {
	console.log('form submitted');
	console.log(taskTitle.value);
	console.log(taskDate.value);
	console.log(taskDesc.value);
	console.log(taskPriority[0]);

	e.preventDefault();
	// handle error
	let message = [];
	if (taskTitle.value === '') {
		message.push('Task title is required');
	}
	if (taskDate.value === '') {
		message.push('Task due date is required');
	}
	if (taskDesc.value === '') {
		message.push('Task description is required');
	}
	if (taskPriority.value === '') {
		message.push('Task priority is required');
	}
	if (message.length > 0) {
		alert(message.join(', '));
		return;
	}
	// handle success

	const task = {
		title: taskTitle.value,
		date: taskDate.value,
		desc: taskDesc.value,
		priority: taskPriority.value,
	};
	console.log(task);
});

// ! danger zone
// ? question
// * important
// todo to do
