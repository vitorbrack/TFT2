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
 





