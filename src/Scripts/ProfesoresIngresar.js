const loginIngresar = document.querySelector('#loginIngresar')
loginIngresar.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = document.querySelector('#username').value
    const password = document.querySelector('#password').value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(user => user.name === name && user.password === password)
    /*if (!validUser) {
        return alert('Usuario o Contraseña incorrectos o no esta Registrado')
    }
    alert(`Bienvenido ${validUser.name}`)
    localStorage.setItem('login_success', JSON.stringify(validUser))*/
    if (validUser) {
        localStorage.setItem('auth', 'true');
        window.location.href = 'Profesores.html';
    } else {
        alert('Usuario o Contraseña Incorrectos o no está Registrado ');
    }
});



/* window.location.href = 'Profesores.html'


})*/

