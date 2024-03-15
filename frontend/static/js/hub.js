document.addEventListener('DOMContentLoaded', function() {
    // Gestion de l'envoi de messages
    var messageForm = document.getElementById('messageInputForm');
    if (messageForm) {
        messageForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var messageInput = document.getElementById('messageInput');
            var message = messageInput.value.trim();
            if (message) {
                console.log("Message to send:", message);
                // Ici, vous ajouterez la logique pour envoyer le message au serveur
                messageInput.value = ''; // Réinitialiser l'input après envoi
            }
        });
    }

    // Gestionnaire pour la recherche d'utilisateurs
    var searchForm = document.querySelector('.search-container button');
    var searchInput = document.querySelector('.search-container input[type="text"]');
    var userList = document.getElementById('userList'); // Assurez-vous que cet élément est dans votre HTML

    if (searchForm) {
        searchForm.addEventListener('click', function(e) {
            e.preventDefault();
            var query = searchInput.value.trim();

            if (query) {
                // Effectuez une requête AJAX vers la route de recherche
                fetch('/search?q=' + encodeURIComponent(query))
                    .then(response => response.json())
                    .then(data => {
                        // Videz la liste actuelle
                        userList.innerHTML = '';
                        // Ajoutez les résultats de la recherche à la liste
                        data.users.forEach(function(user) {
                            var userItem = document.createElement('li');
                            userItem.textContent = user.username;
                            // Vous pouvez également ajouter un lien ou un bouton pour interagir avec l'utilisateur
                            userList.appendChild(userItem);
                        });
                    })
                    .catch(function(error) {
                        console.error('Error:', error);
                    });
            }
        });
    }
});
