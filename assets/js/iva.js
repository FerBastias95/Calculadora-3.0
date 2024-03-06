var start = 0;

window.onload = function () {
    addInputBoxes();
}

function updateValorFinals() {
    var rows = document.querySelectorAll('#inputBoxes tr');
    rows.forEach(function (row) {
        var valorOriginalInput = row.querySelector('.valorOriginal');
        var valorFinalInput = row.querySelector('.valorFinal');

        if (valorOriginalInput.value.trim() !== '') {
            calculateValorFinal(row);
        }
    });
}

document.getElementById('valorIVA').addEventListener('input', updateValorFinals);


function addInputBoxes() {
    var inputBoxes = document.getElementById('inputBoxes');
    var newRow = document.createElement('tr');

    // Create and append 4 cells for each row
    for (var i = 0; i < 5; i++) {
        var newCell = document.createElement('td');

        if (i === 0) {
            var firstInput = document.createElement('input');
            firstInput.type = 'text';
            firstInput.className = 'form-control first-column';
            newCell.appendChild(firstInput);
        } else if (i === 1) {
            var numericInput = document.createElement('input');
            numericInput.type = 'number';
            numericInput.className = 'form-control cantidad';
            newCell.appendChild(numericInput);
        } else if (i === 2) {
            var numericInput = document.createElement('input');
            numericInput.type = 'number';
            numericInput.className = 'form-control valorOriginal';
            newCell.appendChild(numericInput);
        } else if (i === 3) {
            var numericInput = document.createElement('input');
            numericInput.type = 'number';
            numericInput.className = 'form-control valorFinal';
            numericInput.readOnly = true;
            newCell.appendChild(numericInput);
        } else if (i === 4) {
            var button = document.createElement('button');
            button.type = 'button';
            button.className = 'btn btn-danger';

            // Add trash can icon
            var trashCanIcon = document.createElement('img');
            trashCanIcon.src = 'https://static-00.iconduck.com/assets.00/delete-icon-256x256-9x92mtma.png';
            trashCanIcon.alt = 'Delete';
            trashCanIcon.style.width = '20px';
            trashCanIcon.style.height = '20px';
            button.appendChild(trashCanIcon);

            button.addEventListener('click', function () {
                // Check if there is more than one row before removing
                if (inputBoxes.rows.length > 1) {
                    inputBoxes.removeChild(newRow);
                }
            });
            newCell.appendChild(button);
        }

        newRow.appendChild(newCell);
    }

    // Append the new row to the tbody
    inputBoxes.appendChild(newRow);

    newRow.addEventListener('input', function (event) {
        if (event.target.classList.contains('valorOriginal') || event.target.classList.contains('taxes')) {
            calculateValorFinal(newRow);
        } else if (event.target.classList.contains('cantidad')) { // Add event listener for cantidad input
            calculateValorFinal(newRow);
        }
    });
}


function calculateValorFinal(row) {
    var valorOriginalInput = row.querySelector('.valorOriginal');
    var valorFinalInput = row.querySelector('.valorFinal');
    var valorIVAInput = document.getElementById('valorIVA');
    
    // Get the cantidad input from the current row
    var cantidadInput = row.querySelector('.cantidad');
    
    // Get the value of the cantidad input
    var cantidad = cantidadInput.value.trim() !== '' ? parseFloat(cantidadInput.value) : 0;
    
    // Calculate valorFinal based on valorOriginal, valorIVA, and cantidad
    var valorFinal = cantidad * (parseFloat(valorOriginalInput.value) + parseFloat(valorOriginalInput.value) * parseFloat(valorIVAInput.value) / 100);

    // Update the valorFinal input with the calculated value
    valorFinalInput.value = isNaN(valorFinal) ? '' : valorFinal.toFixed(2);
}
