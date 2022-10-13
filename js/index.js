const myform = document.getElementById('myform');
const Yourname = document.getElementById('Yourname');
const message = document.getElementById('message');
const email = document.getElementById('email');

function reset(input) {
  const relative = input.parentElement;
  const small =relative.querySelector('small');
  small.innerText = '';
 relative.classList.remove('error');
}

form.addEventListener('submit', (e) => {
  checkInputs(e);
});

function checkInputs(e) {
  const YournameValue = Yourname.value.trim();
  const messageValue = message.value.trim();
  const emailvalue = email.value.trim();
  
  if (YournameValue === '') {
    setErrorFor(Yourname, 'Yourname cannot be blank');
    e.preventDefault();
  } else {
    setSuccessFor(Yourname);
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
  constrelative = input.parentElement;
  const small =relative.querySelector('small');

  small.innerText = message;

 relative.classList.add('error');
}

function setSuccessFor(input) {
  constrelative = input.parentElement;
 relative.classList.add('success');
 relative.classList.remove('error');
}

// email validating
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

Yourname.addEventListener('keyup', function () {
  reset(Yourname);
});
message.addEventListener('keyup', function () {
  reset(message);
});
email.addEventListener('keyup', function () {
  reset(email);
});
