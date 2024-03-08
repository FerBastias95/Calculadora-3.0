function convertirDistancia() {
    const valor1 = parseFloat(document.getElementById('valor_distancia1').value);
    const unidad1 = parseInt(document.getElementById('unidad_distancia1').value);
    const unidad2 = parseInt(document.getElementById('unidad_distancia2').value);
    let resultado;

    switch (unidad1) {
        case 1: // Metros
            switch (unidad2) {
                case 1: // Metros
                    resultado = valor1;
                    break;
                case 2: // Kilómetros
                    resultado = valor1 / 1000;
                    break;
                case 3: // Milímetros
                    resultado = valor1 * 1000;
                    break;
                case 4: // Pulgadas
                    resultado = valor1 * 39.3701;
                    break;
                case 5: // Yardas
                    resultado = valor1 * 1.09361;
                    break;
                case 6: // Pies
                    resultado = valor1 * 3.28084;
                    break;
            }
            break;
        case 2: // Kilómetros
            switch (unidad2) {
                case 1: // Metros
                    resultado = valor1 * 1000;
                    break;
                case 2: // Kilómetros
                    resultado = valor1;
                    break;
                case 3: // Milímetros
                    resultado = valor1 * 1000000;
                    break;
                case 4: // Pulgadas
                    resultado = valor1 * 39370.1;
                    break;
                case 5: // Yardas
                    resultado = valor1 * 1093.61;
                    break;
                case 6: // Pies
                    resultado = valor1 * 3280.84;
                    break;
            }
            break;
        case 3: // Milímetros
            switch (unidad2) {
                case 1: // Metros
                    resultado = valor1 / 1000;
                    break;
                case 2: // Kilómetros
                    resultado = valor1 / 1000000;
                    break;
                case 3: // Milímetros
                    resultado = valor1;
                    break;
                case 4: // Pulgadas
                    resultado = valor1 / 25.4;
                    break;
                case 5: // Yardas
                    resultado = valor1 / 914.4;
                    break;
                case 6: // Pies
                    resultado = valor1 / 304.8;
                    break;
            }
            break;
        // Agregar los casos para otras unidades si es necesario
    }

    document.getElementById('valor_distancia2').value = resultado.toFixed(2);
}

document.getElementById('unidad_distancia1').addEventListener('change', convertirDistancia);
document.getElementById('unidad_distancia2').addEventListener('change', convertirDistancia);


function convertirMasa() {
    const valor1 = parseFloat(document.getElementById('valor_masa1').value);
    const unidad1 = parseInt(document.getElementById('unidad_masa1').value);
    const unidad2 = parseInt(document.getElementById('unidad_masa2').value);

    let resultado;

    switch (unidad1) {
        case 1: // Kilogramo
            switch (unidad2) {
                case 1: // Kilogramo
                    resultado = valor1;
                    break;
                case 2: // Gramo
                    resultado = valor1 * 1000;
                    break;
                case 3: // Miligramo
                    resultado = valor1 * 1000000;
                    break;
                case 4: // Libra
                    resultado = valor1 * 2.20462;
                    break;
                case 5: // Onza
                    resultado = valor1 * 35.274;
                    break;
            }
            break;
        case 2: // Gramo
            switch (unidad2) {
                case 1: // Kilogramo
                    resultado = valor1 / 1000;
                    break;
                case 2: // Gramo
                    resultado = valor1;
                    break;
                case 3: // Miligramo
                    resultado = valor1 * 1000;
                    break;
                case 4: // Libra
                    resultado = valor1 * 0.00220462;
                    break;
                case 5: // Onza
                    resultado = valor1 * 0.035274;
                    break;
            }
            break;
        case 3: // Miligramo
            switch (unidad2) {
                case 1: // Kilogramo
                    resultado = valor1 / 1000000;
                    break;
                case 2: // Gramo
                    resultado = valor1 / 1000;
                    break;
                case 3: // Miligramo
                    resultado = valor1;
                    break;
                case 4: // Libra
                    resultado = valor1 * 2.20462e-6;
                    break;
                case 5: // Onza
                    resultado = valor1 * 3.5274e-5;
                    break;
            }
            break;
        case 4: // Libra
            switch (unidad2) {
                case 1: // Kilogramo
                    resultado = valor1 * 0.453592;
                    break;
                case 2: // Gramo
                    resultado = valor1 * 453.592;
                    break;
                case 3: // Miligramo
                    resultado = valor1 * 453592;
                    break;
                case 4: // Libra
                    resultado = valor1;
                    break;
                case 5: // Onza
                    resultado = valor1 * 16;
                    break;
            }
            break;
        case 5: // Onza
            switch (unidad2) {
                case 1: // Kilogramo
                    resultado = valor1 * 0.0283495;
                    break;
                case 2: // Gramo
                    resultado = valor1 * 28.3495;
                    break;
                case 3: // Miligramo
                    resultado = valor1 * 28349.5;
                    break;
                case 4: // Libra
                    resultado = valor1 * 0.0625;
                    break;
                case 5: // Onza
                    resultado = valor1;
                    break;
            }
            break;
    }

    document.getElementById('valor_masa2').value = resultado.toFixed(2);
}

// Evento para actualizar la conversión al cambiar una unidad de medida de masa
document.getElementById('unidad_masa1').addEventListener('change', convertirMasa);
document.getElementById('unidad_masa2').addEventListener('change', convertirMasa);

function habilitarCampos(tipo) {
    const unidad1 = document.getElementById(`unidad_${tipo}1`).value;
    const unidad2 = document.getElementById(`unidad_${tipo}2`).value;

    const campo1 = document.getElementById(`valor_${tipo}1`);
    const campo2 = document.getElementById(`valor_${tipo}2`);

    campo1.disabled = unidad1 === 'Unidad 1' || unidad2 === 'Unidad 2';
    campo2.disabled = unidad1 === 'Unidad 1' || unidad2 === 'Unidad 2';

    if (!campo1.disabled && !campo2.disabled) {
        if (tipo === 'distancia') {
            convertirDistancia();
        } else if (tipo === 'masa') {
            convertirMasa();
        }
    }
}

document.getElementById('unidad_distancia1').addEventListener('change', () => habilitarCampos('distancia'));
document.getElementById('unidad_distancia2').addEventListener('change', () => habilitarCampos('distancia'));
document.getElementById('valor_distancia1').addEventListener('input', convertirDistancia);

document.getElementById('unidad_masa1').addEventListener('change', () => habilitarCampos('masa'));
document.getElementById('unidad_masa2').addEventListener('change', () => habilitarCampos('masa'));
document.getElementById('valor_masa1').addEventListener('input', convertirMasa);

habilitarCampos('distancia');
habilitarCampos('masa');
