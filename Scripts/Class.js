let num = 0;

const plusButton = document.querySelector('#plus-button');
const headingA = document.querySelector('#heading-a');
const minusButton = document.querySelector('#minus-button');

plusButton.onclick = () => {    
    const plusNum = num ++;
    headingA.textContent = `${plusNum}`;
}

minusButton.onclick = () => {    
    const minusNum = num -= 1;
    headingA.textContent = `${minusNum}`;
}

