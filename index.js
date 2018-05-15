const form = document.querySelector('#userForm')
const renderListItem = function(item) {
    if (item.charAt(0) === '#') {
        const listItem = document.createElement('li')
        listItem.textContent = 'Favorite Color:'
        listItem.appendChild(renderColor(item))
        return listItem;
    } else {
        const listItem = document.createElement('li')
        if(isNaN(parseInt(item))) {
        listItem.textContent = `Name: ${item}`  
        }
        else {
        listItem.textContent = `Age: ${item}` 
        }
        return listItem;
    }

}
const renderList = function(userName,age,favcolor) {
    const list = document.createElement('ul')

    list.appendChild(renderListItem(userName))
    if (age !== '') {
        list.appendChild(renderListItem(age))
    }
    if (favcolor !== '') {
        list.appendChild(renderListItem(favcolor))
    }
    return list;
}
const renderColor = function(favcolor) {
    const colorDiv = document.createElement('div')
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    colorDiv.style.backgroundColor = favcolor
    return colorDiv
}
const handleSubmit = function(ev) {
    ev.preventDefault();
    const form = ev.target
    const userName = form.userName.value
    const users = document.querySelector('#users')
    const age = form.age.value;
    const favcolor = form.favcolor.value;
    if(userName !== '' && isNaN(parseInt(userName))){
        warning.textContent = ''
        users.appendChild(renderList(userName,age,favcolor));
    } else {
        const warning = document.querySelector('#warning')
        warning.textContent = 'Please enter a valid name for the directory.'
    }
    form.reset()
    form.userName.focus()

}
form.addEventListener('submit', handleSubmit)