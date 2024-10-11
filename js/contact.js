function send_mail(){
    let parametres = {
        nom_prenom: document.getElementById("nom_prenom").value,
        mail: document.getElementById("mail").value,
        message: document.getElementById("message").value
    };
    console.log(parametres);

    emailjs.send("service_82grttd", "template_b9hegeg", parametres).then(function() {
        alert("Votre message a bien été envoyé !");
    }).catch(function(error) {
        console.error("Échec de l'envoi : ", error);
        alert("Échec de l'envoi, veuillez réessayer.");
    });    
}
