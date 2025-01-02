/* function validateForm(event) {
    event.preventDefault(); */

    const form = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');
    form.addEventListener('submit',(event)=> 
        {
        event.preventDefault();

    

    const username = document.getElementById(' username').value;
    const password = document.getElementById('password').value;
   /* const errorMensaje = document.getElementById('errorMensaje').value;*/


if (username === 'admin' && password === 'admin') {
    messageDiv.textContent = 'Inicio de sesion exitoso';
    

} else {
    messageDiv.textContent = ' Usuario o Contrasena Incorrectos';
}


});
