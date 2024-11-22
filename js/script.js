/// JavaScript básico para mostrar un mensaje
/*document.addEventListener("DOMContentLoaded", () => {
    const servicios = document.querySelectorAll(".servicio");
    
    servicios.forEach(servicio => {
        servicio.addEventListener("click", () => {
            alert("¡Gracias por ser parte de nuestra Familia!");
        });
    });
});
window.onscroll = function() {
    var video = document.getElementById("videoPlayer");
    if (window.scrollY > 200) {  
        video.play();
    }
};
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    
    if (name === "" || email === "" || message === "") {
        showResponseMessage("Por favor, completa todos los campos.", "error");
        return;
    }

   
    setTimeout(() => {
        showResponseMessage("¡Datos enviados con éxito!", "success");
        document.getElementById("contact-form").reset();  
    }, 1000);
});

function showResponseMessage(message, type) {
    const responseMessage = document.getElementById("response-message");
    responseMessage.textContent = message;
    responseMessage.style.color = type === "success" ? "blue" : "purple";
}*/