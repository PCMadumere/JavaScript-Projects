var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName(){
    var name = document.getElementById("contact-name").value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>'
    return true;
}

function validatePhone(){
    var phone = document.getElementById("contact-phone").value;

    if(phone.length == 0){
        phoneError.innerHTML = "Phone no is required";
        return false;
    }
    if(phone.length !== 11 || phone.length > 11){
        phoneError.innerHTML = "Phone no should be 11 digits";
        return false;
    }
    if(!phone.match(/^[0-9]{11}$/)){
        phoneError.innerHTML = "Use only digits";
        return false;
    }

    phoneError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>'
    return true;
}

function validateEmail(){
    var email = document.getElementById("contact-email").value;

    
}










