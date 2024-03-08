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
        case 4: // Pulgadas
            switch (unidad2) {
                case 1: // Metros
                    resultado = valor1 * 0.0254;
                    break;
                case 2: // Kilómetros
                    resultado = valor1 * 0.0000254;
                    break;
                case 3: // Milímetros
                    resultado = valor1 * 25.4;
                    break;
                case 4: // Pulgadas
                    resultado = valor1;
                    break;
                case 5: // Yardas
                    resultado = valor1 / 36;
                    break;
                case 6: // Pies
                    resultado = valor1 / 12;
                    break;
            }
            break;
        case 5: // Yardas
            switch (unidad2) {
                case 1: // Metros
                    resultado = valor1 * 0.9144;
                    break;
                case 2: // Kilómetros
                    resultado = valor1 * 0.0009144;
                    break;
                case 3: // Milímetros
                    resultado = valor1 * 914.4;
                    break;
                case 4: // Pulgadas
                    resultado = valor1 * 36;
                    break;
                case 5: // Yardas
                    resultado = valor1;
                    break;
                case 6: // Pies
                    resultado = valor1 * 3;
                    break;
            }
            break;
        case 6: // Pies
            switch (unidad2) {
                case 1: // Metros
                    resultado = valor1 * 0.3048;
                    break;
                case 2: // Kilómetros
                    resultado = valor1 * 0.0003048;
                    break;
                case 3: // Milímetros
                    resultado = valor1 * 304.8;
                    break;
                case 4: // Pulgadas
                    resultado = valor1 * 12;
                    break;
                case 5: // Yardas
                    resultado = valor1 / 3;
                    break;
                case 6: // Pies
                    resultado = valor1;
                    break;
            }
            break;
        // Agregar más casos según sea necesario
    }
    
    // Verificar si el resultado es NaN y cambiarlo a 0 si es necesario
    if (isNaN(resultado)) {
        resultado = 0;
    }
    
    document.getElementById('valor_distancia2').value = resultado.toFixed(2);
}

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
    if (isNaN(resultado)) {
        resultado = 0;
    }
    document.getElementById('valor_masa2').value = resultado.toFixed(2);
}

function convertirVolumen() {
    const valor1 = parseFloat(document.getElementById('valor_volumen1').value);
    const unidad1 = parseInt(document.getElementById('unidad_volumen1').value);
    const unidad2 = parseInt(document.getElementById('unidad_volumen2').value);

    let resultado;

    switch (unidad1) {
        case 1: // Litro
            switch (unidad2) {
                case 1: // Litro
                    resultado = valor1;
                    break;
                case 2: // Mililitro
                    resultado = valor1 * 1000;
                    break;
                case 3: // Metro Cúbico
                    resultado = valor1 * 0.001;
                    break;
                case 4: // Centímetro cúbico
                    resultado = valor1 * 1000;
                    break;
                case 5: // Milímetro cúbico
                    resultado = valor1 * 1000000;
                    break;
                case 6: // Galón
                    resultado = valor1 * 0.264172;
                    break;
                case 7: // Onza líquida
                    resultado = valor1 * 33.814;
                    break;
            }
            break;
        case 2: // Mililitro
            switch (unidad2) {
                case 1: // Litro
                    resultado = valor1 * 0.001;
                    break;
                case 2: // Mililitro
                    resultado = valor1;
                    break;
                case 3: // Metro Cúbico
                    resultado = valor1 * 1e-6;
                    break;
                case 4: // Centímetro cúbico
                    resultado = valor1;
                    break;
                case 5: // Milímetro cúbico
                    resultado = valor1 * 1000;
                    break;
                case 6: // Galón
                    resultado = valor1 * 0.000264172;
                    break;
                case 7: // Onza líquida
                    resultado = valor1 * 0.033814;
                    break;
            }
            break;
        case 3: // Metro Cúbico
            switch (unidad2) {
                case 1: // Litro
                    resultado = valor1 * 1000;
                    break;
                case 2: // Mililitro
                    resultado = valor1 * 1e6;
                    break;
                case 3: // Metro Cúbico
                    resultado = valor1;
                    break;
                case 4: // Centímetro cúbico
                    resultado = valor1 * 1e6;
                    break;
                case 5: // Milímetro cúbico
                    resultado = valor1 * 1e9;
                    break;
                case 6: // Galón
                    resultado = valor1 * 264.172;
                    break;
                case 7: // Onza líquida
                    resultado = valor1 * 33814;
                    break;
            }
            break;
        case 4: // Centímetro cúbico
            switch (unidad2) {
                case 1: // Litro
                    resultado = valor1 * 0.001;
                    break;
                case 2: // Mililitro
                    resultado = valor1;
                    break;
                case 3: // Metro Cúbico
                    resultado = valor1 * 1e-6;
                    break;
                case 4: // Centímetro cúbico
                    resultado = valor1;
                    break;
                case 5: // Milímetro cúbico
                    resultado = valor1 * 1000;
                    break;
                case 6: // Galón
                    resultado = valor1 * 0.000264172;
                    break;
                case 7: // Onza líquida
                    resultado = valor1 * 0.033814;
                    break;
            }
            break;
        case 5: // Milímetro cúbico
            switch (unidad2) {
                case 1: // Litro
                    resultado = valor1 * 1e-6;
                    break;
                case 2: // Mililitro
                    resultado = valor1 * 0.001;
                    break;
                case 3: // Metro Cúbico
                    resultado = valor1 * 1e-9;
                    break;
                case 4: // Centímetro cúbico
                    resultado = valor1 * 0.001;
                    break;
                case 5: // Milímetro cúbico
                    resultado = valor1;
                    break;
                case 6: // Galón
                    resultado = valor1 * 2.64172e-7;
                    break;
                case 7: // Onza líquida
                    resultado = valor1 * 3.3814e-5;
                    break;
            }
            break;
        case 6: // Galón
            switch (unidad2) {
                case 1: // Litro
                    resultado = valor1 * 3.78541;
                    break;
                case 2: // Mililitro
                    resultado = valor1 * 3785.41;
                    break;
                case 3: // Metro Cúbico
                    resultado = valor1 * 0.00378541;
                    break;
                case 4: // Centímetro cúbico
                    resultado = valor1 * 3785.41;
                    break;
                case 5: // Milímetro cúbico
                    resultado = valor1 * 3.78541e6;
                    break;
                case 6: // Galón
                    resultado = valor1;
                    break;
                case 7: // Onza líquida
                    resultado = valor1 * 128;
                    break;
            }
            break;
        case 7: // Onza líquida
            switch (unidad2) {
                case 1: // Litro
                    resultado = valor1 * 0.0295735;
                    break;
                case 2: // Mililitro
                    resultado = valor1 * 29.5735;
                    break;
                case 3: // Metro Cúbico
                    resultado = valor1 * 2.95735e-5;
                    break;
                case 4: // Centímetro cúbico
                    resultado = valor1 * 29.5735;
                    break;
                case 5: // Milímetro cúbico
                    resultado = valor1 * 29573.5;
                    break;
                case 6: // Galón
                    resultado = valor1 * 0.0078125;
                    break;
                case 7: // Onza líquida
                    resultado = valor1;
                    break;
            }
            break;
    }
    if (isNaN(resultado)) {
        resultado = 0;
    }
    document.getElementById('valor_volumen2').value = resultado.toFixed(2);
}

function convertirTiempo() {
    const valor1 = parseFloat(document.getElementById('valor_tiempo1').value);
    const unidad1 = parseInt(document.getElementById('unidad_tiempo1').value);
    const unidad2 = parseInt(document.getElementById('unidad_tiempo2').value);

    let resultado;

    switch (unidad1) {
        case 1: // Segundo
            switch (unidad2) {
                case 1: // Segundo
                    resultado = valor1;
                    break;
                case 2: // Minuto
                    resultado = valor1 / 60;
                    break;
                case 3: // Hora
                    resultado = valor1 / 3600;
                    break;
                case 4: // Día
                    resultado = valor1 / 86400;
                    break;
                case 5: // Semana
                    resultado = valor1 / 604800;
                    break;
                case 6: // Mes
                    resultado = valor1 / 2.628e+6;
                    break;
                case 7: // Año
                    resultado = valor1 / 3.154e+7;
                    break;
            }
            break;
        case 2: // Minuto
            switch (unidad2) {
                case 1: // Segundo
                    resultado = valor1 * 60;
                    break;
                case 2: // Minuto
                    resultado = valor1;
                    break;
                case 3: // Hora
                    resultado = valor1 / 60;
                    break;
                case 4: // Día
                    resultado = valor1 / 1440;
                    break;
                case 5: // Semana
                    resultado = valor1 / 10080;
                    break;
                case 6: // Mes
                    resultado = valor1 / 43800;
                    break;
                case 7: // Año
                    resultado = valor1 / 525600;
                    break;
            }
            break;
        case 3: // Hora
            switch (unidad2) {
                case 1: // Segundo
                    resultado = valor1 * 3600;
                    break;
                case 2: // Minuto
                    resultado = valor1 * 60;
                    break;
                case 3: // Hora
                    resultado = valor1;
                    break;
                case 4: // Día
                    resultado = valor1 / 24;
                    break;
                case 5: // Semana
                    resultado = valor1 / 168;
                    break;
                case 6: // Mes
                    resultado = valor1 / 730;
                    break;
                case 7: // Año
                    resultado = valor1 / 8760;
                    break;
            }
            break;
        case 4: // Día
            switch (unidad2) {
                case 1: // Segundo
                    resultado = valor1 * 86400;
                    break;
                case 2: // Minuto
                    resultado = valor1 * 1440;
                    break;
                case 3: // Hora
                    resultado = valor1 * 24;
                    break;
                case 4: // Día
                    resultado = valor1;
                    break;
                case 5: // Semana
                    resultado = valor1 / 7;
                    break;
                case 6: // Mes
                    resultado = valor1 / 30.417;
                    break;
                case 7: // Año
                    resultado = valor1 / 365;
                    break;
            }
            break;
        case 5: // Semana
            switch (unidad2) {
                case 1: // Segundo
                    resultado = valor1 * 604800;
                    break;
                case 2: // Minuto
                    resultado = valor1 * 10080;
                    break;
                case 3: // Hora
                    resultado = valor1 * 168;
                    break;
                case 4: // Día
                    resultado = valor1 * 7;
                    break;
                case 5: // Semana
                    resultado = valor1;
                    break;
                case 6: // Mes
                    resultado = valor1 / 4.34524;
                    break;
                case 7: // Año
                    resultado = valor1 / 52.1429;
                    break;
            }
            break;
        case 6: // Mes
            switch (unidad2) {
                case 1: // Segundo
                    resultado = valor1 * 2.628e+6;
                    break;
                case 2: // Minuto
                    resultado = valor1 * 43800;
                    break;
                case 3: // Hora
                    resultado = valor1 * 730;
                    break;
                case 4: // Día
                    resultado = valor1 * 30.417;
                    break;
                case 5: // Semana
                    resultado = valor1 * 4.34524;
                    break;
                case 6: // Mes
                    resultado = valor1;
                    break;
                case 7: // Año
                    resultado = valor1 / 12;
                    break;
            }
            break;
        case 7: // Año
            switch (unidad2) {
                case 1: // Segundo
                    resultado = valor1 * 3.154e+7;
                    break;
                case 2: // Minuto
                    resultado = valor1 * 525600;
                    break;
                case 3: // Hora
                    resultado = valor1 * 8760;
                    break;
                case 4: // Día
                    resultado = valor1 * 365;
                    break;
                case 5: // Semana
                    resultado = valor1 * 52.1429;
                    break;
                case 6: // Mes
                    resultado = valor1 * 12;
                    break;
                case 7: // Año
                    resultado = valor1;
                    break;
            }
            break;
    }
    if (isNaN(resultado)) {
        resultado = 0;
    }
    document.getElementById('valor_tiempo2').value = resultado.toFixed(2);
}

function convertirTemperatura() {
    const valor1 = parseFloat(document.getElementById('valor_temperatura1').value);
    const unidad1 = parseInt(document.getElementById('unidad_temperatura1').value);
    const unidad2 = parseInt(document.getElementById('unidad_temperatura2').value);

    let resultado;

    switch (unidad1) {
        case 1: // Celsius (°C)
            switch (unidad2) {
                case 1: // Celsius (°C)
                    resultado = valor1;
                    break;
                case 2: // Fahrenheit (°F)
                    resultado = (valor1 * 9/5) + 32;
                    break;
                case 3: // Kelvin (K)
                    resultado = valor1 + 273.15;
                    break;
            }
            break;
        case 2: // Fahrenheit (°F)
            switch (unidad2) {
                case 1: // Celsius (°C)
                    resultado = (valor1 - 32) * 5/9;
                    break;
                case 2: // Fahrenheit (°F)
                    resultado = valor1;
                    break;
                case 3: // Kelvin (K)
                    resultado = (valor1 + 459.67) * 5/9;
                    break;
            }
            break;
        case 3: // Kelvin (K)
            switch (unidad2) {
                case 1: // Celsius (°C)
                    resultado = valor1 - 273.15;
                    break;
                case 2: // Fahrenheit (°F)
                    resultado = (valor1 * 9/5) - 459.67;
                    break;
                case 3: // Kelvin (K)
                    resultado = valor1;
                    break;
            }
            break;
    }
    if (isNaN(resultado)) {
        resultado = 0;
    }
    document.getElementById('valor_temperatura2').value = resultado.toFixed(2);
}

function convertirVelocidad() {
    const valor1 = parseFloat(document.getElementById('valor_velocidad1').value);
    const unidad1 = parseInt(document.getElementById('unidad_velocidad1').value);
    const unidad2 = parseInt(document.getElementById('unidad_velocidad2').value);

    let resultado;

    switch (unidad1) {
        case 1: // Kilómetro por hora (km/h)
            switch (unidad2) {
                case 1: // Kilómetro por hora (km/h)
                    resultado = valor1;
                    break;
                case 2: // Metro por segundo (m/s)
                    resultado = valor1 / 3.6;
                    break;
                case 3: // Millas por hora (mph)
                    resultado = valor1 / 1.60934;
                    break;
            }
            break;
        case 2: // Metro por segundo (m/s)
            switch (unidad2) {
                case 1: // Kilómetro por hora (km/h)
                    resultado = valor1 * 3.6;
                    break;
                case 2: // Metro por segundo (m/s)
                    resultado = valor1;
                    break;
                case 3: // Millas por hora (mph)
                    resultado = valor1 * 2.23694;
                    break;
            }
            break;
        case 3: // Millas por hora (mph)
            switch (unidad2) {
                case 1: // Kilómetro por hora (km/h)
                    resultado = valor1 * 1.60934;
                    break;
                case 2: // Metro por segundo (m/s)
                    resultado = valor1 * 0.44704;
                    break;
                case 3: // Millas por hora (mph)
                    resultado = valor1;
                    break;
            }
            break;
    }
    if (isNaN(resultado)) {
        resultado = 0;
    }
    document.getElementById('valor_velocidad2').value = resultado.toFixed(2);
}

function convertirPresion() {
    const valor1 = parseFloat(document.getElementById('valor_presion1').value);
    const unidad1 = parseInt(document.getElementById('unidad_presion1').value);
    const unidad2 = parseInt(document.getElementById('unidad_presion2').value);

    let resultado;

    switch (unidad1) {
        case 1: // Pascal
            switch (unidad2) {
                case 1: // Pascal
                    resultado = valor1;
                    break;
                case 2: // Bares
                    resultado = valor1 * 0.00001;
                    break;
                case 3: // Atmosferas
                    resultado = valor1 * 0.0000098692326671601;
                    break;
                case 4: // Libras por pulgada cuadrada (psi)
                    resultado = valor1 * 0.00014503773773020923;
                    break;
                case 5: // Kilogramos por centímetro cuadrado (kg/cm²)
                    resultado = valor1 * 0.00010197162129779283;
                    break;
            }
            break;
        case 2: // Bares
            switch (unidad2) {
                case 1: // Pascal
                    resultado = valor1 * 100000;
                    break;
                case 2: // Bares
                    resultado = valor1;
                    break;
                case 3: // Atmosferas
                    resultado = valor1 * 0.98692326671601284;
                    break;
                case 4: // Libras por pulgada cuadrada (psi)
                    resultado = valor1 * 14.503773773020923;
                    break;
                case 5: // Kilogramos por centímetro cuadrado (kg/cm²)
                    resultado = valor1 * 1.0197162129779282;
                    break;
            }
            break;
        case 3: // Atmosferas
            switch (unidad2) {
                case 1: // Pascal
                    resultado = valor1 * 101325;
                    break;
                case 2: // Bares
                    resultado = valor1 * 1.01325;
                    break;
                case 3: // Atmosferas
                    resultado = valor1;
                    break;
                case 4: // Libras por pulgada cuadrada (psi)
                    resultado = valor1 * 14.695948775513;
                    break;
                case 5: // Kilogramos por centímetro cuadrado (kg/cm²)
                    resultado = valor1 * 1.0332274530764;
                    break;
            }
            break;
        case 4: // Libras por pulgada cuadrada (psi)
            switch (unidad2) {
                case 1: // Pascal
                    resultado = valor1 * 6894.76;
                    break;
                case 2: // Bares
                    resultado = valor1 * 0.0689476;
                    break;
                case 3: // Atmosferas
                    resultado = valor1 * 0.068045963909643;
                    break;
                case 4: // Libras por pulgada cuadrada (psi)
                    resultado = valor1;
                    break;
                case 5: // Kilogramos por centímetro cuadrado (kg/cm²)
                    resultado = valor1 * 0.070307;
                    break;
            }
            break;
        case 5: // Kilogramos por centímetro cuadrado (kg/cm²)
            switch (unidad2) {
                case 1: // Pascal
                    resultado = valor1 * 98066.5;
                    break;
                case 2: // Bares
                    resultado = valor1 * 0.980665;
                    break;
                case 3: // Atmosferas
                    resultado = valor1 * 0.96784110535421;
                    break;
                case 4: // Libras por pulgada cuadrada (psi)
                    resultado = valor1 * 14.2233;
                    break;
                case 5: // Kilogramos por centímetro cuadrado (kg/cm²)
                    resultado = valor1;
                    break;
            }
            break;
    }
    if (isNaN(resultado)) {
        resultado = 0;
    }
    document.getElementById('valor_presion2').value = resultado.toFixed(2);
}

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

document.getElementById('unidad_distancia1').addEventListener('change', convertirDistancia);
document.getElementById('unidad_distancia2').addEventListener('change', convertirDistancia);
document.getElementById('unidad_masa1').addEventListener('change', convertirMasa);
document.getElementById('unidad_masa2').addEventListener('change', convertirMasa);
document.getElementById('unidad_volumen1').addEventListener('change', convertirVolumen);
document.getElementById('unidad_volumen2').addEventListener('change', convertirVolumen);
document.getElementById('unidad_tiempo1').addEventListener('change', convertirTiempo);
document.getElementById('unidad_tiempo2').addEventListener('change', convertirTiempo);
document.getElementById('unidad_temperatura1').addEventListener('change', convertirTemperatura);
document.getElementById('unidad_temperatura2').addEventListener('change', convertirTemperatura);
document.getElementById('unidad_velocidad1').addEventListener('change', convertirVelocidad);
document.getElementById('unidad_velocidad2').addEventListener('change', convertirVelocidad);
document.getElementById('unidad_presion1').addEventListener('change', convertirPresion);
document.getElementById('unidad_presion2').addEventListener('change', convertirPresion);

document.getElementById('unidad_distancia1').addEventListener('change', () => habilitarCampos('distancia'));
document.getElementById('unidad_distancia2').addEventListener('change', () => habilitarCampos('distancia'));
document.getElementById('valor_distancia1').addEventListener('input', convertirDistancia);

document.getElementById('unidad_masa1').addEventListener('change', () => habilitarCampos('masa'));
document.getElementById('unidad_masa2').addEventListener('change', () => habilitarCampos('masa'));
document.getElementById('valor_masa1').addEventListener('input', convertirMasa);

document.getElementById('unidad_volumen1').addEventListener('change', () => habilitarCampos('volumen'));
document.getElementById('unidad_volumen2').addEventListener('change', () => habilitarCampos('volumen'));
document.getElementById('valor_volumen1').addEventListener('input', convertirVolumen);

document.getElementById('unidad_tiempo1').addEventListener('change', () => habilitarCampos('tiempo'));
document.getElementById('unidad_tiempo2').addEventListener('change', () => habilitarCampos('tiempo'));
document.getElementById('valor_tiempo1').addEventListener('input', convertirTiempo);

document.getElementById('unidad_temperatura1').addEventListener('change', () => habilitarCampos('temperatura'));
document.getElementById('unidad_temperatura2').addEventListener('change', () => habilitarCampos('temperatura'));
document.getElementById('valor_temperatura1').addEventListener('input', convertirTemperatura);

document.getElementById('unidad_velocidad1').addEventListener('change', () => habilitarCampos('velocidad'));
document.getElementById('unidad_velocidad2').addEventListener('change', () => habilitarCampos('velocidad'));
document.getElementById('valor_velocidad1').addEventListener('input', convertirVelocidad);

document.getElementById('unidad_presion1').addEventListener('change', () => habilitarCampos('presion'));
document.getElementById('unidad_presion2').addEventListener('change', () => habilitarCampos('presion'));
document.getElementById('valor_presion1').addEventListener('input', convertirPresion);

habilitarCampos('distancia');
habilitarCampos('masa');
habilitarCampos('volumen');
habilitarCampos('tiempo');
habilitarCampos('temperatura');
habilitarCampos('velocidad');
habilitarCampos('presion');