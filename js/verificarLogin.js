const usuarios = [
    { usuario: 'Edson', contraseña: '1234'},
    { usuario: 'Maria', contraseña: '4567'},
    { usuario: 'Miguel', contraseña: '8910'},
];
function iniciarSesion(){
    let usu = document.getElementById('usu').value;
    let contra = document.getElementById('contra').Value;
    let verifica = !!usuarios.find(elemento => elemento.usuario === usu 
                                    && elemento.contra===contra);
    if(verifica){
        alert("usuario correcto");
        window.open("pages/ventas.html");
    }
    else{
        alert("correo o contraseña incorrecta...");
    }
}