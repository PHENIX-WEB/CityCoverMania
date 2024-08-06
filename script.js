document.getElementById('register-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var nombre = document.getElementById('nombre').value;
  var ficha = document.getElementById('ficha').value;

  if (!email || !password || !nombre || !ficha) {
    alert('Por favor, rellena todos los campos.');
    return;
  }

  window.location.href = 'login.html';
});
