const buttons = document.querySelectorAll('button');
const inp = document.querySelector('#screen');

for (let button of buttons) {
    button.addEventListener('click', (e) => {
        
        // const buttonText = button.innerText;
        // console.log(buttonText);
        //or
        const buttonText = e.target.innerText;
        
        if (buttonText === 'C') {
            inp.value = '';
        }
        else if (buttonText === "x") {
            inp.value += '*';
        }
        else if (buttonText === '=') {
            try {
                inp.value = eval(inp.value);
            }
            catch (e) {
                inp.value='Error';
            }
        }   
        else {
            inp.value += buttonText;
        }
        // console.log(inp.value)
        
    })
    document.addEventListener('keypress',function(e){
        if(e.key === 'Enter'){
            try {
                inp.value = eval(inp.value);
            }
            catch (e) {
                inp.value='Error';
            }
        }
    })
}