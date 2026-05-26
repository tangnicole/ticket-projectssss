const ticketInput = document.getElementById('ticketCount');
const popcornBox = document.getElementById('popcorn');
const drinkBox = document.getElementById('drink');
const totalDisplay = document.getElementById('totalPrice');
const receiptList = document.getElementById('receiptList');

function calculateTotal() {
    let total = ticketInput.value * 25;
    let listHTML = `<li>${ticketInput.value}x Ticket(s): $${ticketInput.value * 25}</li>`;

    if (popcornBox.checked) {
        total += 8;
        listHTML += `<li>1x Jumbo Popcorn: $8</li>`;
    }
    
    if (drinkBox.checked) {
        total += 5;
        listHTML += `<li>1x Fountain Soda: $5</li>`;
    }

    receiptList.innerHTML = listHTML;
    totalDisplay.innerText = total;
}

[ticketInput, popcornBox, drinkBox].forEach(item => {
    item.addEventListener('input', calculateTotal);
});

function checkout() {
    const finalPrice = totalDisplay.innerText;
    document.querySelector('.container').innerHTML = `
        <div style="text-align:center; padding: 20px;">
            <h1 style="font-size: 50px;">🎟️</h1>
            <h2>Booking Confirmed!</h2>
            <p>Total Paid: <strong>$${finalPrice}</strong></p>
            <p>Show this screen at the drama hall entrance.</p>
            <button onclick="location.reload()" style="margin-top:20px;">Back to Start</button>
        </div>
    `;
}
