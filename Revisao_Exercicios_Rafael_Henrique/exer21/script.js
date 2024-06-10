/* Rafael Henrique Braga de Morais */
function makeReservation() {
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var message = document.getElementById("message");

    if (date && time) {
        message.innerHTML = "Reserva feita para " + date + " às " + time + ".";
    } else {
        message.innerHTML = "Por favor, selecione uma data e hora.";
    }
}
