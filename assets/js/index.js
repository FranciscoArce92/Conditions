const logo = document.querySelector("img[alt='Logo']");

logo.addEventListener("click", () => {
    if (logo.style.border != "") {
        logo.style.border = "";
    } else {
        logo.style.border = "2px solid red";
        logo.style.borderRadius = "10px"
    }
});