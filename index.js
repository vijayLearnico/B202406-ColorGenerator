// window.onload
// addEventListener

function generateRGBcolor(){ 
    const redValue = Math.floor(Math.random() * 255)
    const greenValue = Math.floor(Math.random() * 255)
    const blueValue = Math.floor(Math.random() * 255)

    const container = document.querySelector('#container');
    console.log('====================================');
    console.log(`#${redValue.toString(16)}${greenValue.toString(16)}${blueValue.toString(16)}`);
    console.log('====================================');
    // container.style.backgroundColor =  `rgb(${redValue},${greenValue},${blueValue})`
    container.style.backgroundColor =  `#${redValue.toString(16)}${greenValue.toString(16)}${blueValue.toString(16)}`
}

window.onload = () => {
    const button = document.querySelector('#button-id');
    button.addEventListener('click',generateRGBcolor);
}
