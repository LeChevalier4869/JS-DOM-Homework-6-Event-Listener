// Create Element and Layout

let container = document.createElement('div');
container.setAttribute('class', 'container');
container.style.border = '1px dashed red';
container.style.boxSizing = 'border-box';
container.style.padding = '1rem';
container.style.margin = 'auto';
container.style.display = 'block';
container.style.textAlign = 'center';

let firstElement = document.querySelector('h1');
firstElement.after(container);

let counter = document.createElement('h2');
counter.textContent = 'Counter';
container.prepend(counter);

let br = document.createElement('br');
firstElement.after(br);

let box = document.createElement('div');
box.setAttribute('class', 'box');
counter.after(box);
box.style.boxSizing = 'border-box';
// box.style.border = '1px dashed green';
box.style.display = 'flex';
box.style.gap = '1rem';
box.style.justifyContent = 'center';

// function Create button

function createButton(atrValue, content) {
    let btn = document.createElement('button');
    btn.setAttribute('class', atrValue);
    btn.textContent = content;
    return btn;
}

let btnInc = createButton('btn increase', '+');
box.append(btnInc);
btnInc.style.padding = '5px 15px';


let showNumber = document.createElement('span');
showNumber.setAttribute('id', 'result');
showNumber.innerHTML = '0';
box.append(showNumber);
// showNumber.style.border = '1px solid blue';
showNumber.style.display = 'flex';
showNumber.style.alignItems = 'center';

let btnDec = createButton('btn decrease', '-');
box.append(btnDec);
btnDec.style.padding = '5px 15px';

let btnClr = createButton('btn clear', 'C');
box.append(btnClr);
btnClr.style.padding = '5px 15px';

let addNumber = document.querySelector('.increase');
let subtractNumber = document.querySelector('.decrease');
let clearNumber = document.querySelector('.clear');

// function add, subtract and clear number
function funcAddNumber() {
    let rs = parseFloat(document.getElementById('result').innerText);
    rs += 1;
    return document.getElementById('result').innerText = rs;
}

function funcSubtractNumber() {
    let rs = parseFloat(document.getElementById('result').innerText);
    rs -= 1;
    if(rs < 0) {
        rs = 0;
    }
    return document.getElementById('result').innerText = rs;
}

function funcClearNumber() {
    let rs = 0;
    return document.getElementById('result').innerHTML = rs;
}

// use event listener
addNumber.addEventListener('click', funcAddNumber);
subtractNumber.addEventListener('click', funcSubtractNumber);
clearNumber.addEventListener('click', funcClearNumber);