if (!localStorage.getItem('auth')) {
    window.location.href = 'EstudiantesIngresar.html';
}


document.getElementById('salir').addEventListener('click', () => {
    localStorage.removeItem('auth');
    alert('Usted ha cerrado su sesión')
    window.location.href = 'EstudiantesIngresar.html';
});