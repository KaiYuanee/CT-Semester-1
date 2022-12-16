var text_username = document.getElementById("text_username");
var text_phone_number = document.getElementById("text_phone_number");
var text_email = document.getElementById("text_email");
var checkbox_male = document.getElementById("checkbox_male");
var checkbox_female = document.getElementById("checkbox_female");
var password_password = document.getElementById("password_password");
var btn_sign_up = document.getElementById("btn_sign_up");
var btn_back = document.getElementById("btn_back");

btn_sign_up.addEventListener("click", function () {
    alert("Failed to create an account!");
});
btn_back.addEventListener("click", function () {
    window.location.href = "index.html";
});