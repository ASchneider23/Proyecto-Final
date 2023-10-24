// Funcion para cancelar compra, te redirige a la Home
let btnCancel = document.getElementById("btn-cancel");

const cancelPurchase = () => {
    window.location.href = "../../Home/index.html"
}

btnCancel.addEventListener("click", cancelPurchase);


// Funcion para confirmar la compra
let btnConfirm = document.getElementById("btn-confirm");
let modalToHome = document.getElementById("redirect-modal");

const confirmPurchase = () => {
    modalToHome.style.display = "block"
    setTimeout(() => {
        window.location.href = "../../Home/index.html"
    }, 5000);
    
}

btnConfirm.addEventListener("click", confirmPurchase);