
let signinEmail=document.getElementById('signinEmail')
let validemail=document.getElementById('validemail')
let signinPassword=document.getElementById('signinPassword')
let validpass=document.getElementById('validpass')
let submit=document.getElementById('submit')
let validreg=document.getElementById('validreg')


let getEmail = localStorage.getItem('email');
let getPass = localStorage.getItem('Password');
let getName = localStorage.getItem('Name');

// console.log(signinEmail)
// console.log(validemail)
// console.log(signinPassword)
// console.log(validpass)
// console.log(submit)
submit.addEventListener('click', login);

function login(e) {
    e.preventDefault()
    if (signinEmail.value === '' && signinPassword.value === '' ) {
        validreg.classList.replace('d-none','d-block')
        signinEmail.classList.add('is-invalid')
        signinPassword.classList.add('is-invalid')
    }
        else{
        if(signinEmail.value === '' || signinPassword.value === '' ){
            alert('Please complete your data')
        }
        if (getEmail&&  getEmail.trim() == signinEmail.value.trim() && getPass && getPass.trim()== signinPassword.value.trim() ) {
            window.location='welcome.html'
        } else {
            alert('may your email or paassword is wrong ')
        }
    } 
}
signinEmail.addEventListener("blur",validationEmail)
function validationEmail(){
    var Email_REGEX=/^([a-z0-9]+)@([a-z]+)(\.[a-zA-Z]{2,5})$/;
    if(Email_REGEX.test(signinEmail.value) == true){
        validemail.classList.replace('d-block','d-none')
        signinEmail.classList.add('is-valid')
        signinEmail.classList.remove('is-invalid')
        return true
    }else{
        validemail.classList.replace('d-none','d-block')
        signinEmail.classList.add('is-invalid')
        signinEmail.classList.remove('is-valid')
return false
    }
}
signinPassword.addEventListener("blur",validationPass)
function validationPass(){
    var Password_REGEX=/^[a-z]{5,10}[0-9]{5,10}$/
    if(Password_REGEX.test(signinPassword.value) == true){
        validpass.classList.replace('d-block','d-none')
        signinPassword.classList.add('is-valid')
        signinPassword.classList.remove('is-invalid')
        return true
    }else{
        validpass.classList.replace('d-none','d-block')
        signinPassword.classList.add('is-invalid')
        signinPassword.classList.remove('is-valid')
return false
    }
}