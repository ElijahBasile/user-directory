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
 

    const ageItem = document.createElement('li')
    ageItem.textContent = `Age: ${age}`


    const colorItem = document.createElement('li')
    colorItem.textContent = 'Favorite Color:'

    const colorDiv = document.createElement('div')
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    color.style.backgroundColor = favcolor
    
    colorItem.appendChild(colorDiv)

    list.appendChild(nameItem)
    list.appendChild(ageItem)
    list.appendChild(colorItem)

    users.appendChild(list)

    form.reset()
    form.userName.focus()

}
form.addEventListener('submit', handleSubmit)