let lang = document.getElementById("language")
let email = document.getElementById("email")
let element = document.getElementById("my-nav");
function setLanguage() {
    if (lang.innerHTML === 'Fr') {
        return lang.innerHTML = 'En'
    } else if (lang.innerHTML === 'En') {
        return lang.innerHTML = 'Fr'
    } else {
        return lang.innerHTML = 'En'
    }
}
function toggle() {
    element.classList.toggle("active");
}
function validEmail() {
    if (email.value.trim() === '') {
        document.getElementById('error-msg').innerHTML = "Please enter your adress mail";
    }
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        document.getElementById('error-msg').innerHTML = " You have entered an invalid email address!";
    }
    else {
        document.getElementById('error-msg').innerHTML = " Thank you for your registration.";
        email.value = ''
        setTimeout(() => {
            document.getElementById('error-msg').innerHTML = ''
        }, 3000);
    }
}