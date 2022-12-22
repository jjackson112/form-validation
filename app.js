const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages= [];
    if (name.value === '' || name.value == null) {
        messages.push('Name is required!')
    }

    if (password.length <= 5) {
        messages.push('Password must be longer than 5 characters!')
    }

    if (password.length >= 20) {
        messages.push('Password must be shorter than 20 characters!')
    }

    if (password.value === 'password') {
        messages.push('Password cannot be password!')
    }

    // you can put required under name input

    if(messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(',')
    }
    // stops page from refreshing, the submit button is just submitting the inputs
    e.preventDefault()
})