const email = document.getElementById('email');
var errorContainerE = document.getElementById('error-containerE');

const password = document.getElementById('password');
var errorContainerP = document.getElementById('error-containerP');

const letterNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 
'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 
'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 
'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//- EMAIL: Debe tener un formato de email válido.
var emailValid = true;
email.addEventListener('blur', emailIncorrect);
function emailIncorrect() {
    var required = document.createElement('p');
    required.textContent = '*Field required';
    required.style.fontSize = '13px';

    var regexEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (email.value == '') {
        errorContainerE.appendChild(required);
        email.style.borderBottom = '1px solid #FF0000';
        return emailValid = false;
    } else if (!regexEmail.test(email.value)) {   
        var message = document.createElement('p');
        message.textContent = '*Wrong email';
        message.classList.add('error-submit');
        errorContainerE.appendChild(message);
        email.style.borderBottom = '1px solid #FF0000';
        return emailValid = false;
    }
}

email.addEventListener('focus', emailCorrection);
function emailCorrection() {
    errorContainerE.innerHTML = "";
    email.style.borderBottom = '1px solid #39FF14';
    return emailValid = true;
}

//- CONTRASEÑA: Formada por letras y números.
var passwordValid = true;
password.addEventListener('blur', passwordIncorrect);
function passwordIncorrect() {
    var required = document.createElement('p');
    required.textContent = '*Field required';
    required.style.fontSize = '13px';

    var message = document.createElement('p');
    message.textContent = '*Wrong password';
    message.classList.add('error-submit');

    if (password.value == '') {
        errorContainerP.appendChild(required);
        password.style.borderBottom = '1px solid #FF0000';
        return passwordValid = false;
    } else if (password.value.length > 0 && password.value.length <= 8) {
        errorContainerP.appendChild(message);
        password.style.borderBottom = '1px solid #FF0000';
        return passwordValid = false;
    } else {
        for (i of password.value) {
            if (!letterNumbers.includes(i)) {
                errorContainerP.appendChild(message);
                password.style.borderBottom = '1px solid #FF0000';
                return passwordValid = false;
            }
        }
    }
}

password.addEventListener('focus', passwordCorrection);
function passwordCorrection() {
    errorContainerP.innerHTML = "";
    password.style.borderBottom = '1px solid #39FF14';
    return passwordValid = true;
}

// Se debe agregar un botón “Login” que al presionarlo se muestre un cartel emergente con la
// información cargada en el formulario en caso de que haya pasado todas las validaciones. 
// Si alguna validación no pasó, además de mostrar el error debajo del campo, también se debe
// mostrar el error en el cartel emergente.
const loginButton = document.getElementById('login-button');
loginButton.addEventListener("click", clickFunction);

function clickFunction() { 
    if (email.value == '' || password.value == '') {
        alert('All fields are required');
    } else if (emailValid == false || passwordValid == false ) {
        alert('Something went wrong!');
    } else {
        alert("Email: " + email.value + '\n' + "Password: " + password.value); 
    }
}