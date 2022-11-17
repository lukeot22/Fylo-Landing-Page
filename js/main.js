
let email = document.createElement('div');
email.innerHTML = "Please check your email"
email.className = "output"

let field = document.querySelector("#email")

const pattern = 
/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function checkemail() {
    if(field.value.match(pattern)){
        console.log("Valid")
        field.value = "";
        email.remove();
    }else{
        console.log("invalid");
        document.querySelector('.mail-input').append(email);
    }
}

let email1 = document.createElement('div');
email1.innerHTML = "Please check your email"
email1.className = "output1"

let field1 = document.querySelector("#email1")

function checkemail1() {
    if(field1.value.match(pattern)){
        console.log("Valid")
        field1value = "";
        email1.remove();
    }else{
        console.log("invalid");
        document.querySelector('.mail-input1').append(email1);
    }
}
