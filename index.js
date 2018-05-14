const header = document.querySelector('.heading1')
const button = document.querySelector('button')

function changeText() {
    document.querySelector('.heading1').textContent = document.querySelector('#headingChange').value
}

button.addEventListener('click', changeText)