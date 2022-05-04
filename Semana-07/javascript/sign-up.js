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
const city = document.getElementById('city');
var errorContainerC = document.getElementById('error-containerC');
const ZC = document.getElementById('zipCode');
var errorContainerZC = document.getElementById('error-containerZC');
const email = document.getElementById('email');
var errorContainerE = document.getElementById('error-containerE');
const password = document.getElementById('password');
var errorContainerP = document.getElementById('error-containerP');
const repeatPassword = document.getElementById('repeatPassword');
var errorContainerRP = document.getElementById('error-containerRP');

const letterNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 
'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 
'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 
'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 
'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 
'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 
'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const space = " ";
const bar = "/";

// - NOMBRE: Solo letras y debe tener más de 3 letras.
var nameValid = true;
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
        nameValue.style.border = '2px solid #FF0000';
        return nameValid = false;
    } 
    else if (nameValue.value.length > 0 && nameValue.value.length <= 3) {
        errorContainerN.appendChild(message);
        nameValue.style.border = '2px solid #FF0000';
        return nameValid = false;
    } else {
        for (i of nameValue.value) {
            if (!letters.includes(i)) {
                var message = document.createElement('p');
                errorContainerN.appendChild(message);
                nameValue.style.border = '2px solid #FF0000';
                return nameValid = false;
            }
        }
    }
}

nameValue.addEventListener('focus', nameCorrection);
function nameCorrection() {
    errorContainerN.innerHTML = "";
    nameValue.style.border = '2px solid #39FF14';
    return nameValid = true;
}

// - APELLIDO: Solo letras y debe tener más de 3 letras.
var surnameValid = true;
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
        surname.style.border = '2px solid #FF0000';
        return surnameValid = false;
    } else if (surname.value.length <= 3) {
        errorContainerS.appendChild(message);
        surname.style.border = '2px solid #FF0000';
        return surnameValid = false;
    } else {
        for (i of surname.value) {
            if (!letters.includes(i)) {
                var message = document.createElement('p');
                errorContainerS.appendChild(message);
                surname.style.border = '2px solid #FF0000';
                return surnameValid = false;
            }
        }
    }
}

surname.addEventListener('focus', surnameCorrection);
function surnameCorrection() {
    errorContainerS.innerHTML = "";
    surname.style.border = '2px solid #39FF14';
    return surnameValid = true;
}

// - DNI: Solo número y debe tener más de 7 números.
var IDValid = true;
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
        ID.style.border = '2px solid #FF0000';
        return IDValid = false;
    } else if (ID.value.length <= 7) {
            errorContainerID.appendChild(message);
            ID.style.border = '2px solid #FF0000';
            return IDValid = false;
    } else {
        for (i of ID.value) {
            if (!numbers.includes(i)) {
                var message = document.createElement('p');
                errorContainerID.appendChild(message);
                ID.style.border = '2px solid #FF0000';
                return IDValid = false;
            }
        }
    }
}

ID.addEventListener('focus', IDCorrection);
function IDCorrection() {
    errorContainerID.innerHTML = "";
    ID.style.border = '2px solid #39FF14';
    return IDValid = true;
}

// - FECHA DE NACIMIENTO: Con formato dd/mm/aaaa.
var birthdayValid = true;
birthday.addEventListener('blur', birthdayIncorrect);
toString(birthday);

function birthdayIncorrect() {
    var required = document.createElement('p');
    required.textContent = '*Field required';
    required.style.fontSize = '13px';

    var format = document.createElement('p');
    format.textContent = '*Format required: dd/mm/yyyy';
    format.style.fontSize = '13px';

    var message = document.createElement('p');
    message.textContent = '*Wrong date';
    message.classList.add('error-submit');

    var legalAge = document.createElement('p');
    legalAge.textContent = '*You must be over 18 years old';
    legalAge.classList.add('error-submit');

    var dd = birthday.value.substring(0,2);
    var mm = birthday.value.substring(3,5);
    var yyyy = birthday.value.substring(6,10);

    if (birthday.value == '') {
        errorContainerB.appendChild(required);
        birthday.style.border = '2px solid #FF0000';
        return birthdayValid = false;
    } else if (birthday.value.substring(2,3) !== bar || birthday.value.substring(5,6) !== bar) {
        errorContainerB.appendChild(format);
        birthday.style.border = '2px solid #FF0000';
        return birthdayValid = false;
    } else if (birthday.value.length != 10) {
        errorContainerB.appendChild(format);
        birthday.style.border = '2px solid #FF0000';
        return birthdayValid = false;
    } else if (mm > 12 || yyyy < 1922) {
        errorContainerB.appendChild(message);
        birthday.style.border = '2px solid #FF0000';
        return birthdayValid = false;
    } else if (mm == 02 && dd > 28) {
        errorContainerB.appendChild(message);
        birthday.style.border = '2px solid #FF0000';
        return birthdayValid = false;
    } else if ((mm == 1 || mm == 3 || mm == 5 || mm == 7 || mm == 8 || mm == 10 || mm == 12) && (dd > 31)) {
        errorContainerB.appendChild(message);
        birthday.style.border = '2px solid #FF0000';
        return birthdayValid = false;
    } else if ((mm == 4 || mm == 6 || mm == 9 || mm == 11) && (dd > 30)) {
            errorContainerB.appendChild(message);
            birthday.style.border = '2px solid #FF0000';
            return birthdayValid = false;
    } else if (yyyy > 2004) {
        errorContainerB.appendChild(legalAge);
        birthday.style.border = '2px solid #FF0000';
        return birthdayValid = false;
    } else { 
        for (i of birthday.value) {
            if (!numbers.includes(i) && !bar.includes(i)) {
                errorContainerB.appendChild(format);
                birthday.style.border = '2px solid #FF0000';
                return birthdayValid = false;
            }
        }
    }
}

birthday.addEventListener('focus', birthdayCorrection);
function birthdayCorrection() {
    errorContainerB.innerHTML = "";
    birthday.style.border = '2px solid #39FF14';
    return birthdayValid = true;
}

// - TELÉFONO: Solo número y debe tener 10 números.
var phoneValid = true;
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
        phone.style.border = '2px solid #FF0000';
        return phoneValid = false;
    } else if (phone.value.length != 10) {
            errorContainerPN.appendChild(message);
            phone.style.border = '2px solid #FF0000';
            return phoneValid = false;
    } else {
        for (i of phone.value) {
            if (!numbers.includes(i)) {
                var message = document.createElement('p');
                errorContainerPN.appendChild(message);
                phone.style.border = '2px solid #FF0000';
                return phoneValid = false;
            }
        }
    }
}

phone.addEventListener('focus', phoneCorrection);
function phoneCorrection() {
    errorContainerPN.innerHTML = "";
    phone.style.border = '2px solid #39FF14';
    return phoneValid = true;
}

// - DIRECCIÓN: Al menos 5 caracteres con letras, números y un espacio en el medio.
var adressValid = true;
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
        adress.style.border = '2px solid #FF0000';
        return adressValid = false;
    } else if (adress.value.length > 0 && adress.value.length < 5) {
        errorContainerA.appendChild(message);
        adress.style.border = '2px solid #FF0000';
        return adressValid = false;
    }
    else {
        for (i of adress.value) {
            if (!letterNumbers.includes(i) && !space.includes(i)) {
                errorContainerA.appendChild(message);
                adress.style.border = '2px solid #FF0000';
                return adressValid = false;
            }
        }
    }
}

adress.addEventListener('focus', adressCorrection);
function adressCorrection() {
    errorContainerA.innerHTML = "";
    adress.style.border = '2px solid #39FF14';
    return adressValid = true;
}

// - LOCALIDAD: Texto alfanumérico y debe tener más de 3 letras.
var cityValid = true;
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
        city.style.border = '2px solid #FF0000';
        return cityValid = false;
    } else if (city.value.length <= 3) {
        errorContainerC.appendChild(message);
        city.style.border = '2px solid #FF0000';
        return cityValid = false;
    } else {
        for (i of city.value) {
            if (!letterNumbers.includes(i)) {
                var message = document.createElement('p');
                errorContainerC.appendChild(message);
                city.style.border = '2px solid #FF0000';
                return cityValid = false;
            }
        }
    }
}

city.addEventListener('focus', cityCorrection);
function cityCorrection() {
    errorContainerC.innerHTML = "";
    city.style.border = '2px solid #39FF14';
    return cityValid = true;
}

// - CÓDIGO POSTAL: Solo número y debe tener entre 4 y 5 números.
var ZCValid = true;
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
        ZC.style.border = '2px solid #FF0000';
        return ZCValid = false;
    } else if (ZC.value.length < 4 || ZC.value.length > 4) {
        errorContainerZC.appendChild(message);
        ZC.style.border = '2px solid #FF0000';
        return ZCValid = false;
    } else {
        for (i of ZC.value) {
            if (!numbers.includes(i)) {
                var message = document.createElement('p');
                errorContainerZC.appendChild(message);
                ZC.style.border = '2px solid #FF0000';
                return ZCValid = false;
            }
        }
    }
}

ZC.addEventListener('focus', ZCCorrection);
function ZCCorrection() {
    errorContainerZC.innerHTML = "";
    ZC.style.border = '2px solid #39FF14';
    return ZCValid = true;
}

// - EMAIL: Debe tener un formato de email válido.
var emailValid = true;
email.addEventListener('blur', emailIncorrect);
function emailIncorrect() {
    var required = document.createElement('p');
    required.textContent = '*Field required';
    required.style.fontSize = '13px';

    var regexEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (email.value == '') {
        errorContainerE.appendChild(required);
        email.style.border = '2px solid #FF0000';
        return emailValid = false;
    } else if (!regexEmail.test(email.value)) {   
        var message = document.createElement('p');
        message.textContent = '*Wrong email';
        message.classList.add('error-submit');
        errorContainerE.appendChild(message);
        email.style.border = '2px solid #FF0000';
        return emailValid = false;
    }
}

email.addEventListener('focus', emailCorrection);
function emailCorrection() {
    errorContainerE.innerHTML = "";
    email.style.border = '2px solid #39FF14';
    return emailValid = true;
}

// - CONTRASEÑA: Al menos 8 caracteres, formados por letras y números.
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
        password.style.border = '2px solid #FF0000';
        return passwordValid = false;
    } else if (password.value.length < 8) {
        errorContainerP.appendChild(message);
        password.style.border = '2px solid #FF0000';
        return passwordValid = false;
    } else {
        for (i of password.value) {
            if (!letterNumbers.includes(i)) {
                errorContainerP.appendChild(message);
                password.style.border = '2px solid #FF0000';
                return passwordValid = false;
            }
        }
    }
}

password.addEventListener('focus', passwordCorrection);
function passwordCorrection() {
    errorContainerP.innerHTML = "";
    password.style.border = '2px solid #39FF14';
    return passwordValid = true;
}

// - REPETIR CONTRASEÑA: Al menos 8 caracteres, formados por letras y números
var repeatPasswordValid = true;
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
        repeatPassword.style.border = '2px solid #FF0000';
        return repeatPasswordValid = false;
    } else if (repeatPassword.value.length > 0 && repeatPassword.value.length > 0 && (repeatPassword.value.length <= 8
        || password.value.length < 8 || repeatPassword.value != password.value)) {
        errorContainerRP.appendChild(message);
        repeatPassword.style.border = '2px solid #FF0000';
        return repeatPasswordValid = false;
    }
}

repeatPassword.addEventListener('focus', repeatPasswordCorrection);
function repeatPasswordCorrection() {
    errorContainerRP.innerHTML = "";
    repeatPassword.style.border = '2px solid #39FF14';
    return repeatPasswordValid = true;
}

//Se debe agregar un botón “Create” que al presionarlo se muestre un cartel emergente con la
//información cargada en el formulario en caso de que haya pasado todas las validaciones.
// Si alguna validación no pasó, además de mostrar el error debajo del campo, también se debe
//mostrar el error en el cartel emergente.
function toMonthDayYear(dateToConv){
    var dd = birthday.value.substring(0,2);
    var mm = birthday.value.substring(3,5);
    var yyyy = birthday.value.substring(6,10);
    var dateMDY = [mm, dd, yyyy].join('/')
    return dateMDY
}

function toDayMonthYear(dateToOr){
    var dd = birthday.value.substring(0,2);
    var mm = birthday.value.substring(3,5);
    var yyyy = birthday.value.substring(6,10);
    var dateDMY = [dd, mm, yyyy].join('/')  
    return dateDMY
}

const signupButton = document.getElementById('signup-button');
signupButton.addEventListener("click", clickFunction);

function clickFunction() {
    var nameWrong = ("");
    var surnameWrong = ("");
    var IDWrong = ("");
    var birthdayWrong = ("");
    var phoneWrong = ("");
    var adressWrong = ("");
    var cityWrong = ("");
    var ZCWrong = ("");
    var emailWrong = ("");
    var passwordWrong = ("");
    var repeatPasswordWrong = ("");
    if (nameValue.value == '' || surname.value == '' || ID.value == '' || birthday.value == '' || phone.value == ''
    || adress.value == '' || city.value == '' || ZC.value == '' || email.value == '' || password.value == ''
    || repeatPassword.value == '') {
        alert('All fields are required');
    } else if (nameValid == false || surnameValid == false || IDValid == false || birthdayValid == false
    || phoneValid == false || adressValid == false || cityValid == false || ZCValid == false
    || emailValid == false || passwordValid == false || repeatPasswordValid == false) {
        if (nameValid == false) {
            nameWrong = ("The Name is wrong." + '\n');
        }
        if (surnameValid == false) {
            surnameWrong = ("The Surname is wrong." + '\n');
        }
        if (IDValid == false) {
            IDWrong = ("The ID is wrong." + '\n');
        }
        if (birthdayValid == false) {
            birthdayWrong = ("The Birthday is wrong." + '\n');
        }
        if (phoneValid == false) {
            phoneWrong = ("The Phone is wrong." + '\n');
        }
        if (adressValid == false) {
            adressWrong = ("The Adress is wrong." + '\n');
        }
        if (cityValid == false) {
            cityWrong = ("The City is wrong." + '\n');
        }
        if (ZCValid == false) {
            ZCWrong = ("The Zip Code is wrong." + '\n');
        }
        if (emailValid == false) {
            emailWrong = ("The Email is wrong." + '\n');
        }
        if (passwordValid == false) {
            passwordWrong = ("The Password is wrong." + '\n');
        }
        if (repeatPasswordValid == false) {
            repeatPasswordWrong = ("Repeat Password is wrong." + '\n');
        } 
        alert(nameWrong + surnameWrong + IDWrong + birthdayWrong + phoneWrong + 
        adressWrong + cityWrong + ZCWrong + emailWrong + passwordWrong + repeatPasswordWrong)
    } else if (nameValid == true || surnameValid == true || IDValid == true || birthdayValid == true
    || phoneValid == true || adressValid == true || cityValid == true || ZCValid == true
    || emailValid == true || passwordValid == true || repeatPasswordValid == true) { 
        fetch(`https://basp-m2022-api-rest-server.herokuapp.com/signup?name=${nameValue.value}&lastName=${surname.value}&dni=${ID.value}&dob=${(toMonthDayYear(birthday.value))}&phone=${phone.value}&address=${adress.value}&city=${city.value}&zip=${ZC.value}&email=${email.value}&password=${password.value}&confpassword=${repeatPassword.value}`)
        .then(function(response){
            return response.json();
        })
        .then(function(jsonResponse) {
            if(jsonResponse.success) {
                alert("Name: " + nameValue.value + '\n' +
                "Surname: " + surname.value + '\n' +
                "ID: " + ID.value + '\n' +
                "Birthday: " + birthday.value + '\n' +
                "Phone: " + phone.value + '\n' +
                "Adress: " + adress.value + '\n' +
                "City: " + city.value + '\n' +
                "Zip Code: " + ZC.value + '\n' +
                "Email: " + email.value + '\n' +
                "Password: " + password.value);
                localStorage.setItem("Name", jsonResponse.data.name);
                localStorage.setItem("Surname", jsonResponse.data.lastName);
                localStorage.setItem("ID", jsonResponse.data.dni);
                localStorage.setItem("Birthday", jsonResponse.data.dob);
                localStorage.setItem("Phone", jsonResponse.data.phone);
                localStorage.setItem("Address", jsonResponse.data.address);
                localStorage.setItem("City", jsonResponse.data.city);
                localStorage.setItem("ZipCode", jsonResponse.data.zip);
                localStorage.setItem("Email", jsonResponse.data.email);
                localStorage.setItem("Password", jsonResponse.data.password);
                return true;
            } else {
                return alert('Sign up failed')
            }
        })
        .catch(function (error){
            console.log("Error: ", error);
        })
    }
}

function localSt() {
    nameValue.value = localStorage.getItem("Name");
    surname.value = localStorage.getItem("Surname");
    ID.value = localStorage.getItem("ID");
    birthday.value = localStorage.getItem("Birthday");
    phone.value = localStorage.getItem("Phone");
    adress.value = localStorage.getItem("Address");
    city.value = localStorage.getItem("City");
    ZC.value = localStorage.getItem("ZipCode");
    email.value = localStorage.getItem("Email");
    password.value = localStorage.getItem("Password");
    repeatPassword.value = localStorage.getItem("Password");
}

document.addEventListener("DOMContentLoaded", localSt);