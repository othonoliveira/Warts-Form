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

window.onload = function disableButton() {
  const disableCheckBox = document.getElementById('agreement');
  // Retrieve reference to button
  const submitButton = document.getElementById('submit-btn');

  disableCheckBox.addEventListener('change', (e) => {
    if (e.target.checked) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  });
};
