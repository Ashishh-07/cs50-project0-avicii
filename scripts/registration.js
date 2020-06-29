let form = document.querySelector('#registration');

form.addEventListener('submit', function (event) {
  let errors = {};

  //email
  let email = document.querySelector('#email').value;
  let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(email)) {
    errors.email = 'Invalid email';
  }

  //passwords
  let password = document.querySelector('#password').value;
  let passwordRepeat = document.querySelector('#password-repeat').value;

  if (password.length < 6) {
    errors.password = 'Invalid Password';
  }
  if (password != passwordRepeat) {
    errors.passwordRepeat = 'Passwords do not match';
  }

  //Checkbox
  let agree = form.querySelector('[name="agree"]').checked;
  if (!agree) {
    errors.agree = 'You must agree terms and conditions';
  }

  // Errors
  form.querySelectorAll('.error-div').forEach((item) => {
    item.textContent = ' ';
  });
  for (let name in errors) {
    let errorPlaceholder = document.getElementById('error_' + name);
    if (errorPlaceholder) {
      errorPlaceholder.textContent = errors[name];
    }
  }

  if (!(Object.keys(errors).length === 0)) {
    event.preventDefault();
  }
});
