const yourName = document.getElementById('name');

const submitButton = document.getElementById('button')

submitButton.addEventListener('click', function (e) {
  let registerName = yourName.value;
  if (registerName !== '') {
    submitButton.setAttribute('href', 'quize.html');
  } else {
    alert('please input your name')
  }

  localStorage.setItem('name', JSON.stringify(registerName))
})