// Modal de Login
let modal = document.getElementById("modal");
let btn = document.getElementById("btn-login");
let span = document.getElementsByClassName("close")[0];
let dataAlert = document.getElementById("invalid-data-alert");

btn.onclick = function () {
    modal.style.display = "block";
    console.log("modal")
}

span.onclick = function () {
    modal.style.display = "none";
    dataAlert.style.visibility = "hidden";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Validación datos Login 
let email = document.getElementById("email");
let password = document.getElementById("password");
let submitBtn = document.getElementById("btn-form-login");
let loginBtn = document.getElementById("btn-login");
let logoutBtn = document.getElementById("btn-logout");

function validEmail(input) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(input)
}

function validPassword(pass) {
    const passwordRegex = /^(?=.*[a-zA-Z]).{8,12}$/;
    return passwordRegex.test(pass)
}

function clearInput(email, password) {
    email = "";
    password = "";
}

submitBtn.addEventListener("click", validData);

function validData(e) {
    e.preventDefault();

    if (!validEmail(email.value) || email.value.trim() == "" || email.value.trim() == null ||
        !validPassword(password.value) || password.value.trim() == "" || password.value.trim() == null) {
        console.log("Datos incorrectos")
        dataAlert.style.visibility = "visible"
        return false
    } else {
        console.log("Listo")
        dataAlert.style.visibility = "hidden"
        loginBtn.style.display = "none"
        logoutBtn.style.display = "block"
        modal.style.display = "none"
        clearInput(email, password)
        return true
    }
}


// Modal de Registro de usuario
let modalSignUp = document.getElementById("signup-modal");
let btnSignUp = document.getElementById("btn-form-register");
let spanSignUp = document.getElementsByClassName("close-signup")[0];
let dataAlertSignUp = document.getElementById("invalid-data-alert-signup");
let body = document.getElementsByTagName("body");

btnSignUp.onclick = function (e) {
    e.preventDefault()
    modal.style.display = "none";
    dataAlert.style.visibility = "hidden";
    //body[0].style.opacity = "0.2";
    modalSignUp.style.display = "block";
}

spanSignUp.onclick = function () {
    modalSignUp.style.display = "none";
    dataAlertSignUp.style.visibility = "hidden";
}

window.onclick = function (event) {
    if (event.target == modalSignUp) {
        modalSignUp.style.display = "none";
    }
}


// Validación datos Registro
let username = document.getElementById("username");
let lastname = document.getElementById("lastname");
let newEmail = document.getElementById("new-user-email");
let newPassword = document.getElementById("new-user-password");
let createBtn = document.getElementById("btn-create-account");

function validUser(input) {
    const inputRegex = /^[a-zA-Z]*$/;
    return inputRegex.test(input)
}

function clearInputSignUp(username, lastname, newEmail, newPassword) {
    username = "";
    lastname = "";
    newEmail = "";
    newPassword = "";
}

createBtn.addEventListener("click", validDataSignUp);

function validDataSignUp(e) {
    e.preventDefault();

    if (!validUser(username.value) || username.value.trim() == "" || username.value.trim() == null ||
        !validUser(lastname.value) || lastname.value.trim() == "" || lastname.value.trim() == null ||
        !validEmail(newEmail.value) || newEmail.value.trim() == "" || newEmail.value.trim() == null ||
        !validPassword(newPassword.value) || newPassword.value.trim() == "" || newPassword.value.trim() == null) {
        console.log("Datos incorrectos")
        dataAlertSignUp.style.visibility = "visible"
        return false
    } else {
        console.log("Listo")
        dataAlertSignUp.style.visibility = "hidden"
        loginBtn.style.display = "none"
        modalSignUp.style.display = "none"
        logoutBtn.style.display = "block"
        clearInputSignUp(username, lastname, newEmail, newPassword)
        return true
    }
}


// Funcion que valida boton Ver entradas
let select = document.getElementById("select-date");
let ticketsBtn = document.getElementById("btn-event-tickets");

const redirectToTickets = () => {
    if (select.value == 1 || select.value == 2) {
        ticketsBtn.disabled = false
        console.log("buena eleccion")
    } else {
        ticketsBtn.disabled = true
        console.log("elegir opcion")
    }
}

select.addEventListener("change", redirectToTickets)


// Funcion que redirige a pagina de Compra
const purchase = () => {
    window.location.href = "../Compra/index.html"
}

ticketsBtn.addEventListener("click", purchase);


// Funcion para cerrar sesión 
logoutBtn.addEventListener("click", logout);

function logout(e) {
    e.preventDefault();

    logoutBtn.style.display = "none"
    loginBtn.style.display = "block"
}
