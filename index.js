const form = document.querySelector('#userForm')
const handleSubmit = function(ev) {
    ev.preventDefault();
    const form = ev.target
    const userName = form.userName.value
    const users = document.querySelector('#users')
    const age = form.age.value;
    const favcolor = form.favcolor.value;

    const p = document.createElement('p')
    p.textContent = `${userName}, ${age}, ${favcolor}`
    p.style.backgroundColor = favcolor
    users.appendChild(p)

    form.reset()
    form.userName.focus()

}
form.addEventListener('submit', handleSubmit)