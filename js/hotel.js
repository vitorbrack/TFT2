var hotel = {
    nome : ' Hotel Hakuna Matata',
    quartos :40,
    reservados : 25,
    chacarDisponinibilidade: function(){
   return this.quartos - this.reservados;
 }};

var nomes = document.getElementById('nomes')
nomes.textContent = hotel.nome;

var room = document.getElementById('room')
room.textContent = hotel.quartos;

var reserv = document.getElementById('reserv')
reserv.textContent = hotel.reservados;


function verificaVagas(){
  hotel.reservados--;
  if(hotel.reservados > 0){
    reserv.textContent = hotel.reservados;
  }else{
    reserv.textContent = "Vagas esgotadas!!";
  }
  
}
var countDownDate = new Date("Jun 11, 2021 9:10:00").getTime();
var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("data").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("data").innerHTML = "Acabou a promoção!";
  }
}, 1000);


 





