const form = document.querySelector('#userForm')
const handleSubmit = function(ev) {
    ev.preventDefault();
    const form = ev.target
    const userName = form.userName.value
    const users = document.querySelector('#users')
    const age = form.age.value;
    heading.textContent = document.querySelector('input').value

    const p = document.createElement('p')
    p.textContent = `${userName},${age}`
    user.appendChild(p)

    form.reset()
    form.userName.focus()

}
form.addEventListener('submit', handleSubmit)