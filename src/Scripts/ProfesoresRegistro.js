const loginRegistro = document.querySelector('#loginRegistro')
loginRegistro.addEventListener('submit', (e) => {
    e.preventDefault()


    const name = document.querySelector('#name').value
    const password = document.querySelector('#password').value
    const confirmPassword = document.querySelector('#confirmPassword').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.name === name)
    if (isUserRegistered) {
        return alert('El nombre de usuario ya existe')
    }
    if (confirmPassword !== password) {
        return alert('Las Contraseñas no coinciden')
    }
    Users.push({ name: name, password: password, confirmPassword: confirmPassword })
    localStorage.setItem('users', JSON.stringify(Users))
    alert('Registro Existoso!')
    window.location.href = 'ProfesoresIngresar.html'
})




