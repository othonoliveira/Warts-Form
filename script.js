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

const textArea = document.querySelector('#textarea');
const counter = document.getElementById('counter');

// textArea.addEventListener('keydown', (e) => {
//   contadorEmNumero = parseInt(counter.innerText);

//   if (contadorEmNumero > 0 && contadorEmNumero <= 500){
//         if(!(e.key == 'Backspace')){
//             contadorEmNumero = contadorEmNumero - 1;
//             counter.innerText = contadorEmNumero;
//         } else if(e.key == 'Backspace' && contadorEmNumero != 500){
//             contadorEmNumero = contadorEmNumero + 1;
//             counter.innerText = contadorEmNumero;
//         }
//     } else if (contadorEmNumero == 0 && e.key == 'Backspace') {
//         contadorEmNumero = contadorEmNumero + 1;
//         counter.innerText = contadorEmNumero;
//     }
// });

textArea.addEventListener('keyup', () => {
  // const caracteresArea = textArea.value;
  let r;
  r = 500;
  r = 500 - (document.querySelector('#textarea').value.length);
  counter.innerText = r;
});
