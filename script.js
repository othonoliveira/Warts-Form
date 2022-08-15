const butaoEntrar = document.getElementById('butaoEntrar');
const email = document.getElementById('email');
const password = document.getElementById('senha');
const disableCheckBox = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');
const textArea = document.querySelector('#textarea');
const counter = document.getElementById('counter');
const form = document.getElementById('evaluation-form');
const formData = document.getElementById('form-data');
const name = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const emailForm = document.getElementById('input-email');
const house = document.getElementById('house');
const family = document.getElementsByClassName('radio-family');
const subject = document.getElementsByClassName('subject');
const avaliation = document.getElementsByClassName('radio-rate');
const observation = document.getElementById('textarea');
const sendButton = document.getElementById('submit-btn');

butaoEntrar.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

window.onload = function disableButton() {
  // Retrieve reference to button
  disableCheckBox.addEventListener('change', (e) => {
    if (e.target.checked) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  });
};

textArea.addEventListener('keyup', (e) => {
  counter.innerText = 500 - e.target.value.length;
});

function insert(pai, conteudo) {
  const novaDiv = document.createElement('div');
  novaDiv.innerHTML = conteudo;
  pai.append(novaDiv);
}

function checkedRadio(radios) {
  for (let index = 0; index < radios.length; index += 1) {
    if (radios[index].checked) {
      return radios[index].value;
    }
  }
}

function checkedBox(checkBox) {
  const arr = [];
  for (let index = 0; index < checkBox.length; index += 1) {
    if (checkBox[index].checked) {
      arr.push(checkBox[index].value);
    }
  }
  return arr.join(', ');
}

sendButton.addEventListener('click', (event) => {
  insert(formData, `Nome: ${name.value} ${lastName.value}`);
  insert(formData, `Email: ${emailForm.value}`);
  insert(formData, `Casa: ${house.value}`);
  insert(formData, `Família: ${checkedRadio(family)}`);
  insert(formData, `Matérias: ${checkedBox(subject)}`);
  insert(formData, `Avaliação: ${checkedRadio(avaliation)}`);
  insert(formData, `Observações: ${observation.value}`);
  form.style.display = 'none';
  event.preventDefault();
});
