var text_username = document.getElementById("text_username");
var password_password = document.getElementById("password_password");
var btn_sign_in = document.getElementById("btn_sign_in");
var btn_create_an_account = document.getElementById("btn_create_an_account");

btn_sign_in.addEventListener("click", function () {
    if (text_username.value == "a" && password_password.value == "a") {
        alert("Successful user login!");
        window.location.href = "main.html";
    } else {
        alert("Failed to sign in!");
    }
    text_username.value = "", password_password.value = "";
});
btn_create_an_account.addEventListener("click", function () {
    window.location.href = "create_an_account.html";
});