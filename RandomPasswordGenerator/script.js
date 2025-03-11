document.getElementById("gen-button").addEventListener("click", function(){
    const inputLenght = document.getElementById("input-number").value;
    let useLowerChars = false;
    let useUpperChars = false;
    let useNumbers = false;
    let useSymbols = false;
    
    useLowerChars = chceckCheckedCheckbox("Lowercase-chceckbox", useLowerChars);
    useUpperChars = chceckCheckedCheckbox("Uppercase-checkbox", useUpperChars);
    useNumbers = chceckCheckedCheckbox("number-chceckbox", useNumbers);
    useSymbols = chceckCheckedCheckbox("symbol-checkbox", useSymbols);
    
    if(!useLowerChars && !useUpperChars && !useNumbers && !useSymbols){
        useLowerChars = true;
    }

   
   document.getElementById("your-new-password").innerHTML = generatePassowrd(inputLenght, useLowerChars, useUpperChars, useNumbers, useSymbols);
});

function copyMe(){
    var copyPassword = document.getElementById("your-new-password").innerText;

    navigator.clipboard.writeText(copyPassword).then(function(){
        alert("Pasword" + copyPassword + "has been copied");
    }).catch(function(err) {
            console.error('cos sie wyjebalo: ', err);
        });
   
}




function chceckCheckedCheckbox( id , toChceck){
    if(document.getElementById(id).checked){
        toChceck = true;
    }
    return toChceck;
}


function generatePassowrd(passwordLenght, includelowedChars, includeUpperChars, includeNumbersChars, includeSymbolsChars){
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers ="0123456789";
    const symbols = "!@#$%^&*()-_=+[]{}|;:,.<>?/"

    let allowedChars = ""
    let realpassword =  ""
    
    if(includelowedChars){
        allowedChars += lowerChars;
    }
    if(includeUpperChars){
        allowedChars += upperChars;
    }
    if(includeNumbersChars){
        allowedChars += numbers;
    }
    if(includeSymbolsChars){
        allowedChars += symbols;
    }

    for (let index = 0; index < passwordLenght; index++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        realpassword += allowedChars[randomIndex];
    }

    return realpassword;

}