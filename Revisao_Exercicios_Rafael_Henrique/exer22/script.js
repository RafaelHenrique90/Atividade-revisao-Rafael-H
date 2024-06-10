/* Rafael Henrique Braga de Morais */
function validateForm() {
    var name = document.getElementById('name').value;
    var cardNumber = document.getElementById('cardNumber').value;
    var expDate = document.getElementById('expDate').value;
    var cvv = document.getElementById('cvv').value;

    var nameRegex = /^[a-zA-Z\s]+$/;
    var cardNumberRegex = /^[0-9]{16}$/;
    var expDateRegex = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;
    var cvvRegex = /^[0-9]{3}$/;

    var isValid = true;

    if (!nameRegex.test(name)) {
        isValid = false;
        document.getElementById('name').classList.add('error');
    } else {
        document.getElementById('name').classList.remove('error');
    }

    if (!cardNumberRegex.test(cardNumber)) {
        isValid = false;
        document.getElementById('cardNumber').classList.add('error');
    } else {
        document.getElementById('cardNumber').classList.remove('error');
    }

    if (!expDateRegex.test(expDate)) {
        isValid = false;
        document.getElementById('expDate').classList.add('error');
    } else {
        document.getElementById('expDate').classList.remove('error');
    }

    if (!cvvRegex.test(cvv)) {
        isValid = false;
        document.getElementById('cvv').classList.add('error');
    } else {
        document.getElementById('cvv').classList.remove('error');
    }

    return isValid;
}
