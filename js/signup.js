let signupName=document.getElementById('signupName')
let validname=document.getElementById('validname')
let signupEmail=document.getElementById('signupEmail')
let validmail=document.getElementById('validmail')
let signupPassword=document.getElementById('signupPassword')
let validpass=document.getElementById('validpass')
let submit=document.getElementById('submit')
let validreg=document.getElementById('validreg')

let getEmail = localStorage.getItem('email');
let getPass = localStorage.getItem('Password');
let getName = localStorage.getItem('Name');

// console.log(signupName)
// console.log(validname)
// console.log(signupEmail)
// console.log(validmail)
// console.log(signupPassword)
// console.log(validpass)
// console.log(submit)
submit.addEventListener( 'click' ,register)
function register(){
    if (validationName() == true&& validationEmail() == true && validationPass() == true) {
        localStorage.setItem('email' , signupEmail.value );
        localStorage.setItem('Name' , signupName.value );
        localStorage.setItem('Password' , signupPassword.value);
        window.location="login.html"
       
    } else {
        validreg.classList.replace('d-none','d-block')
        signupEmail.classList.add('is-invalid')
        signupPassword.classList.add('is-invalid')

    }
}

signupName.addEventListener("blur",validationName)
function validationName(){
    var signupName_REGEX=/^[A-Za-z][A-Za-z0-9_]{7,29}$/;
    if(signupName_REGEX.test(signupName.value) == true){
        validname.classList.replace('d-block','d-none')
        signupName.classList.add('is-valid')
        signupName.classList.remove('is-invalid')
        return true
    }else{
        validname.classList.replace('d-none','d-block')
        signupName.classList.add('is-invalid')
        signupName.classList.remove('is-valid')
return false
    }
}

signupEmail.addEventListener("blur",validationEmail)
function validationEmail(){
    var Email_REGEX=/^([a-z0-9]+)@([a-z]+)(\.[a-zA-Z]{2,5})$/;
    if(Email_REGEX.test(signupEmail.value ) == true){
        validmail.classList.replace('d-block','d-none')
        signupEmail.classList.add('is-valid')
        signupEmail.classList.remove('is-invalid')
        return true
    }else{
        validmail.classList.replace('d-none','d-block')
        signupEmail.classList.add('is-invalid')
        signupEmail.classList.remove('is-valid')
return false
    }
}
signupPassword.addEventListener("blur",validationPass)
function validationPass(){
    var Password_REGEX=/^[a-z]{5,10}[0-9]{5,10}$/
    if(Password_REGEX.test(signupPassword.value) == true){
        validpass.classList.replace('d-block','d-none')
        signupPassword.classList.add('is-valid')
        signupPassword.classList.remove('is-invalid')
        return true
    }else{
        validpass.classList.replace('d-none','d-block')
        signupPassword.classList.add('is-invalid')
        signupPassword.classList.remove('is-valid')
return false
    }
}


