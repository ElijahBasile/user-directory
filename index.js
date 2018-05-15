const form = document.querySelector('form#userForm')
const handleSubmit = function(ev) {
    ev.preventDefault();
    const userName = form.userName.value;
    const users = document.querySelector('#users')
    heading.textContent = document.querySelector('input').value;
    users.innerHTML += '<p>' + userName + '</p>'
    form.userName.value = ''

}
form.addEventListener('submit', handleSubmit)