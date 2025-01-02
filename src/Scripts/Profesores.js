/* const user = JSON.parse(localStorage.getItem('login_success'))
if (user === null) {
    window.location.href = 'ProfesoresIngresar.html'
}
 */
/*const salir = document.querySelector('#salir')  
salir.addEventListener('clic', () => {
    alert('Ha cerrado su sesión')
    localStorage.removeItem('login_success')
    window.location.href = 'ProfesoresIngresar.html'
}) */

if (!localStorage.getItem('auth')) {
    window.location.href = 'ProfesoresIngresar.html';
}


document.getElementById('salir').addEventListener('click', () => {
    localStorage.removeItem('auth');
    alert('Usted ha cerrado su sesión')
    window.location.href = 'ProfesoresIngresar.html';
});