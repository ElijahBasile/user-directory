const form = document.querySelector('form#userForm')
const handleSubmit = function(ev) {
    ev.preventDefault();
    const form = ev.target
    const userName = form.userName.value;
    const users = document.querySelector('#users')
    const age = form.age.value;
    heading.textContent = document.querySelector('input').value;
    users.innerHTML += `<p>${userName} + ${', '} + ${age}</p>`
    form.reset()
    form.userName.focus()

}
form.addEventListener('submit', handleSubmit)