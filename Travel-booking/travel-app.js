// travel app 
console.log('validation using regex');
let userName = document.getElementById('userName');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let validEmail = false;
let validName = false;
let validPhone = false;

userName.addEventListener('blur', () => {

    let regex = /^[a-zA-Z]([0-9a-zA-Z]){0,10}$/;
    let str = userName.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('it mached');
        userName.classList.remove('is-invalid');
        validName = true;
    }
    else {
        userName.classList.add('is-invalid');
        let validName = false;
    }
})

email.addEventListener('blur', () => {
    console.log('email clicked');
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('it mached');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        email.classList.add('is-invalid');
        let validEmail = false;
    }
})

phone.addEventListener('blur', () => {
    console.log('phone clicked');
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('it mached');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (validEmail && validName && validPhone) {
        console.log('submited form')
        let success = document.getElementById('success');
        success.classList.add('show');
        
    } else {
        console.log('invalid data')
        let error = document.getElementById('error');
        error.classList.add('show');
    }
})