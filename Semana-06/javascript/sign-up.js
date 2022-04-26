const nameValue = document.getElementById('name');
var errorContainerN = document.getElementById('error-containerN');

const surname = document.getElementById('surname');
var errorContainerS = document.getElementById('error-containerS');

const ID = document.getElementById('ID');
var errorContainerID = document.getElementById('error-containerID');

const birthday = document.getElementById('birthday');
var errorContainerB = document.getElementById('error-containerB');

const phone = document.getElementById('phone');
var errorContainerPN = document.getElementById('error-containerPN');

const adress = document.getElementById('adress');
var errorContainerA = document.getElementById('error-containerA');

const ZC = document.getElementById('zipCode');
var errorContainerZC = document.getElementById('error-containerZC');

const city = document.getElementById('city');
var errorContainerC = document.getElementById('error-containerC');

const password = document.getElementById('password');
var errorContainerP = document.getElementById('error-containerP');

const email = document.getElementById('email');
var errorContainerE = document.getElementById('error-containerE');

const repeatPassword = document.getElementById('repeatPassword');
var errorContainerRP = document.getElementById('error-containerRP');

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 
'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 
'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 
'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const letterNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 
'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 
'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 
'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const space = " "; 

// Todos los campos son requeridos.

// - Nombre: Solo letras y debe tener más de 3 letras.
nameValue.addEventListener('blur', nameIncorrect);
function nameIncorrect() {
    var required = document.createElement('p');
    required.textContent = '*Field required';
    required.style.fontSize = '13px';

    var message = document.createElement('p');
    message.textContent = '*Wrong name';
    message.classList.add('error-submit');
    
    if (nameValue.value == '') {
        errorContainerN.appendChild(required);
        nameValue.style.border = '1px solid #ff0000';
    } else {
    if (nameValue.value.length > 0 && nameValue.value.length <= 3) {
        errorContainerN.appendChild(message);
        nameValue.style.border = '1px solid #ff0000';
    } else {
        for(i of nameValue.value) {
            if(!letters.includes(i)) {
                var message = document.createElement('p');
                errorContainerN.appendChild(message);
                nameValue.style.border = '1px solid #ff0000';
            }
        }
    }
}
}

nameValue.addEventListener('focus', nameCorrection);
function nameCorrection() {
    errorContainerN.innerHTML = "";
    nameValue.style.border = '1px solid #39ff14';
}

// - Apellido: Solo letras y debe tener más de 3 letras.
surname.addEventListener('blur', surnameIncorrect);
function surnameIncorrect() {
    var required = document.createElement('p');
    required.textContent = '*Field required';
    required.style.fontSize = '13px';

    var message = document.createElement('p');
    message.textContent = '*Wrong surname';
    message.classList.add('error-submit');
    
    if (surname.value == '') {
        errorContainerS.appendChild(required);
        surname.style.border = '1px solid #ff0000';
    } else {
    if (surname.value.length <= 3) {
        errorContainerS.appendChild(message);
        surname.style.border = '1px solid #ff0000';
    } else {
        for(i of surname.value) {
            if(!letters.includes(i)) {
                var message = document.createElement('p');
                errorContainerS.appendChild(message);
                surname.style.border = '1px solid #ff0000';
            }
        }
    }
}
}

surname.addEventListener('focus', surnameCorrection);
function surnameCorrection() {
    errorContainerS.innerHTML = "";
    surname.style.border = '1px solid #39ff14';
}

// - Teléfono: Solo número y debe tener 10 números.
phone.addEventListener('blur', phoneIncorrect);
function phoneIncorrect() {
    var required = document.createElement('p');
    required.textContent = '*Field required';
    required.style.fontSize = '13px';

    var message = document.createElement('p');
    message.textContent = '*Wrong phone number';
    message.classList.add('error-submit');
    
    if (phone.value == '') {
        errorContainerPN.appendChild(required);
        phone.style.border = '1px solid #ff0000';
    } else {
    if (phone.value.length != 10) {
        errorContainerPN.appendChild(message);
        phone.style.border = '1px solid #ff0000';
    } else {
        for(i of phone.value) {
            if(!numbers.includes(i)) {
                var message = document.createElement('p');
                errorContainerPN.appendChild(message);
                phone.style.border = '1px solid #ff0000';
            }
        }
    }
}
}

phone.addEventListener('focus', phoneCorrection);
function phoneCorrection() {
    errorContainerPN.innerHTML = "";
    phone.style.border = '1px solid #39ff14';
}

// - DNI: Solo número y debe tener más de 7 números.
ID.addEventListener('blur', IDIncorrect);
function IDIncorrect() {
    var required = document.createElement('p');
    required.textContent = '*Field required';
    required.style.fontSize = '13px';

    var message = document.createElement('p');
    message.textContent = '*Wrong ID';
    message.classList.add('error-submit');
    
    if (ID.value == '') {
        errorContainerID.appendChild(required);
        ID.style.border = '1px solid #ff0000';
    } else {
    if (ID.value.length <= 7) {
        errorContainerID.appendChild(message);
        ID.style.border = '1px solid #ff0000';
    } else {
        for(i of ID.value) {
            if(!numbers.includes(i)) {
                var message = document.createElement('p');
                errorContainerID.appendChild(message);
                ID.style.border = '1px solid #ff0000';
            }
        }
    }
}
}

ID.addEventListener('focus', IDCorrection);
function IDCorrection() {
    errorContainerID.innerHTML = "";
    ID.style.border = '1px solid #39ff14';
}

// - Código Postal: Solo número y debe tener entre 4 y 5 números.
ZC.addEventListener('blur', ZCIncorrect);
function ZCIncorrect() {
    var required = document.createElement('p');
    required.textContent = '*Field required';
    required.style.fontSize = '13px';

    var message = document.createElement('p');
    message.textContent = '*Wrong Zip Code';
    message.classList.add('error-submit');
    
    if (ZC.value == '') {
        errorContainerZC.appendChild(required);
        ZC.style.border = '1px solid #ff0000';
    } else {
    if (ZC.value.length < 4 || ZC.value.length > 4) {
        errorContainerZC.appendChild(message);
        ZC.style.border = '1px solid #ff0000';
    } else {
        for(i of ZC.value) {
            if(!numbers.includes(i)) {
                var message = document.createElement('p');
                errorContainerZC.appendChild(message);
                ZC.style.border = '1px solid #ff0000';
            }
        }
    }
}
}

ZC.addEventListener('focus', ZCCorrection);
function ZCCorrection() {
    errorContainerZC.innerHTML = "";
    ZC.style.border = '1px solid #39ff14';
}

// - Localidad: Texto alfanumérico y debe tener más de 3 letras.
city.addEventListener('blur', cityIncorrect);
function cityIncorrect() {
    var required = document.createElement('p');
    required.textContent = '*Field required';
    required.style.fontSize = '13px';

    var message = document.createElement('p');
    message.textContent = '*Wrong City';
    message.classList.add('error-submit');
    
    if (city.value == '') {
        errorContainerC.appendChild(required);
        city.style.border = '1px solid #ff0000';
    } else {    
    if (city.value.length <= 3) {
        errorContainerC.appendChild(message);
        city.style.border = '1px solid #ff0000';
    } else {
        for(i of city.value) {
            if(!letterNumbers.includes(i)) {
                var message = document.createElement('p');
                errorContainerC.appendChild(message);
                city.style.border = '1px solid #ff0000';
            }
        }
    }
}
}

city.addEventListener('focus', cityCorrection);
function cityCorrection() {
    errorContainerC.innerHTML = "";
    city.style.border = '1px solid #39ff14';
}

// - Contraseña: Al menos 8 caracteres, formados por letras y números.
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
        password.style.border = '1px solid #ff0000';
    } else {
    if(password.value.length <= 8) {
        errorContainerP.appendChild(message);
        password.style.border = '1px solid #ff0000';
    }
    else {
        for(i of password.value) {
            if(!letterNumbers.includes(i)) {
                errorContainerP.appendChild(message);
                password.style.border = '1px solid #ff0000';
            }
        }
    }
}
}

password.addEventListener('focus', passwordCorrection);
function passwordCorrection() {
    errorContainerP.innerHTML = "";
    password.style.border = '1px solid #39ff14';
}

// - Repetir Contraseña: Al menos 8 caracteres, formados por letras y números
repeatPassword.addEventListener('blur', repeatPasswordIncorrect);
function repeatPasswordIncorrect() {
    var required = document.createElement('p');
    required.textContent = '*Field required';
    required.style.fontSize = '13px';

    var message = document.createElement('p');
    message.textContent = '*Passwords must coincide';
    message.classList.add('error-submit');

    if (repeatPassword.value == '') {
        errorContainerRP.appendChild(required);
        repeatPassword.style.border = '1px solid #ff0000';
    } else {
    if(repeatPassword.value.length > 0 && repeatPassword.value.length > 0 
        && (repeatPassword.value.length <= 8 || password.value.length <= 8 || repeatPassword.value != password.value)) {
        errorContainerRP.appendChild(message);
        repeatPassword.style.border = '1px solid #ff0000';
    }
}
}

repeatPassword.addEventListener('focus', repeatPasswordCorrection);
function repeatPasswordCorrection() {
    errorContainerRP.innerHTML = "";
    repeatPassword.style.border = '1px solid #39ff14';
}

// - Email: Debe tener un formato de email válido.
email.addEventListener('blur', emailIncorrect);
function emailIncorrect() {
    var required = document.createElement('p');
    required.textContent = '*Field required';
    required.style.fontSize = '13px';

    var regexEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (email.value == '') {
        errorContainerE.appendChild(required);
        email.style.borderBottom = '1px solid #ff0000';
    } else {
    if (!regexEmail.test(email.value)) {   
        var message = document.createElement('p');
        message.textContent = '*Wrong email';
        message.classList.add('error-submit');
        errorContainerE.appendChild(message);
        email.style.border = '1px solid #ff0000';
    }
}
}

email.addEventListener('focus', emailCorrection);
function emailCorrection() {
    errorContainerE.innerHTML = "";
    email.style.border = '1px solid #39ff14';
}

// - Dirección: Al menos 5 caracteres con letras, números y un espacio en el medio.
adress.addEventListener('blur', adressIncorrect);
function adressIncorrect() {
    var required = document.createElement('p');
    required.textContent = '*Field required';
    required.style.fontSize = '13px';

    var message = document.createElement('p');
    message.textContent = '*Wrong Adress';
    message.classList.add('error-submit');

    if (adress.value == '') {
        errorContainerA.appendChild(required);
        adress.style.border = '1px solid #ff0000';
    } else {
    if(adress.value.length > 0 && adress.value.length < 5) {
        errorContainerA.appendChild(message);
        adress.style.border = '1px solid #ff0000';
    }
    else {
        for(i of adress.value) {
            if(!letterNumbers.includes(i) && !space.includes(i)) {
                errorContainerA.appendChild(message);
                adress.style.border = '1px solid #ff0000';
            }
        }
    }
}
}

adress.addEventListener('focus', adressCorrection);
function adressCorrection() {
    errorContainerA.innerHTML = "";
    adress.style.border = '1px solid #39ff14';
}

// - Fecha de Nacimiento: Con formato dd/mm/aaaa.

//Se debe agregar un botón “Create” que al presionarlo se muestre un cartel emergente con la
//información cargada en el formulario en caso de que haya pasado todas las validaciones.
const signupButton = document.getElementById('signup-button');
signupButton.addEventListener("click", clickFunction);

function clickFunction() {
    alert("Name: " + nameValue.value + '\n' +
        "Surname: " + surname.value + '\n' +
        "ID: " + ID.value + '\n' +
        "Birthday: " + birthday.value + '\n' +
        "Phone: " + phone.value + '\n' +
        "Adress: " + adress.value + '\n' +
        "City: " + city.value + '\n' +
        "Zip Code: " + ZC.value + '\n' +
        "Email: " + email.value + '\n' +
        "Password: " + password.value
        );
}

// Si alguna validación no pasó, además de mostrar el error debajo del campo, también se debe
//mostrar el error en el cartel emergente.

