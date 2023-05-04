const inputRef = document.querySelector('#validation-input');
console.log(inputRef.attributes[2].value);
inputRef.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length > event.currentTarget.attributes[2].value) {
        event.currentTarget.classList = 'valid'
        // event.currentTarget.classList.remove('invalid')
        // event.currentTarget.classList.add('valid');
    } else {
        // event.currentTarget.classList.remove('valid');
        // event.currentTarget.classList.add('invalid');
            event.currentTarget.classList = 'invalid'

   
    }

})