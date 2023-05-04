const rangeInputRef = document.getElementById('font-size-control')
const spanRef = document.getElementById('text');

rangeInputRef.addEventListener('input', (event) => {
    spanRef.style.fontSize = event.currentTarget.value + 'px'  
})