const ticketInput = document.getElementById('ticketCount');
const popcornBox = document.getElementById('popcorn');
const drinkBox = document.getElementById('drink');
const totalDisplay = document.getElementById('totalPrice');

function calculateTotal() {
    let total = ticketInput.value * 25;
    if (popcornBox.checked) total += 8;
    if (drinkBox.checked) total += 5;
    totalDisplay.innerText = total;
}

[ticketInput, popcornBox, drinkBox].forEach(item => {
    item.addEventListener('change', calculateTotal);
});

function checkout() {
    alert("This is a simulation. No real charges will be made!");
}
