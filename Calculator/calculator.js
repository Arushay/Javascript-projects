console.log('calculator');
let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';

for (const item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log(buttonText);
        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText == 'c') {
            screenValue = "";
            screen.value = screenValue;

        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}