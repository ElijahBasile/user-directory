const form = document.querySelector('#userForm')
const handleSubmit = function(ev) {
    ev.preventDefault();
    const form = ev.target
    const userName = form.userName.value
    const users = document.querySelector('#users')
    const age = form.age.value;
    const favcolor = form.favcolor.value;

    const list = document.createElement('ul')
    const nameItem = document.createElement('li')
    nameItem.textContent = `Name: ${userName}`  
    list.appendChild(nameItem)

    const ageItem = document.createElement('li')
    ageItem.textContent = `Age: ${age}`
    list.appendChild(ageItem)

    const colorItem = document.createElement('li')
    colorItem = `Favorite Color: ${favcolor}`
    list.appendChild(colorItem)

    users.appendChild(list)

    form.reset()
    form.userName.focus()

}
form.addEventListener('submit', handleSubmit)