let input = document.getElementById("input");
let btn = document.getElementById("btn");
let image = document.getElementById("image");

btn.addEventListener("click", () => {
    image.setAttribute("src", "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value);
});