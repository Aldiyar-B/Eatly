document.addEventListener('DOMContentLoaded', function () {
	var modal = document.getElementById('modalSignUp');
	var signUpButton = document.getElementById('sign-up');
	var closeButton = document.querySelector('.close-modal'); // Adjust the class here to match your actual close button

	function showModal() {
		modal.classList.remove('hidden');
		document.querySelector('.modal-background').style.display = 'block';
	}

	function hideModal() {
		modal.classList.add('hidden');
		document.querySelector('.modal-background').style.display = 'none';
	}

	signUpButton.addEventListener('click', showModal);
	closeButton.addEventListener('click', hideModal);
});
