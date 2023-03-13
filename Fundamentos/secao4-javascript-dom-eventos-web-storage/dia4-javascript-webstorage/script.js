window.onload = () => {
    //backgoundColor
    const body = document.querySelector('body');
    const backgroundElement = document.getElementById('background-color').children;
    for (let index = 1; index < backgroundElement.length; index += 1) {
        backgroundElement[index].addEventListener('click', (event) => {
            body.style.backgroundColor = event.target.innerHTML;
            localStorage.setItem('backgroundColor', event.target.innerHTML);
        })
    }
    body.style.backgroundColor = localStorage.getItem('backgroundColor');

    //color
    const fontColor = document.getElementById('font-color').children;
    for (let index = 1; index < fontColor.length; index += 1) {
        fontColor[index].addEventListener('click', (event) => {
            body.style.color = event.target.innerHTML;
            localStorage.setItem('font-color', event.target.innerHTML);
        })  
    }
    body.style.color = localStorage.getItem('font-color');

    //font-size
    const fontSize = document.getElementById('font-size').children;
    for (let index = 1; index < fontSize.length; index += 1) {
        fontSize[index].addEventListener('click', (event) => {
            body.style.fontSize = event.target.innerHTML;
            localStorage.setItem('font-size', event.target.innerHTML);
        })  
    }
    body.style.fontSize = localStorage.getItem('font-size');


    //line-height
    const lineHeight = document.getElementById('line-height').children;
    for (let index = 1; index < lineHeight.length; index += 1) {
        lineHeight[index].addEventListener('click', (event) => {
            body.style.lineHeight = event.target.innerHTML;
            localStorage.setItem('line-height', event.target.innerHTML);
        })
    }
    body.style.lineHeight = localStorage.getItem('line-height');

    //font-family
    const fontFamily = document.getElementById('font-family').children;
    for (let index = 1; index < fontFamily.length; index += 1) {
        fontFamily[index].addEventListener('click', (event) => {
            body.style.fontFamily = event.target.innerHTML;
            localStorage.setItem('font-family', event.target.innerHTML);
        })
    }
    body.style.fontFamily = localStorage.getItem('font-family');

}