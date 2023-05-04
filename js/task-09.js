function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtnRef = document.querySelector('.change-color')
const spanColorRef = document.querySelector('.color')

document.body.addEventListener('click', selectColor)

function selectColor(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  } else {
  event.currentTarget.style.backgroundColor = getRandomHexColor()
  }
  spanColorRef.textContent = event.currentTarget.style.backgroundColor
  
}
  
