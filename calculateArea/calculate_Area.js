let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
   }

let amount1;
let amount2;
let amount3;

function calculateAmount() {
    amount1 = parseFloat(document.getElementById('grocery1').value);
    amount2 = parseFloat(document.getElementById('grocery2').value);
    amount3 = parseFloat(document.getElementById('grocery3').value);

    let amount = amount1 + amount2 + amount3;
    document.getElementById('totalAmount').innerText = `The total amount is: ${amount}`;
   }