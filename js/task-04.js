const decrementBtn = document.querySelector('[data-action ="decrement"]');
const incrementBtn = document.querySelector('[data-action ="increment"]');

const counter = document.querySelector('#value');
let counterValue = 0

incrementBtn.addEventListener('click', () => { 
    counterValue += 1
    counter.textContent = counterValue
})

decrementBtn.addEventListener('click', () => { 
    counterValue -= 1
    counter.textContent = counterValue
})




