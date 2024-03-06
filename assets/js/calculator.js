window.onload = function () {
    addInputBox();
    calculateResult(); // Calcular el resultado inicial
    addChangeListener(); // Agregar event listener a los inputs
    var operatorInput = document.getElementById('display');
    operatorInput.addEventListener('input', function() {
        calculateResult(); // Calcular el resultado cada vez que cambia el operador matemático
    });
}

function addInputBox() {
    var inputBoxes = document.getElementById('inputBoxes');
    var inputBox = document.createElement('input');
    inputBox.type = 'text';
    inputBox.className = 'list-group-item list-group-item-primary rounded m-1';
    inputBoxes.appendChild(inputBox);
    addChangeListener(); // Agregar event listener al nuevo input
}

function removeInputBox() {
    var inputBoxes = document.getElementById('inputBoxes');
    if (inputBoxes.childElementCount > 1) {
        inputBoxes.removeChild(inputBoxes.lastChild);
        calculateResult(); // Calcular el resultado cada vez que se elimina un input
    }
}

function addToDisplay(value) {
    var display = document.getElementById('display');
    display.value = value;
    calculateResult(); // Calcular el resultado cada vez que se cambia el operador matemático
}

function addChangeListener() {
    var inputBoxes = document.getElementById('inputBoxes').querySelectorAll('input');
    inputBoxes.forEach(function(input) {
        input.addEventListener('input', function() {
            calculateResult(); // Calcular el resultado cada vez que cambia el contenido de los inputBoxes
        });
    });
}

function calculateResult() {
    var inputBoxes = document.getElementById('inputBoxes');
    var numbers = [];
    var output = document.getElementById('output');
    for (var i = 0; i < inputBoxes.childElementCount; i++) {
        var value = inputBoxes.children[i].value;
        if (!isNaN(parseFloat(value))) {
            numbers.push(parseFloat(value));
        }
    }
    var display = document.getElementById('display');
    var operator = display.value;
    var result = numbers[0];

    switch (operator) {
        case '+':
            for (var i = 1; i < numbers.length; i++) {
                result += numbers[i];
            }
            break;
        case '-':
            for (var i = 1; i < numbers.length; i++) {
                result -= numbers[i];
            }
            break;
        case '*':
            for (var i = 1; i < numbers.length; i++) {
                result *= numbers[i];
            }
            break;
        case '/':
            for (var i = 1; i < numbers.length; i++) {
                result /= numbers[i];
            }
            break;
        case 'Promedio':
            for (var i = 1; i < numbers.length; i++) {
                result += numbers[i];
            }
            result = result / numbers.length;
            break;

        default:
            result = '?';
            break;
    }
    output.value = result;
}
