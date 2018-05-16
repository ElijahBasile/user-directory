const form = document.querySelector('#userForm')
const renderListItem = function(label, item) {
    const listItem = document.createElement('li')
    listItem.textContent = `${label}: `
    try{
        listItem.appendChild(item)
    } catch(e) {
        listItem.textContent += `${item}` 
    }
    return listItem;
}
const renderList = function(data) {
    const list = document.createElement('ul')
    Object.keys(data).map(function(label) {
        const item = renderListItem(label, data[label])
        list.appendChild(item)
    })
    return list
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
    const user = {
        'Name': form.userName.value,
        'Age': form.age.value,
        'Favorite Color': renderColor(form.favcolor.value),
    }
    
    
    const list = renderList(user)
    const users = document.querySelector('#users')
    users.appendChild(list)

    form.reset()
    form.userName.focus()
}
form.addEventListener('submit', handleSubmit)