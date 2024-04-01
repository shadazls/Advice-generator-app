$(document).ready(function() {
    // Fonction pour récupérer une citation aléatoire depuis l'API
    function fetchRandomAdvice() {
        id = Math.floor(Math.random() * 224);

        $.ajax({
            url: `https://api.adviceslip.com/advice/${id}`,
            method: 'GET',
            success: function(response) {
                var advice = JSON.parse(response);
                var adviceNumber = advice.slip.id;
                var adviceText = advice.slip.advice;
                $('#advice-id').text('Advice #' + adviceNumber); // Met à jour l'ID de la citation
                $('#advice-text').text(adviceText); // Met à jour le texte de la citation
            },
            error: function(error) {
                console.log('Une erreur est survenue : ', error);
            }
        });
    }
  
    // Appeler fetchRandomAdvice() lors du clic sur le bouton
    $('#get-advice').click(function() {
        fetchRandomAdvice();
    });

  });
  