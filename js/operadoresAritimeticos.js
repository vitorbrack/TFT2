var subtotal = (13+1)*5;
var frete = 0.5*(13+1);
var total = subtotal + frete;
var din = "R$";

var subResultado = document.getElementById('subtotalvalor');
subResultado.textContent += din + subtotal + ",00";

var freteResultado = document.getElementById('fretevalor');
freteResultado.textContent += din + frete + ",00";

var totalResultado = document.getElementById('totalvalor');
totalResultado.textContent +=   din + total + ",00";
