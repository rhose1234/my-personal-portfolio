const myform = document.getElementById('myform');
const name = document.getElementById('name');
const message = document.getElementById('message');
const email = document.getElementById('email');

function reset(input) {
  const formcontrol = input.parentElement;
  const small = formcontrol.querySelector('small');
  small.innerText = '';
 formcontrol.classList.remove('error');
}

myform.addEventListener('submit', (e) => {
  checkInputs(e);
});

function checkInputs(e) {
  const nameValue = name.value.trim();
  const messageValue = message.value.trim();
  const emailvalue = email.value.trim();
  
  if (nameValue === '') {
    setErrorFor(name, 'name cannot be blank');
    e.preventDefault();
  } else {
    setSuccessFor(name);
  }
  if (messageValue === '') {
    setErrorFor(message, 'Message cannot be blank');
    e.preventDefault();
  } else {
    setSuccessFor(message);
  }

  if (emailvalue === '') {
    setErrorFor(email, 'Email cannot be blank');
    e.preventDefault();
  } else if (!isEmail(emailvalue)) {
    setErrorFor(email, 'Email is not valid');
    e.preventDefault();
  } else {
    setSuccessFor(email);
  }

 
}
function setErrorFor(input, message) {
  constformcontrol = input.parentElement;
  const small =formcontrol.querySelector('small');

  small.innerText = message;

 formcontrol.classList.add('error');
}

function setSuccessFor(input) {
  constformcontrol = input.parentElement;
 formcontrol.classList.add('success');
 formcontrol.classList.remove('error');
}

// email validating
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

name.addEventListener('keyup', function () {
  reset(name);
});
message.addEventListener('keyup', function () {
  reset(message);
});
email.addEventListener('keyup', function () {
  reset(email);
});
