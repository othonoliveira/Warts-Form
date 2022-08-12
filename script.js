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

const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
let contadorEmNumero;

textArea.addEventListener('keydown', (e) => {
  contadorEmNumero = parseInt(counter.innerText);

  if (contadorEmNumero > 0 && contadorEmNumero <= 500){
        if(!(e.key == 'Backspace')){
            contadorEmNumero = contadorEmNumero - 1;
            counter.innerText = contadorEmNumero;
        } else if(e.key == 'Backspace' && contadorEmNumero != 500){
            contadorEmNumero = contadorEmNumero + 1;
            counter.innerText = contadorEmNumero;    
        }
    } else if (contadorEmNumero == 0 && e.key == 'Backspace') {
        contadorEmNumero = contadorEmNumero + 1;
        counter.innerText = contadorEmNumero;
    }
});