// ---------------- Parte 1 - Logo con borde ---------------
const logo = document.querySelector("img[alt='Logo']");

logo.addEventListener("click", () => {
    if (logo.style.border != "") {
        logo.style.border = "";
    } else {
        logo.style.border = "2px solid red";
        logo.style.borderRadius = "10px"
    }
});

// ------------ Parte 2 - Stickers --------------------
let minus = document.querySelectorAll(".minus"),
plus = document.querySelectorAll(".plus"),
number = document.querySelectorAll("input"),
message = document.querySelector("#message");

//Contadores
let aux1 = 0,
aux2 = 0,
aux3 = 0;

//Contador de incremento
plus.forEach((ele, index) => {
    ele.addEventListener("click", () => {

        if(index === 0 && number[0].value < 10) {
            aux1++;
            number[0].value = aux1;
        } else if(index === 1 && number[1].value < 10) {
            aux2++;
            number[1].value = aux2;
        } else if (index === 2 && number[2].value < 10) {
            aux3++;
            number[2].value = aux3;
        }
    });
})

//Contador de decremento
minus.forEach((ele, index) => {

    ele.addEventListener("click", () => {

        if(index === 0 && number[0].value > 0){
            aux1--;
            number[0].value = aux1;
        } else if(index === 1 && number[1].value > 0) {
            aux2--;
            number[1].value = aux2;
        } else if(index === 2 && number[2].value > 0){
            aux3--;
            number[2].value = aux3;
        }
    })
})

//Función validar
const validate = () => {
    let total = 0;
    number.forEach((value) => {
        total += parseInt(value.value);
    })
    if (total === 0) {
        message.style.color = "red";
        message.innerHTML = "Debes elegir al menos 1 sticker";
    } else if (total > 0 && total <= 10) {
        message.style.color = "green";
        message.innerHTML = `<strong>Disponible</strong>: Llevas ${total} stickers`;
    } else {
        message.style.color = "red";
        message.innerHTML = "Llevas demasiados stickers";
    }

}


// ------------ Parte 3 - Password --------------------
const digit1 = document.getElementById("digit1"),
digit2 = document.getElementById("digit2"),
digit3 = document.getElementById("digit3"),
passwordMessage = document.getElementById("passMessage");

const validatePassword = () => {
    let password = digit1.value + digit2.value + digit3.value;

    if(password === "911") {
        passwordMessage.style.color = "green";
        passwordMessage.innerHTML = "<strong>Password 1 correcta</strong>";
    } else if (password === "714") {
        passwordMessage.style.color = "green";
        passwordMessage.innerHTML = "<strong>Password 2 correcta</strong>";
    } else {
        passwordMessage.style.color = "red";
        passwordMessage.innerHTML = `Password ${password} incorrecta`;
    }

}