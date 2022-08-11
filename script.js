const butaoEntrar = document.getElementById('butaoEntrar');
const email = document.getElementById('email');
const password = document.getElementById('senha');

butaoEntrar.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
