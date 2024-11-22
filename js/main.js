const content = document.querySelector('.contenedor');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const btnLogin = document.querySelector('.btnLogin');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', (e)=>{
    e.preventDefault();
    content.classList.add('active');
});
loginLink.addEventListener('click', (e)=>{
    e.preventDefault();
    content.classList.remove('active');
});
btnLogin.addEventListener('click', ()=>{
    content.classList.add('active-login');
});
iconClose.addEventListener('click', ()=>{
    content.classList.remove('active-login');
});
