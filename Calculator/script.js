function checkIfToCalculate(value) {
    let parts = value.split(" ");
    let operators = "+-*/";
    
    if (parts.length >= 3 && operators.includes(parts[1])) {
        return Calculate(parts);
    }
    return null;
}

function addToInput(whatToAdd) {
    let inputValue = document.getElementById("input-id").value;
    let lastCharacter = inputValue[inputValue.length - 1];

    let operators = "+-*/";

    let result = checkIfToCalculate(inputValue);
    if (result !== null && operators.includes(whatToAdd)) {
        inputValue = result; 
    }

    if (operators.includes(whatToAdd)) {
        if (operators.includes(lastCharacter)) {
            alert("Nie możesz dodać kolejnego operatora.");
            return;
        }
        inputValue += " " + whatToAdd;
    } else {
        if (operators.includes(lastCharacter)) {
            inputValue += " " + whatToAdd;
        } else {
            inputValue += whatToAdd;
        }
    }

    document.getElementById("input-id").value = inputValue;
}

function ClearInput() {
    document.getElementById("input-id").value = '';
}
   function CalculateByButton(){
        let inputValue = document.getElementById("input-id").value;

        let result;

        let parts = inputValue.split(" ");

        let firstDigit = parseFloat(parts[0]) ;
        let oparator = parts[1];
        let secondDigit = parseFloat(parts[2]) ;
        
        switch ( oparator ) {
            case '+': 
                result = firstDigit + secondDigit;
                break;
            case '-':
                result = firstDigit - secondDigit;
                break;

            case '*':
                result = firstDigit * secondDigit;
                break;

            case '/':
                if( secondDigit === 0){
                    alert("nie mozna dzeielic przez 0")
                    return;
                }
                result = firstDigit / secondDigit;
                break;
            default:
                return;                
        }
        document.getElementById("input-id").value = result;
    }

function Calculate(parts = null) {
    let inputValue = document.getElementById("input-id").value;
    
    if (!parts) {
        parts = inputValue.split(" ");
    }

    if (parts.length < 3) {
        return null;
    }

    let firstDigit = parseFloat(parts[0]);
    let operator = parts[1];
    let secondDigit = parseFloat(parts[2]);

    let result;
    switch (operator) {
        case '+':
            result = firstDigit + secondDigit;
            break;
        case '-':
            result = firstDigit - secondDigit;
            break;
        case '*':
            result = firstDigit * secondDigit;
            break;
        case '/':
            if (secondDigit === 0) {
                alert("Nie można dzielić przez 0");
                return null;
            }
            result = firstDigit / secondDigit;
            break;
        default:
            return null;
    }
    return result;
}