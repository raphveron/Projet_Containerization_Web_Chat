document.getElementById('loginForm').addEventListener('submit', function(event) {
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    if (email.value.trim() === '' || password.value.trim() === '') {
        event.preventDefault();
        alert('Please fullfile all the necessaries');
    }
    // Vous pouvez ajouter plus de validations ici si nécessaire
});
